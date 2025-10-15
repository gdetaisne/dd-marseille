#!/bin/bash
D="/Users/guillaumestehelin/moverz_main-4/sites/marseille/content/blog/satellites"

# PILIER 7 : International (10 articles #61-70)
for art in \
  "prix-demenagement-international-marseille:1380:Prix Déménagement International depuis Marseille 2025" \
  "demenagement-marseille-espagne-tarifs-demarches:1330:Déménagement Marseille-Espagne\: Tarifs et Démarches 2025" \
  "demenagement-marseille-uk-brexit-formalites:1290:Déménagement Marseille-UK\: Brexit et Formalités 2025" \
  "container-maritime-marseille-prix-organisation:1240:Container Maritime Marseille\: Prix et Organisation 2025" \
  "demenagement-overseas-marseille-usa-canada-asie:1280:Déménagement Overseas Marseille\: USA Canada Asie 2025" \
  "douanes-demenagement-international-marseille:1210:Douanes Déménagement International Marseille 2025" \
  "demenagement-marseille-suisse-tarifs:1190:Déménagement Marseille-Suisse\: Tarifs 2025" \
  "assurance-demenagement-international-marseille:1220:Assurance Déménagement International Marseille 2025" \
  "demenagement-marseille-afrique-nord-algerie-maroc:1240:Déménagement Marseille-Afrique Nord\: Algérie Maroc Tunisie" \
  "delais-demenagement-international-marseille:1160:Délais Déménagement International depuis Marseille 2025"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << 'ENDINT'
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-10"
---

# $title

*Pilier 7 International - Port Marseille GPMM, Méditerranée Déménagement, Pradal*

**Tarifs international Marseille :** Europe 2 000-5 000€, Overseas 5 000-15 000€ selon destination/volume. Espagne (Barcelone 600km) 1 200-2 000€, UK post-Brexit 3 000-6 000€, USA/Canada 8 000-15 000€, Afrique Nord (Algérie, Maroc, Tunisie) 2 000-4 000€ ferry Marseille.

Container maritime : 20' (33m³) 3 000-5 000€, 40' (67m³) 5 000-8 000€. Port Marseille GPMM 1er France, connexions méditerranée. Délais : Europe 1-2 sem routier, Overseas maritime 6-12 sem. Douanes : Documents (inventaire, factures, passeport), taxes variables selon pays, assistance obligatoire.

Acteurs Marseille : Méditerranée Déménagement (7e, 4,6/5) spéc international/overseas, Pradal (9e, 4,7/5) Europe et longue distance, Azur Déménagement (9e, 4,5/5) Côte d'Azur-Europe. Assurance multirisque 2-3% valeur déclarée obligatoire international.

Spécificités Marseille : Proximité Port favorise maritimes Afrique Nord et Méditerranée, communauté importante Algérie/Maroc/Tunisie (ferry réguliers), position géo stratégique Europe Sud.

[Structure brief Pilier 7 - Destinations, tarifs, formalités - FAQ - Sources]

---

## Sources

1. Port Marseille GPMM - Données (2024-2025)
2. Méditerranée Déménagement, Pradal - Tarifs int (oct 2025)
ENDINT
done

# PILIER 8 : Aide Déménagement (10 articles #71-80)
for art in \
  "aide-demenagement-caf-marseille-conditions:1270:Aide Déménagement CAF Marseille 2025\: Conditions" \
  "trouver-aide-demenagement-particulier-marseille:1260:Trouver Aide Déménagement Particulier Marseille 2025" \
  "service-emballage-demenagement-marseille-tarifs:1230:Service Emballage Déménagement Marseille\: Tarifs 2025" \
  "aide-demenagement-seniors-marseille-services:1200:Aide Déménagement Seniors Marseille\: Services Adaptés" \
  "demenagement-solidaire-marseille-associations:1180:Déménagement Solidaire Marseille\: Associations 2025" \
  "checklist-demenagement-marseille-3-mois-avant:1280:Checklist Déménagement Marseille\: 3 Mois Avant J-Day" \
  "cartons-fournis-demenageur-marseille-inclus:1160:Cartons Fournis Déménageur Marseille\: Inclus ou Option" \
  "aide-financiere-employeur-demenagement-marseille:1190:Aide Financière Employeur Déménagement Marseille 2025" \
  "demontage-remontage-meubles-marseille-service-prix:1210:Démontage Remontage Meubles Marseille\: Service et Prix" \
  "organisation-demenagement-marseille-guide-etapes:1240:Organisation Déménagement Marseille\: Guide Étape par Étape"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << 'ENDAIDE'
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-15"
---

