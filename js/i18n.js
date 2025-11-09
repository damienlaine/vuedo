/**
 * Vue&Do Website - Internationalization (i18n)
 * Bilingual support for English and French
 */

const translations = {
  en: {
    // Navigation
    'nav-features': 'Features',
    'nav-benefits': 'Benefits',
    'nav-evidence': 'The Science',
    'nav-waitlist': 'Join Waitlist',
    'skip-to-content': 'Skip to main content',

    // Hero Section
    'hero-title': 'Turn Everyday Routines into Epic Comic Adventures',
    'hero-subtitle': 'AI-powered comic strips that make daily tasks actually fun. Your child becomes the superhero of their own story, completing quests from brushing teeth to bedtime.',
    'cta-join-waitlist': 'Join the Waitlist',
    'cta-learn-more': 'See the Magic',
    'badge-evidence': 'Backed by Science',
    'badge-privacy': 'Privacy-First',
    'badge-inclusive': 'Designed for Every Kid',

    // Problem/Solution Section
    'problem-title': 'Make Mornings Actually Fun (Yes, Really!)',
    'problem-description': 'Every family knows the struggle: transitions are hard, routines feel boring, and kids need constant reminders. What if daily tasks were as exciting as their favorite comic books? That is exactly what we have built.',
    'solution-predictable-title': 'Visual & Exciting',
    'solution-predictable-text': 'See what is next in vibrant comic panels. No more "what do I do now?" - just clear, colorful step-by-step adventures that kids actually want to follow.',
    'solution-engaging-title': 'AI-Personalized Magic',
    'solution-engaging-text': 'This is not generic cartoons - our AI creates custom comic strips starring YOUR child. Choose from manga to superhero styles and watch their face light up seeing themselves as the main character.',
    'solution-independent-title': 'Independence, Unlocked',
    'solution-independent-text': 'Kids love doing things themselves when it is fun. Visual quests with celebration rewards turn "I can not" into "I did it!" moments that build real confidence.',

    // Features Section
    'features-title': 'Next-Level Routine Technology',
    'features-description': 'We have combined cutting-edge AI, game design principles, and insights from families to create something totally new.',
    'feature-ai-title': 'AI-Powered Comic Generation',
    'feature-ai-description': 'Upload a photo, choose your style (manga, superhero, cartoon, or classic BD), and boom - personalized comic strips featuring your child as the star. Every routine becomes a visual story they will love.',
    'feature-kiosk-title': 'Immersive Kiosk Mode',
    'feature-kiosk-description': 'Fullscreen, distraction-free magic. Huge, satisfying buttons. Visual feedback that pops. Simple gestures. Your child gets lost in their routine adventure, not their device.',
    'feature-visual-title': 'Gamified Rewards & Timers',
    'feature-visual-description': 'Visual timers make time visible (no more "5 more minutes!"). Each completed step triggers celebratory animations - confetti explosions, sparkle showers, victory stars. Positive reinforcement that actually works.',
    'feature-offline-title': 'Offline-First PWA',
    'feature-offline-description': 'Once created, routines work perfectly offline. No Wi-Fi? No problem. Airplane mode? Still magical. Consistent access anywhere, anytime, without internet anxiety.',
    'feature-privacy-title': 'Zero-Photo Storage',
    'feature-privacy-description': 'We delete uploaded photos immediately after generating avatars. Only AI-created characters stay on our servers. Full GDPR compliance, transparent data practices, total parental control. Privacy is not optional.',
    'feature-accessible-title': 'Inclusive by Design',
    'feature-accessible-description': 'WCAG 2.1 AA compliant with high contrast, XXL touch targets, error-tolerant interactions, and zero audio distractions. Works beautifully for neurotypical kids AND those with ADHD, autism, dyslexia - everyone wins.',

    // Evidence Section
    'evidence-title': 'Backed by Science, Powered by Imagination',
    'evidence-description': 'This is not just a fun app - it is built on 25+ years of research showing visual supports work. We just made them way more exciting.',
    'stat-research-value': '25+',
    'stat-research-label': 'Years of Research',
    'stat-studies-value': '15+',
    'stat-studies-label': 'Peer-Reviewed Studies',
    'stat-frameworks-value': '3',
    'stat-frameworks-label': 'Proven Methodologies',
    'evidence-research-subtitle': 'The Science Behind the Fun',
    'evidence-list-1': 'Visual schedules dramatically improve task completion and reduce challenging behaviors (SAGE, 2024) - we made them irresistibly engaging',
    'evidence-list-2': 'Digital activity schedules increase independence in daily routines (PubMed, 2025) - our AI personalization takes it to the next level',
    'evidence-list-3': 'Visual supports recommended by health authorities (HAS) and TEACCH methodology - especially powerful for kids with ADHD and autism',
    'evidence-list-4': 'Personalized visuals boost engagement and on-task behavior across all learning environments - and they work for ALL kids, not just some',
    'evidence-frameworks-subtitle': 'Built on Proven Foundations',
    'framework-teacch': 'TEACCH',
    'framework-teacch-desc': 'Structured visual teaching',
    'framework-has': 'HAS Guidelines',
    'framework-has-desc': 'Evidence-based standards',
    'framework-aba': 'ABA Principles',
    'framework-aba-desc': 'Positive reinforcement',

    // Benefits Section
    'benefits-title': 'Why Families Love Vue&Do',
    'benefit-children-title': 'Kids',
    'benefit-children-1': 'Routines become adventures, not chores',
    'benefit-children-2': 'Build independence with visual quests',
    'benefit-children-3': 'See themselves as capable superheroes',
    'benefit-children-4': 'Celebrate wins with epic animations',
    'benefit-parents-title': 'Parents & Caregivers',
    'benefit-parents-1': 'Mornings and bedtimes without the battles',
    'benefit-parents-2': 'Less nagging, more cooperation',
    'benefit-parents-3': 'Create custom routines in minutes',
    'benefit-parents-4': 'Everyone on the same page, every time',
    'benefit-professionals-title': 'Therapists & Educators',
    'benefit-professionals-1': 'Evidence-based tool that kids love',
    'benefit-professionals-2': 'Consistent support across environments',
    'benefit-professionals-3': 'Engage families in interventions',
    'benefit-professionals-4': 'Track progress with visual data',
    'benefit-household-title': 'The Whole Family',
    'benefit-household-1': 'Peaceful mornings become the norm',
    'benefit-household-2': 'Time for what matters most',
    'benefit-household-3': 'Replace conflicts with celebrations',
    'benefit-household-4': 'Make every small win visible',

    // How It Works
    'how-it-works-title': 'From Setup to Superhero in Minutes',
    'how-it-works-description': 'Creating personalized routine adventures is ridiculously easy.',
    'step1-title': 'Create Your Family Universe',
    'step1-description': 'Add family members and optionally upload photos. Our AI generates comic-style avatars in your chosen style - manga, superhero, cartoon, or classic BD. Each character is uniquely yours.',
    'step2-title': 'Build Epic Routine Quests',
    'step2-description': 'Choose templates or go custom. Drag-and-drop routine steps, add icons and timers. Each step becomes a comic panel in your child\'s daily adventure strip.',
    'step3-title': 'Launch Kiosk Mode',
    'step3-description': 'Your child enters their fullscreen adventure. Giant "Doing" and "Done" buttons. Confetti explosions for every win. Simple, satisfying, and seriously fun.',
    'step4-title': 'Celebrate & Evolve',
    'step4-description': 'Watch independence grow with every completed quest. Adjust routines as skills develop. Make every small victory feel like defeating the final boss.',

    // Waitlist Section
    'waitlist-title': 'Join the Beta Adventure',
    'waitlist-description': 'Be among the first families to experience Vue&Do. Get early access, special pricing, and help us build the future of fun routines.',
    'waitlist-benefit-1': 'Early access to beta (launching soon!)',
    'waitlist-benefit-2': 'Special pricing for founding families',
    'waitlist-benefit-3': 'Shape features with direct feedback',
    'waitlist-benefit-4': 'VIP support from our team',
    'form-name-label': 'Name',
    'form-name-placeholder': 'Your name',
    'form-email-label': 'Email',
    'form-email-placeholder': 'your.email@example.com',
    'form-role-label': 'I am a...',
    'form-role-select': 'Select your role',
    'form-role-parent': 'Parent',
    'form-role-caregiver': 'Caregiver',
    'form-role-professional': 'Professional (therapist, educator)',
    'form-role-other': 'Other',
    'form-consent': 'I agree to receive email updates about Vue&Do',
    'form-submit': 'Join Waitlist',

    // Footer
    'footer-description': 'Turning daily routines into epic comic adventures with AI-powered personalization.',
    'footer-product': 'Product',
    'footer-features': 'Features',
    'footer-benefits': 'Benefits',
    'footer-research': 'The Science',
    'footer-how': 'How It Works',
    'footer-legal': 'Legal',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-accessibility': 'Accessibility Statement',
    'footer-gdpr': 'GDPR Compliance',
    'footer-contact': 'Contact',
    'footer-waitlist': 'Join Waitlist',
    'footer-copyright': '2025 Vue&Do. All rights reserved.',
    'footer-tagline': 'Making routines fun for every family'
  },

  fr: {
    // Navigation
    'nav-features': 'Fonctionnalités',
    'nav-benefits': 'Avantages',
    'nav-evidence': 'La Science',
    'nav-waitlist': 'Liste d\'attente',
    'skip-to-content': 'Aller au contenu principal',

    // Hero Section
    'hero-title': 'Transformez les routines en aventures BD épiques',
    'hero-subtitle': 'Des bandes dessinées personnalisées par IA qui rendent les tâches quotidiennes vraiment fun. Votre enfant devient le super-héros de sa propre histoire, du brossage des dents au coucher.',
    'cta-join-waitlist': 'Rejoindre la liste d\'attente',
    'cta-learn-more': 'Voir la magie',
    'badge-evidence': 'Basé sur la science',
    'badge-privacy': 'Vie privée d\'abord',
    'badge-inclusive': 'Pour tous les enfants',

    // Problem/Solution Section
    'problem-title': 'Rendez les matins vraiment fun (oui, vraiment !)',
    'problem-description': 'Toutes les familles connaissent le défi : les transitions sont difficiles, les routines sont ennuyeuses, et les enfants ont besoin de rappels constants. Et si les tâches quotidiennes étaient aussi excitantes que leurs BD préférées ? C\'est exactement ce qu\'on a créé.',
    'solution-predictable-title': 'Visuel & Excitant',
    'solution-predictable-text': 'Voir ce qui vient ensuite en vignettes BD colorées. Fini le "c\'est quoi après ?" - juste des aventures étape par étape claires et colorées que les enfants veulent suivre.',
    'solution-engaging-title': 'Magie personnalisée par IA',
    'solution-engaging-text': 'Ce ne sont pas des dessins génériques - notre IA crée des bandes dessinées sur mesure avec VOTRE enfant en vedette. Choisissez du manga au style super-héros et regardez son visage s\'illuminer en se voyant personnage principal.',
    'solution-independent-title': 'Autonomie débloquée',
    'solution-independent-text': 'Les enfants adorent faire les choses eux-mêmes quand c\'est amusant. Des quêtes visuelles avec des récompenses festives transforment "je peux pas" en moments "j\'ai réussi !" qui bâtissent la vraie confiance.',

    // Features Section
    'features-title': 'Technologie de routines nouvelle génération',
    'features-description': 'On a combiné IA de pointe, principes de game design et insights des familles pour créer quelque chose de totalement nouveau.',
    'feature-ai-title': 'Génération BD par IA',
    'feature-ai-description': 'Uploadez une photo, choisissez votre style (manga, super-héros, cartoon ou BD classique), et boom - des bandes dessinées personnalisées avec votre enfant en vedette. Chaque routine devient une histoire visuelle qu\'ils vont adorer.',
    'feature-kiosk-title': 'Mode kiosque immersif',
    'feature-kiosk-description': 'Magie plein écran sans distraction. Boutons énormes et satisfaisants. Feedback visuel qui claque. Gestes simples. Votre enfant se perd dans son aventure de routine, pas dans son appareil.',
    'feature-visual-title': 'Récompenses & minuteurs gamifiés',
    'feature-visual-description': 'Les minuteurs visuels rendent le temps visible (fini "encore 5 minutes !"). Chaque étape complétée déclenche des animations festives - explosions de confettis, pluies d\'étincelles, étoiles de victoire. Renforcement positif qui marche vraiment.',
    'feature-offline-title': 'PWA hors ligne',
    'feature-offline-description': 'Une fois créées, les routines marchent parfaitement hors ligne. Pas de Wi-Fi ? Pas de problème. Mode avion ? Toujours magique. Accès constant n\'importe où, n\'importe quand, sans stress Internet.',
    'feature-privacy-title': 'Zéro stockage photos',
    'feature-privacy-description': 'On supprime les photos uploadées immédiatement après génération des avatars. Seuls les personnages créés par IA restent sur nos serveurs. Conformité RGPD totale, pratiques transparentes, contrôle parental total. La vie privée n\'est pas optionnelle.',
    'feature-accessible-title': 'Inclusif par design',
    'feature-accessible-description': 'Conforme WCAG 2.1 AA avec contraste élevé, cibles tactiles XXL, interactions tolérantes aux erreurs, et zéro distraction audio. Fonctionne à merveille pour les enfants neurotypiques ET ceux avec TDAH, autisme, dyslexie - tout le monde gagne.',

    // Evidence Section
    'evidence-title': 'Basé sur la science, propulsé par l\'imagination',
    'evidence-description': 'Ce n\'est pas juste une appli fun - c\'est construit sur 25+ ans de recherche montrant que les supports visuels fonctionnent. On les a juste rendus beaucoup plus excitants.',
    'stat-research-value': '25+',
    'stat-research-label': 'Années de recherche',
    'stat-studies-value': '15+',
    'stat-studies-label': 'Études évaluées par les pairs',
    'stat-frameworks-value': '3',
    'stat-frameworks-label': 'Méthodologies éprouvées',
    'evidence-research-subtitle': 'La science derrière le fun',
    'evidence-list-1': 'Les emplois du temps visuels améliorent spectaculairement l\'achèvement des tâches et réduisent les comportements difficiles (SAGE, 2024) - on les a rendus irrésistiblement engageants',
    'evidence-list-2': 'Les calendriers d\'activités numériques augmentent l\'indépendance dans les routines quotidiennes (PubMed, 2025) - notre personnalisation IA les propulse au niveau supérieur',
    'evidence-list-3': 'Supports visuels recommandés par les autorités de santé (HAS) et la méthodologie TEACCH - particulièrement puissants pour les enfants avec TDAH et autisme',
    'evidence-list-4': 'Les visuels personnalisés boostent l\'engagement et les comportements axés sur la tâche dans tous les environnements d\'apprentissage - et ils marchent pour TOUS les enfants, pas juste certains',
    'evidence-frameworks-subtitle': 'Construit sur des fondations éprouvées',
    'framework-teacch': 'TEACCH',
    'framework-teacch-desc': 'Enseignement visuel structuré',
    'framework-has': 'Recommandations HAS',
    'framework-has-desc': 'Standards basés sur les preuves',
    'framework-aba': 'Principes ABA',
    'framework-aba-desc': 'Renforcement positif',

    // Benefits Section
    'benefits-title': 'Pourquoi les familles adorent Vue&Do',
    'benefit-children-title': 'Enfants',
    'benefit-children-1': 'Les routines deviennent des aventures, pas des corvées',
    'benefit-children-2': 'Construire l\'autonomie avec des quêtes visuelles',
    'benefit-children-3': 'Se voir comme des super-héros capables',
    'benefit-children-4': 'Célébrer les victoires avec des animations épiques',
    'benefit-parents-title': 'Parents & Aidants',
    'benefit-parents-1': 'Matins et couchers sans les batailles',
    'benefit-parents-2': 'Moins de rappels, plus de coopération',
    'benefit-parents-3': 'Créer des routines sur mesure en quelques minutes',
    'benefit-parents-4': 'Tout le monde sur la même page, à chaque fois',
    'benefit-professionals-title': 'Thérapeutes & Éducateurs',
    'benefit-professionals-1': 'Outil basé sur les preuves que les enfants adorent',
    'benefit-professionals-2': 'Support cohérent dans tous les environnements',
    'benefit-professionals-3': 'Engager les familles dans les interventions',
    'benefit-professionals-4': 'Suivre les progrès avec données visuelles',
    'benefit-household-title': 'Toute la famille',
    'benefit-household-1': 'Des matins paisibles deviennent la norme',
    'benefit-household-2': 'Du temps pour ce qui compte vraiment',
    'benefit-household-3': 'Remplacer les conflits par des célébrations',
    'benefit-household-4': 'Rendre chaque petite victoire visible',

    // How It Works
    'how-it-works-title': 'De la config au super-héros en quelques minutes',
    'how-it-works-description': 'Créer des aventures de routines personnalisées est ridiculement facile.',
    'step1-title': 'Créez votre univers familial',
    'step1-description': 'Ajoutez les membres de la famille et uploadez optionnellement des photos. Notre IA génère des avatars style BD dans le style de votre choix - manga, super-héros, cartoon ou BD classique. Chaque personnage est unique.',
    'step2-title': 'Construisez des quêtes de routine épiques',
    'step2-description': 'Choisissez des templates ou créez du sur-mesure. Glissez-déposez les étapes, ajoutez icônes et minuteurs. Chaque étape devient une vignette dans la bande quotidienne d\'aventures de votre enfant.',
    'step3-title': 'Lancez le mode kiosque',
    'step3-description': 'Votre enfant entre dans son aventure plein écran. Boutons géants "En cours" et "Terminé". Explosions de confettis pour chaque victoire. Simple, satisfaisant, et sérieusement fun.',
    'step4-title': 'Célébrez & évoluez',
    'step4-description': 'Regardez l\'autonomie grandir avec chaque quête complétée. Ajustez les routines au fur et à mesure que les compétences se développent. Rendez chaque petite victoire aussi satisfaisante que battre le boss final.',

    // Waitlist Section
    'waitlist-title': 'Rejoignez l\'aventure bêta',
    'waitlist-description': 'Soyez parmi les premières familles à découvrir Vue&Do. Accès anticipé, tarifs spéciaux, et aidez-nous à construire l\'avenir des routines fun.',
    'waitlist-benefit-1': 'Accès anticipé à la bêta (lancement bientôt !)',
    'waitlist-benefit-2': 'Tarifs spéciaux pour les familles fondatrices',
    'waitlist-benefit-3': 'Façonner les fonctionnalités avec vos retours directs',
    'waitlist-benefit-4': 'Support VIP de notre équipe',
    'form-name-label': 'Nom',
    'form-name-placeholder': 'Votre nom',
    'form-email-label': 'Email',
    'form-email-placeholder': 'votre.email@exemple.com',
    'form-role-label': 'Je suis un/une...',
    'form-role-select': 'Sélectionnez votre rôle',
    'form-role-parent': 'Parent',
    'form-role-caregiver': 'Aidant',
    'form-role-professional': 'Professionnel (thérapeute, éducateur)',
    'form-role-other': 'Autre',
    'form-consent': 'J\'accepte de recevoir des mises à jour par email concernant Vue&Do',
    'form-submit': 'Rejoindre la liste d\'attente',

    // Footer
    'footer-description': 'Transformer les routines quotidiennes en aventures BD épiques avec personnalisation par IA.',
    'footer-product': 'Produit',
    'footer-features': 'Fonctionnalités',
    'footer-benefits': 'Avantages',
    'footer-research': 'La Science',
    'footer-how': 'Comment ça marche',
    'footer-legal': 'Légal',
    'footer-privacy': 'Politique de confidentialité',
    'footer-terms': 'Conditions d\'utilisation',
    'footer-accessibility': 'Déclaration d\'accessibilité',
    'footer-gdpr': 'Conformité RGPD',
    'footer-contact': 'Contact',
    'footer-waitlist': 'Liste d\'attente',
    'footer-copyright': '2025 Vue&Do. Tous droits réservés.',
    'footer-tagline': 'Rendre les routines fun pour chaque famille'
  }
};

