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
    return [
      // WILDCARDS : Toutes les URLs d'autres villes → /blog (nettoyage massif)
      { source: '/blog/demenagement-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-nantes/:path*', destination: '/blog/', permanent: true },
      
      // Piliers autres villes
      { source: '/blog/demenageur-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-rennes-prix/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenageur-nantes/:path*', destination: '/blog/', permanent: true },
      
      // Prix autres villes
      { source: '/blog/prix-demenagement-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-nantes/:path*', destination: '/blog/', permanent: true },
      
      // Autres catégories autres villes
      { source: '/blog/garde-meuble-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/garde-meuble-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/petit-demenagement-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/petit-demenagement-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/demenagement-pas-cher-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-lyon-pas-cher/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-pas-cher-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/demenagement-piano-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-piano-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/demenagement-international-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-international-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/demenagement-entreprise-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-entreprise-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/aide-demenagement-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/aide-demenagement-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/location-camion-lille/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-lyon/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-toulouse/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-nice/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-rennes/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-rouen/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-strasbourg/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-demenagement-montpellier/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/location-camion-nantes/:path*', destination: '/blog/', permanent: true },
      
      { source: '/blog/demenagement-etudiant-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-urgent-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-longue-distance-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/devis-demenagement-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/prix-demenagement-piano-bordeaux/:path*', destination: '/blog/', permanent: true },
      { source: '/blog/demenagement-petit-volume-lyon/:path*', destination: '/blog/', permanent: true },
      
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
      { source: '/blog/longue-distance', destination: '/blog/', permanent: true },
      { source: '/blog/devis', destination: '/blog/', permanent: true },
      
      // Pages légales trailing slash
      { source: '/mentions-legales/', destination: '/mentions-legales/', permanent: true },
      { source: '/cgv/', destination: '/cgv/', permanent: true },
      { source: '/politique-confidentialite/', destination: '/politique-confidentialite/', permanent: true },
      
      // Anciennes URLs
      { source: '/estimation-demenagement-marseille/', destination: '/estimation-rapide/', permanent: true },
      { source: '/prix-demenagement-marseille/', destination: '/blog/', permanent: true },
      { source: '/devis-demenagement-marseille/', destination: '/estimation-rapide/', permanent: true },

      // MAJUSCULES QUARTIERS → minuscules (Fix CSV 30/10/2025)
      { source: '/quartiers-Marseille', destination: '/quartiers-marseille/', permanent: true },
      { source: '/Marseille/le-vieux-port', destination: '/marseille/vieux-port/', permanent: true },
      { source: '/Marseille/la-plaine', destination: '/marseille/plaine/', permanent: true },
      { source: '/Marseille/le-panier', destination: '/marseille/panier/', permanent: true },
      { source: '/Marseille/endoume', destination: '/marseille/endoume/', permanent: true },
      { source: '/Marseille/la-joliette', destination: '/marseille/joliette/', permanent: true },

      // CATÉGORIES BLOG VIDES → /blog (Fix CSV 30/10/2025)
      { source: '/blog/etudiant', destination: '/blog/', permanent: true },
      { source: '/blog/urgent', destination: '/blog/', permanent: true },
      { source: '/blog/devis', destination: '/blog/', permanent: true },
      { source: '/blog/longue-distance', destination: '/blog/', permanent: true },
    ];
  }
};

export default nextConfig;