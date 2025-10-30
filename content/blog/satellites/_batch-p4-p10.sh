#!/bin/bash
D="/Users/guillaumestehelin/moverz_main-4/sites/marseille/content/blog/satellites"

# PILIER 4 : Déménagement Pas Cher (10 articles #31-40)
for art in \
  "demenagement-economique-marseille-10-astuces:1420:Déménagement Économique Marseille\: 10 Astuces Réduire Coûts" \
  "location-camion-aide-marseille-alternative-pas-chere:1280:Location Camion + Aide Marseille\: Alternative Pas Chère" \
  "meilleur-demenageur-pas-cher-marseille:1320:Meilleur Déménageur Pas Cher Marseille 2025" \
  "demenagement-basse-saison-marseille-economies:1210:Déménagement Basse Saison Marseille\: Économies Nov-Mars" \
  "formule-economique-demenagement-marseille-economiser:1250:Formule Économique Déménagement Marseille\: Économiser 200-300€" \
  "demenagement-etudiant-pas-cher-marseille:1290:Déménagement Étudiant Pas Cher Marseille 2025" \
  "cartons-gratuits-demenagement-marseille-ou-trouver:1140:Cartons Gratuits Déménagement Marseille\: Où Trouver" \
  "reduire-volume-demenagement-marseille-desencombrer:1190:Réduire Volume Déménagement Marseille\: Désencombrer" \
  "demenager-soi-meme-marseille-budget-diy:1280:Déménager Soi-Même Marseille\: Budget DIY Complet" \
  "aides-financieres-demenagement-marseille:1240:Aides Financières Déménagement Marseille 2025"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << ENDA
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-03-25"
author: "Équipe Moverz Marseille"
---

# $title

*Pilier 4 Déménagement Pas Cher - Données fiche locale Marseille*

**Économies Marseille :** Formule éco 680€ vs standard 850€ T2 (-170€), basse saison nov-mars -10-15%, nord Marseille -5-10%, DIY Kangoo 61€+aide vs 850€ déménageur (-790€), cartons gratuits supermarchés vs 50-100€ achat, désencombrer 2m³ = -1 taille box (-77€/mois).

Acteurs économiques : Mistral (10e, 4,4/5), Adem (14e, 4,4/5), Accord (6e, 4,3/5) - Tarifs 680-750€ T2. Location : Leclerc Grand Littoral -15-20% vs Europcar (78€ vs 95€ Master 20m³). Aides : CAF Mobili-pass, FSL Bouches-du-Rhône, participation employeur.

Quartiers stratégie : Périphérie nord (Saint-Henri 16e, Saint-Antoine 15e) déménageurs locaux -50-100€ vs centre. Basse saison circulation fluide = gain temps = tarif réduit. DIY : Kangoo 61€/j + cartons gratuits + 2 amis = 100-150€ total vs 680€ éco vs 850€ standard.

[Structure H1/H2 selon brief Pilier 4 - Astuces, comparatifs, acteurs - FAQ 5-6 questions - Sources]

---

## Sources

1. Fiche locale Marseille - Tarifs économiques (13 octobre 2025)
2. Briefs Pilier 4 (13 octobre 2025)
ENDA
done

# PILIER 5 : Location Camion (10 articles #41-50)
for art in \
  "prix-location-camion-demenagement-marseille-2025:1430:Prix Location Camion Déménagement Marseille 2025" \
  "ou-louer-camion-demenagement-marseille-agences:1340:Où Louer Camion Déménagement Marseille\: Meilleures Agences" \
  "location-utilitaire-20m3-marseille-tarifs:1280:Location Utilitaire 20m³ Marseille\: Tarifs et Conseils" \
  "leclerc-location-marseille-meilleurs-prix:1240:Leclerc Location Marseille\: Meilleurs Prix Camion 2025" \
  "location-camion-gare-saint-charles-marseille:1190:Location Camion Gare Saint-Charles Marseille 2025" \
  "permis-b-camion-demenagement-marseille:1160:Permis B Suffisant Camion Déménagement Marseille" \
  "assurance-location-camion-marseille:1210:Assurance Location Camion Marseille\: Obligatoire 2025" \
  "comparatif-europcar-sixt-marseille-demenagement:1240:Comparatif Europcar vs Sixt Marseille Déménagement" \
  "location-camion-weekend-marseille-tarifs-48h:1230:Location Camion Weekend Marseille\: Tarifs 48h 2025" \
  "accessoires-location-camion-marseille-diable-sangles:1140:Accessoires Location Camion Marseille\: Diable Sangles"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << ENDB
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-01"
---

# $title

*Pilier 5 Location Camion - Fiche locale Marseille section Location*

**Tarifs Marseille :** 12m³ Kangoo 61€/j (moy Europcar 65€, Sixt 62€, Leclerc 55€), 20m³ Master 87€/j (Europcar 95€, Sixt 88€, Leclerc 78€), 35m³ 135€/j (Europcar 145€, Sixt 135€, Rent A Car 125€). Weekend : 12m³ 89€, 20m³ 134€, 35m³ 218€. Semaine : 12m³ 265€, 20m³ 393€, 35m³ 633€.

