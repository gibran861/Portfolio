const translations = {
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
    "hero.photo": "Your Photo Placeholder",
    "about.title": "About Me.",
    "about.body":
      "Junior Software Engineer passionate about software architecture and web development. Hands-on experience from internships to production platforms, with a detail-oriented and collaborative mindset.",
    "about.stack": "My Tech Stack",
    "projects.title": "Projects",
    "projects.p1desc":
      "Tennis club management platform with memberships, subscriptions, bookings, dashboards, and reporting.",
    "projects.p2desc":
      "Rental management platform with secure login, password recovery, and a 7-step dynamic onboarding flow.",
    "projects.p3desc":
      "Membership management workflows with add/edit/delete actions and smoother user journeys.",
    "contact.title": "Get In Touch.",
    "contact.text":
      "Get in touch or send me an email directly at khaliljobrane.karoui@gmail.com",
    footer: "© 2026 Khalil Karoui. All rights reserved.",
  },
  fr: {
    "nav.about": "A propos",
    "nav.experience": "Experience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cv": "Telecharger CV",
    "hero.hello": "Bonjour, je suis",
    "hero.name": "Khalil Jobrane Karoui",
    "hero.role1": "Developpeur",
    "hero.role2": "Logiciel",
    "hero.text":
      "Developpeur Full-Stack junior qui construit des applications performantes, avec un focus sur l'UX et une architecture evolutive.",
    "hero.photo": "Emplacement Photo Profil",
    "about.title": "A propos de moi.",
    "about.body":
      "Ingenieur logiciel junior passionne par l'architecture et le developpement web. Experience pratique allant des stages jusqu'a des plateformes en production, avec une approche rigoureuse et collaborative.",
    "about.stack": "Ma Stack Technique",
    "projects.title": "Projets",
    "projects.p1desc":
      "Plateforme de gestion de club de tennis avec membres, abonnements, reservations, tableaux de bord et reporting.",
    "projects.p2desc":
      "Plateforme de gestion locative avec connexion securisee, recuperation de mot de passe et onboarding dynamique en 7 etapes.",
    "projects.p3desc":
      "Flux de gestion des abonnements avec ajout/modification/suppression et une experience utilisateur plus fluide.",
    "contact.title": "Contact.",
    "contact.text":
      "Contactez-moi ou envoyez-moi un e-mail directement a khaliljobrane.karoui@gmail.com",
    footer: "© 2026 Khalil Karoui. Tous droits reserves.",
  },
};

let currentLang = "en";
const toggleBtn = document.getElementById("langToggle");
const themeBtn = document.getElementById("themeToggle");

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[lang][key];
    if (value) node.textContent = value;
  });
  toggleBtn.textContent = lang === "en" ? "FR" : "EN";
}

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  applyTranslations(currentLang);
});

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.documentElement.setAttribute("data-theme", storedTheme);
}

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll(".interactive-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  });
});

applyTranslations(currentLang);

// Image Zoom Modal Handling
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.getElementsByClassName("modal-close")[0];

document.querySelectorAll(".project-media").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };
});

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

closeBtn.onclick = closeModal;

// Close on click outside image
window.onclick = (event) => {
  if (event.target == modal) {
    closeModal();
  }
};

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
