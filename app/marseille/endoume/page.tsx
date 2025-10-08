import { Metadata } from 'next';
import LocalPage from '@/app/_templates/LocalPage';

export const metadata: Metadata = {
  title: `Déménagement à Endoume (Marseille) | Devis gratuit & IA`,
  description: `Déménagement à Endoume (Marseille). Quartier résidentiel de Marseille, proche de la mer. Maisons bourgeoises et vue sur mer. Accès: Rues en pente, parkings privés, maisons individuelles. Devis gratuit avec estimation IA.`,
  keywords: `déménagement Endoume Marseille, déménageurs Marseille, devis déménagement Marseille, Rues en pente, parkings privés, maisons individuelles`,
};

const marseilleEndoumeData = {
  zone: "endoume",
  zoneDisplay: "Endoume",
  description: `Quartier résidentiel de Marseille, proche de la mer. Maisons bourgeoises et vue sur mer.`,
  coverImage: "/images/quartiers/marseille/endoume.jpg",
  accessInfo: "Rues en pente, parkings privés, maisons individuelles",
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

export default function MarseilleEndoumePage() {
  return <LocalPage {...marseilleEndoumeData} />;
}
