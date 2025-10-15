#!/usr/bin/env python3
"""
Script d'automatisation du maillage interne - Satellites Marseille
Usage: python3 auto-maillage-satellites-marseille.py
"""

import os
import re
from pathlib import Path

# Configuration
SATELLITES_DIR = Path("/Users/guillaumestehelin/moverz_main/sites/marseille/content/blog/satellites")

# Mapping catégorie → URL pilier - Structure simplifiée Marseille
PILIER_MAPPING = {
    "demenagement-marseille": {
        # Note: 90 satellites pointent vers cette catégorie, on utilise le pilier principal
        "url": "/blog/demenagement-marseille/demenageur-marseille",
        "ancres": [
            "guide complet des déménageurs à Marseille",
            "déménagement professionnel à Marseille", 
            "nos services de déménagement marseillais",
            "choisir un déménageur fiable à Marseille",
            "expert déménagement Marseille et Bouches-du-Rhône"
        ]
    },
    "garde-meuble-marseille": {
        "url": "/blog/garde-meuble-marseille/garde-meuble-marseille-guide-complet",
        "ancres": [
            "guide complet du garde-meuble à Marseille",
            "stockage sécurisé à Marseille",
            "solutions de garde-meuble marseillais",
            "box de stockage et self-stockage Marseille",
            "entreposer vos biens à Marseille"
        ]
    }
}

# Mapping spécialisé pour les sous-thématiques (analyse du nom de fichier)
SPECIALIZED_MAPPING = {
    # Prix et budget
    "prix": {
        "url": "/blog/demenagement-marseille/prix-demenagement-marseille",
        "ancres": [
            "guide des prix déménagement à Marseille",
            "tarifs déménageur Marseille détaillés",
            "comprendre les coûts de déménagement marseillais",
            "budget déménagement Marseille complet",
            "structure tarifaire des déménageurs marseillais"
        ]
    },
    # Piano
    "piano": {
        "url": "/blog/demenagement-marseille/demenagement-piano-marseille",
        "ancres": [
            "guide complet du déménagement de piano à Marseille",
            "déménagement piano professionnel à Marseille",
            "transport sécurisé de piano à Marseille",
            "tous nos conseils déménagement piano Marseille",
            "expertise déménagement piano région marseillaise"
        ]
    },
    # Location camion
    "location": {
        "url": "/blog/demenagement-marseille/location-camion-demenagement-marseille",
        "ancres": [
            "guide location camion déménagement Marseille",
            "louer un camion pour déménager à Marseille",
            "location véhicule utilitaire Marseille",
            "tout savoir sur la location de camion à Marseille",
            "choisir son camion de déménagement marseillais"
        ]
    },
    # Pas cher / budget
    "pas-cher": {
        "url": "/blog/demenagement-marseille/demenagement-marseille-pas-cher",
        "ancres": [
            "déménagement économique à Marseille",
            "solutions pas chères pour déménager à Marseille",
            "réduire le coût de votre déménagement marseillais",
            "astuces déménagement pas cher Marseille",
            "budget serré déménagement Marseille"
        ]
    },
    # International
    "international": {
        "url": "/blog/demenagement-marseille/demenagement-international-marseille",
        "ancres": [
            "guide déménagement international depuis Marseille",
            "déménager à l'étranger depuis Marseille",
            "expatriation et déménagement international Marseille",
            "tout savoir sur le déménagement international marseillais",
            "déménagement Europe et international Marseille"
        ]
    },
    # Aide
    "aide": {
        "url": "/blog/demenagement-marseille/aide-au-demenagement-marseille",
        "ancres": [
            "guide aide au déménagement à Marseille",
            "obtenir de l'aide pour déménager à Marseille",
            "aides financières et pratiques déménagement Marseille",
            "solutions d'accompagnement déménagement marseillais",
            "aide CAF et associations déménagement Marseille"
        ]
    },
    # Petit déménagement
    "petit": {
        "url": "/blog/demenagement-marseille/petit-demenagement-marseille",
        "ancres": [
            "guide petit déménagement Marseille",
            "déménager un studio ou petit volume à Marseille",
            "solutions petit déménagement économique Marseille",
            "déménagement express petit volume Marseille",
            "petit déménagement pas cher à Marseille"
        ]
    },
    # Entreprise
    "entreprise": {
        "url": "/blog/demenagement-marseille/demenagement-d-entreprise-marseille",
        "ancres": [
            "guide déménagement d'entreprise à Marseille",
            "déménagement professionnel et bureaux Marseille",
            "transfert de locaux professionnels à Marseille",
            "solutions déménagement entreprise marseillaise",
            "déménagement bureaux et commerces Marseille"
        ]
    }
}

