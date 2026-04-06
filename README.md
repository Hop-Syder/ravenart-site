# RavenArt — Agence Audiovisuelle Premium

Site vitrine multi-page pour RavenArt, agence audiovisuelle basée au Bénin, spécialisée dans la production cinématographique noir & blanc.

## 🎨 Identité Visuelle

### Palette Noir & Blanc
- **Noir profond**: `#000000`
- **Blanc pur**: `#FFFFFF`
- **Gris foncé**: `#1A1A1A`
- **Gris moyen**: `#666666`
- **Gris clair**: `#CFCFCF`
- **Beige accent**: `#E8DCCB`

### Typographie
- **Titres**: Archivo (Bold, 900)
- **Corps**: Space Grotesk (Regular, 300-500)

### Style
- Cinéma luxe minimaliste
- Contrastes marqués
- Espaces généreux (luxury breathing room)
- Animations fluides et cinématiques

## 🚀 Fonctionnalités

### Pages
1. **Accueil** (`/`)
   - Hero avec vidéo immersive
   - Aperçu des services
   - Portfolio récent
   - Navigation fluide

2. **Services** (`/services.html`)
   - 6 expertises détaillées
   - Processus de travail en 4 étapes
   - Call-to-action stratégique

3. **À Propos** (`/about.html`)
   - Histoire et vision
   - Valeurs fondamentales
   - Philosophie créative
   - Approche méthodologique

4. **Contact** (`/contact.html`)
   - Formulaire complet
   - Informations de contact
   - FAQ interactive
   - Validation de formulaire

### Responsive Design
- **Mobile**: 0-767px (mono colonne, boutons full-width)
- **Tablette**: 768-1023px (2 colonnes)
- **Desktop**: 1024px+ (3-4 colonnes)
- **Large screens**: 1440px+ (espaces cinématographiques)

### Accessibilité
- ✅ Contraste WCAG AA minimum
- ✅ Navigation clavier complète
- ✅ ARIA labels sur tous les éléments interactifs
- ✅ Focus states visibles
- ✅ prefers-reduced-motion respecté
- ✅ Textes lisibles (min 14px)
- ✅ Touch targets ≥ 48px

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Build pour production
npm build

# Prévisualiser le build
npm run preview
```

## 🛠️ Technologies

- **Vite** 8.x - Build tool ultra-rapide
- **GSAP** 3.x - Animations professionnelles (prêt à l'emploi)
- **Lenis** 1.x - Smooth scrolling premium (prêt à l'emploi)
- **Google Fonts** - Archivo + Space Grotesk
- **Vanilla JS** - Léger et performant

## 📁 Structure du Projet

```
ravenart-site/
├── index.html              # Page d'accueil
├── services.html           # Page Services
├── about.html              # Page À Propos
├── contact.html            # Page Contact
├── vite.config.js          # Configuration Vite multi-page
├── package.json
├── src/
│   ├── main.js            # JavaScript principal (navigation mobile)
│   └── style.css          # Design system complet (CSS variables)
└── public/
    └── favicon.svg        # Favicon noir & blanc
```

## 🎯 Points Forts UX/UI

### Design System
- Variables CSS centralisées pour cohérence totale
- Typography scale responsive avec `clamp()`
- Spacing system luxueux (jusqu'à 12rem)
- Transitions cinématiques personnalisées

### Composants Réutilisables
- `.btn` — 3 variantes (primary, secondary, beige)
- `.card` — Cartes avec hover effects
- `.navbar` — Navigation fixe avec backdrop blur
- `.hero` — Sections hero immersives
- `.grid` — Layouts responsive (2/3/4 colonnes)
- `.footer` — Footer multi-colonnes

### Interactions
- Hover states inversés sur boutons (blanc ↔ noir)
- Cards avec élévation au survol
- Menu mobile slide-in smooth
- Navigation underline animation
- Form focus states premium

## 🌐 URLs de Développement

- **Local**: http://localhost:5174/
- **Accueil**: http://localhost:5174/
- **Services**: http://localhost:5174/services.html
- **À Propos**: http://localhost:5174/about.html
- **Contact**: http://localhost:5174/contact.html

## 📱 Testing Responsive

Testez sur les breakpoints suivants:
```css
/* Mobile */
@media (max-width: 480px) { ... }
@media (max-width: 767px) { ... }

/* Tablet */
@media (max-width: 1023px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Screens */
@media (min-width: 1440px) { ... }
```

## ♿ Checklist Accessibilité

Avant déploiement, vérifier:
- [ ] Tous les textes ont un contraste ≥ 4.5:1
- [ ] Navigation clavier fonctionnelle
- [ ] Focus visible sur tous les éléments interactifs
- [ ] ARIA labels présents
- [ ] Formulaire accessible avec labels
- [ ] Images avec alt text (quand ajoutées)
- [ ] prefers-reduced-motion respecté

## 🎬 Prochaines Étapes (Optionnel)

### Contenu Média
1. Ajouter vidéo hero B&W (`/assets/video/hero-bw.mp4`)
2. Intégrer photos portfolio dans `/assets/images/`
3. Optimiser tous les assets (compression, lazy loading)

### Animations Avancées
```javascript
// Exemple: Animer avec GSAP
import gsap from 'gsap';

gsap.from('.hero__title', {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: 'power4.out'
});
```

### Backend Formulaire
- Connecter formulaire à service (Formspree, Netlify Forms, ou backend custom)
- Ajouter validation côté serveur
- Notifications email automatiques

### SEO
- Meta descriptions par page
- Open Graph tags
- Schema.org markup
- Sitemap XML

## 📞 Contact

**RavenArt**  
Cotonou, Bénin  
📧 contact@ravenart.bj  
📱 +229 XX XX XX XX

---

© 2026 RavenArt. Tous droits réservés.  
Excellence cinématographique noir & blanc.
