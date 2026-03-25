export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  tags: string[];
  images: string[];
  video?: string;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "acepoint",
    title: "Acepoint",
    summary:
      "Full-stack sports club management platform with real-time booking, memberships, dashboards, and role-based interactions.",
    description:
      "A full-stack sports club management platform designed to streamline operations across clubs and academies. It centralizes memberships, scheduling, bookings, and payments into a unified system with real-time interactions between players, coaches, and administrators, helping reduce manual operations and improve efficiency.",
    features: [
      "Modular Multi-App Architecture (Club, Academy, Player/Coach)",
      "Real-time Court Booking & Scheduling System",
      "Membership & Subscription Management with Billing Integration",
      "Role-Based Access Control (Admin/Coach/Player)",
      "Interactive Dashboards & Reporting",
      "Seamless User Onboarding with Validation",
      "Payment Integration (Stripe)",
      "Email Notification System (Brevo)",
    ],
    tags: ["Next.js", "Node.js", "TypeScript", "MySQL"],
    images: [
      "/Acepoint/user onboarding.gif",
      "/Acepoint/landing.png",
      "/Acepoint/memberships.png",
      "/Acepoint/schedule.JPG",
    ],
    video: "/Acepoint/full-video/Acepoint full project.mp4",
  },
  {
    id: "rdb",
    title: "RDB Rental",
    summary:
      "Secure rental platform with authentication, onboarding flow, and role-based dashboards for property management.",
    description:
      "A secure rental management platform focused on authentication, role-based access control, and guided onboarding. It simplifies property management workflows while ensuring strong data security and user experience.",
    features: [
      "Secure Authentication & Authorization (JWT-based)",
      "Multi-Role Access Control (Admin/User)",
      "Dynamic 7-Step Onboarding Workflow",
      "Password Recovery & Validation Flows",
      "Property & User Management Dashboard",
      "Form Validation with Strong UX Feedback",
    ],
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    images: ["/RDB/login.gif", "/RDB/roles.gif"],
  },
  {
    id: "acr",
    title: "ACR Membership Management",
    summary:
      "Membership management system with optimized CRUD workflows and real-time validation for better admin experience.",
    description:
      "A membership management module designed to optimize administrative workflows through intuitive CRUD operations and real-time validation, improving efficiency and usability for administrators.",
    features: [
      "Optimized CRUD Operations (Add/Edit/Delete)",
      "Real-time Form Validation with Zod",
      "Responsive & Accessible UI Components",
      "State Synchronization Between UI & Backend",
      "Improved User Experience for Admin Workflows",
    ],
    tags: ["React", "TypeScript", "Zod", "UX"],
    images: [
      "/ACR/ADD+EDIT membership.gif",
      "/ACR/delete membership.gif",
    ],
  },
  {
    id: "pokerspire",
    title: "PokerSpire",
    summary:
      "Agile poker planning application enabling real-time team estimation and collaborative sprint planning.",
    description:
      "An Agile planning poker web application designed to improve team collaboration and estimation accuracy in Scrum environments. It enables real-time voting sessions, integrates with Jira for user story management, and provides advanced analytics to help teams make data-driven decisions during sprint planning.",
    features: [
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
    tags: ["Spring Boot", "Angular", "Java", "Agile", "Jira", "WebSocket"],
    images: [
      "/PokerSpire/projects.JPG",
      "/PokerSpire/session.JPG",
      "/PokerSpire/stats.JPG",
      "/PokerSpire/chat.png",
    ],
    video: "/PokerSpire/Gemnius_4SAE6_Commercial_video.mp4",
  },
  {
    id: "manajero",
    title: "ManaJero KPI System",
    summary:
      "Real-time Agile planning system with WebSocket-based voting and KPI dashboards for tracking team performance and sprint analytics.",
    description:
      "A real-time Agile planning and analytics system developed during an internship as part of the ManaJero ERP platform. The application enhances Scrum poker planning by integrating live collaborative voting using WebSockets and advanced KPI dashboards to track team performance, sprint progress, and estimation accuracy, enabling data-driven decision making.",
    features: [
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
    tags: ["Spring Boot", "Angular", "WebSocket", "MongoDB", "KPI", "Agile"],
    images: [
      "/manajero/kpi.JPG",
      "/manajero/kpi2.JPG",
      "/manajero/votting for scrum master.JPG",
      "/manajero/result.JPG",
    ],
  },
  {
    id: "upcoming",
    title: "Upcoming Project",
    summary: "Innovative technology solution coming soon.",
    description:
      "A future innovation currently in development. Bringing new perspectives to web application development.",
    features: ["Modern UI/UX", "Scalable Design", "Performance Focused"],
    tags: ["Future Tech"],
    images: [],
    isPlaceholder: true,
  },
];
