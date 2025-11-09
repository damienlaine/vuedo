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
    'nav-evidence': 'Evidence-Based',
    'nav-waitlist': 'Join Waitlist',
    'skip-to-content': 'Skip to main content',

    // Hero Section
    'hero-title': 'Turn Daily Routines Into Epic Comic Adventures',
    'hero-subtitle': 'AI-powered personalized comic strips that make everyday tasks actually fun. Your child becomes the superhero of their own story, from tooth brushing to bedtime. Backed by 25+ years of neuroscience research, and especially great for kids with autism, ADHD, or dys.',
    'cta-join-waitlist': 'Join the Waitlist',
    'cta-learn-more': 'See How It Works',
    'badge-evidence': 'Science-Backed',
    'badge-privacy': 'Privacy-First',
    'badge-inclusive': 'For All Families',

    // Problem/Solution Section
    'problem-title': 'Make Mornings Actually Fun (Yes, Really!)',
    'problem-description': 'Every family knows the challenge: transitions are tough, routines are boring, and kids need constant reminders. What if everyday tasks were as exciting as their favorite comic books? That\'s exactly what we built.',
    'solution-predictable-title': 'Visual & Exciting',
    'solution-predictable-text': 'See what\'s next in colorful comic panels. No more "what\'s after this?" - just clear, colorful step-by-step adventures that kids actually want to follow.',
    'solution-engaging-title': 'AI-Powered Personalization Magic',
    'solution-engaging-text': 'These aren\'t generic drawings - our AI creates custom comics with YOUR child as the star. Choose from manga to superhero style and watch their face light up seeing themselves as the main character.',
    'solution-independent-title': 'Unlocking Independence',
    'solution-independent-text': 'Kids love doing things themselves when it\'s fun. Visual quests with celebratory rewards turn "I can\'t" moments into "I did it!" moments that build real confidence.',

    // Features Section (CORE VALUE FEATURES ONLY)
    'features-title': 'How Vue&Do Helps Your Family',
    'features-description': 'Six core features that transform stressful routines into calm, predictable moments - backed by 25+ years of research.',

    'feature-1-title': 'Personalized Comic Strip Routines',
    'feature-1-description': 'Create visual routines featuring YOUR child as the main character. Upload a photo, choose a style (manga, superhero, cartoon, classic BD), and watch as AI transforms daily tasks into engaging comic adventures. When routines feel personal, kids actually want to follow them.',
    'feature-1-meta': 'Your child is the hero of their routine',

    'feature-2-title': 'Real-Time Context That Makes Sense',
    'feature-2-description': 'Is it rainy? The background shows rain. School day? Backpack appears. Evening? The sky is twilight. Every routine automatically adapts to weather, time of day, and whether it\'s a school day or weekend - helping children connect routines to their real world.',
    'feature-2-meta': 'Routines match the real day',

    'feature-3-title': 'Visual Celebrations That Build Motivation',
    'feature-3-description': 'Finish brushing teeth? Stars burst across the screen. Get dressed? Confetti falls. Based on 25+ years of ABA research, immediate visual rewards create positive associations with daily tasks. Children learn: completing routines feels GOOD.',
    'feature-3-meta': 'Evidence-based positive reinforcement',

    'feature-4-title': '30+ Ready-Made Routine Steps',
    'feature-4-description': 'No need to create everything from scratch. Start with our library of 30+ pre-built steps: brush teeth, get dressed, eat breakfast, pack backpack, and more. Just drag, drop, and customize. Create a full morning routine in under 5 minutes.',
    'feature-4-meta': 'Build routines in minutes, not hours',

    'feature-5-title': 'Independent Use with Kiosk Mode',
    'feature-5-description': 'Hand the tablet to your child and step back. Fullscreen kiosk mode removes distractions, shows large touch targets, and guides them step-by-step. They touch each panel, watch it transform, celebrate completion. You get to drink your coffee while it\'s still hot.',
    'feature-5-meta': 'Builds independence, reduces your stress',

    'feature-6-title': 'Works for the Whole Care Team',
    'feature-6-description': 'Parents, grandparents, nannies, therapists - everyone uses the same visual routines. No more "but Dad does it differently." Consistent approach across all caregivers means less confusion, fewer meltdowns, smoother days.',
    'feature-6-meta': 'Same routine, every caregiver',

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
    'showcase-teeth-before': 'Step: Brush teeth',
    'showcase-teeth-after': 'Completed: Clean teeth!',
    'showcase-teeth-caption': 'Morning routine step with weather context (rainy morning)',

    // Example 2: Pajamas
    'showcase-pajamas-before': 'Step: Put on pajamas',
    'showcase-pajamas-after': 'Completed: Ready for bed!',
    'showcase-pajamas-caption': 'Bedtime routine step with time context (8:00 PM, evening moon)',

    // Example 3: Breakfast
    'showcase-breakfast-before': 'Step: Eat breakfast',
    'showcase-breakfast-after': 'Completed: Ready for school!',
    'showcase-breakfast-caption': 'Morning routine step with school day context (backpack, sunny weather)',

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
    'evidence-list-5': 'Positive reinforcement through immediate visual feedback strengthens desired behaviors and builds motivation (ABA principles)',
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
    'how-it-works-title': 'Get Started in 3 Simple Steps',
    'how-it-works-description': 'From signup to superhero routines in under 5 minutes. Seriously, it\'s that fast.',
    'timeline-badge': 'Beta launching Q2 2025',
    'step1-title': 'Sign Up & Create Your Household',
    'step1-description': 'Join with a magic link (no password needed). Add family members, upload optional photos, and choose your preferred comic style. Our AI generates unique avatars in seconds.',
    'step1-highlight': 'Takes less than 2 minutes',
    'step2-title': 'Build Your First Routine',
    'step2-description': 'Drag and drop from 30+ pre-built steps like "brush teeth," "get dressed," "breakfast time." Customize icons, add timers, and preview your comic strip in real-time.',
    'step2-highlight': '30+ built-in routine steps ready to use',
    'step3-title': 'Touch, Transform, Celebrate',
    'step3-description': 'Your child touches each comic panel and watches it magically transform. When they complete the step, visual rewards appear - stars burst, confetti falls, sparkles dance. This positive reinforcement creates joyful associations with daily routines.',
    'step3-highlight': 'Evidence-based positive reinforcement through visual celebration',

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
    'footer-github': 'GitHub',
    'footer-status': 'Currently in development - Beta Q2 2025',
    'footer-copyright': '2025 Vue&Do. All rights reserved.',
    'footer-tagline': 'Made with care for neuro-diverse families'
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
    'nav-evidence': 'Validé scientifiquement',
    'nav-waitlist': 'Liste d\'attente',
    'skip-to-content': 'Aller au contenu principal',

    // Hero Section
    'hero-title': 'Transformez les routines en aventures BD épiques',
    'hero-subtitle': 'Des bandes dessinées personnalisées par IA qui rendent les tâches quotidiennes vraiment fun. Votre enfant devient le super-héros de sa propre histoire, du brossage des dents au coucher. Validées par 25+ ans de recherche en neurosciences, et particulièrement adaptées aux enfants autistes, TDAH ou dys.',
    'cta-join-waitlist': 'Rejoindre la liste d\'attente',
    'cta-learn-more': 'Voir comment ça marche',
    'badge-evidence': 'Basé sur la science',
    'badge-privacy': 'Vie privée d\'abord',
    'badge-inclusive': 'Pour toutes les familles',

    // Problem/Solution Section
    'problem-title': 'Rendez les matins vraiment fun (oui, vraiment !)',
    'problem-description': 'Toutes les familles connaissent le défi : les transitions sont difficiles, les routines sont ennuyeuses, et les enfants ont besoin de rappels constants. Et si les tâches quotidiennes étaient aussi excitantes que leurs BD préférées ? C\'est exactement ce qu\'on a créé.',
    'solution-predictable-title': 'Visuel & Excitant',
    'solution-predictable-text': 'Voir ce qui vient ensuite en vignettes BD colorées. Fini le "c\'est quoi après ?" - juste des aventures étape par étape claires et colorées que les enfants veulent suivre.',
    'solution-engaging-title': 'Magie personnalisée par IA',
    'solution-engaging-text': 'Ce ne sont pas des dessins génériques - notre IA crée des bandes dessinées sur mesure avec VOTRE enfant en vedette. Choisissez du manga au style super-héros et regardez son visage s\'illuminer en se voyant personnage principal.',
    'solution-independent-title': 'Autonomie débloquée',
    'solution-independent-text': 'Les enfants adorent faire les choses eux-mêmes quand c\'est amusant. Des quêtes visuelles avec des récompenses festives transforment "je peux pas" en moments "j\'ai réussi !" qui bâtissent la vraie confiance.',

    // Features Section (CORE VALUE FEATURES ONLY)
    'features-title': 'Comment Vue&Do aide votre famille',
    'features-description': 'Six fonctionnalités clés qui transforment les routines stressantes en moments calmes et prévisibles - validées par 25+ ans de recherche.',

    'feature-1-title': 'Routines en BD personnalisées',
    'feature-1-description': 'Créez des routines visuelles avec VOTRE enfant comme personnage principal. Uploadez une photo, choisissez un style (manga, super-héros, cartoon, BD classique), et regardez l\'IA transformer les tâches quotidiennes en aventures BD engageantes. Quand les routines sont personnelles, les enfants veulent vraiment les suivre.',
    'feature-1-meta': 'Votre enfant est le héros de sa routine',

    'feature-2-title': 'Contexte en temps réel qui a du sens',
    'feature-2-description': 'Il pleut ? L\'arrière-plan montre la pluie. Jour d\'école ? Le cartable apparaît. Soirée ? Le ciel est crépusculaire. Chaque routine s\'adapte automatiquement à la météo, l\'heure du jour, et si c\'est un jour d\'école ou weekend - aidant les enfants à connecter les routines à leur monde réel.',
    'feature-2-meta': 'Les routines correspondent à la vraie journée',

    'feature-3-title': 'Célébrations visuelles qui construisent la motivation',
    'feature-3-description': 'Fini le brossage de dents ? Des étoiles éclatent sur l\'écran. Habillé ? Des confettis tombent. Basé sur 25+ ans de recherche ABA, les récompenses visuelles immédiates créent des associations positives avec les tâches quotidiennes. Les enfants apprennent : compléter les routines fait du BIEN.',
    'feature-3-meta': 'Renforcement positif validé scientifiquement',

    'feature-4-title': '30+ étapes de routine prêtes à l\'emploi',
    'feature-4-description': 'Pas besoin de tout créer de zéro. Commencez avec notre bibliothèque de 30+ étapes pré-construites : se brosser les dents, s\'habiller, prendre le petit-déjeuner, préparer le cartable, et plus. Glissez, déposez, personnalisez. Créez une routine matinale complète en moins de 5 minutes.',
    'feature-4-meta': 'Créez des routines en minutes, pas en heures',

    'feature-5-title': 'Usage autonome avec mode kiosque',
    'feature-5-description': 'Donnez la tablette à votre enfant et prenez du recul. Le mode kiosque plein écran supprime les distractions, affiche de grandes zones tactiles, et le guide étape par étape. Il touche chaque vignette, la regarde se transformer, célèbre l\'achèvement. Vous pouvez boire votre café tant qu\'il est encore chaud.',
    'feature-5-meta': 'Construit l\'autonomie, réduit votre stress',

    'feature-6-title': 'Fonctionne pour toute l\'équipe de soin',
    'feature-6-description': 'Parents, grands-parents, nounous, thérapeutes - tout le monde utilise les mêmes routines visuelles. Fini le "mais Papa le fait différemment." Une approche cohérente entre tous les aidants signifie moins de confusion, moins de crises, des journées plus fluides.',
    'feature-6-meta': 'Même routine, chaque aidant',

    // Showcase Section
    'showcase-title': 'Voyez la magie en action',
    'showcase-description': 'Exemples réels de comment Vue&Do s\'adapte au monde de votre enfant. Regardez les routines se transformer au toucher pendant que le contexte donne vie à chaque scène.',
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
    'showcase-teeth-before': 'Étape : Se brosser les dents',
    'showcase-teeth-after': 'Complété : Dents propres !',
    'showcase-teeth-caption': 'Étape de routine matinale avec contexte météo (matin pluvieux)',

    // Example 2: Pajamas
    'showcase-pajamas-before': 'Étape : Mettre son pyjama',
    'showcase-pajamas-after': 'Complété : Prêt pour le dodo !',
    'showcase-pajamas-caption': 'Étape de routine du coucher avec contexte horaire (20h00, lune du soir)',

    // Example 3: Breakfast
    'showcase-breakfast-before': 'Étape : Prendre le petit-déjeuner',
    'showcase-breakfast-after': 'Complété : Prêt pour l\'école !',
    'showcase-breakfast-caption': 'Étape de routine matinale avec contexte jour d\'école (cartable, météo ensoleillée)',

    // Evidence Section
    'evidence-title': 'Soutenu par la recherche et l\'expertise',
    'evidence-description': 'Vue&Do est construit sur des décennies de pratiques validées scientifiquement en supports visuels et emplois du temps d\'activités pour apprenants neurodivers.',
    'stat-research-value': '25+',
    'stat-research-label': 'Années de recherche',
    'stat-studies-value': '15+',
    'stat-studies-label': 'Études évaluées par les pairs',
    'stat-frameworks-value': '3',
    'stat-frameworks-label': 'Cadres validés scientifiquement',
    'evidence-research-subtitle': 'Ce que montre la recherche',
    'evidence-list-1': 'Les emplois du temps visuels améliorent significativement l\'achèvement des tâches et réduisent les comportements problématiques chez les enfants avec trouble du spectre autistique (SAGE, 2024)',
    'evidence-list-2': 'Les calendriers d\'activités numériques montrent des résultats prometteurs pour augmenter l\'autonomie dans les activités de la vie quotidienne (PubMed, 2025)',
    'evidence-list-3': 'Supports visuels recommandés par la HAS (Haute Autorité de Santé) et la méthodologie TEACCH pour l\'accompagnement de l\'autisme',
    'evidence-list-4': 'Les supports visuels personnalisés augmentent l\'engagement et les comportements axés sur la tâche dans les environnements éducatifs et domestiques',
    'evidence-list-5': 'Le renforcement positif par feedback visuel immédiat renforce les comportements souhaités et construit la motivation (principes ABA)',
    'evidence-frameworks-subtitle': 'Construit sur des cadres éprouvés',
    'framework-teacch': 'TEACCH',
    'framework-teacch-desc': 'Approche d\'enseignement structuré',
    'framework-has': 'Recommandations HAS',
    'framework-has-desc': 'Standards de l\'autorité de santé',
    'framework-aba': 'Principes ABA',
    'framework-aba-desc': 'Analyse appliquée du comportement',

    // Benefits Section
    'benefits-title': 'Avantages pour toute la famille',
    'benefit-children-title': 'Pour les enfants',
    'benefit-children-1': 'Anxiété réduite autour des transitions quotidiennes',
    'benefit-children-2': 'Autonomie et confiance accrues',
    'benefit-children-3': 'Façon amusante et engageante d\'apprendre les routines',
    'benefit-children-4': 'Attentes claires réduisent la frustration',
    'benefit-parents-title': 'Pour les parents & aidants',
    'benefit-parents-1': 'Routines du matin et du coucher plus fluides',
    'benefit-parents-2': 'Moins de stress durant les transitions',
    'benefit-parents-3': 'Facile de créer et personnaliser les routines',
    'benefit-parents-4': 'Approche cohérente entre les aidants',
    'benefit-professionals-title': 'Pour les professionnels',
    'benefit-professionals-1': 'Outil d\'intervention validé scientifiquement',
    'benefit-professionals-2': 'Support cohérent dans tous les environnements',
    'benefit-professionals-3': 'Engagement collaboratif des familles',
    'benefit-professionals-4': 'Suivi des progrès et adaptation',
    'benefit-household-title': 'Pour le foyer',
    'benefit-household-1': 'Rythmes quotidiens plus paisibles',
    'benefit-household-2': 'Meilleure gestion du temps',
    'benefit-household-3': 'Conflits et crises réduits',
    'benefit-household-4': 'Célébrer ensemble les petites victoires',

    // How It Works
    'how-it-works-title': 'Démarrez en 3 étapes simples',
    'how-it-works-description': 'De l\'inscription aux routines super-héros en moins de 5 minutes. Sérieusement, c\'est aussi rapide.',
    'timeline-badge': 'Bêta en Q2 2025',
    'step1-title': 'Inscrivez-vous & créez votre foyer',
    'step1-description': 'Rejoignez avec un lien magique (pas de mot de passe requis). Ajoutez les membres de la famille, uploadez des photos optionnelles, et choisissez votre style BD préféré. Notre IA génère des avatars uniques en quelques secondes.',
    'step1-highlight': 'Prend moins de 2 minutes',
    'step2-title': 'Construisez votre première routine',
    'step2-description': 'Glissez-déposez parmi 30+ étapes pré-construites comme "se brosser les dents", "s\'habiller", "petit-déjeuner". Personnalisez icônes, ajoutez minuteurs, et prévisualisez votre BD en temps réel.',
    'step2-highlight': '30+ étapes de routine prêtes à utiliser',
    'step3-title': 'Toucher, transformer, célébrer',
    'step3-description': 'Votre enfant touche chaque vignette BD et la regarde se transformer magiquement. Quand il complète l\'étape, des récompenses visuelles apparaissent - les étoiles éclatent, les confettis tombent, les étincelles dansent. Ce renforcement positif crée des associations joyeuses avec les routines quotidiennes.',
    'step3-highlight': 'Renforcement positif validé scientifiquement par célébration visuelle',

    // Waitlist Section
    'waitlist-title': 'Rejoignez notre liste d\'attente bêta',
    'waitlist-description': 'Soyez parmi les premiers à découvrir Vue&Do lors du lancement. Accès anticipé, mises à jour exclusives, et aidez à façonner l\'avenir des routines visuelles neuro-inclusives.',
    'waitlist-benefit-1': 'Accès anticipé à la version bêta',
    'waitlist-benefit-2': 'Tarifs exclusifs pour les adopteurs précoces',
    'waitlist-benefit-3': 'Influence directe sur les fonctionnalités et le design',
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
    'footer-description': 'Transformer les routines quotidiennes en histoires visuelles personnalisées pour enfants neurodivers.',
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
    'footer-github': 'GitHub',
    'footer-status': 'Actuellement en développement - Bêta Q2 2025',
    'footer-copyright': '2025 Vue&Do. Tous droits réservés.',
    'footer-tagline': 'Créé avec attention pour les familles neurodiverses'
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
