# 📹 Page "Nos Projets" - Documentation

## Vue d'ensemble

La page **Nos Projets** (`/projects.html`) présente le portfolio vidéo de RavenArt avec un système de filtrage interactif et deux catégories d'affichage.

## 🎯 Fonctionnalités

### 1. Filtrage par Catégorie
Les utilisateurs peuvent filtrer les vidéos en trois modes :
- **Tous les Projets** - Affiche toutes les vidéos
- **Événementiel** - Vidéos d'événements (galas, conférences, cérémonies)
- **Branding Video** - Contenus de marque (publicités, teasers, films corporate)

### 2. Deux Formats d'Affichage

#### Vue Desktop (Format Paysage 16:9)
- Vidéos optimisées pour écrans larges
- Aspect ratio: `16/9`
- Idéal pour : films corporate, publicités TV, documentaires

#### Vue Mobile (Format Portrait 9:16)
- Vidéos verticales pour réseaux sociaux
- Aspect ratio: `9/16`
- Max hauteur: 400px
- Idéal pour : Stories Instagram, Reels TikTok, contenu mobile-first

## 🎨 Design & UX

### Composants Vidéo

```html
<article class="video-card" data-category="evenementiel">
  <div class="video-placeholder">
    <div class="video-placeholder__icon">▶</div>
    <p class="video-placeholder__text">Titre Vidéo</p>
  </div>
  <div class="video-card__info">
    <h3 class="video-card__title">Titre du Projet</h3>
    <p class="video-card__category text-accent">Catégorie</p>
    <p class="video-card__description">Description courte...</p>
  </div>
</article>
```

### Styles CSS

