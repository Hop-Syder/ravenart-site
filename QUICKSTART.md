# 🚀 Guide de Démarrage Rapide — RavenArt

## ✅ Ce qui est déjà fait

Votre site vitrine RavenArt est **100% fonctionnel** et prêt à l'emploi !

### Structure Complète
- ✅ 4 pages HTML (Accueil, Services, À Propos, Contact)
- ✅ Design system noir & blanc complet
- ✅ Navigation responsive avec menu mobile
- ✅ Formulaire de contact fonctionnel
- ✅ Footer cohérent sur toutes les pages
- ✅ Favicon personnalisé
- ✅ Google Fonts intégrées (Archivo + Space Grotesk)
- ✅ Responsive design (mobile, tablette, desktop, 4K)
- ✅ Accessibilité WCAG AA

## 🎯 Comment visualiser le site

Le serveur de développement est **déjà en cours d'exécution** !

1. **Cliquez sur le bouton "Preview"** dans le panneau d'outils
2. Ou ouvrez votre navigateur sur: http://localhost:5174/

## 📱 Pages Disponibles

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero + services + portfolio |
| Services | `/services.html` | 6 expertises détaillées |
| À Propos | `/about.html` | Histoire + valeurs + philosophie |
| Contact | `/contact.html` | Formulaire + FAQ |

## 🎨 Personnalisation Rapide

### Modifier les Couleurs
Ouvrez `src/style.css`, lignes 7-18:
```css
--color-black-deep: #000000;
--color-white-pure: #FFFFFF;
--color-beige-soft: #E8DCCB; /* Accent luxe */
```

### Changer le Texte
Chaque page HTML est autonome. Modifiez directement le contenu entre les balises.

### Ajouter des Images
1. Placez vos images dans `/public/assets/images/`
2. Référencez-les: `<img src="/assets/images/photo.jpg" alt="Description">`

### Ajouter une Vidéo Hero
1. Placez la vidéo: `/public/assets/video/hero-bw.mp4`
2. Elle s'affichera automatiquement sur la page d'accueil

## 🔧 Commandes Utiles

```bash
# Déjà en cours d'exécution !
npm run dev

# Arrêter le serveur (Ctrl+C dans le terminal)
# Puis redémarrer:
npm run dev

# Build pour production
npm run build

# Prévisualiser le build final
npm run preview
```

## 📸 Prochaines Étapes Recommandées

### 1. Ajouter du Contenu Visuel (Optionnel mais recommandé)
```
/public/
└── assets/
    ├── images/
    │   ├── hero-bg.jpg        # Image de fond hero
    │   ├── portfolio-1.jpg    # Projet 1
    │   ├── portfolio-2.jpg    # Projet 2
    │   └── ...
    └── video/
        └── hero-bw.mp4        # Vidéo hero B&W
```

### 2. Configurer le Formulaire de Contact
Le formulaire fonctionne côté front-end. Pour recevoir les emails:

**Option A: Formspree (Gratuit, 5 min)**
```html
<!-- Dans contact.html, remplacez la balise form -->
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

**Option B: Netlify Forms (Si déployé sur Netlify)**
```html
<form name="contact" netlify>
```

### 3. Déploiement (Quand vous êtes prêt)

**Netlify (Recommandé - Gratuit)**
```bash
# Build
npm run build

# Glissez-déposez le dossier dist/ sur netlify.com
```

**Vercel**
```bash
npm install -g vercel
vercel
```

## 🎬 Améliorations Futures Possibles

### Animations Avancées avec GSAP
Déjà installé ! Exemple dans `src/main.js`:
```javascript
import gsap from 'gsap';

// Animation au scroll
gsap.from('.card', {
  scrollTrigger: '.card',
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
```

### Smooth Scrolling avec Lenis
Déjà installé ! Activez-le dans `src/main.js`:
```javascript
import Lenis from 'lenis';

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

### SEO Optimization
Ajoutez dans chaque page `<head>`:
```html
<meta name="description" content="Description unique par page">
<meta property="og:title" content="Titre pour réseaux sociaux">
<meta property="og:image" content="/assets/images/og-image.jpg">
```

## 🐛 Résolution de Problèmes

### Le site ne s'affiche pas ?
1. Vérifiez que le serveur tourne: `npm run dev`
2. Ouvrez la console du navigateur (F12) pour voir les erreurs

### Styles non appliqués ?
- Vérifiez que `src/style.css` est bien lié dans chaque page HTML
- Forcez le refresh: Ctrl+Shift+R (Linux/Windows) ou Cmd+Shift+R (Mac)

### Menu mobile ne fonctionne pas ?
- Vérifiez que `src/main.js` est chargé en dernier dans le `<body>`
- Testez la console pour les erreurs JavaScript

## 📞 Besoin d'Aide ?

Consultez:
- [README.md](README.md) — Documentation complète
- [src/style.css](src/style.css) — Design system commenté
- Chaque fichier HTML est structuré et commenté

---

**Profitez de votre site RavenArt !** 🎉

Le design noir & blanc premium est prêt à impressionner vos clients.
