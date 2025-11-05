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

      // CATÉGORIES BLOG VIDES → /blog (Fix CSV 30/10/2025)
      { source: '/blog/etudiant', destination: '/blog/', permanent: true },
      { source: '/blog/urgent', destination: '/blog/', permanent: true },
      { source: '/blog/devis', destination: '/blog/', permanent: true },
      { source: '/blog/longue-distance', destination: '/blog/', permanent: true },
      // WILDCARDS CATCH-ALL (TASK-LEADGEN-02 - Fix 404 restructuration blog) - CORRIGÉ
      { source: '/blog/garde-meuble/:slug*', destination: '/blog/garde-meuble-marseille/:slug*', permanent: true },
      { source: '/blog/pas-cher/:slug*', destination: '/blog/demenagement-pas-cher-marseille/:slug*', permanent: true },
      { source: '/blog/international/:slug*', destination: '/blog/demenagement-international-marseille/:slug*', permanent: true },
      { source: '/blog/piano/:slug*', destination: '/blog/demenagement-piano-marseille/:slug*', permanent: true },
      { source: '/blog/demenageur/:slug*', destination: '/blog/demenageur-marseille/:slug*', permanent: true },
      { source: '/blog/aide/:slug*', destination: '/blog/aide-demenagement-marseille/:slug*', permanent: true },
    ];
  }
};

export default nextConfig;