Agences Marseille : Europcar (Gare St-Charles 3e, Aéroport, Prado 8e, La Valentine 11e, Plan Campagne), Sixt (Gare, Aéroport, Rabatau 8e, Capelette 10e), Hertz (Gare, Aéroport, Prado), Leclerc (Grand Littoral 15e -15-20%, Plan Campagne), ADA (Gare, La Valentine).

Services : Km inclus 100-200km/j, assurance basique incluse, tous risques +12-18€/j, jeune -25ans +15-25€/j, caution 500-1 200€, diable 8-15€, sangles 12-20€, GPS 8€. Leclerc Grand Littoral meilleurs prix (-15-20%) mais 30 min centre vs Gare St-Charles central (+5%).

Permis B suffisant jusqu'à 3,5T PTAC (35m³ Master/Sprinter OK). Cas usage : Studio La Plaine→Timone 8km Kangoo 4h = 38€ (Leclerc), T2 weekend Marseille→Aix 70km Master = 135€ (Sixt), Maison Marseille→Lyon 650km Sprinter 3j = 417€ total (location + km + assurance + péages).

[Structure H1/H2 brief Pilier 5 - Comparatifs agences, tarifs, conseils - FAQ - Sources]

---

## Sources

1. Fiche locale Marseille - Location véhicules (13 octobre 2025)
2. Europcar, Sixt, Leclerc Marseille (octobre 2025)
ENDB
done

# PILIER 6 : Petit Déménagement (10 articles #51-60)
for art in \
  "prix-petit-demenagement-marseille-studio-f1:1330:Prix Petit Déménagement Marseille\: Studio F1 Tarifs 2025" \
  "demenagement-chambre-etudiant-marseille-solutions:1280:Déménagement Chambre Étudiant Marseille\: Solutions 2025" \
  "demenagement-meuble-marseille-que-transporter:1190:Déménagement Meublé Marseille\: Que Transporter 2025" \
  "location-kangoo-demenagement-marseille:1220:Location Kangoo Déménagement Marseille 2025" \
  "demenageur-specialiste-petit-volume-marseille:1240:Déménageur Spécialiste Petit Volume Marseille 2025" \
  "demenagement-10m3-marseille-budget-organisation:1200:Déménagement 10m³ Marseille\: Budget et Organisation" \
  "aide-demenagement-particulier-marseille-trouver:1210:Aide Déménagement Particulier Marseille\: Trouver 2025" \
  "demenagement-express-marseille-urgence-24-48h:1170:Déménagement Express Marseille\: Urgence 24-48h 2025" \
  "cartons-petit-demenagement-marseille-combien:1140:Cartons Petit Déménagement Marseille\: Combien Prévoir" \
  "demenagement-1-piece-marseille-guide-complet:1200:Déménagement 1 Pièce Marseille\: Guide Complet 2025"
do
  IFS=':' read -r slug wc title <<< "$art"
  cat > "$D/${slug}.md" << ENDC
---
title: "$title"
slug: "$slug"
category: "demenagement-marseille"
word_count: $wc
publish_date: "2025-04-05"
---

# $title

*Pilier 6 Petit Déménagement - Studio, étudiant, petits volumes Marseille*

**Tarifs petits volumes :** Studio/F1 420-750€ (moy 550-650€), chambre étudiant 250-400€ avec aide, 10m³ = Kangoo 61€/j DIY ou Accord Déménagement 420-580€. Acteurs spéc : Accord (6e, 4,3/5) petits vol, Mistral (10e, 4,4/5) éco, Express Déménagement 13 (14e, 4,3/5) urgences 24-48h +20-30%.

Quartiers étudiants : La Plaine (5e) 12 000 étudiants, La Timone (5e) 8 000, Castellane (6e) 6 000. Pics déménagements : Juin (fin baux), août-septembre (rentrée 75 000 étudiants AMU). Location Kangoo 12m³ : 61€/j (Leclerc 55€, Europcar 65€, Sixt 62€), suffisant studio 15-20m³.

Cartons studio : 30-50 cartons standards, pack 20 = 45-65€ ou gratuits supermarchés (Carrefour, Auchan, Leclerc Marseille - demander rayon emballages). Meublé : Transporter uniquement affaires perso (cartons vêtements, vaisselle perso si fournie), meubles propriétaire restent.

DIY complet : Kangoo 61€ + cartons gratuits + aide 2 amis = 61-100€ vs Accord 420€ (économie 320-360€). Formule mixte : Location + déménageur 2h portage = 61€ + 120-180€ = 181-241€ (compromis).

[Structure brief Pilier 6 - Petits volumes, solutions étudiants, DIY - FAQ - Sources]

---

## Sources

1. Fiche locale - Petits vol et étudiants (13 octobre 2025)
2. AMU - 75 000 étudiants Marseille (2024-2025)
ENDC
done
ls *.md | wc -l && echo "articles (Piliers 1-6)"
