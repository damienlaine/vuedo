/**
 * Vue&Do Website - Internationalization (i18n)
 * Bilingual support for English and French
 */

const translations = {
  en: {
    // Navigation
    'nav-features': 'Features',
    'nav-benefits': 'Benefits',
    'nav-evidence': 'Evidence-Based',
    'nav-waitlist': 'Join Waitlist',
    'skip-to-content': 'Skip to main content',

    // Hero Section
    'hero-title': 'Transform Daily Routines into Personalized Visual Stories',
    'hero-subtitle': 'Evidence-based visual schedules designed for neuro-diverse children. Turn household tasks into engaging comic strips with AI-powered personalization.',
    'cta-join-waitlist': 'Join the Waitlist',
    'cta-learn-more': 'Learn More',
    'badge-evidence': 'Evidence-Based Approach',
    'badge-privacy': 'Privacy-First Design',
    'badge-inclusive': 'Neuro-Inclusive',

    // Problem/Solution Section
    'problem-title': 'Daily Routines Don\'t Have to Be Stressful',
    'problem-description': 'For many neuro-diverse children, transitions and daily tasks can be overwhelming. Visual supports have been proven to reduce anxiety, improve independence, and create predictable, comfortable routines.',
    'solution-predictable-title': 'Predictable & Visual',
    'solution-predictable-text': 'Clear visual schedules help children know what to expect, reducing anxiety around transitions and new activities.',
    'solution-engaging-title': 'Engaging & Personalized',
    'solution-engaging-text': 'AI-generated comic strips featuring your child\'s avatar make routines fun and relatable, increasing motivation and participation.',
    'solution-independent-title': 'Builds Independence',
    'solution-independent-text': 'Step-by-step visual guidance empowers children to complete tasks independently, building confidence and life skills.',

    // Features Section
    'features-title': 'Designed for Neuro-Diverse Needs',
    'features-description': 'Every feature is carefully crafted with input from research, families, and professionals working with neuro-diverse children.',
    'feature-ai-title': 'AI-Powered Personalization',
    'feature-ai-description': 'Transform everyday activities into custom comic strips featuring your child\'s avatar. Choose your preferred visual style and watch routines come to life in a format your child connects with.',
    'feature-kiosk-title': 'Focused Kiosk Mode',
    'feature-kiosk-description': 'Fullscreen, distraction-free interface designed for children. Large buttons, clear visual feedback, and simple gestures make interaction intuitive and stress-free.',
    'feature-visual-title': 'Visual Timers & Rewards',
    'feature-visual-description': 'Clear visual timers help children understand time passing. Celebrate each completed step with engaging visual rewards like confetti and sparkles to reinforce positive behavior.',
    'feature-offline-title': 'Works Offline',
    'feature-offline-description': 'Once routines are created, they work perfectly offline. No internet needed for daily use, ensuring consistent access without connectivity concerns.',
    'feature-privacy-title': 'Privacy-First Design',
    'feature-privacy-description': 'Your child\'s photos are never stored. We only keep the AI-generated avatars and style preferences. Full GDPR compliance with transparent data practices and parental controls.',
    'feature-accessible-title': 'Neuro-Inclusive Interface',
    'feature-accessible-description': 'Designed following WCAG 2.1 AA standards with high contrast, clear typography, error-tolerant interactions, and no audio elements that could be overwhelming.',

    // Evidence Section
    'evidence-title': 'Backed by Research & Expertise',
    'evidence-description': 'Vue&Do is built on decades of evidence-based practices in visual supports and activity schedules for neuro-diverse learners.',
    'stat-research-value': '25+',
    'stat-research-label': 'Years of Research',
    'stat-studies-value': '15+',
    'stat-studies-label': 'Peer-Reviewed Studies',
    'stat-frameworks-value': '3',
    'stat-frameworks-label': 'Evidence-Based Frameworks',
    'evidence-research-subtitle': 'What the Research Shows',
    'evidence-list-1': 'Visual schedules significantly improve task completion and reduce problem behaviors in children with autism spectrum disorder (SAGE, 2024)',
    'evidence-list-2': 'Digital activity schedules show promising results for increasing independence in daily living activities (PubMed, 2025)',
    'evidence-list-3': 'Visual supports recommended by HAS (Haute Autorité de Santé) and TEACCH methodology for autism support',
    'evidence-list-4': 'Personalized visual supports increase engagement and on-task behavior in educational and home settings',
    'evidence-frameworks-subtitle': 'Built on Proven Frameworks',
    'framework-teacch': 'TEACCH',
    'framework-teacch-desc': 'Structured teaching approach',
    'framework-has': 'HAS Guidelines',
    'framework-has-desc': 'French health authority standards',
    'framework-aba': 'ABA Principles',
    'framework-aba-desc': 'Applied behavior analysis',

    // Benefits Section
    'benefits-title': 'Benefits for the Whole Family',
    'benefit-children-title': 'For Children',
    'benefit-children-1': 'Reduced anxiety around daily transitions',
    'benefit-children-2': 'Increased independence and confidence',
    'benefit-children-3': 'Fun, engaging way to learn routines',
    'benefit-children-4': 'Clear expectations reduce frustration',
    'benefit-parents-title': 'For Parents & Caregivers',
    'benefit-parents-1': 'Smoother morning and bedtime routines',
    'benefit-parents-2': 'Less stress during transitions',
    'benefit-parents-3': 'Easy to create and customize routines',
    'benefit-parents-4': 'Consistent approach across caregivers',
    'benefit-professionals-title': 'For Professionals',
    'benefit-professionals-1': 'Evidence-based intervention tool',
    'benefit-professionals-2': 'Consistent support across settings',
    'benefit-professionals-3': 'Collaborative family engagement',
    'benefit-professionals-4': 'Track progress and adaptation',
    'benefit-household-title': 'For the Household',
    'benefit-household-1': 'More peaceful daily rhythms',
    'benefit-household-2': 'Better time management',
    'benefit-household-3': 'Reduced conflict and meltdowns',
    'benefit-household-4': 'Celebrate small wins together',

    // How It Works
    'how-it-works-title': 'How Vue&Do Works',
    'how-it-works-description': 'Getting started with Vue&Do is simple. Create personalized routines in minutes.',
    'step1-title': 'Create Your Household',
    'step1-description': 'Add family members, caregivers, and professionals. Optionally upload photos to generate personalized avatars in your preferred comic style.',
    'step2-title': 'Build Visual Routines',
    'step2-description': 'Choose from templates or create custom routines. Add steps with clear icons, labels, and optional timers. Each step becomes a panel in the daily comic strip.',
    'step3-title': 'Child Uses Kiosk Mode',
    'step3-description': 'Your child follows the routine in a simple, fullscreen interface. Large "Doing" and "Done" buttons with visual rewards celebrate each completed step.',
    'step4-title': 'Celebrate & Build Skills',
    'step4-description': 'Watch as your child gains confidence and independence. Adjust routines as needed and celebrate progress together with engaging visual feedback.',

    // Waitlist Section
    'waitlist-title': 'Join Our Beta Waitlist',
    'waitlist-description': 'Be among the first to experience Vue&Do when we launch. Get early access, exclusive updates, and help shape the future of neuro-inclusive visual routines.',
    'waitlist-benefit-1': 'Early access to beta version',
    'waitlist-benefit-2': 'Exclusive pricing for early adopters',
    'waitlist-benefit-3': 'Direct input on features and design',
    'waitlist-benefit-4': 'Priority support from our team',
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
    'footer-description': 'Transforming daily routines into personalized visual stories for neuro-diverse children.',
    'footer-product': 'Product',
    'footer-features': 'Features',
    'footer-benefits': 'Benefits',
    'footer-research': 'Research',
    'footer-how': 'How It Works',
    'footer-legal': 'Legal',
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-accessibility': 'Accessibility Statement',
    'footer-gdpr': 'GDPR Compliance',
    'footer-contact': 'Contact',
    'footer-waitlist': 'Join Waitlist',
    'footer-copyright': '2025 Vue&Do. All rights reserved.',
    'footer-tagline': 'Made with care for neuro-diverse families'
  },

  fr: {
    // Navigation
    'nav-features': 'Fonctionnalités',
    'nav-benefits': 'Avantages',
    'nav-evidence': 'Fondé sur les preuves',
    'nav-waitlist': 'Liste d\'attente',
    'skip-to-content': 'Aller au contenu principal',

    // Hero Section
    'hero-title': 'Transformez les routines quotidiennes en histoires visuelles personnalisées',
    'hero-subtitle': 'Emplois du temps visuels fondés sur des preuves, conçus pour les enfants neuro-atypiques. Transformez les tâches quotidiennes en bandes dessinées engageantes avec personnalisation IA.',
    'cta-join-waitlist': 'Rejoindre la liste d\'attente',
    'cta-learn-more': 'En savoir plus',
    'badge-evidence': 'Approche fondée sur les preuves',
    'badge-privacy': 'Conception respectueuse de la vie privée',
    'badge-inclusive': 'Neuro-inclusif',

    // Problem/Solution Section
    'problem-title': 'Les routines quotidiennes ne doivent pas être stressantes',
    'problem-description': 'Pour de nombreux enfants neuro-atypiques, les transitions et les tâches quotidiennes peuvent être accablantes. Les supports visuels ont fait leurs preuves pour réduire l\'anxiété, améliorer l\'autonomie et créer des routines prévisibles et confortables.',
    'solution-predictable-title': 'Prévisible et visuel',
    'solution-predictable-text': 'Des emplois du temps visuels clairs aident les enfants à savoir à quoi s\'attendre, réduisant l\'anxiété liée aux transitions et aux nouvelles activités.',
    'solution-engaging-title': 'Engageant et personnalisé',
    'solution-engaging-text': 'Des bandes dessinées générées par IA mettant en vedette l\'avatar de votre enfant rendent les routines amusantes et pertinentes, augmentant la motivation et la participation.',
    'solution-independent-title': 'Développe l\'autonomie',
    'solution-independent-text': 'Des guidances visuelles étape par étape permettent aux enfants de réaliser des tâches de manière autonome, renforçant la confiance et les compétences de vie.',

    // Features Section
    'features-title': 'Conçu pour les besoins neuro-atypiques',
    'features-description': 'Chaque fonctionnalité est soigneusement conçue avec les contributions de la recherche, des familles et des professionnels travaillant avec des enfants neuro-atypiques.',
    'feature-ai-title': 'Personnalisation par IA',
    'feature-ai-description': 'Transformez les activités quotidiennes en bandes dessinées personnalisées mettant en vedette l\'avatar de votre enfant. Choisissez votre style visuel préféré et regardez les routines prendre vie dans un format auquel votre enfant s\'identifie.',
    'feature-kiosk-title': 'Mode kiosque concentré',
    'feature-kiosk-description': 'Interface plein écran sans distraction conçue pour les enfants. De grands boutons, un retour visuel clair et des gestes simples rendent l\'interaction intuitive et sans stress.',
    'feature-visual-title': 'Minuteurs visuels et récompenses',
    'feature-visual-description': 'Des minuteurs visuels clairs aident les enfants à comprendre le passage du temps. Célébrez chaque étape accomplie avec des récompenses visuelles engageantes comme des confettis et des étincelles pour renforcer les comportements positifs.',
    'feature-offline-title': 'Fonctionne hors ligne',
    'feature-offline-description': 'Une fois les routines créées, elles fonctionnent parfaitement hors ligne. Pas besoin d\'Internet pour une utilisation quotidienne, garantissant un accès constant sans soucis de connectivité.',
    'feature-privacy-title': 'Conception respectueuse de la vie privée',
    'feature-privacy-description': 'Les photos de votre enfant ne sont jamais stockées. Nous ne conservons que les avatars générés par IA et les préférences de style. Conformité totale au RGPD avec des pratiques de données transparentes et des contrôles parentaux.',
    'feature-accessible-title': 'Interface neuro-inclusive',
    'feature-accessible-description': 'Conçu selon les normes WCAG 2.1 AA avec contraste élevé, typographie claire, interactions tolérantes aux erreurs et aucun élément audio pouvant être accablant.',

    // Evidence Section
    'evidence-title': 'Soutenu par la recherche et l\'expertise',
    'evidence-description': 'Vue&Do s\'appuie sur des décennies de pratiques fondées sur des preuves en matière de supports visuels et d\'emplois du temps d\'activités pour les apprenants neuro-atypiques.',
    'stat-research-value': '25+',
    'stat-research-label': 'Années de recherche',
    'stat-studies-value': '15+',
    'stat-studies-label': 'Études évaluées par les pairs',
    'stat-frameworks-value': '3',
    'stat-frameworks-label': 'Cadres fondés sur des preuves',
    'evidence-research-subtitle': 'Ce que montre la recherche',
    'evidence-list-1': 'Les emplois du temps visuels améliorent considérablement l\'achèvement des tâches et réduisent les comportements problématiques chez les enfants atteints de troubles du spectre autistique (SAGE, 2024)',
    'evidence-list-2': 'Les emplois du temps d\'activités numériques montrent des résultats prometteurs pour accroître l\'indépendance dans les activités de la vie quotidienne (PubMed, 2025)',
    'evidence-list-3': 'Supports visuels recommandés par la HAS (Haute Autorité de Santé) et la méthodologie TEACCH pour l\'accompagnement de l\'autisme',
    'evidence-list-4': 'Les supports visuels personnalisés augmentent l\'engagement et les comportements axés sur les tâches dans les contextes éducatifs et à domicile',
    'evidence-frameworks-subtitle': 'Construit sur des cadres éprouvés',
    'framework-teacch': 'TEACCH',
    'framework-teacch-desc': 'Approche d\'enseignement structuré',
    'framework-has': 'Recommandations HAS',
    'framework-has-desc': 'Normes de l\'autorité sanitaire française',
    'framework-aba': 'Principes ABA',
    'framework-aba-desc': 'Analyse appliquée du comportement',

    // Benefits Section
    'benefits-title': 'Avantages pour toute la famille',
    'benefit-children-title': 'Pour les enfants',
    'benefit-children-1': 'Anxiété réduite autour des transitions quotidiennes',
    'benefit-children-2': 'Indépendance et confiance accrues',
    'benefit-children-3': 'Façon amusante et engageante d\'apprendre les routines',
    'benefit-children-4': 'Des attentes claires réduisent la frustration',
    'benefit-parents-title': 'Pour les parents et aidants',
    'benefit-parents-1': 'Routines du matin et du coucher plus fluides',
    'benefit-parents-2': 'Moins de stress pendant les transitions',
    'benefit-parents-3': 'Facile à créer et personnaliser les routines',
    'benefit-parents-4': 'Approche cohérente entre les aidants',
    'benefit-professionals-title': 'Pour les professionnels',
    'benefit-professionals-1': 'Outil d\'intervention fondé sur des preuves',
    'benefit-professionals-2': 'Soutien cohérent dans tous les contextes',
    'benefit-professionals-3': 'Engagement familial collaboratif',
    'benefit-professionals-4': 'Suivre les progrès et l\'adaptation',
    'benefit-household-title': 'Pour le foyer',
    'benefit-household-1': 'Rythmes quotidiens plus paisibles',
    'benefit-household-2': 'Meilleure gestion du temps',
    'benefit-household-3': 'Conflits et crises réduits',
    'benefit-household-4': 'Célébrer ensemble les petites victoires',

    // How It Works
    'how-it-works-title': 'Comment fonctionne Vue&Do',
    'how-it-works-description': 'Démarrer avec Vue&Do est simple. Créez des routines personnalisées en quelques minutes.',
    'step1-title': 'Créez votre foyer',
    'step1-description': 'Ajoutez les membres de la famille, les aidants et les professionnels. Téléchargez éventuellement des photos pour générer des avatars personnalisés dans votre style BD préféré.',
    'step2-title': 'Créez des routines visuelles',
    'step2-description': 'Choisissez parmi des modèles ou créez des routines personnalisées. Ajoutez des étapes avec des icônes claires, des étiquettes et des minuteurs optionnels. Chaque étape devient une vignette dans la bande dessinée quotidienne.',
    'step3-title': 'L\'enfant utilise le mode kiosque',
    'step3-description': 'Votre enfant suit la routine dans une interface simple en plein écran. De grands boutons "En cours" et "Terminé" avec des récompenses visuelles célèbrent chaque étape accomplie.',
    'step4-title': 'Célébrez et développez les compétences',
    'step4-description': 'Regardez votre enfant gagner en confiance et en autonomie. Ajustez les routines selon les besoins et célébrez les progrès ensemble avec un retour visuel engageant.',

    // Waitlist Section
    'waitlist-title': 'Rejoignez notre liste d\'attente bêta',
    'waitlist-description': 'Soyez parmi les premiers à découvrir Vue&Do lors de notre lancement. Obtenez un accès anticipé, des mises à jour exclusives et aidez à façonner l\'avenir des routines visuelles neuro-inclusives.',
    'waitlist-benefit-1': 'Accès anticipé à la version bêta',
    'waitlist-benefit-2': 'Tarification exclusive pour les premiers adoptants',
    'waitlist-benefit-3': 'Contribution directe aux fonctionnalités et à la conception',
    'waitlist-benefit-4': 'Support prioritaire de notre équipe',
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
    'footer-description': 'Transformer les routines quotidiennes en histoires visuelles personnalisées pour les enfants neuro-atypiques.',
    'footer-product': 'Produit',
    'footer-features': 'Fonctionnalités',
    'footer-benefits': 'Avantages',
    'footer-research': 'Recherche',
    'footer-how': 'Comment ça marche',
    'footer-legal': 'Légal',
    'footer-privacy': 'Politique de confidentialité',
    'footer-terms': 'Conditions d\'utilisation',
    'footer-accessibility': 'Déclaration d\'accessibilité',
    'footer-gdpr': 'Conformité RGPD',
    'footer-contact': 'Contact',
    'footer-waitlist': 'Liste d\'attente',
    'footer-copyright': '2025 Vue&Do. Tous droits réservés.',
    'footer-tagline': 'Fait avec soin pour les familles neuro-atypiques'
  }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('vuedo-lang') || 'en';

// Set initial language
document.documentElement.setAttribute('data-lang', currentLang);
document.documentElement.setAttribute('lang', currentLang);

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // For elements with lang-specific children, we handle via CSS
      // For placeholders, update them
      if (element.hasAttribute('data-i18n-placeholder')) {
        element.setAttribute('placeholder', translations[lang][key]);
      }
    }
  });

  // Update select options
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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { switchLanguage, translations };
}