def extract_category(content):
    """Extraire la catégorie du frontmatter"""
    match = re.search(r'^category:\s*["\']?([^"\'\n]+)["\']?', content, re.MULTILINE)
    return match.group(1) if match else None

def detect_specialized_topic(filename):
    """Détecter la thématique spécialisée depuis le nom de fichier"""
    filename_lower = filename.lower()
    
    # Ordre d'importance (plus spécifique d'abord)
    if any(word in filename_lower for word in ['prix', 'tarif', 'cout', 'budget']):
        return 'prix'
    elif 'piano' in filename_lower:
        return 'piano'
    elif any(word in filename_lower for word in ['location', 'camion', 'utilitaire']):
        return 'location'
    elif any(word in filename_lower for word in ['pas-cher', 'economique', 'gratuit']):
        return 'pas-cher'
    elif 'international' in filename_lower:
        return 'international'
    elif any(word in filename_lower for word in ['aide', 'caf', 'financier']):
        return 'aide'
    elif any(word in filename_lower for word in ['petit', 'studio', 'volume']):
        return 'petit'
    elif any(word in filename_lower for word in ['entreprise', 'bureau', 'professionnel']):
        return 'entreprise'
    
    return None

def count_existing_links(content):
    """Compter les liens internes existants"""
    return len(re.findall(r'\]\(/blog/', content))

def find_best_insertion_points(content):
    """Trouver les meilleurs endroits pour insérer les liens"""
    lines = content.split('\n')
    
    # Trouver fin du frontmatter
    frontmatter_end = 0
    yaml_count = 0
    for i, line in enumerate(lines):
        if line.strip() == '---':
            yaml_count += 1
            if yaml_count == 2:
                frontmatter_end = i + 1
                break
    
    # Trouver première section (##) pour introduction
    intro_section = frontmatter_end + 1
    for i in range(frontmatter_end, len(lines)):
        if lines[i].startswith('##'):
            intro_section = i
            break
    
    # Trouver section FAQ ou Conclusion
    conclusion_section = len(lines) - 5
    for i in range(len(lines) - 1, frontmatter_end, -1):
        if lines[i].startswith('## FAQ') or lines[i].startswith('## Conclusion'):
            conclusion_section = i
            break
    
    # Trouver milieu du contenu
    mid_section = frontmatter_end + (intro_section - frontmatter_end) // 2
    if mid_section == frontmatter_end:
        mid_section = (frontmatter_end + conclusion_section) // 2
    
    return intro_section, mid_section, conclusion_section

def add_link_intro(content, ancre, url):
    """Ajouter un lien dans l'introduction"""
    lines = content.split('\n')
    intro_section, _, _ = find_best_insertion_points(content)
    
    # Trouver le premier paragraphe après frontmatter
    for i in range(intro_section, len(lines)):
        line = lines[i].strip()
        if line and not line.startswith('#') and not line.startswith('---'):
            # Ajouter un paragraphe avant
            intro_text = f"Pour comprendre tous les aspects de ce sujet, consultez notre [{ancre}]({url}).\n"
            lines.insert(i, intro_text)
            break
    
    return '\n'.join(lines)

def add_link_body(content, ancre, url):
    """Ajouter un lien dans le corps"""
    lines = content.split('\n')
    _, mid_section, conclusion_section = find_best_insertion_points(content)
    
    # Trouver un paragraphe au milieu
    for i in range(mid_section, conclusion_section):
        line = lines[i].strip()
        if line and not line.startswith('#') and not line.startswith('-') and not line.startswith('**'):
            # Ajouter une phrase contextuelle
            context_text = f" Ces éléments s'inscrivent dans le contexte plus large de notre [{ancre}]({url})."
            lines[i] = lines[i] + context_text
            break
    
    return '\n'.join(lines)

def add_link_conclusion(content, ancre, url):
    """Ajouter un lien en conclusion"""
    lines = content.split('\n')
    _, _, conclusion_section = find_best_insertion_points(content)
    
    # Ajouter avant la FAQ ou à la fin
    conclusion_text = f"\nPour approfondir ce sujet et découvrir tous nos conseils, consultez notre [{ancre}]({url})."
    
    # Insérer avant ## FAQ ou ## Conclusion
    for i in range(len(lines) - 1, conclusion_section, -1):
        if lines[i].startswith('## FAQ'):
            lines.insert(i, conclusion_text)
            return '\n'.join(lines)
    
    # Sinon insérer avant les 5 dernières lignes
    lines.insert(-5, conclusion_text)
    return '\n'.join(lines)