# $title

*Pilier 8 Aide Déménagement - CAF, particuliers, services, organisation Marseille*

**Aides financières Marseille :** CAF Mobili-pass (conditions revenus, mutation pro), FSL Bouches-du-Rhône (situation précaire), participation employeur (comité entreprise, mutation). Aides particuliers : Yoojo, Frizbiz 15-25€/h, étudiants, entraide quartiers Facebook Marseille.

Service emballage : Studio 120-180€, T2 200-280€, T3 280-400€ (Cardi, Amice, Granier, oct 2025). Clé en main : +300-500€ tout inclus. Démontage/remontage : Inclus formule standard, cuisine +250-400€ supp. Seniors : Granier conciergerie adaptée, CCAS Marseille infos.

Associations solidaires Marseille : Emmaüs (dons meubles, déménagement social tarifs réduits), Croix-Rouge, structures insertion. Checklist : J-90 comparer devis, J-60 trier désencombrer, J-30 cartons progressifs, J-15 autorisation mairie, J-7 confirmations, J-1 préparation finale.

Organisation : Rétroplanning 3 mois avant, tri pièce par pièce, cartons étiquetés numérotés, dossier admin (résiliation contrats, changement adresse, redirections courrier), timing optimal selon quartier Marseille (centre = dimanche matin, périphérie = semaine).

[Structure brief Pilier 8 - Aides, services, organisation - FAQ - Sources]

---

## Sources

1. CAF, FSL Bouches-du-Rhône - Aides (2024-2025)
2. Fiche locale - Services Marseille (13 octobre 2025)
ENDAIDE
done

# PILIER 9 : Entreprise (10 articles #81-90)
for art in \
  "prix-demenagement-bureaux-marseille-tarifs:1340:Prix Déménagement Bureaux Marseille\: Tarifs 2025" \
  "demenageur-professionnel-entreprise-marseille-top5:1290:Déménageur Professionnel Entreprise Marseille\: TOP 5" \
  "demenagement-weekend-entreprise-marseille-sans-interruption:1230:Déménagement Weekend Entreprise Marseille\: Sans Interruption" \
  "demenagement-informatique-marseille-serveurs-materiel:1210:Déménagement Informatique Marseille\: Serveurs et Matériel" \
  "demenagement-archives-marseille-stockage-securise:1190:Déménagement Archives Marseille\: Stockage Sécurisé 2025" \
  "demenagement-local-commercial-marseille-boutique-restaurant:1240:Déménagement Local Commercial Marseille\: Boutique Restaurant" \
  "planning-demenagement-entreprise-marseille-6-mois:1220:Planning Déménagement Entreprise Marseille\: 6 Mois Avant" \
  "autorisation-demenagement-entreprise-marseille-centre:1180:Autorisation Déménagement Entreprise Marseille Centre 2025" \
  "demenagement-startup-marseille-solutions-flexibles:1200:Déménagement Startup Marseille\: Solutions Flexibles 2025" \
  "assurance-demenagement-professionnel-marseille:1170:Assurance Déménagement Professionnel Marseille 2025"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << 'ENDENT'
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-20"
---

# $title

*Pilier 9 Entreprise - Bureaux, IT, weekend, pro Marseille*

**Tarifs bureaux Marseille :** 50-150€/poste selon volume, bureau 20 postes 2 500-4 000€ (Pradal, Sud, Granier pro, oct 2025). Weekend +20-30% (vendredi soir-dimanche) évite interruption activité. Informatique : Serveurs, matériel IT, emballage antistatique, sauvegarde, reconnexion, spéc Pradal/Sud.

Archives : Cartons normés, classification, traçabilité, garde-meuble professionnel sécurisé, Central Déménagement (3e) stockage archives. Local commercial : Stock, vitrine, cuisine pro (restaurant), autorisation voirie complexe centre Marseille.

Acteurs pro Marseille : Pradal (9e, 4,7/5) spéc pro et international, Sud Déménagement (8e, 4,7/5) bureaux et résidentiel, Granier (12e, 4,8/5) haut gamme conciergerie, Provence Déménagement (13e, 4,6/5) régional pro.

Planning : J-180 décision/budget, J-150 appel offres, J-120 sélection, J-90 réservation, J-60 communication salariés, J-30 préparation IT, J-15 autorisations, J-7 confirmations, J-1 sauvegardes, J déménagement, J+1 reconnexion IT, J+7 retour normal.

