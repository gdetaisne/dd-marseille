import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à La Plaine (Marseille) | Devis gratuit & IA`,
  description: `Déménagement à La Plaine (Marseille). Quartier populaire et commerçant de Marseille, marché aux puces. Mixité sociale et accès varié. Accès: Rues commerçantes, parkings limités, mixité ancien/moderne. Devis gratuit avec estimation IA.`,
  keywords: `déménagement La Plaine Marseille, déménageurs Marseille, devis déménagement Marseille, Rues commerçantes, parkings limités, mixité ancien/moderne`,
};

const marseilleLaPlaineData = {
  zone: "plaine",
  zoneDisplay: "La Plaine",
  description: `Quartier populaire et commerçant de Marseille, marché aux puces. Mixité sociale et accès varié.`,
  coverImage: "/images/quartiers/marseille/plaine.jpg",
  accessInfo: "Rues commerçantes, parkings limités, mixité ancien/moderne",
  pricing: {
    studio: { min: 800, max: 1200 },
    t2: { min: 1200, max: 1800 },
    t3: { min: 1800, max: 2500 },
    t4: { min: 2500, max: 3500 },
    t5: { min: 3500, max: 4500 }
  },
  destinations: [
    { name: "Marseille intra-muros", slug: "marseille" },
    { name: "Paris", slug: "paris" },
    { name: "Lyon", slug: "lyon" },
    { name: "Toulouse", slug: "toulouse" },
    { name: "France entière", slug: "france" }
  ],
  partners: [
    {
      name: "Déménageur Marseille",
      rating: 4.8,
      reviews: 69,
      specialties: ["Déménagements locaux", "Gestion des contraintes d'accès"]
    },
    {
      name: "Alex Déménagement",
      rating: 4.7,
      reviews: 45,
      specialties: ["Déménagements express", "Emballage professionnel"]
    },
    {
      name: "SAM'DÉMÉNAGE",
      rating: 4.6,
      reviews: 28,
      specialties: ["Déménagements économiques", "Service personnalisé"]
    }
  ]
};

export default function MarseilleLaPlainePage() {
  return <LocalPage {...marseilleLaPlaineData} />;
}
