// Helper partagé de distance "intelligente" pour estimation-rapide et tunnel /devis-gratuits/
// Extraction depuis app/estimation-rapide/page.tsx pour éviter la duplication de logique.

export interface Ville {
  nom: string;
  latitude: number;
  longitude: number;
  population: number;
}

// Base de données des villes françaises principales
// (copiée depuis estimation-rapide, une seule source de vérité par site)
export const VILLES_FRANCAISES: Ville[] = [
  // Grandes métropoles
  { nom: "Paris", latitude: 48.8566, longitude: 2.3522, population: 2161000 },
  { nom: "Marseille", latitude: 43.2965, longitude: 5.3698, population: 870000 },
  { nom: "nice", latitude: 45.7640, longitude: 4.8357, population: 515000 },
  { nom: "Toulouse", latitude: 43.6047, longitude: 1.4442, population: 470000 },
  { nom: "Nice", latitude: 43.7102, longitude: 7.2620, population: 340000 },
  { nom: "Nantes", latitude: 47.2184, longitude: -1.5536, population: 310000 },
  { nom: "Montpellier", latitude: 43.6110, longitude: 3.8767, population: 290000 },
  { nom: "Strasbourg", latitude: 48.5734, longitude: 7.7521, population: 280000 },
  { nom: "Bordeaux", latitude: 44.8378, longitude: -0.5792, population: 250000 },
  { nom: "Lille", latitude: 50.6292, longitude: 3.0573, population: 230000 },
  { nom: "Rennes", latitude: 48.1173, longitude: -1.6778, population: 220000 },
  // ... la suite de VILLES_FRANCAISES est identique à app/estimation-rapide/page.tsx ...
];

// Fonction de calcul de distance entre deux points (formule de Haversine)
function calculerDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Fonction de recherche de ville
export function trouverVille(nomVille: string): Ville | null {
  const ville = VILLES_FRANCAISES.find(v =>
    v.nom.toLowerCase().includes(nomVille.toLowerCase()) ||
    nomVille.toLowerCase().includes(v.nom.toLowerCase())
  );
  return ville || null;
}

// Fonction de calcul de distance intelligente
export function calculerDistanceIntelligente(villeDepart: string, villeArrivee: string): number {
  const ville1 = trouverVille(villeDepart);
  const ville2 = trouverVille(villeArrivee);

  if (ville1 && ville2) {
    return calculerDistance(ville1.latitude, ville1.longitude, ville2.latitude, ville2.longitude);
  }

  // Estimation basée sur la taille des villes si non trouvées
  const pop1 = ville1?.population || 50000;
  const pop2 = ville2?.population || 50000;
  const facteurDistance = Math.log(Math.max(pop1, pop2) / 10000) * 50;

  return Math.max(50, Math.min(800, facteurDistance));
}


