import { getMoverzBlogRedirectsForHost } from './scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-marseille.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
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

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      { source: '/', destination: 'https://moverz.fr/demenagement/marseille/', permanent: true },
      // Blog hub → moverz.fr
      { source: '/blog', destination: 'https://moverz.fr/blog/', permanent: true },
      { source: '/blog/', destination: 'https://moverz.fr/blog/', permanent: true },
      // Blog articles → moverz.fr
      { source: '/blog/demenagement-marseille/:slug*', destination: 'https://moverz.fr/blog/:slug*', permanent: true },
      // Quartiers marseille (6 pages)
      { source: '/marseille/', destination: 'https://moverz.fr/marseille/', permanent: true },
      { source: '/marseille/endoume/', destination: 'https://moverz.fr/marseille/endoume/', permanent: true },
      { source: '/marseille/joliette/', destination: 'https://moverz.fr/marseille/joliette/', permanent: true },
      { source: '/marseille/panier/', destination: 'https://moverz.fr/marseille/panier/', permanent: true },
      { source: '/marseille/plaine/', destination: 'https://moverz.fr/marseille/plaine/', permanent: true },
      { source: '/marseille/vieux-port/', destination: 'https://moverz.fr/marseille/vieux-port/', permanent: true },
      // Hub quartiers marseille
      { source: '/quartiers-marseille/', destination: 'https://moverz.fr/quartiers-marseille/', permanent: true },
      // Corridors depuis marseille (5 pages)
      { source: '/marseille-vers-espagne/', destination: 'https://moverz.fr/marseille-vers-espagne/', permanent: true },
      { source: '/marseille-vers-lyon/', destination: 'https://moverz.fr/marseille-vers-lyon/', permanent: true },
      { source: '/marseille-vers-nantes/', destination: 'https://moverz.fr/marseille-vers-nantes/', permanent: true },
      { source: '/marseille-vers-paris/', destination: 'https://moverz.fr/marseille-vers-paris/', permanent: true },
      { source: '/marseille-vers-toulouse/', destination: 'https://moverz.fr/marseille-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-marseille/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-marseille/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-marseille/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
