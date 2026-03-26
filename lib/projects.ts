export type Project = {
  id: string;
  title: string;
  summary: { en: string; fr: string };
  description: { en: string; fr: string };
  features: { en: string[]; fr: string[] };
  tags: string[];
  images: string[];
  video?: string;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "acepoint",
    title: "Acepoint",
    summary: {
      en: "Full-stack sports club management platform with real-time booking, memberships, dashboards, and role-based interactions.",
      fr: "Plateforme de gestion de club de sport full-stack avec réservation en temps réel, adhésions, tableaux de bord et interactions basées sur les rôles.",
    },
    description: {
      en: "A full-stack sports club management platform designed to streamline operations across clubs and academies. It centralizes memberships, scheduling, bookings, and payments into a unified system with real-time interactions between players, coaches, and administrators, helping reduce manual operations and improve efficiency.",
      fr: "Une plateforme de gestion de club de sport full-stack conçue pour simplifier les opérations des clubs et académies. Elle centralise les adhésions, les plannings, les réservations et les paiements dans un système unifié avec des interactions en temps réel entre joueurs, entraîneurs et administrateurs, aidant ainsi à réduire les opérations manuelles et à améliorer l'efficacité.",
    },
    features: {
      en: [
        "Modular Multi-App Architecture (Club, Academy, Player/Coach)",
        "Real-time Court Booking & Scheduling System",
        "Membership & Subscription Management with Billing Integration",
        "Role-Based Access Control (Admin/Coach/Player)",
        "Interactive Dashboards & Reporting",
        "Seamless User Onboarding with Validation",
        "Payment Integration (Stripe)",
        "Email Notification System (Brevo)",
      ],
      fr: [
        "Architecture modulaire multi-applications (Club, Académie, Joueur/Entraîneur)",
        "Système de réservation et de planning des terrains en temps réel",
        "Gestion des adhésions et abonnements avec intégration de la facturation",
        "Contrôle d'accès basé sur les rôles (Admin/Entraîneur/Joueur)",
        "Tableaux de bord interactifs et rapports",
        "Intégration fluide des utilisateurs avec validation",
        "Intégration de paiement (Stripe)",
        "Système de notification par e-mail (Brevo)",
      ],
    },
    tags: ["Next.js", "Node.js", "TypeScript", "MySQL"],
    images: [
      "/Acepoint/user onboarding.gif",
      "/Acepoint/landing.png",
      "/Acepoint/memberships.png",
      "/Acepoint/schedule.JPG",
      "/Acepoint/login.JPG",
    ],
    video:
      "https://drive.google.com/file/d/1XME3AWHktHjniHaHXJzRjqR9UpKQ2CwW/view?usp=drive_link",
  },
  {
    id: "rdb",
    title: "RDB Rental",
    summary: {
      en: "Secure rental platform with authentication, onboarding flow, and role-based dashboards for property management.",
      fr: "Plateforme de location sécurisée avec authentification, flux d'intégration et tableaux de bord basés sur les rôles pour la gestion immobilière.",
    },
    description: {
      en: "A secure rental management platform focused on authentication, role-based access control, and guided onboarding. It simplifies property management workflows while ensuring strong data security and user experience.",
      fr: "Une plateforme de gestion de location sécurisée axée sur l'authentification, le contrôle d'accès basé sur les rôles et une intégration guidée. Elle simplifie les flux de gestion immobilière tout en garantissant une sécurité des données et une expérience utilisateur optimales.",
    },
    features: {
      en: [
        "Secure Authentication & Authorization (JWT-based)",
        "Multi-Role Access Control (Admin/User)",
        "Dynamic 7-Step Onboarding Workflow",
        "Password Recovery & Validation Flows",
        "Property & User Management Dashboard",
        "Form Validation with Strong UX Feedback",
      ],
      fr: [
        "Authentification et autorisation sécurisées (basées sur JWT)",
        "Contrôle d'accès multi-rôles (Admin/Utilisateur)",
        "Flux d'intégration dynamique en 7 étapes",
        "Flux de récupération de mot de passe et de validation",
        "Tableau de bord de gestion des propriétés et des utilisateurs",
        "Validation de formulaire avec un excellent feedback UX",
      ],
    },
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    images: [
      "/RDB/login.gif",
      "/RDB/roles.gif",
      "/RDB/CreateProperty.gif",
      "/RDB/Upload-Documents.gif",
    ],
  },
  {
    id: "acr",
    title: "ACR Membership Management",
    summary: {
      en: "Membership management system with optimized CRUD workflows and real-time validation for better admin experience.",
      fr: "Système de gestion des adhésions avec des flux CRUD optimisés et une validation en temps réel pour une meilleure expérience administrateur.",
    },
    description: {
      en: "A membership management module designed to optimize administrative workflows through intuitive CRUD operations and real-time validation, improving efficiency and usability for administrators.",
      fr: "Un module de gestion des adhésions conçu pour optimiser les flux administratifs via des opérations CRUD intuitives et une validation en temps réel, améliorant l'efficacité et la convivialité pour les administrateurs.",
    },
    features: {
      en: [
        "Optimized CRUD Operations (Add/Edit/Delete)",
        "Real-time Form Validation with Zod",
        "Responsive & Accessible UI Components",
        "State Synchronization Between UI & Backend",
        "Improved User Experience for Admin Workflows",
      ],
      fr: [
        "Opérations CRUD optimisées (Ajouter/Modifier/Supprimer)",
        "Validation de formulaire en temps réel avec Zod",
        "Composants UI réactifs et accessibles",
        "Synchronisation de l'état entre l'UI et le backend",
        "Expérience utilisateur améliorée pour les flux administratifs",
      ],
    },
    tags: ["React", "TypeScript", "Zod", "UX"],
    images: ["/ACR/ADD+EDIT membership.gif", "/ACR/delete membership.gif"],
  },
  {
    id: "pokerspire",
    title: "PokerSpire",
    summary: {
      en: "Agile poker planning application enabling real-time team estimation and collaborative sprint planning.",
      fr: "Application de Poker Planning Agile permettant l'estimation de l'équipe en temps réel et la planification collaborative de sprints.",
    },
    description: {
      en: "An Agile planning poker web application designed to improve team collaboration and estimation accuracy in Scrum environments. It enables real-time voting sessions, integrates with Jira for user story management, and provides advanced analytics to help teams make data-driven decisions during sprint planning.",
      fr: "Une application web de Planning Poker Agile conçue pour améliorer la collaboration d'équipe et la précision d'estimation dans les environnements Scrum. Elle permet des sessions de vote en temps réel, s'intègre à Jira pour la gestion des user stories et fournit des analyses avancées pour aider les équipes à prendre des décisions basées sur les données lors de la planification des sprints.",
    },
    features: {
      en: [
        "Real-time Collaborative Voting System with Anonymous Estimation",
        "Virtual Planning Rooms & Session Management",
        "Jira Integration for User Story Import & Synchronization",
        "Role-Based Access Control (Admin, Scrum Master, Product Owner, Developer)",
        "Estimation History & CSV Export",
        "Advanced Analytics & Team Performance Tracking",
        "Real-time Notifications & Session Timer",
        "Secure Authentication (JWT & OAuth2)",
        "Video Conferencing & Team Communication Tools",
      ],
      fr: [
        "Système de vote collaboratif en temps réel avec estimation anonyme",
        "Salles de planification virtuelles et gestion de session",
        "Intégration Jira pour l'importation et la synchronisation des user stories",
        "Contrôle d'accès basé sur les rôles (Admin, Scrum Master, Product Owner, Développeur)",
        "Historique des estimations et export CSV",
        "Analyses avancées et suivi des performances de l'équipe",
        "Notifications en temps réel et minuteur de session",
        "Authentification sécurisée (JWT & OAuth2)",
        "Outils de visioconférence et de communication d'équipe",
      ],
    },
    tags: ["Spring Boot", "Angular", "Java", "Agile", "Jira", "WebSocket"],
    images: [
      "/PokerSpire/projects.JPG",
      "/PokerSpire/session.JPG",
      "/PokerSpire/stats.JPG",
      "/PokerSpire/chat.png",
    ],
    video:
      "https://drive.google.com/file/d/1QHEnbiKQFWLjPnmXEwulCJLIfgP267V1/view?usp=drive_link",
  },
  {
    id: "manajero",
    title: "ManaJero KPI System",
    summary: {
      en: "Real-time Agile planning system with WebSocket-based voting and KPI dashboards for tracking team performance and sprint analytics.",
      fr: "Système de planification Agile en temps réel avec vote basé sur les WebSockets et tableaux de bord KPI pour le suivi des performances d'équipe et des analyses de sprint.",
    },
    description: {
      en: "A real-time Agile planning and analytics system developed during an internship as part of the ManaJero ERP platform. The application enhances Scrum poker planning by integrating live collaborative voting using WebSockets and advanced KPI dashboards to track team performance, sprint progress, and estimation accuracy, enabling data-driven decision making.",
      fr: "Un système de planification et d'analyse Agile en temps réel développé lors d'un stage dans le cadre de la plateforme ERP ManaJero. L'application améliore le Scrum Poker Planning en intégrant un vote collaboratif en direct via des WebSockets et des tableaux de bord KPI avancés pour suivre les performances de l'équipe, la progression du sprint et la précision de l'estimation, permettant ainsi une prise de décision basée sur les données.",
    },
    features: {
      en: [
        "Real-time Voting System using WebSockets for Live Collaboration",
        "KPI Dashboard with Data Visualization (Charts & Metrics)",
        "Sprint Velocity & Estimation Accuracy Tracking",
        "Developer Performance Analytics",
        "Live Session Management & Notifications",
        "Role-Based Access Control (Scrum Master & Developers)",
        "User Story & Project Tracking",
        "Email Invitations for Session Participation",
        "Secure Authentication & API Integration",
      ],
      fr: [
        "Système de vote en temps réel via WebSockets pour une collaboration en direct",
        "Tableau de bord KPI avec visualisation de données (graphiques et métriques)",
        "Suivi de la vélocité du sprint et de la précision d'estimation",
        "Analyses des performances des développeurs",
        "Gestion des sessions en direct et notifications",
        "Contrôle d'accès basé sur les rôles (Scrum Master et Développeurs)",
        "Suivi des user stories et des projets",
        "Invitations par e-mail pour participer aux sessions",
        "Authentification sécurisée et intégration API",
      ],
    },
    tags: ["Spring Boot", "Angular", "WebSocket", "MongoDB", "KPI", "Agile"],
    images: [
      "/manajero/kpi.JPG",
      "/manajero/kpi2.JPG",
      "/manajero/votting for scrum master.JPG",
      "/manajero/result.JPG",
    ],
    video:
      "https://drive.google.com/file/d/1hhQXpoQNGogrxlyJzzU4_TjMmUo-cxz8/view?usp=drive_link",
  },
  // {
  //   id: "upcoming",
  //   title: "Upcoming Project",
  //   summary: {
  //     en: "Innovative technology solution coming soon.",
  //     fr: "Une solution technologique innovante arrive bientôt.",
  //   },
  //   description: {
  //     en: "A future innovation currently in development. Bringing new perspectives to web application development.",
  //     fr: "Une future innovation actuellement en développement. Apporter de nouvelles perspectives au développement d'applications web.",
  //   },
  //   features: {
  //     en: ["Modern UI/UX", "Scalable Design", "Performance Focused"],
  //     fr: ["UI/UX moderne", "Design évolutif", "Axé sur la performance"],
  //   },
  //   tags: ["Future Tech"],
  //   images: [],
  //   isPlaceholder: true,
  // },
];