**Video Card:**
- Background: `var(--bg-secondary)` (#1A1A1A)
- Hover: élévation +8px avec ombre
- Transition fluide 200ms
- Cursor pointer

**Video Placeholder:**
- Dégradé subtil gris foncé → noir léger
- Effet radial au hover (lumière centrale)
- Icône play avec scale animation
- Texte uppercase espacé

**Boutons de Filtre:**
- État actif: `btn--primary` (blanc sur noir)
- État inactif: `btn--secondary` (transparent avec bordure)
- aria-pressed pour accessibilité
- Transition smooth entre états

## ⚙️ JavaScript - Logique de Filtrage

```javascript
// Sélection des éléments
const filterButtons = document.querySelectorAll('.filter-btn');
const allVideoCards = document.querySelectorAll('.video-card');

// Event listener sur chaque bouton
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    
    // Mise à jour des boutons (UI state)
    filterButtons.forEach(btn => {
      btn.classList.remove('btn--primary');
      btn.classList.add('btn--secondary');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.remove('btn--secondary');
    button.classList.add('btn--primary');
    button.setAttribute('aria-pressed', 'true');
    
    // Filtrage des vidéos avec animation fade-in
    allVideoCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'block';
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.transition = 'opacity 0.3s ease';
          card.style.opacity = '1';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

## ♿ Accessibilité

### Attributs ARIA
- `role="group"` sur le conteneur de filtres
- `aria-label="Filtrer les projets"` pour description
- `aria-pressed` sur chaque bouton (true/false)
- Navigation clavier complète supportée

### Contraste
- Texte blanc sur fond gris foncé (ratio > 7:1)
- Catégorie en beige accent pour hiérarchie visuelle
- Focus states visibles sur tous les éléments interactifs

### Responsive
- **Desktop**: Grid 2 colonnes
- **Tablette**: Grid 2 colonnes
- **Mobile**: Grid 1 colonne, pleine largeur

## 📝 Structure de la Page

```
projects.html
├── Hero Section (60vh)
│   └── Titre + Sous-titre
├── Filter Section
│   └── 3 Boutons (Tous / Événementiel / Branding)
├── Desktop View Section
│   └── Grid 2 colonnes (16:9 videos)
│       ├── 2 vidéos Événementiel
│       └── 2 vidéos Branding
├── Mobile View Section (alternate background)
│   └── Grid 2 colonnes (9:16 videos)
│       ├── 2 vidéos Événementiel
│       └── 2 vidéos Branding
├── CTA Section
│   └── "Démarrer un projet"
└── Footer
```

## 🎬 Ajouter de Nouvelles Vidéos

### Étape 1: Copier le Template

```html
<article class="video-card" data-category="evenementiel">
  <div class="video-placeholder">
    <div class="video-placeholder__icon">▶</div>
    <p class="video-placeholder__text">Votre Titre</p>
  </div>
  <div class="video-card__info">
    <h3 class="video-card__title">Titre du Projet</h3>
    <p class="video-card__category text-accent">Événementiel</p>
    <p class="video-card__description">Description du projet...</p>
  </div>
</article>
```

### Étape 2: Modifier les Attributs

**Pour format Desktop (16:9):**
- Utiliser `<div class="video-placeholder">`
- Placer dans la section `#desktop-videos`

**Pour format Mobile (9:16):**
- Utiliser `<div class="video-placeholder video-placeholder--mobile">`
- Placer dans la section `#mobile-videos`

**Pour la catégorie:**
- `data-category="evenementiel"` pour événements
- `data-category="branding"` pour branding video

### Étape 3: Remplacer par une Vraie Vidéo (Optionnel)

```html
<article class="video-card" data-category="evenementiel">
  <video controls poster="/assets/images/poster.jpg">
    <source src="/assets/videos/projet.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la lecture vidéo.
  </video>
  <div class="video-card__info">
    <!-- ... mêmes infos ... -->
  </div>
</article>
```

## 🔧 Personnalisation

### Changer les Couleurs

Dans `src/style.css`:

```css
.video-placeholder {
  background: linear-gradient(135deg, 
    var(--color-gray-dark) 0%, 
    var(--color-black-light) 100%);
}

.video-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  /* Augmenter l'ombre si désiré */
}
```

### Modifier l'Animation de Filtrage

```javascript
// Dans projects.html, ajuster la durée
setTimeout(() => {
  card.style.transition = 'opacity 0.5s ease'; // Plus lent
  card.style.opacity = '1';
}, 50);
```

### Ajouter Plus de Catégories

1. Ajouter un bouton de filtre:
```html
<button class="btn btn--secondary filter-btn" 
        data-filter="nouvelle-categorie" 
        aria-pressed="false">
  Nouvelle Catégorie
</button>
```

2. Ajouter des cartes avec:
```html
<article class="video-card" data-category="nouvelle-categorie">
  <!-- ... -->
</article>
```

## 📊 Exemples de Contenu

### Événementiel - Desktop
- Gala Corporate Annuel
- Conférence Tech Innovation
- Cérémonie de Remise de Prix
- Festival Culturel

### Branding - Desktop
- Film Institutionnel Entreprise
- Campagne Publicitaire Produit
- Documentaire de Marque
- Témoignages Clients

### Événementiel - Mobile
- Behind The Scenes Story
- Live Event Highlights
- Speaker Interviews
- Audience Reactions

### Branding - Mobile
- Product Teaser Reel
- Brand Story TikTok
- Quick Tips Series
- User Generated Content

## 🚀 Performance

### Optimisations Incluses
- ✅ Lazy loading naturel (vidéos non chargées initialement)
- ✅ Transitions CSS hardware-accelerated
- ✅ Pas de JavaScript lourd
- ✅ Grid layout performant

### Recommandations pour Vidéos Réelles
```html
<!-- Toujours ajouter -->
<video 
  loading="lazy"
  preload="none"
  poster="/assets/images/poster.jpg"
  playsinline>
  <source src="video.mp4" type="video/mp4">
</video>
```

## 🐛 Dépannage

### Les filtres ne fonctionnent pas ?
- Vérifier que `data-category` correspond exactement
- Ouvrir console (F12) pour erreurs JavaScript
- S'assurer que le script est après le HTML

### Vidéos mal alignées ?
- Desktop: vérifier aspect-ratio 16/9
- Mobile: vérifier classe `video-placeholder--mobile`
- Grid doit être dans la bonne section (#desktop ou #mobile)

### Animations trop lentes ?
- Réduire transition dans CSS: `var(--transition-fast)` = 150ms
- Ajuster setTimeout dans JS (actuellement 50ms)

---

**Page Projects prête à l'emploi !** 🎉

Le système de filtrage est entièrement fonctionnel et responsive. Ajoutez vos vraies vidéos quand vous êtes prêt !
