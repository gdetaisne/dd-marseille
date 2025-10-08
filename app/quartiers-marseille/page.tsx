import { QUARTIERS, COMMUNES, urlForQuartier, urlForCommune } from "@/components/NeighborhoodsData";
import NeighborhoodsIndex from "@/components/NeighborhoodsIndex";

export const metadata = {
  title: "Quartiers & communes — Déménagement à Marseille | IA & transparence",
  description:
    "Trouvez votre page quartier/commune pour estimer votre déménagement à Marseille : Le Vieux-Port, La Plaine, Le Panier, Endoume, La Joliette… Mérignac, Pessac, Talence, Bègles, Villenave-d’Ornon.",
};

function JsonLd() {
  const items = [
    ...QUARTIERS.map((q, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: urlForQuartier(q.slug),
      name: `Devis de déménagement – ${q.title} (Marseille)`,
    })),
    ...COMMUNES.map((c, i) => ({
      "@type": "ListItem",
      position: QUARTIERS.length + i + 1,
      url: urlForCommune(c.slug),
      name: `Devis de déménagement à ${c.title}`,
    })),
  ];
  const json = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export default function Page() {
  return (
    <>
      <NeighborhoodsIndex />
      <JsonLd />
    </>
  );
}


