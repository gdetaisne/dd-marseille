// Algorithme de calcul du pricing pour le formulaire
// Utilise moverz-constants.ts pour source unique de vérité

import { CONSTANTS, type HousingType, type DensityType, type FormuleType } from './moverz-constants';
import { calculerDistanceIntelligente } from './distance-intelligente';

// Références aux constants pour compatibilité
const TYPE_COEFFICIENTS = CONSTANTS.volumes.ratios;
const DENSITY_COEFFICIENTS = CONSTANTS.volumes.densites;
const FORMULE_MULTIPLIERS = CONSTANTS.pricing.formules;
const COEF_VOLUME = CONSTANTS.pricing.coefficients.coefVolume;
const COEF_DISTANCE = CONSTANTS.pricing.coefficients.coefDistance;
const PRIX_MIN_SOCLE = CONSTANTS.pricing.coefficients.prixMinSocle;

export function calculateVolume(
  surfaceM2: number,
  housingType: HousingType,
  density: DensityType = 'normal'
): number {
  const baseVolume = surfaceM2 * TYPE_COEFFICIENTS[housingType];
  const adjustedVolume = baseVolume * DENSITY_COEFFICIENTS[density];
  return Math.round(adjustedVolume * 10) / 10;
}

export function calculateDistance(originCity: string, destCity: string): number {
  // Utilise la distance "intelligente" basée sur lat/lon (Haversine),
  // avec fallback raisonnable 50–800 km si les villes ne sont pas trouvées.
  return calculerDistanceIntelligente(originCity, destCity);
}

export function calculatePricing(
  surfaceM2: number,
  housingType: HousingType,
  density: DensityType,
  distanceKm: number,
  formule: FormuleType
) {
  // 1. Calcul volume (ratios m²→m³ La Poste = 0.30, ajustés par densité)
  const volumeM3 = calculateVolume(surfaceM2, housingType, density);

  // 2. Déterminer la bande de distance (local / régional / national)
  let distanceBand: 'local' | 'regional' | 'national';
  if (distanceKm < 100) {
    distanceBand = 'local';
  } else if (distanceKm <= 500) {
    distanceBand = 'regional';
  } else {
    distanceBand = 'national';
  }

  // 3. Récupérer le tarif €/m³ en fonction de la bande et de la formule
  const tarifs = CONSTANTS.pricing.tarifsByDistance[distanceBand];
  const formuleKey =
    formule === 'ECONOMIQUE'
      ? 'eco'
      : formule === 'STANDARD'
      ? 'standard'
      : 'premium';

  const tarifParM3 = tarifs[formuleKey];

  // 4. Prix moyen La Poste : volume total × tarif €/m³
  const prixAvg = Math.round(volumeM3 * tarifParM3);

  // 5. Fourchette (depuis constants)
  const prixMin = Math.round(prixAvg * CONSTANTS.pricing.margin.min);
  const prixMax = Math.round(prixAvg * CONSTANTS.pricing.margin.max);
  
  return {
    volumeM3,
    distanceKm,
    prixMin,
    prixAvg,
    prixMax,
  };
}

// Réexporte helper depuis constants pour compatibilité
export { formatPrice } from './moverz-constants';

