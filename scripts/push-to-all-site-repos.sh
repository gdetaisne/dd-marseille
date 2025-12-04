#!/bin/bash

# Script pour pousser chaque dossier de site vers son repo GitHub individuel
# Usage: ./scripts/push-to-all-site-repos.sh

set -e

echo "🚀 PUSH CHAQUE DOSSIER DE SITE VERS SON REPO INDIVIDUEL"
echo "==============================================================="

SITES=(marseille lyon montpellier bordeaux nantes lille nice strasbourg rouen rennes toulouse)

for site in "${SITES[@]}"; do
  echo "📦 Push du dossier sites/$site vers dd-$site"
  if [ ! -d "../../sites/$site" ]; then
    echo "   ⚠️ Dossier ../../sites/$site introuvable, on saute."
    continue
  fi
  cd "../../sites/$site"
  [ -d .git ] || git init
  git add -A
  git commit -m "sync: update $site from monorepo" || true
  if git remote | grep -q '^origin$'; then
    git remote set-url origin "https://github.com/gdetaisne/dd-$site.git"
  else
    git remote add origin "https://github.com/gdetaisne/dd-$site.git"
  fi
  git push -u origin main --force || echo "   ⚠️ Push échoué pour $site"
  cd - >/dev/null
done

echo "✅ Terminé"
