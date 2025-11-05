export type Item = { slug: string; title: string };

export const QUARTIERS: Item[] = [
  { slug: "vieux-port",      title: "Le Vieux-Port" },
  { slug: "plaine",      title: "La Plaine" },
  { slug: "panier",      title: "Le Panier" },
  { slug: "endoume",      title: "Endoume" },
  { slug: "joliette",      title: "La Joliette" },
];

export const COMMUNES: Item[] = [];
// Communes satellites à créer ultérieurement

export function urlForQuartier(slug: string) {
  return `/marseille/${slug}/`;
}
export function urlForCommune(slug: string) {
  return `/devis-demenagement-${slug}/`;
}
