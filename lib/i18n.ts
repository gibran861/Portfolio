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
    "nav.about": "A propos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cv": "Telecharger CV",
    "hero.hello": "Bonjour, je suis",
    "hero.name": "Khalil Jobrane Karoui",
    "hero.role1": "Developpeur",
    "hero.role2": "Logiciel",
    "hero.text":
      "Developpeur Full-Stack junior qui construit des applications performantes, avec un focus sur l'UX et une architecture evolutive.",
    "about.title": "A propos de moi.",
    "about.body":
      "Ingenieur logiciel junior passionne par l'architecture et le developpement web. Experience pratique allant des stages jusqu'a des plateformes en production, avec une approche rigoureuse et collaborative.",
    "about.stack": "Ma Stack Technique",
    "projects.title": "Projets",
    "contact.title": "Contact.",
    "contact.text":
      "Contactez-moi ou envoyez-moi un e-mail directement a khaliljobrane.karoui@gmail.com",
    footer: "© 2026 Khalil Karoui. Tous droits reserves.",
    "projects.videoLink": "Voir la video complete",
    "projects.prev": "Precedent",
    "projects.next": "Suivant",
    "modal.features": "Fonctionnalites cles",
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? key;
}