// Detect browser language
function getBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  // Check if browser language is French
  if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
    return 'fr';
  }
  return 'en'; // Default to English for all other languages
}

// Get current language from localStorage, URL parameter, or browser language
function getInitialLanguage() {
  // Check URL parameter first (for /fr/ redirects)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'fr' || urlLang === 'en') {
    return urlLang;
  }

  // Check localStorage
  const storedLang = localStorage.getItem('vuedo-lang');
  if (storedLang === 'fr' || storedLang === 'en') {
    return storedLang;
  }

  // Fallback to browser language
  return getBrowserLanguage();
}

let currentLang = getInitialLanguage();

// Set initial language
document.documentElement.setAttribute('data-lang', currentLang);
document.documentElement.setAttribute('lang', currentLang);

// Clean up URL if lang parameter exists (safely)
try {
  if (window.location.search.includes('lang=') && window.location.protocol !== 'file:') {
    const url = new URL(window.location);
    url.searchParams.delete('lang');
    window.history.replaceState({}, '', url);
  }
} catch (e) {
  // Ignore URL cleanup errors (e.g., file:// protocol)
  console.log('URL cleanup skipped:', e.message);
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
  console.log('Applying translations for language:', lang);

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  console.log('Found', elements.length, 'elements to translate');

  let translated = 0;
  let skipped = 0;

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');

    if (translations[lang] && translations[lang][key]) {
      try {
        // Handle placeholder attributes
        if (element.hasAttribute('data-i18n-placeholder')) {
          element.setAttribute('placeholder', translations[lang][key]);
        }
        // Handle text content for most elements
        else if (element.tagName !== 'SELECT') {
          element.textContent = translations[lang][key];
        }
        translated++;
      } catch (error) {
        console.error('Error translating element with key:', key, error);
        skipped++;
      }
    } else {
      // Keep existing content if translation not found
      if (!translations[lang][key]) {
        console.warn('Translation not found for key:', key, 'in language:', lang);
      }
      skipped++;
    }
  });

  console.log('Translated:', translated, 'Skipped:', skipped);

  // Update select options separately
  const selectOptions = document.querySelectorAll('option[data-i18n]');
  selectOptions.forEach(option => {
    const key = option.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });

  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  console.log('Translation complete');
}

// Language switcher functionality
function switchLanguage(lang) {
  if (lang !== currentLang && (lang === 'en' || lang === 'fr')) {
    currentLang = lang;
    localStorage.setItem('vuedo-lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    applyTranslations(lang);

    // Update meta tags
    document.querySelector('meta[property="og:locale"]').setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');
  }
}

// Function to initialize translations and event listeners
function initializeI18n() {
  applyTranslations(currentLang);

  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });
}

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
  // DOM is already loaded, initialize immediately
  initializeI18n();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { switchLanguage, translations };
}
