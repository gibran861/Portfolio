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

document.querySelectorAll(".project").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  });
});

applyTranslations(currentLang);

// Project Details Modal Handling
const detailsModal = document.getElementById("detailsModal");
const closeDetailsBtn = document.querySelector(".close-details");
const prevProjectBtn = document.querySelector(".prev-project");
const nextProjectBtn = document.querySelector(".next-project");

const projects = Array.from(document.querySelectorAll(".project"));
let currentProjectIndex = -1;

function populateModal(index) {
  if (index < 0 || index >= projects.length) return;
  currentProjectIndex = index;
  const project = projects[index];
  const data = project.dataset;
  
  // Header & Content
  detailsModal.querySelector("h2").textContent = data.title;
  detailsModal.querySelector("#modalDesc").innerHTML = `<p>${data.desc}</p>`;
  
  // Features
  const featuresList = document.getElementById("modalFeaturesList");
  featuresList.innerHTML = "";
  if (data.features) {
    data.features.split(',').forEach(f => {
      const li = document.createElement("li");
      li.textContent = f.trim();
      featuresList.appendChild(li);
    });
  }

  // Technology Tags
  const tagsCloud = document.getElementById("modalTagsCloud");
  tagsCloud.innerHTML = "";
  if (data.tags) {
    data.tags.split(',').forEach(t => {
      const span = document.createElement("span");
      span.textContent = t.trim();
      tagsCloud.appendChild(span);
    });
  }

  // Media Gallery
  const gallery = document.getElementById("modalImagesGrid");
  gallery.innerHTML = "";
  if (data.images) {
    data.images.split(',').forEach(imgUrl => {
      if (!imgUrl.trim()) return;
      const img = document.createElement("img");
      img.src = imgUrl.trim();
      img.onclick = () => openImageZoom(img.src, data.title);
      gallery.appendChild(img);
    });
  }

  // Video Link
  const videoLink = document.getElementById("modalVideoLink");
  if (data.video) {
    videoLink.href = data.video;
    videoLink.style.display = "inline-flex";
  } else {
    videoLink.style.display = "none";
  }

  // Update button visibility/states
  prevProjectBtn.style.opacity = index === 0 ? "0.3" : "1";
  prevProjectBtn.style.pointerEvents = index === 0 ? "none" : "auto";
  nextProjectBtn.style.opacity = index === projects.length - 1 ? "0.3" : "1";
  nextProjectBtn.style.pointerEvents = index === projects.length - 1 ? "none" : "auto";

  detailsModal.scrollTop = 0; // Reset scroll position
}

projects.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a") || e.target.closest(".project-media")) return;
    populateModal(index);
    detailsModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

if (prevProjectBtn) {
  prevProjectBtn.onclick = () => populateModal(currentProjectIndex - 1);
}

if (nextProjectBtn) {
  nextProjectBtn.onclick = () => populateModal(currentProjectIndex + 1);
}

const closeDetailsModal = () => {
  detailsModal.style.display = "none";
  document.body.style.overflow = "auto";
};

if (closeDetailsBtn) closeDetailsBtn.onclick = closeDetailsModal;

// Image Zoom Modal Handling
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".modal-close");

function openImageZoom(src, alt) {
  imageModal.style.display = "flex";
  modalImg.src = src;
  captionText.innerHTML = alt || "";
  document.body.style.overflow = "hidden";
}

document.querySelectorAll(".project-media").forEach((img) => {
  img.style.cursor = "zoom-in";
  img.onclick = (e) => {
    e.stopPropagation();
    openImageZoom(img.src, img.alt);
  };
});

const closeImageZoom = () => {
  imageModal.style.display = "none";
  if (detailsModal.style.display !== "flex") {
    document.body.style.overflow = "auto";
  }
};

if (closeBtn) closeBtn.onclick = closeImageZoom;

// Close modals on click outside
window.addEventListener("click", (event) => {
  if (event.target == imageModal) closeImageZoom();
  if (event.target == detailsModal) closeDetailsModal();
});

// Close modals on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImageZoom();
    closeDetailsModal();
  }
});
