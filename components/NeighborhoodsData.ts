export type Item = { slug: string; title: string };

export const QUARTIERS: Item[] = [
  { slug: "vieux-port",      title: "Le Vieux-Port" },
  { slug: "plaine",      title: "La Plaine" },
  { slug: "panier",      title: "Le Panier" },
  { slug: "endoume",      title: "Endoume" },
  { slug: "joliette",      title: "La Joliette" },
  { slug: "canebiere",      title: "La Canebière" },
  { slug: "cours-julien",      title: "Le Cours Julien" },
  { slug: "chateau-gombert",      title: "Château-Gombert" },
  { slug: "calanques",      title: "Les Calanques" },
  { slug: "saint-victor",     title: "Saint-Victor" },
];

export const COMMUNES: Item[] = [
  { slug: "aubagne",       title: "Aubagne" },
  { slug: "aix-en-provence",       title: "Aix-en-Provence" },
  { slug: "allauch",       title: "Allauch" },
  { slug: "plan-de-cuques",       title: "Plan-de-Cuques" },
  { slug: "ciotat",       title: "La Ciotat" },
];

export function urlForQuartier(slug: string) {
  return `/devis-demenagement-Marseille-${slug}/`;
}
export function urlForCommune(slug: string) {
  return `/devis-demenagement-${slug}/`;
}
