import type { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Déménageurs Marseille',
  defaultTitle: 'Déménageurs Marseille - 5 devis sous 7 jours',
  description: '30 minutes pour votre dossier → 5 devis personnalisés sous 7 jours. Estimation volumétrique à partir de photos, tarifs clairs, conseils locaux.',
  canonical: 'https://www.marseille-demenageur.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.marseille-demenageur.fr',
    siteName: 'Déménageurs Marseille',
    images: [
      {
        url: 'https://www.marseille-demenageur.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Déménageurs Marseille - Devis IA',
      },
    ],
  },
  twitter: {
    handle: '@demenageursmarseille',
    site: '@demenageursmarseille',
    cardType: 'summary_large_image',
  },
};
