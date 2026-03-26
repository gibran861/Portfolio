export type Lang = "en" | "fr";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",
    "hero.hello": "Hello, I'm",
    "hero.name": "Khalil Jobrane Karoui",
    "hero.role1": "Software",
    "hero.role2": "Developer",
    "hero.text":
      "Junior Full-Stack Developer building high-performance applications with a focus on clean UX and scalable architecture.",
    "about.title": "About Me.",
    "about.body":
      "Junior Software Engineer passionate about software architecture and web development. Hands-on experience from internships to production platforms, with a detail-oriented and collaborative mindset.",
    "about.stack": "My Tech Stack",
    "projects.title": "Projects",
    "contact.title": "Get In Touch.",
    "contact.text":
      "Get in touch or send me an email directly at khaliljobrane.karoui@gmail.com",
    footer: "© 2026 Khalil Karoui. All rights reserved.",
    "projects.videoLink": "Watch Full Video",
    "projects.prev": "Previous",
    "projects.next": "Next",
    "modal.features": "Core Features",
  },
  fr: {
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cv": "Télécharger CV",
    "hero.hello": "Bonjour, je suis",
    "hero.name": "Khalil Jobrane Karoui",
    "hero.role1": "Développeur",
    "hero.role2": "Logiciel",
    "hero.text":
      "Développeur Full-Stack junior qui construit des applications performantes, avec un focus sur l'UX et une architecture évolutive.",
    "about.title": "À propos de moi.",
    "about.body":
      "Ingénieur logiciel junior passionné par l'architecture et le développement web. Expérience pratique allant des stages jusqu'à des plateformes en production, avec une approche rigoureuse et collaborative.",
    "about.stack": "Ma Stack Technique",
    "projects.title": "Projets",
    "contact.title": "Contact.",
    "contact.text":
      "Contactez-moi ou envoyez-moi un e-mail directement à khaliljobrane.karoui@gmail.com",
    footer: "© 2026 Khalil Karoui. Tous droits réservés.",
    "projects.videoLink": "Voir la vidéo complète",
    "projects.prev": "Précédent",
    "projects.next": "Suivant",
    "modal.features": "Fonctionnalités clés",
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? key;
}
