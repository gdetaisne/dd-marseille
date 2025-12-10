import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-marseille.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  
  // SEO: Force trailing slash sur toutes les URLs (y compris homepage)
  trailingSlash: true,
  
  // Optimisations pour build CapRover
  typescript: {
    ignoreBuildErrors: true, // Skip type-check en production (fait en dev)
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint en production (fait en dev)
  },  
  // Headers de sécurité gérés par middleware.js

  // Configuration de sécurité supplémentaire
  experimental: {
    serverComponentsExternalPackages: []
  },

  // Optimisations de sécurité
  compress: true,
  
  // Configuration des images (si utilisées)
  images: {
    // Désactiver l'optimisation côté serveur pour éviter erreurs 400/blocked sur Unsplash
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Redirections 404 - Nettoyage massif indexation
  async redirects() {
    const existing = [
      // VAGUE 2 – Migration homepage domaine → page ville moverz.fr
      { source: '/', destination: 'https://moverz.fr/demenagement/marseille/', permanent: true },

      // MIGRATION BLOG → moverz.fr
      { source: '/blog', destination: 'https://moverz.fr/blog/', permanent: true },
      { source: '/blog/', destination: 'https://moverz.fr/blog/', permanent: true },
      // Nouvelle structure /blog/demenagement-marseille/{slug} → moverz.fr/blog/{slug}
      { source: '/blog/demenagement-marseille/:slug*', destination: 'https://moverz.fr/blog/:slug*', permanent: true },

      // Redirections historiques
      // Fichiers BATCH/PILIER/PLACEHOLDER supprimés (redirects pour Google cache)
      { source: '/blog/satellites/article-satellite-:number-placeholder', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/BATCH-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/PILIER-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/LISTE-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/RAPPORT-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/satellites/ARTICLES-:path*', destination: '/blog/', permanent: true },
      
      // Catégories Toulouse accentuées/bizarres
      { source: '/blog/deménagement-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/déménagement-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/débarras-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/équipe-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/matériel-:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/assurance-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/contact-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/déménageur-professionnel/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/emballage-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garantie-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/nettoyage-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/satisfaction-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/devis-deménagement/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-deménagement/:path*', destination: '/blog/', permanent: true },
      
      // URLs dossier /demenagement/ hors blog
      { source: '/demenagement/:path*', destination: '/blog/', permanent: true },
      
      // Satellites génériques (quelques spécifiques)
      { source: '/blog/satellites/location-camion-gare-saint-charles', destination: '/blog/satellites/location-camion-gare-saint-charles-marseille/', permanent: true },
      { source: '/blog/satellites/demenagement-informatique-serveurs-materiel', destination: '/blog/satellites/demenagement-informatique-serveurs-materiel-marseille/', permanent: true },
      { source: '/blog/satellites/pourboire-demenageurs-usages', destination: '/blog/satellites/pourboire-demenageurs-usages-marseille/', permanent: true },
      { source: '/blog/satellites/comment-choisir-demenageur', destination: '/blog/satellites/comment-choisir-demenageur-marseille/', permanent: true },
      { source: '/blog/satellites/combien-coute-garde-meuble', destination: '/blog/satellites/combien-coute-garde-meuble-marseille/', permanent: true },
      { source: '/blog/satellites/location-utilitaire-20m3-tarifs', destination: '/blog/satellites/location-utilitaire-20m3-tarifs-marseille/', permanent: true },
      { source: '/blog/satellites/surcout-demenagement-centre-combien', destination: '/blog/satellites/surcout-demenagement-centre-combien-marseille/', permanent: true },
      { source: '/blog/satellites/demontage-remontage-meubles-service-prix', destination: '/blog/satellites/demontage-remontage-meubles-service-prix-marseille/', permanent: true },
      { source: '/blog/satellites/demenagement-dimanche-surcout', destination: '/blog/satellites/demenagement-dimanche-surcout-marseille/', permanent: true },
      { source: '/blog/satellites/prix-demenagement-international', destination: '/blog/satellites/prix-demenagement-international-marseille/', permanent: true },
      { source: '/blog/satellites/location-camion-weekend-tarifs-48h', destination: '/blog/satellites/location-camion-weekend-tarifs-48h-marseille/', permanent: true },
      
      // URLs Toulouse sur Marseille
      { source: '/toulouse', destination: '/', permanent: true },
      { source: '/Toulouse/:path*', destination: '/quartiers-marseille/', permanent: true },
      
      // Quartiers Bordeaux sur Marseille
      { source: '/marseille/chartrons', destination: '/quartiers-marseille/', permanent: true },
      { source: '/marseille/bastide', destination: '/quartiers-marseille/', permanent: true },
      { source: '/marseille/pessac', destination: '/quartiers-marseille/', permanent: true },
      { source: '/marseille/cauderan', destination: '/quartiers-marseille/', permanent: true },
      { source: '/marseille/merignac', destination: '/quartiers-marseille/', permanent: true },
      { source: '/devis-demenagement-marseille-cauderan/', destination: '/quartiers-marseille/', permanent: true },
      
      // Catégories vides
      { source: '/blog/international', destination: '/blog/', permanent: true },

      // TOP PRIORITÉ (URLs 404 → piliers Marseille)
      { source: '/blog/demenagement-marseille/petit-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenageur-lille/autorisation-stationnement-demenagement-lille', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-montpellier/demenageur-montpellier', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/demenagement-d-entreprise', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/meilleur-demenageur-pas-cher', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/location-camion-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/autorisation-stationnement-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-montpellier', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble/garde-meuble-etudiant-ete', destination: '/blog/', permanent: true },
      
      // Anciennes URLs
      { source: '/estimation-demenagement-marseille/', destination: '/estimation-rapide/', permanent: true },
      { source: '/prix-demenagement-marseille/', destination: '/blog/', permanent: true },
      { source: '/devis-demenagement-marseille/', destination: '/estimation-rapide/', permanent: true },

      // MAJUSCULES QUARTIERS → minuscules (Fix CSV 30/10/2025)
      { source: '/quartiers-Marseille', destination: '/quartiers-marseille/', permanent: true },

      // CATÉGORIES BLOG VIDES → /blog (Fix CSV 30/10/2025)
      { source: '/blog/etudiant', destination: '/blog/', permanent: true },
      { source: '/blog/urgent', destination: '/blog/', permanent: true },
      { source: '/blog/devis', destination: '/blog/', permanent: true },
      { source: '/blog/longue-distance', destination: '/blog/', permanent: true },

      // ========================================
      // LEADGEN-02: Redirections 404 prioritaires (Marseille - 06/11/2025)
      // Cross-contamination (14 URLs) + Autres articles (22 URLs) + Garde-meuble (3 URLs)
      // IMPORTANT : Ces redirections DOIVENT être AVANT les wildcards pour être matchées en priorité
      // ========================================
      // Cross-contamination : Corriger liens vers autres villes → Marseille
      { source: '/blog/demenagement-lille/demenageur-lille-expert', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-montpellier/prix-demenagement-longue-distance-montpellier-paris', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-petit-volume-lyon/transport-cartons-uniquement-lyon', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/garde-meuble-rouen/duree-minimum-garde-meuble-rouen', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/demenagement-piano/demenagement-piano-etage-monte-charge-lille', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-strasbourg/demenagement-d-entreprise-strasbourg', destination: '/blog/demenagement-marseille/demenagement-d-entreprise/', permanent: true },
      { source: '/blog/demenagement-strasbourg/demenageur-monte-meuble-strasbourg', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/garde-meuble-montpellier/garde-meuble-par-quartier-montpellier', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-nice/cartons-gratuits-nice-ou-trouver', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-nice', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/location-camion-demenagement-montpellier/quelle-taille-camion-louer-montpellier-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/services/demenagement-standard-toulouse', destination: '/services/', permanent: true },
      { source: '/blog/demenagement-longue-distance/demenagement-depuis-autre-region-vers-nice', destination: '/blog/demenagement-marseille/', permanent: true },
      
      // Articles Marseille
      // ⚠️ Articles satellites (catégorie conseils) → Redirection temporaire vers page catégorie (problème routage)
      { source: '/blog/demenagement-marseille/demenager-soi-meme-budget-diy', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/meilleur-demenageur-comparatif-2025', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/pourboire-demenageurs-usages', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/comparatif-prix-demenageurs-moins-cher', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/location-camion-aide-alternative-pas-chere', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/leclerc-location-meilleurs-prix', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/prix-demenagement-longue-distance', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/ou-louer-camion-demenagement-agences', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/location-utilitaire-20m3-tarifs', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/aide-demenagement-particulier-trouver', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/comment-choisir-demenageur', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/prix-demenagement-maison-estimation', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/location-camion-gare-saint-charles', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/aide-au-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/demenagement-dimanche-surcout', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/aides-financieres-demenagement', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/demenageur', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/prix-demenageur-tarifs-2025', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/budget-demenagement-estimation-2025', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/demenagement-pas-cher', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/surcout-demenagement-centre-combien', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-marseille/cartons-gratuits-demenagement-ou-trouver', destination: '/blog/demenagement-marseille/', permanent: true },
      
      // Redirection slug différent (pas juste trailing slash)
      { source: '/blog/demenagement-marseille/aide-au-demenagement-guide', destination: '/blog/demenagement-marseille/aide-au-demenagement/', permanent: true },
      
      // Garde-meuble générique → Page catégorie (articles satellites retournent 404)
      { source: '/blog/garde-meuble/guide-complet', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble/combien-coute-garde-meuble', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble/nord-sud-comparaison', destination: '/blog/garde-meuble-marseille/', permanent: true },
      
      // 🔴 TASK-054: Cross-city URLs 404 → Redirections spécifiques AVANT wildcards (80% des 404)
      // IMPORTANT : Ces redirections DOIVENT être AVANT les wildcards pour être matchées correctement
      // Toutes les URLs d'autres villes sur le domaine marseille.fr → redirection vers équivalent marseille OU homepage
      { source: '/blog/demenagement-nice/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-lille/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-montpellier/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-rouen/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-strasbourg/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-toulouse/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-rennes/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-nantes/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-bordeaux/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-lyon/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      
      // Autres catégories cross-city
      { source: '/blog/petit-demenagement-nice/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/petit-demenagement-lille/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/petit-demenagement-montpellier/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/petit-demenagement-nantes/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/petit-demenagement-rennes/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      
      { source: '/blog/garde-meuble-nice/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble-lille/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble-montpellier/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble-nantes/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble-rennes/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      { source: '/blog/garde-meuble-lyon/:slug*', destination: '/blog/garde-meuble-marseille/', permanent: true },
      
      { source: '/blog/prix-demenagement-nice/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-lille/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-montpellier/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-nantes/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      { source: '/blog/prix-demenagement-bordeaux/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      
      { source: '/blog/demenagement-piano-nice/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-lille/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-montpellier/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-nantes/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-rennes/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-bordeaux/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      { source: '/blog/demenagement-piano-lyon/:slug*', destination: '/blog/demenagement-piano-marseille/', permanent: true },
      
      { source: '/blog/demenagement-entreprise-nice/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-entreprise-lille/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-entreprise-lyon/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-entreprise-montpellier/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-entreprise-rennes/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-entreprise-bordeaux/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      
      { source: '/blog/demenagement-international-nice/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-lille/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-montpellier/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-nantes/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-rennes/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-bordeaux/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      { source: '/blog/demenagement-international-lyon/:slug*', destination: '/blog/demenagement-international-marseille/', permanent: true },
      
      { source: '/blog/demenagement-pas-cher-nice/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-lille/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-montpellier/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-nantes/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-rennes/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      { source: '/blog/demenagement-pas-cher-bordeaux/:slug*', destination: '/blog/demenagement-pas-cher-marseille/', permanent: true },
      
      { source: '/blog/demenageur-nice/:slug*', destination: '/blog/demenageur-marseille/', permanent: true },
      { source: '/blog/demenageur-lille/:slug*', destination: '/blog/demenageur-marseille/', permanent: true },
      { source: '/blog/demenageur-montpellier/:slug*', destination: '/blog/demenageur-marseille/', permanent: true },
      { source: '/blog/demenageur-rennes/:slug*', destination: '/blog/demenageur-marseille/', permanent: true },
      { source: '/blog/demenageur-rennes-prix/:slug*', destination: '/blog/demenageur-marseille/', permanent: true },
      
      { source: '/blog/location-camion-nice/:slug*', destination: '/blog/satellites/location-camion-demenagement-marseille/', permanent: true },
      { source: '/blog/location-camion-lille/:slug*', destination: '/blog/satellites/location-camion-demenagement-marseille/', permanent: true },
      { source: '/blog/location-camion-rennes/:slug*', destination: '/blog/satellites/location-camion-demenagement-marseille/', permanent: true },
      
      { source: '/blog/aide-demenagement-nice/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      { source: '/blog/aide-demenagement-lille/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      { source: '/blog/aide-demenagement-montpellier/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      { source: '/blog/aide-demenagement-nantes/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      { source: '/blog/aide-demenagement-rennes/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      { source: '/blog/aide-demenagement-lyon/:slug*', destination: '/blog/aide-demenagement-marseille/', permanent: true },
      
      // Catégories obsolètes/spécifiques autres villes
      { source: '/blog/demenagement-longue-distance-bordeaux/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/demenagement-urgent-bordeaux/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/devis-demenagement-bordeaux/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-etudiant-bordeaux/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      
      // URL malformée $slug
      { source: '/blog/demenagement-marseille/$slug', destination: '/blog/demenagement-marseille/', permanent: true },
      
      // URL bizarre /marseille/Marseille/
      { source: '/marseille/Marseille/', destination: '/quartiers-marseille/', permanent: true },
      
      // Catégories obsolètes avec accents ou formats bizarres
      { source: '/blog/deménagement-voiture/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-escalier/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-tram/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-bus/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-vélo/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-moto/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-télésiège/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-remonte-pente/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-funiculaire/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-métro/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-train/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-avion/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-bateau/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-hélicoptère/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-24h/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-nuit/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-soir/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-weekend/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-critique/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-express-urgent/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-immédiat/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-immédiat-24h/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-urgence/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-urgent/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-urgent-24h/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-instantané/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-instantané-24h/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-éclair/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-éclair-24h/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-flash/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-rapide/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-etudiant/:slug*', destination: '/blog/demenagement-marseille/', permanent: true },
      { source: '/blog/deménagement-weekend/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/deménagement-local/:slug*', destination: '/blog/', permanent: true },
      
      // Pages génériques obsolètes
      { source: '/blog/longue-distance/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/devis/:slug*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-deménagement/:slug*', destination: '/blog/prix-demenagement-marseille/', permanent: true },
      { source: '/blog/contact-deménagement/:slug*', destination: '/contact/', permanent: true },
      
      // WILDCARDS CATCH-ALL (TASK-LEADGEN-02 - Guillaume) - APRÈS redirections spécifiques
      // ⚠️ Ces wildcards doivent être EN DERNIER pour ne pas capturer les URLs cross-city ci-dessus
      { source: '/blog/garde-meuble/:slug*', destination: '/blog/garde-meuble-marseille/:slug*', permanent: true },
      { source: '/blog/pas-cher/:slug*', destination: '/blog/demenagement-pas-cher-marseille/:slug*', permanent: true },
      { source: '/blog/international/:slug*', destination: '/blog/demenagement-international-marseille/:slug*', permanent: true },
      { source: '/blog/piano/:slug*', destination: '/blog/demenagement-piano-marseille/:slug*', permanent: true },
      { source: '/blog/demenageur/:slug*', destination: '/blog/demenageur-marseille/:slug*', permanent: true },
      { source: '/blog/aide/:slug*', destination: '/blog/aide-demenagement-marseille/:slug*', permanent: true },
      { source: '/blog/demenagement/:slug*', destination: '/blog/demenagement-marseille/:slug*', permanent: true },
      { source: '/blog/prix/:slug*', destination: '/blog/prix-demenagement-marseille/:slug*', permanent: true },
      // Supprimé : redirection vers soi-même (source = destination) causait erreur GSC (TASK-060)
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;