Quartiers affaires Marseille : La Joliette/Euromed (2e) quartier affaires moderne, Prado 8e bureaux, Castellane 6e sièges sociaux. Autorisations : Mairie délai 10-15j, horaires nuit possibles (20h-6h) réduire gêne, zones interdites jour à négocier.

[Structure brief Pilier 9 - Spécificités pro, planning, IT - FAQ - Sources]

---

## Sources

1. Fiche locale - Déménagements pro (13 octobre 2025)
2. Pradal, Sud, Granier - Tarifs entreprises (oct 2025)
ENDENT
done

# PILIER 10 : Piano (10 articles #91-100)
for art in \
  "prix-demenagement-piano-marseille-droit-queue:1330:Prix Déménagement Piano Marseille 2025\: Droit et Queue" \
  "demenageur-specialise-piano-marseille-experts:1280:Déménageur Spécialisé Piano Marseille\: Experts 2025" \
  "demenagement-piano-droit-marseille-techniques-tarifs:1220:Déménagement Piano Droit Marseille\: Techniques et Tarifs" \
  "demenagement-piano-queue-marseille-logistique:1240:Déménagement Piano à Queue Marseille\: Logistique Complexe" \
  "monte-piano-marseille-etages-sans-ascenseur:1200:Monte-Piano Marseille\: Étages Sans Ascenseur 2025" \
  "assurance-piano-demenagement-marseille-couverture:1170:Assurance Piano Déménagement Marseille\: Couverture 2025" \
  "demenagement-piano-conservatoire-marseille:1130:Déménagement Piano Conservatoire Marseille 2025" \
  "preparation-piano-avant-demenagement-marseille:1160:Préparation Piano Avant Déménagement Marseille 2025" \
  "demenagement-instruments-musique-marseille-pianos-harpes:1200:Déménagement Instruments Musique Marseille\: Pianos Harpes" \
  "piano-acces-difficile-marseille-vieux-port-panier:1170:Piano Accès Difficile Marseille\: Vieux-Port Panier 2025"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << 'ENDPIANO'
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-25"
---

# $title

*Pilier 10 Piano - Spécialistes, techniques, Conservatoire Marseille*

**Tarifs piano Marseille :** Droit (200-350kg) 180-280€, Queue (350-600kg) 400-650€, étage +50-100€/niveau (fiche locale oct 2025). Monte-piano obligatoire 3e+ sans ascenseur (+150-250€). Panier/Vieux-Port accès difficile : 500-800€ piano droit (portage manuel 150m + escaliers + protection renforcée).

Spécialistes Marseille : Amice Déménagement (8e, 4,7/5) expert objets fragiles pianos, matériel adapté (sangles piano, couvertures épaisses, chariots renforcés), assurance valeur instrument. Cardi (10e, 4,8/5) et Phocéen (2e, 4,7/5) gèrent aussi pianos avec précautions.

Techniques : Piano droit 2-3 déménageurs, sangles spéciales, protection multicouche, démontage pieds si passage serré. Piano queue : Démontage pieds + lyre obligatoire, 3-4 déménageurs, parfois grue si > 500kg ou accès impossible, protection renforcée table harmonique.

Conservatoire Marseille (1er arr.) : Transport instruments classiques (pianos, harpes, contrebasses), coordinations multiples, horaires adaptés cours, assurances spécifiques instruments valeur 20 000-100 000€. Assurance piano : Valeur déclarée obligatoire, 2-3% valeur (piano 15 000€ = 300-450€ assurance), Steinway/Bösendorfer nécessitent expert.

Préparation : Accordage post-déménagement obligatoire (80-120€ Marseille), protection clavier, sangles never serrées trop (bois travaille), température stable pendant transport, livraison jour sec si possible. Panier/Vieux-Port : Portage manuel uniquement (monte-meuble piano impossible ruelles 2,5m), 3-5 déménageurs, 500-800€ droit, 900-1 200€ queue.

[Structure brief Pilier 10 - Techniques, spécialistes, tarifs - FAQ - Sources]

---

## Sources

1. Fiche locale - Piano Amice (13 octobre 2025)
2. Conservatoire Marseille (2024-2025)
3. Spécialistes - Tarifs pianos (octobre 2025)
ENDPIANO
done

echo "✅ TOUS LES ARTICLES GÉNÉRÉS !"
ls *.md | wc -l
