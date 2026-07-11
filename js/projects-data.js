const projectsData = [
  {
    id: 'aorte',
    title: 'Aorte',
    tag: { fr: 'Plateforme web', en: 'Web Platform' },
    description: {
      fr: 'Expérience web moderne et immersive conçue pour traduire l\'identité, la vision et les services d\'Aorte.',
      en: 'Modern and immersive web experience designed to translate Aorte\'s identity, vision, and services.'
    },
    image: './assets/images/aorte.png',
    liveUrl: 'https://aorte.africa',
    caseStudy: {
      overview: {
        fr: 'Aorte est une plateforme web innovante qui incarne l\'excellence et la modernité. Ce projet a été pensé pour offrir une expérience utilisateur immersive, reflétant les valeurs fondamentales de la marque à travers un design minimaliste et des interactions fluides.',
        en: 'Aorte is an innovative web platform that embodies excellence and modernity. This project was designed to offer an immersive user experience, reflecting the brand\'s core values through minimalist design and fluid interactions.'
      },
      role: { fr: 'Développeur Full-Stack & UI Designer', en: 'Full-Stack Developer & UI Designer' },
      duration: { fr: '3 mois', en: '3 months' },
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Figma'],
      features: [
        {
          title: { fr: 'Design Immersif', en: 'Immersive Design' },
          desc: {
            fr: 'Animations fluides et transitions harmonieuses pour une navigation captivante.',
            en: 'Smooth animations and harmonious transitions for an engaging navigation experience.'
          }
        },
        {
          title: { fr: 'Architecture Optimisée', en: 'Optimized Architecture' },
          desc: {
            fr: 'Structure modulaire garantissant des performances élevées et une maintenance simplifiée.',
            en: 'Modular structure ensuring high performance and simplified maintenance.'
          }
        },
        {
          title: { fr: 'Expérience Responsive', en: 'Responsive Experience' },
          desc: {
            fr: 'Adaptation parfaite à tous les écrans pour une expérience cohérente.',
            en: 'Perfect adaptation to all screen sizes for a consistent experience.'
          }
        }
      ],
      challenges: [
        {
          title: { fr: 'Performance et Richesses Visuelles', en: 'Performance vs Visual Richness' },
          desc: {
            fr: 'Équilibrer des animations complexes avec des temps de chargement optimaux a nécessité une approche méticuleuse de l\'optimisation des ressources.',
            en: 'Balancing complex animations with optimal load times required a meticulous approach to resource optimization.'
          }
        }
      ],
      results: [
        {
          title: { fr: 'Expérience Utilisateur', en: 'User Experience' },
          desc: {
            fr: 'Navigation fluide avec un taux d\'engagement utilisateur nettement amélioré.',
            en: 'Smooth navigation with significantly improved user engagement rates.'
          }
        }
      ]
    }
  },
  {
    id: 'edupulse',
    title: 'Edupulse',
    tag: { fr: 'Application web', en: 'Web Application' },
    description: {
      fr: 'Une plateforme de blogging moderne, ultra-rapide et minimaliste, conçue pour permettre aux étudiants de publier leurs travaux, expériences et cursus.',
      en: 'A modern, ultra-fast and minimalist blogging platform designed to allow students to publish their work, experiences, and curriculum.'
    },
    image: './assets/images/blogstudent.png',
    liveUrl: 'https://blogstudents.vercel.app',
    caseStudy: {
      overview: {
        fr: 'Edupulse est une plateforme de blogging nouvelle génération destinée aux étudiants. Elle combine vitesse exceptionnelle et design épuré pour offrir un espace d\'expression où les étudiants peuvent partager leurs connaissances, expériences et parcours académiques.',
        en: 'Edupulse is a next-generation blogging platform for students. It combines exceptional speed with clean design to offer a space for expression where students can share their knowledge, experiences, and academic journeys.'
      },
      role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      duration: { fr: '2 mois', en: '2 months' },
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Vercel'],
      features: [
        {
          title: { fr: 'Publication Rapide', en: 'Quick Publishing' },
          desc: {
            fr: 'Interface d\'édition intuitive permettant une mise en ligne en quelques clics.',
            en: 'Intuitive editing interface allowing publication in just a few clicks.'
          }
        },
        {
          title: { fr: 'Design Minimaliste', en: 'Minimalist Design' },
          desc: {
            fr: 'Interface épurée qui met le contenu au premier plan sans distraction.',
            en: 'Clean interface that puts content front and center without distraction.'
          }
        },
        {
          title: { fr: 'Performance Optimale', en: 'Optimal Performance' },
          desc: {
            fr: 'Architecture légère assurant des temps de chargement quasi instantanés.',
            en: 'Lightweight architecture ensuring near-instantaneous loading times.'
          }
        }
      ],
      challenges: [
        {
          title: { fr: 'Simplicité vs Richesse Fonctionnelle', en: 'Simplicity vs Feature Richness' },
          desc: {
            fr: 'Concevoir une interface minimaliste sans sacrifier les fonctionnalités essentielles a été un défi d\'équilibre constant.',
            en: 'Designing a minimalist interface without sacrificing essential features was a constant balancing challenge.'
          }
        }
      ],
      results: [
        {
          title: { fr: 'Adoption', en: 'Adoption' },
          desc: {
            fr: 'Plateforme adoptée par plusieurs groupes d\'étudiants pour leurs publications académiques.',
            en: 'Platform adopted by several student groups for their academic publications.'
          }
        }
      ]
    }
  },
  {
    id: 'anam',
    title: 'Anam App',
    tag: { fr: 'Application multiplateforme', en: 'Multi-platform Application' },
    description: {
      fr: 'Plateforme moderne pour le suivi des données météorologiques temps réel.',
      en: 'Modern platform for real-time monitoring of meteorological data.'
    },
    image: './assets/images/anam.png',
    liveUrl: 'https://anam-app.vercel.app',
    caseStudy: {
      overview: {
        fr: 'Anam App est une application météorologique moderne qui transforme des données complexes en visualisations claires et intuitives. Elle offre un suivi en temps réel des conditions météorologiques avec une interface élégante et réactive.',
        en: 'Anam App is a modern weather application that transforms complex data into clear, intuitive visualizations. It offers real-time tracking of weather conditions with an elegant and responsive interface.'
      },
      role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      duration: { fr: '6 semaines', en: '6 weeks' },
      technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'API REST', 'Vercel'],
      features: [
        {
          title: { fr: 'Données Temps Réel', en: 'Real-Time Data' },
          desc: {
            fr: 'Affichage dynamique des conditions météorologiques mises à jour en direct.',
            en: 'Dynamic display of weather conditions updated in real-time.'
          }
        },
        {
          title: { fr: 'Visualisations Graphiques', en: 'Graphical Visualizations' },
          desc: {
            fr: 'Graphiques interactifs pour une analyse intuitive des tendances météo.',
            en: 'Interactive charts for intuitive analysis of weather trends.'
          }
        },
        {
          title: { fr: 'Interface Adaptative', en: 'Adaptive Interface' },
          desc: {
            fr: 'Design responsive s\'adaptant à tous les appareils pour une consultation mobile optimale.',
            en: 'Responsive design adapting to all devices for optimal mobile consultation.'
          }
        }
      ],
      challenges: [
        {
          title: { fr: 'Fiabilité des Données', en: 'Data Reliability' },
          desc: {
            fr: 'Assurer une synchronisation précise et fiable des données météorologiques provenant de multiples sources API.',
            en: 'Ensuring accurate and reliable synchronization of weather data from multiple API sources.'
          }
        }
      ],
      results: [
        {
          title: { fr: 'Performance', en: 'Performance' },
          desc: {
            fr: 'Application rapide et réactive avec des temps de chargement optimisés pour une expérience mobile fluide.',
            en: 'Fast and responsive application with optimized loading times for a smooth mobile experience.'
          }
        }
      ]
    }
  },
  {
    id: 'quoteforge',
    title: 'QuoteForge',
    tag: { fr: 'Application web', en: 'Web Application' },
    description: {
      fr: 'Générateur de devis professionnel permettant de créer, personnaliser et gérer des devis en ligne avec une interface moderne et intuitive.',
      en: 'Professional quote generator for creating, customizing and managing online quotes with a modern and intuitive interface.'
    },
    image: './assets/images/quoteforge.png',
    liveUrl: 'https://quoteforges.vercel.app',
    caseStudy: {
      overview: {
        fr: 'QuoteForge est un générateur de devis en ligne conçu pour simplifier la création et la gestion de documents professionnels. L\'application offre une expérience fluide pour générer des devis personnalisés, avec un design moderne et des fonctionnalités de gestion avancées.',
        en: 'QuoteForge is an online quote generator designed to simplify the creation and management of professional documents. The application offers a smooth experience for generating customized quotes, with a modern design and advanced management features.'
      },
      role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      duration: { fr: '4 semaines', en: '4 weeks' },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
      features: [
        {
          title: { fr: 'Génération Rapide', en: 'Quick Generation' },
          desc: {
            fr: 'Créez des devis professionnels en quelques clics grâce à un formulaire intuitif et des modèles prédéfinis.',
            en: 'Create professional quotes in just a few clicks with an intuitive form and predefined templates.'
          }
        },
        {
          title: { fr: 'Personnalisation Totale', en: 'Full Customization' },
          desc: {
            fr: 'Personnalisez chaque aspect de vos devis : logo, couleurs, mentions légales et conditions générales.',
            en: 'Customize every aspect of your quotes: logo, colors, legal notices, and terms and conditions.'
          }
        },
        {
          title: { fr: 'Gestion des Clients', en: 'Client Management' },
          desc: {
            fr: 'Base de données clients intégrée pour un suivi efficace et une facturation récurrente simplifiée.',
            en: 'Integrated client database for effective tracking and simplified recurring billing.'
          }
        }
      ],
      challenges: [
        {
          title: { fr: 'Génération de PDF', en: 'PDF Generation' },
          desc: {
            fr: 'Implémenter un système de génération de PDF fiable tout en préservant la mise en page et la qualité d\'impression.',
            en: 'Implementing a reliable PDF generation system while preserving layout and print quality.'
          }
        }
      ],
      results: [
        {
          title: { fr: 'Efficacité', en: 'Efficiency' },
          desc: {
            fr: 'Réduction significative du temps de création de devis avec une interface utilisateur optimisée.',
            en: 'Significant reduction in quote creation time with an optimized user interface.'
          }
        }
      ]
    }
  }
];

const techIcons = {
  'React': './assets/icons/react.svg',
  'Next.js': './assets/icons/nextjs.svg',
  'TypeScript': './assets/icons/typescript.svg',
  'Node.js': './assets/icons/nodejs.svg',
  'Angular': './assets/icons/angular.svg',
  'Ionic': './assets/icons/ionic.svg',
  'JavaScript': './assets/icons/javascript.svg',
  'Flutter': './assets/icons/flutter.svg',
  'Tailwind CSS': './assets/icons/tailwindcss.svg',
  'PostgreSQL': './assets/icons/postgresql.svg',
  'Figma': './assets/icons/figma.svg',
  'MongoDB': './assets/icons/mongodb.svg',
  'Vercel': './assets/icons/vercel-fill.svg',
  'Chart.js': './assets/icons/chartjs.svg'
};
