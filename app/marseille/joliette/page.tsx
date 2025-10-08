import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à La Joliette (Marseille) | Devis gratuit & IA`,
  description: `Déménagement à La Joliette (Marseille). Quartier en reconversion de Marseille, Euroméditerranée. Logements modernes et accès facilité. Accès: Boulevards larges, parkings souterrains, immeubles récents. Devis gratuit avec estimation IA.`,
  keywords: `déménagement La Joliette Marseille, déménageurs Marseille, devis déménagement Marseille, Boulevards larges, parkings souterrains, immeubles récents`,
};

const marseilleLaJolietteData = {
  zone: "joliette",
  zoneDisplay: "La Joliette",
  description: `Quartier en reconversion de Marseille, Euroméditerranée. Logements modernes et accès facilité.`,
  coverImage: "/images/quartiers/marseille/joliette.jpg",
  accessInfo: "Boulevards larges, parkings souterrains, immeubles récents",
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

export default function MarseilleLaJoliettePage() {
  return <LocalPage data={marseilleLaJolietteData} />;
}
