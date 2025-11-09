/**
 * Vue&Do Website - Internationalization (i18n)
 * Bilingual support for English and French
 */

const translations = {
  en: {
    // Beta Banner
    'beta-banner-title': 'Beta launching Q2 2025!',
    'beta-banner-subtitle': 'Join the waitlist for early access & special pricing',
    'beta-banner-cta': 'Join Now',

    // Navigation
    'nav-features': 'Features',
    'nav-showcase': 'See It In Action',
    'nav-benefits': 'Benefits',
    'nav-evidence': 'The Science',
    'nav-waitlist': 'Join Waitlist',
    'skip-to-content': 'Skip to main content',

    // Hero Section
    'hero-title': 'Touch the Magic, Watch It Transform',
    'hero-subtitle': 'Living comic strips that adapt to the real world. Your child touches each panel and watches it magically transform - messy hair becomes combed, dirty smiles turn sparkly clean. Weather, time of day, and real-life context appear in every scene.',
    'cta-join-waitlist': 'Join the Waitlist',
    'cta-learn-more': 'See the Magic',
    'badge-evidence': 'Backed by Science',
    'badge-privacy': 'Privacy-First',
    'badge-inclusive': 'Context-Aware AI',

    // Problem/Solution Section
    'problem-title': 'Living Comics That Understand the Real World',
    'problem-description': 'Visual routines have helped families for decades. But what if the comic strip could see the weather outside? Know it is a school day? Transform right before your child\'s eyes when they touch it? This is the next generation of visual supports.',
    'solution-predictable-title': 'Context-Aware Panels',
    'solution-predictable-text': 'Rain appears in the background on rainy days. Morning sun or evening moon shows the time. School backpack appears on weekdays. The comic strip breathes with real life.',
    'solution-engaging-title': 'Touch-Based Transformations',
    'solution-engaging-text': 'Pure visual interaction. Your child touches the panel showing messy hair - it transforms to show combed hair. Touch the dirty teeth panel - watch it become a sparkly smile with stars and sparkles. Immediate visual feedback that celebrates completion.',
    'solution-independent-title': 'Intelligence That Adapts',
    'solution-independent-text': 'Our AI understands context: weather conditions, time of day, weekday vs weekend, special occasions. Every routine feels current, relevant, and connected to your child\'s actual day.',

    // Features Section
    'features-title': 'The Future of Visual Routines',
    'features-description': 'We have combined cutting-edge AI, real-world awareness, and evidence-based visual supports to create living comic strips that truly understand your child\'s day.',
    'feature-ai-title': 'AI-Powered Avatar Generation',
    'feature-ai-description': 'Upload a photo and choose from 4 unique visual styles - manga, superhero, cartoon, or classic BD. Our AI creates personalized avatars starring your child in every routine adventure.',
    'feature-ai-meta': '4 style options available',
    'feature-auth-title': 'Magic Link Authentication',
    'feature-auth-description': 'No passwords to remember, ever. Simple, secure email magic links get you in instantly. Works seamlessly across all your devices.',
    'feature-auth-meta': 'Passwordless & secure',
    'feature-household-title': 'Family Characters in Every Panel',
    'feature-household-description': 'Your child is the main character. Add everyone in their life - papa for morning routines, grandma for bedtime, even their favorite stuffed animal. Everyone becomes a character with AI avatars that appear throughout the comic panels.',
    'feature-household-meta': 'Everyone becomes a character',
    'feature-builder-title': 'Real-Time Routine Builder',
    'feature-builder-description': 'Drag and drop from 30+ pre-built routine steps or create your own. Add icons, labels, and timers. See changes instantly as you build the perfect daily adventure.',
    'feature-builder-meta': '30+ built-in steps',
    'feature-rewards-title': 'Visual Rewards & Positive Reinforcement',
    'feature-rewards-description': 'When your child completes a step, they see immediate visual celebration - stars appear, confetti falls, sparkles dance. This evidence-based positive reinforcement creates joyful associations with daily routines, making independence feel rewarding.',
    'feature-rewards-meta': 'Stars, confetti, sparkles - pure celebration',
    'feature-kiosk-title': 'Immersive Kiosk Mode',
    'feature-kiosk-description': 'Fullscreen, distraction-free interface designed for children. One-link sharing works on any device - no app needed. Touch the panel, watch it transform, celebrate with visual rewards.',
    'feature-kiosk-meta': 'Works on any device instantly',
    'feature-context-title': 'Living, Breathing Comics',
    'feature-context-description': 'Weather appears in panel backgrounds. Morning sun versus evening moon. School days show backpacks, holidays show play clothes. Every scene reflects your child\'s actual day, making routines feel alive and relevant.',
    'feature-context-meta': 'Real-world context awareness',
    'feature-privacy-title': 'Zero-Photo Storage',
    'feature-privacy-description': 'Uploaded photos are deleted immediately after avatar generation. Only AI-created avatars and style preferences are stored. Full GDPR compliance with transparent data practices.',
    'feature-privacy-meta': 'Privacy-first by design',

    // Showcase Section
    'showcase-title': 'See the Magic in Action',
    'showcase-description': 'Real examples of how Vue&Do adapts to your child\'s world. Watch routines transform with a touch while context brings each scene to life.',
    'showcase-callout': 'These panels are AI-generated in real-time with your child\'s face and your chosen style',

    // Context Badges
    'context-rainy': 'Rainy Morning',
    'context-morning': '7:30 AM',
    'context-evening': '8:00 PM',
    'context-clear': 'Clear Night',
    'context-sunny': 'Sunny',
    'context-schoolday': 'School Day',

    // Touch Indicator
    'touch-label': 'Touch',

    // Visual Rewards
    'reward-label': 'Visual Celebration:',
    'reward-example-teeth': 'Stars appear ⭐✨ + Sparkle animation',
    'reward-example-pajamas': 'Confetti falls 🎉 + Happy animation',
    'reward-example-breakfast': 'Stars burst ⭐ + Celebration sparkles ✨',

    // Example 1: Brushing Teeth
    'showcase-teeth-before': 'Before: Teeth need brushing',
    'showcase-teeth-after': 'After: Sparkly clean smile!',
    'showcase-teeth-caption': 'Morning brushing routine with real-time weather context',

    // Example 2: Pajamas
    'showcase-pajamas-before': 'Before: Still in day clothes',
    'showcase-pajamas-after': 'After: Cozy in pajamas!',
    'showcase-pajamas-caption': 'Bedtime routine with evening context and moon',

    // Example 3: Breakfast
    'showcase-breakfast-before': 'Before: Full breakfast plate',
    'showcase-breakfast-after': 'After: All done, ready for school!',
    'showcase-breakfast-caption': 'School morning breakfast with sunny weather and backpack context',

    // Evidence Section
    'evidence-title': 'Backed by Science, Powered by Visual Magic',
    'evidence-description': 'This is not just innovative design - it is built on 25+ years of research showing visual supports work. We have made them intelligent, context-aware, and truly magical.',
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
    'evidence-list-5': 'Positive reinforcement through immediate visual feedback strengthens desired behaviors and builds motivation (ABA principles)',
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
    'benefit-children-1': 'Touch and watch magic transformations happen',
    'benefit-children-2': 'Build independence with intuitive visuals',
    'benefit-children-3': 'See themselves in living comic stories',
    'benefit-children-4': 'Experience routines that feel alive and current',
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
    'how-it-works-title': 'Get Started in 3 Simple Steps',
    'how-it-works-description': 'From signup to superhero routines in under 5 minutes. Seriously, it\'s that fast.',
    'timeline-badge': 'Beta launching Q2 2025',
    'step1-title': 'Create Your Child\'s Comic Universe',
    'step1-description': 'Your child is the hero. Add papa, mama, grandma, their teddy bear (doudou), the family dog - everyone important to them becomes a character in their comic with AI avatars. Choose from 4 visual styles (manga, superhero, cartoon, classic BD).',
    'step1-highlight': 'Everyone becomes a comic character',
    'step2-title': 'Build Your First Routine',
    'step2-description': 'Drag and drop from 30+ pre-built steps like "brush teeth," "get dressed," "breakfast time." Customize icons, add timers, and preview your comic strip in real-time.',
    'step2-highlight': '30+ built-in routine steps ready to use',
    'step3-title': 'Touch, Transform, Celebrate',
    'step3-description': 'Your child touches each comic panel and watches it magically transform. When they complete the step, visual rewards appear - stars burst, confetti falls, sparkles dance. This positive reinforcement creates joyful associations with daily routines.',
    'step3-highlight': 'Evidence-based positive reinforcement through visual celebration',

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
    'footer-description': 'Living comic strips that transform with a touch and adapt to the real world.',
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
    'footer-github': 'GitHub',
    'footer-status': 'Currently in development - Beta Q2 2025',
    'footer-copyright': '2025 Vue&Do. All rights reserved.',
    'footer-tagline': 'Visual magic that understands the real world'
  },

  fr: {
    // Beta Banner
    'beta-banner-title': 'Bêta en Q2 2025 !',
    'beta-banner-subtitle': 'Rejoignez la liste d\'attente pour accès anticipé & tarifs spéciaux',
    'beta-banner-cta': 'Rejoindre',

    // Navigation
    'nav-features': 'Fonctionnalités',
    'nav-showcase': 'Voir en action',
    'nav-benefits': 'Avantages',
    'nav-evidence': 'La Science',
    'nav-waitlist': 'Liste d\'attente',
    'skip-to-content': 'Aller au contenu principal',

    // Hero Section
    'hero-title': 'Touchez la magie, regardez-la se transformer',
    'hero-subtitle': 'Des bandes dessinées vivantes qui s\'adaptent au monde réel. Votre enfant touche chaque vignette et la regarde se transformer magiquement - cheveux en désordre deviennent coiffés, sourire sale devient étincelant. La météo, l\'heure et le contexte réel apparaissent dans chaque scène.',
    'cta-join-waitlist': 'Rejoindre la liste d\'attente',
    'cta-learn-more': 'Voir la magie',
    'badge-evidence': 'Basé sur la science',
    'badge-privacy': 'Vie privée d\'abord',
    'badge-inclusive': 'IA contextuelle',

    // Problem/Solution Section
    'problem-title': 'Des BD vivantes qui comprennent le monde réel',
    'problem-description': 'Les routines visuelles aident les familles depuis des décennies. Mais si la bande dessinée pouvait voir la météo dehors ? Savoir que c\'est un jour d\'école ? Se transformer sous les yeux de votre enfant quand il la touche ? Voici la nouvelle génération de supports visuels.',
    'solution-predictable-title': 'Vignettes contextuelles',
    'solution-predictable-text': 'La pluie apparaît en arrière-plan les jours pluvieux. Soleil du matin ou lune du soir montre l\'heure. Le cartable d\'école apparaît en semaine. La BD respire avec la vraie vie.',
    'solution-engaging-title': 'Transformations au toucher',
    'solution-engaging-text': 'Pure interaction visuelle. Votre enfant touche la vignette montrant les cheveux en désordre - elle se transforme pour montrer des cheveux coiffés. Touchez la vignette des dents sales - regardez apparaître un sourire étincelant avec étoiles et étincelles. Feedback visuel immédiat qui célèbre l\'accomplissement.',
    'solution-independent-title': 'Intelligence qui s\'adapte',
    'solution-independent-text': 'Notre IA comprend le contexte : conditions météo, heure du jour, semaine vs weekend, occasions spéciales. Chaque routine se sent actuelle, pertinente et connectée à la vraie journée de votre enfant.',

    // Features Section
    'features-title': 'L\'avenir des routines visuelles',
    'features-description': 'On a combiné IA de pointe, conscience du monde réel et supports visuels basés sur les preuves pour créer des bandes dessinées vivantes qui comprennent vraiment la journée de votre enfant.',
    'feature-ai-title': 'Génération d\'avatars par IA',
    'feature-ai-description': 'Uploadez une photo et choisissez parmi 4 styles visuels uniques - manga, super-héros, cartoon ou BD classique. Notre IA crée des avatars personnalisés avec votre enfant en vedette dans chaque aventure de routine.',
    'feature-ai-meta': '4 styles disponibles',
    'feature-auth-title': 'Authentification par lien magique',
    'feature-auth-description': 'Plus jamais de mot de passe à retenir. Des liens magiques simples et sécurisés par email vous connectent instantanément. Fonctionne parfaitement sur tous vos appareils.',
    'feature-auth-meta': 'Sans mot de passe & sécurisé',
    'feature-household-title': 'Personnages familiers dans chaque vignette',
    'feature-household-description': 'Votre enfant est le personnage principal. Ajoutez tous ceux qui l\'entourent - papa pour les routines du matin, mamie pour le coucher, même son doudou préféré. Tout le monde devient un personnage avec des avatars IA qui apparaissent dans les vignettes BD.',
    'feature-household-meta': 'Tout le monde devient un personnage',
    'feature-builder-title': 'Créateur de routines en temps réel',
    'feature-builder-description': 'Glissez-déposez parmi 30+ étapes pré-construites ou créez les vôtres. Ajoutez icônes, labels et minuteurs. Voyez les changements instantanément en construisant l\'aventure quotidienne parfaite.',
    'feature-builder-meta': '30+ étapes intégrées',
    'feature-rewards-title': 'Récompenses visuelles & renforcement positif',
    'feature-rewards-description': 'Quand votre enfant termine une étape, il voit une célébration visuelle immédiate - des étoiles apparaissent, des confettis tombent, des étincelles dansent. Ce renforcement positif basé sur les preuves crée des associations joyeuses avec les routines quotidiennes, rendant l\'autonomie gratifiante.',
    'feature-rewards-meta': 'Étoiles, confettis, étincelles - pure célébration',
    'feature-kiosk-title': 'Mode kiosque immersif',
    'feature-kiosk-description': 'Interface plein écran sans distraction conçue pour les enfants. Partage en un lien fonctionne sur n\'importe quel appareil - aucune app requise. Touchez la vignette, regardez-la se transformer, célébrez avec des récompenses visuelles.',
    'feature-kiosk-meta': 'Fonctionne sur n\'importe quel appareil instantanément',
    'feature-context-title': 'BD vivantes et respirantes',
    'feature-context-description': 'La météo apparaît en arrière-plan des vignettes. Soleil du matin versus lune du soir. Les jours d\'école montrent des cartables, les vacances montrent des vêtements de jeu. Chaque scène reflète la vraie journée de votre enfant, rendant les routines vivantes et pertinentes.',
    'feature-context-meta': 'Conscience du contexte réel',
    'feature-privacy-title': 'Zéro stockage photos',
    'feature-privacy-description': 'Les photos uploadées sont supprimées immédiatement après génération des avatars. Seuls les avatars créés par IA et préférences de style sont conservés. Conformité RGPD totale avec pratiques transparentes.',
    'feature-privacy-meta': 'Vie privée d\'abord par design',

    // Showcase Section
    'showcase-title': 'Voyez la magie en action',
    'showcase-description': 'Des exemples réels de comment Vue&Do s\'adapte au monde de votre enfant. Regardez les routines se transformer au toucher pendant que le contexte donne vie à chaque scène.',
    'showcase-callout': 'Ces vignettes sont générées par IA en temps réel avec le visage de votre enfant et votre style choisi',

    // Context Badges
    'context-rainy': 'Matin pluvieux',
    'context-morning': '7h30',
    'context-evening': '20h00',
    'context-clear': 'Nuit claire',
    'context-sunny': 'Ensoleillé',
    'context-schoolday': 'Jour d\'école',

    // Touch Indicator
    'touch-label': 'Toucher',

    // Visual Rewards
    'reward-label': 'Célébration visuelle :',
    'reward-example-teeth': 'Étoiles apparaissent ⭐✨ + Animation étincelante',
    'reward-example-pajamas': 'Confettis tombent 🎉 + Animation joyeuse',
    'reward-example-breakfast': 'Étoiles éclatent ⭐ + Étincelles de célébration ✨',

    // Example 1: Brushing Teeth
    'showcase-teeth-before': 'Avant : Dents à brosser',
    'showcase-teeth-after': 'Après : Sourire étincelant !',
    'showcase-teeth-caption': 'Routine de brossage matinal avec contexte météo en temps réel',

    // Example 2: Pajamas
    'showcase-pajamas-before': 'Avant : Encore en habits du jour',
    'showcase-pajamas-after': 'Après : Confortable en pyjama !',
    'showcase-pajamas-caption': 'Routine du coucher avec contexte du soir et lune',

    // Example 3: Breakfast
    'showcase-breakfast-before': 'Avant : Assiette de petit-déjeuner pleine',
    'showcase-breakfast-after': 'Après : Tout fini, prêt pour l\'école !',
    'showcase-breakfast-caption': 'Petit-déjeuner du matin d\'école avec météo ensoleillée et contexte cartable',

    // Evidence Section
    'evidence-title': 'Basé sur la science, propulsé par la magie visuelle',
    'evidence-description': 'Ce n\'est pas juste du design innovant - c\'est construit sur 25+ ans de recherche montrant que les supports visuels fonctionnent. On les a rendus intelligents, contextuels et vraiment magiques.',
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
    'evidence-list-5': 'Le renforcement positif par feedback visuel immédiat renforce les comportements souhaités et construit la motivation (principes ABA)',
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
    'benefit-children-1': 'Toucher et voir les transformations magiques se produire',
    'benefit-children-2': 'Construire l\'autonomie avec des visuels intuitifs',
    'benefit-children-3': 'Se voir dans des histoires BD vivantes',
    'benefit-children-4': 'Vivre des routines qui se sentent vivantes et actuelles',
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
    'how-it-works-title': 'Démarrez en 3 étapes simples',
    'how-it-works-description': 'De l\'inscription aux routines super-héros en moins de 5 minutes. Sérieusement, c\'est si rapide.',
    'timeline-badge': 'Bêta en Q2 2025',
    'step1-title': 'Créez l\'univers BD de votre enfant',
    'step1-description': 'Votre enfant est le héros. Ajoutez papa, maman, mamie, son doudou, le chien de famille - tous ceux qui comptent pour lui deviennent des personnages dans sa BD avec des avatars IA. Choisissez parmi 4 styles visuels (manga, super-héros, cartoon, BD classique).',
    'step1-highlight': 'Tout le monde devient un personnage',
    'step2-title': 'Construisez votre première routine',
    'step2-description': 'Glissez-déposez parmi 30+ étapes pré-construites comme "se brosser les dents", "s\'habiller", "petit-déjeuner". Personnalisez icônes, ajoutez minuteurs, et prévisualisez votre bande dessinée en temps réel.',
    'step2-highlight': '30+ étapes de routine prêtes à utiliser',
    'step3-title': 'Toucher, transformer, célébrer',
    'step3-description': 'Votre enfant touche chaque vignette BD et la regarde se transformer magiquement. Quand il termine l\'étape, des récompenses visuelles apparaissent - des étoiles éclatent, des confettis tombent, des étincelles dansent. Ce renforcement positif crée des associations joyeuses avec les routines quotidiennes.',
    'step3-highlight': 'Renforcement positif basé sur les preuves par célébration visuelle',

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
    'footer-description': 'Bandes dessinées vivantes qui se transforment au toucher et s\'adaptent au monde réel.',
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
    'footer-github': 'GitHub',
    'footer-status': 'Actuellement en développement - Bêta Q2 2025',
    'footer-copyright': '2025 Vue&Do. Tous droits réservés.',
    'footer-tagline': 'Magie visuelle qui comprend le monde réel'
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
