#!/bin/bash

# Script de vérification du maillage interne - Site Marseille
# Usage: ./verify-maillage-marseille.sh

echo "╔════════════════════════════════════════════════╗"
echo "║   AUDIT MAILLAGE INTERNE - MARSEILLE          ║"
echo "║   Date: $(date +%Y-%m-%d)                        ║"
echo "╚════════════════════════════════════════════════╝"
echo

# Définir le répertoire du site
SITE_DIR="/Users/guillaumestehelin/moverz_main/sites/marseille"
BLOG_DIR="$SITE_DIR/content/blog"
SATELLITES_DIR="$BLOG_DIR/satellites"
PILIERS_DIR="$BLOG_DIR/demenagement-marseille"
GARDE_MEUBLE_DIR="$BLOG_DIR/garde-meuble-marseille"

# Vérifier l'existence des répertoires
if [ ! -d "$SATELLITES_DIR" ]; then
  echo "❌ Erreur: Répertoire satellites introuvable"
  exit 1
fi

echo "═══════════════════════════════════════════════════"
echo "📊 1. STATISTIQUES GLOBALES"
echo "═══════════════════════════════════════════════════"
echo

# Compter articles
nb_satellites=$(find "$SATELLITES_DIR" -name "*.md" | wc -l | tr -d ' ')
nb_piliers_dem=$(find "$PILIERS_DIR" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
nb_piliers_gm=$(find "$GARDE_MEUBLE_DIR" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
nb_piliers=$((nb_piliers_dem + nb_piliers_gm))
total_articles=$((nb_satellites + nb_piliers))

echo "📁 Articles inventoriés:"
echo "   - Satellites:        $nb_satellites"
echo "   - Piliers:           $nb_piliers"
echo "   - TOTAL:             $total_articles"
echo

# Compter liens totaux
total_liens=$(grep -r "](/blog/" "$BLOG_DIR" 2>/dev/null | wc -l | tr -d ' ')
liens_satellites=$(grep -r "](/blog/" "$SATELLITES_DIR" 2>/dev/null | wc -l | tr -d ' ')
liens_piliers=$(grep -r "](/blog/" "$PILIERS_DIR" "$GARDE_MEUBLE_DIR" 2>/dev/null | wc -l | tr -d ' ')

echo "🔗 Liens internes détectés:"
echo "   - Dans satellites:   $liens_satellites"
echo "   - Dans piliers:      $liens_piliers"
echo "   - TOTAL:             $total_liens"
echo

# Calculer ratio
if [ $total_articles -gt 0 ]; then
  ratio=$(echo "scale=2; $total_liens / $total_articles" | bc)
  echo "📊 Ratio liens/article: $ratio"
  
  # Objectif
  objectif=350  # 100 satellites × 3.5 liens
  progression=$(echo "scale=1; $total_liens * 100 / $objectif" | bc)
  echo "🎯 Objectif:            $objectif liens"
  echo "📈 Progression:         $progression%"
else
  echo "📊 Ratio: N/A"
fi

echo
echo "═══════════════════════════════════════════════════"
echo "📋 2. ANALYSE PAR THÉMATIQUE"
echo "═══════════════════════════════════════════════════"
echo

# Fonction pour compter satellites et liens par thématique détectée
analyze_topic() {
  local topic_keyword=$1
  local topic_name=$2
  
  # Compter fichiers contenant ce mot-clé
  local count=$(find "$SATELLITES_DIR" -name "*${topic_keyword}*" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
  
  if [ $count -gt 0 ]; then
    # Compter liens dans ces satellites
    local liens=0
    for file in $(find "$SATELLITES_DIR" -name "*${topic_keyword}*" -name "*.md" 2>/dev/null); do
      local file_liens=$(grep -c "](/blog/" "$file" 2>/dev/null)
      liens=$((liens + file_liens))
    done
    
    # Calculer moyenne
    local moyenne=0
    if [ $count -gt 0 ]; then
      moyenne=$(echo "scale=1; $liens / $count" | bc)
    fi
    
    # Afficher
    printf "%-35s %3s articles | %4s liens | %4s moy\n" "$topic_name" "$count" "$liens" "$moyenne"
    
    # Verdict
    if [ $(echo "$moyenne >= 3" | bc) -eq 1 ]; then
      echo "   ✅ Maillage conforme (≥3 liens/article)"
    elif [ $(echo "$moyenne >= 2" | bc) -eq 1 ]; then
      echo "   ⚠️  Maillage moyen (2-3 liens/article)"
    elif [ $(echo "$moyenne > 0" | bc) -eq 1 ]; then
      echo "   ❌ Maillage insuffisant (<2 liens/article)"
    else
      echo "   ❌ Aucun maillage détecté"
    fi
    echo
  fi
}

# Analyser les principales thématiques
analyze_topic "prix" "Prix et Budget"
analyze_topic "piano" "Déménagement Piano"
analyze_topic "location" "Location Camion"
analyze_topic "pas-cher" "Déménagement Pas Cher"
analyze_topic "international" "Déménagement International"
analyze_topic "aide" "Aide Déménagement"
analyze_topic "petit" "Petit Déménagement"
analyze_topic "entreprise" "Déménagement Entreprise"

# Analyser garde-meuble séparément
garde_meuble_count=$(grep -l "garde-meuble-marseille" "$SATELLITES_DIR"/*.md 2>/dev/null | wc -l | tr -d ' ')
if [ $garde_meuble_count -gt 0 ]; then
  liens_gm=0
  for file in $(grep -l "garde-meuble-marseille" "$SATELLITES_DIR"/*.md 2>/dev/null); do
    file_liens=$(grep -c "](/blog/" "$file" 2>/dev/null)
    liens_gm=$((liens_gm + file_liens))
  done
  moyenne_gm=0
  if [ $garde_meuble_count -gt 0 ]; then
    moyenne_gm=$(echo "scale=1; $liens_gm / $garde_meuble_count" | bc)
  fi
  
  printf "%-35s %3s articles | %4s liens | %4s moy\n" "Garde-Meuble" "$garde_meuble_count" "$liens_gm" "$moyenne_gm"
  
  if [ $(echo "$moyenne_gm >= 3" | bc) -eq 1 ]; then
    echo "   ✅ Maillage conforme (≥3 liens/article)"
  elif [ $(echo "$moyenne_gm >= 2" | bc) -eq 1 ]; then
    echo "   ⚠️  Maillage moyen (2-3 liens/article)"
  elif [ $(echo "$moyenne_gm > 0" | bc) -eq 1 ]; then
    echo "   ❌ Maillage insuffisant (<2 liens/article)"
  else
    echo "   ❌ Aucun maillage détecté"
  fi
  echo
fi

echo "═══════════════════════════════════════════════════"
echo "⚠️  3. SATELLITES SOUS-MAILLÉS (<2 liens)"
echo "═══════════════════════════════════════════════════"
echo

# Lister satellites avec moins de 2 liens
sous_mailles=0
for file in "$SATELLITES_DIR"/*.md; do
  count=$(grep -c "](/blog/" "$file" 2>/dev/null)
  if [ $count -lt 2 ]; then
    sous_mailles=$((sous_mailles + 1))
    basename_file=$(basename "$file")
    printf "   %-50s %s lien(s)\n" "$basename_file" "$count"
  fi
done

if [ $sous_mailles -eq 0 ]; then
  echo "   ✅ Tous les satellites ont au moins 2 liens"
else
  echo
  echo "   ⚠️  $sous_mailles satellites sous-maillés détectés"
fi

echo
echo "═══════════════════════════════════════════════════"
echo "🔍 4. ANALYSE PILIERS"
echo "═══════════════════════════════════════════════════"
echo

# Analyser chaque pilier
for pilier_dir in "$PILIERS_DIR" "$GARDE_MEUBLE_DIR"; do
  if [ -d "$pilier_dir" ]; then
    for file in "$pilier_dir"/*.md; do
      if [ -f "$file" ]; then
        basename_file=$(basename "$file" .md)
        count=$(grep -c "](/blog/" "$file" 2>/dev/null)
        printf "%-45s %3s liens\n" "$basename_file" "$count"
        
        if [ $count -ge 10 ]; then
          echo "   ✅ Maillage riche (≥10 liens vers satellites)"
        elif [ $count -ge 5 ]; then
          echo "   ⚠️  Maillage partiel (5-10 liens)"
        elif [ $count -gt 0 ]; then
          echo "   ❌ Maillage insuffisant (<5 liens)"
        else
          echo "   ❌ Aucun lien détecté"
        fi
        echo
      fi
    done
  fi
done

echo "═══════════════════════════════════════════════════"
echo "🔗 5. VÉRIFICATION LIENS CASSÉS (échantillon)"
echo "═══════════════════════════════════════════════════"
echo

# Extraire quelques URLs uniques
temp_liens=$(mktemp)
grep -rh "](/blog/" "$BLOG_DIR" 2>/dev/null | \
  grep -o "](/blog/[^)]*)" | \
  sed 's/](//' | sed 's/)//' | \
  sort -u | head -20 > "$temp_liens"

liens_casses=0
while IFS= read -r url; do
  # Construire chemin fichier
  file_path="$SITE_DIR/content$url.md"
  
  if [ ! -f "$file_path" ]; then
    echo "   ❌ Lien cassé: $url"
    liens_casses=$((liens_casses + 1))
  fi
done < "$temp_liens"

rm "$temp_liens"

if [ $liens_casses -eq 0 ]; then
  echo "   ✅ Aucun lien cassé détecté (échantillon 20 URLs)"
else
  echo
  echo "   ⚠️  $liens_casses lien(s) cassé(s) détecté(s)"
fi

echo
echo "═══════════════════════════════════════════════════"
echo "📊 6. RÉSUMÉ ET RECOMMANDATIONS"
echo "═══════════════════════════════════════════════════"
echo

# Calcul état global
if [ $total_liens -ge 350 ]; then
  etat="✅ EXCELLENT"
  reco="Maintenir la qualité du maillage et continuer le monitoring."
elif [ $total_liens -ge 175 ]; then
  etat="⚠️  BON (en progression)"
  reco="Compléter le maillage des thématiques restantes pour atteindre 350+ liens."
elif [ $total_liens -ge 100 ]; then
  etat="⚠️  MOYEN"
  reco="Accélérer le retrofit. Prioriser thématiques à fort trafic (Prix, Déménageur)."
elif [ $total_liens -gt 0 ]; then
  etat="❌ INSUFFISANT"
  reco="Retrofit urgent nécessaire sur tous les satellites."
else
  etat="❌ CRITIQUE (aucun maillage)"
  reco="Démarrer immédiatement le retrofit avec auto-maillage-satellites-marseille.py"
fi

echo "État actuel:      $etat"
echo "Total liens:      $total_liens / 350 objectif"
echo "Ratio moyen:      $ratio liens/article (objectif: 3.5)"
echo
echo "Recommandation:"
echo "   $reco"

echo
echo "═══════════════════════════════════════════════════"
echo "✅ Audit terminé"
echo "═══════════════════════════════════════════════════"
echo
echo "🚀 Prochaines étapes:"
echo "1. Exécuter: python3 auto-maillage-satellites-marseille.py"
echo "2. Mettre à jour les 10 piliers avec sections 'Dans ce dossier'"
echo "3. Ajouter maillage transversal piliers ↔ piliers"
echo