def process_satellite(file_path):
    """Traiter un fichier satellite"""
    print(f"\nTraitement: {file_path.name}")
    
    # Lire le contenu
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extraire catégorie
    category = extract_category(content)
    if not category:
        print(f"  ⚠️  Catégorie introuvable")
        return False
    
    # Vérifier liens existants
    existing_links = count_existing_links(content)
    if existing_links >= 3:
        print(f"  ✅ Déjà maillé ({existing_links} liens)")
        return False
    
    # Déterminer le pilier cible
    pilier = None
    
    # D'abord essayer de détecter une thématique spécialisée
    specialized_topic = detect_specialized_topic(file_path.name)
    if specialized_topic and specialized_topic in SPECIALIZED_MAPPING:
        pilier = SPECIALIZED_MAPPING[specialized_topic]
        print(f"  🎯 Thématique spécialisée détectée: {specialized_topic}")
    
    # Sinon, utiliser le mapping de base par catégorie
    elif category in PILIER_MAPPING:
        pilier = PILIER_MAPPING[category]
        print(f"  📂 Catégorie standard: {category}")
    
    if not pilier:
        print(f"  ⚠️  Catégorie '{category}' non mappée")
        return False
    
    # Récupérer infos pilier
    url = pilier["url"]
    ancres = pilier["ancres"]
    
    # Ajouter 3 liens avec ancres variées
    print(f"  📝 Ajout 3 liens vers {url}")
    
    try:
        # Lien 1 : Introduction
        content = add_link_intro(content, ancres[0], url)
        print(f"     ✅ Lien 1 (intro): {ancres[0][:50]}...")
        
        # Lien 2 : Corps
        content = add_link_body(content, ancres[1], url)
        print(f"     ✅ Lien 2 (corps): {ancres[1][:50]}...")
        
        # Lien 3 : Conclusion
        content = add_link_conclusion(content, ancres[2], url)
        print(f"     ✅ Lien 3 (concl): {ancres[2][:50]}...")
        
        # Sauvegarder
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"  ✅ Fichier mis à jour")
        return True
        
    except Exception as e:
        print(f"  ❌ Erreur: {str(e)}")
        return False

def main():
    print("╔════════════════════════════════════════════════╗")
    print("║   AUTO-MAILLAGE SATELLITES MARSEILLE           ║")
    print("╚════════════════════════════════════════════════╝")
    print()
    
    # Lister tous les satellites
    satellites = list(SATELLITES_DIR.glob("*.md"))
    print(f"📁 {len(satellites)} satellites détectés")
    print()
    
    # Analyser distribution par thématique
    stats = {
        "demenagement-marseille": 0,
        "garde-meuble-marseille": 0,
        "specialized": {}
    }
    
    for satellite in satellites:
        with open(satellite, 'r', encoding='utf-8') as f:
            content = f.read()
        category = extract_category(content)
        if category:
            if category in stats:
                stats[category] += 1
            specialized = detect_specialized_topic(satellite.name)
            if specialized:
                stats["specialized"][specialized] = stats["specialized"].get(specialized, 0) + 1
    
    print("📊 Distribution par thématique:")
    print(f"  - Déménagement général: {stats['demenagement-marseille']}")
    print(f"  - Garde-meuble: {stats['garde-meuble-marseille']}")
    print("  - Spécialisations détectées:")
    for spec, count in sorted(stats["specialized"].items()):
        print(f"    • {spec}: {count} articles")
    print()
    
    # Traiter chaque satellite
    success_count = 0
    skip_count = 0
    error_count = 0
    
    for satellite in sorted(satellites):
        result = process_satellite(satellite)
        if result:
            success_count += 1
        elif result is False:
            skip_count += 1
        else:
            error_count += 1
    
    # Résumé
    print()
    print("═══════════════════════════════════════════════════")
    print("📊 RÉSUMÉ")
    print("═══════════════════════════════════════════════════")
    print(f"✅ Maillés:       {success_count}")
    print(f"⏭️  Ignorés:       {skip_count}")
    print(f"❌ Erreurs:       {error_count}")
    print(f"📝 Total:         {len(satellites)}")
    print()
    print(f"🔗 Liens ajoutés: ~{success_count * 3}")
    print()
    print("Conseil: Exécutez verify-maillage-marseille.sh pour valider")

if __name__ == "__main__":
    main()
