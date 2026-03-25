"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/i18n";
import { publicUrl } from "@/lib/paths";
import { projects, type Project } from "@/lib/projects";
import { X } from "lucide-react";

function getVideoEmbedUrl(
  url: string | undefined,
): { url: string; type: "iframe" | "video" | "link" } | null {
  if (!url) return null;

  // Google Drive
  if (url.includes("drive.google.com")) {
    const idMatch = url.match(/\/file\/d\/([^/]+)/);
    if (idMatch) {
      return {
        url: `https://drive.google.com/file/d/${idMatch[1]}/preview`,
        type: "iframe",
      };
    }
  }

  // YouTube
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const idMatch = url.match(/(?:v=|\/embed\/|\/watch\?v=|\/)([^#&?]{11})/);
    if (idMatch) {
      return {
        url: `https://www.youtube.com/embed/${idMatch[1]}`,
        type: "iframe",
      };
    }
  }

  // Local or direct video files
  if (url.startsWith("/") || url.endsWith(".mp4") || url.endsWith(".webm")) {
    return {
      url: publicUrl(url),
      type: "video",
    };
  }

  return { url, type: "link" };
}

const THEME_KEY = "theme";

const stackItems = [
  {
    name: "React",
    href: "https://react.dev",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Angular",
    href: "https://angular.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Spring",
    href: "https://spring.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    href: "https://www.docker.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    href: "https://git-scm.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Playwright",
    href: "https://playwright.dev",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  },
  {
    name: "Jest",
    href: "https://jestjs.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
];

export default function PortfolioClient() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState(0);
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    type: "iframe" | "video";
  } | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      setTheme(stored);
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
    setTheme(next);
  };

  const toggleLang = () => {
    setLang((l) => (l === "en" ? "fr" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openDetails = useCallback((index: number) => {
    setDetailIndex(index);
    setDetailsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeDetails = useCallback(() => {
    setDetailsOpen(false);
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  }, []);

  const closeZoom = useCallback(() => {
    setZoom(null);
    if (!detailsOpen) document.body.style.overflow = "auto";
  }, [detailsOpen]);

  const openZoom = useCallback((src: string, alt: string) => {
    setZoom({ src, alt });
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeZoom();
        closeDetails();
        setActiveVideo(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDetails, closeZoom]);

  const current = projects[detailIndex];

  const onCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  const showPrev = () => {
    if (detailIndex > 0) setDetailIndex((i) => i - 1);
  };

  const showNext = () => {
    if (detailIndex < projects.length - 1) setDetailIndex((i) => i + 1);
  };

  useEffect(() => {
    if (detailsOpen && detailsRef.current) detailsRef.current.scrollTop = 0;
  }, [detailIndex, detailsOpen]);

  return (
    <>
      <div className="bg-blobs" aria-hidden>
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="logo">
            KK
          </a>
          <nav className="nav">
            <a href="#about">{t(lang, "nav.about")}</a>
            <a href="#projects">{t(lang, "nav.projects")}</a>
            <a href="#contact">{t(lang, "nav.contact")}</a>
          </nav>
          <div className="actions">
            <a href="#" className="cv-btn">
              {t(lang, "nav.cv")}
            </a>
            <button
              type="button"
              className="lang-btn"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button type="button" className="lang-btn" onClick={toggleLang}>
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero container reveal">
          <p className="hello">{t(lang, "hero.hello")}</p>
          <h1>{t(lang, "hero.name")}</h1>
          <h2>
            <span>{t(lang, "hero.role1")}</span>{" "}
            <span>{t(lang, "hero.role2")}</span>
          </h2>
          <p className="hero-text">{t(lang, "hero.text")}</p>
          <div className="hero-photo">
            <div className="photo-placeholder">
              <img src="/cv4.jpg" alt="Khalil Karoui" />
            </div>
          </div>
        </section>

        <section id="about" className="section container reveal">
          <h3>{t(lang, "about.title")}</h3>
          <p>{t(lang, "about.body")}</p>
          <h4>{t(lang, "about.stack")}</h4>
          <div className="stack-grid">
            {stackItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img src={item.icon} alt={item.name} />
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="section container reveal">
          <h3>{t(lang, "projects.title")}</h3>
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              index={index}
              project={project}
              lang={lang}
              onOpenDetails={() => openDetails(index)}
              onCardMouseMove={onCardMouseMove}
              onMediaClick={openZoom}
            />
          ))}
        </section>

        <section id="contact" className="section container reveal">
          <h3>{t(lang, "contact.title")}</h3>
          <p>{t(lang, "contact.text")}</p>
          <div className="contact-box">
            <p>
              <strong>Email:</strong> khaliljobrane.karoui@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +216 54 146 901
            </p>
            <p>
              <strong>Location:</strong> Sidi Bou Said, Tunis, Tunisia
            </p>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>{t(lang, "footer")}</p>
      </footer>

      <div
        className={`modal details-modal${detailsOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!detailsOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDetails();
        }}
      >
        <div className="modal-content-container" ref={detailsRef}>
          <button
            type="button"
            className="close-details"
            aria-label="Close"
            onClick={closeDetails}
          >
            <X size={20} />
          </button>
          <div className="modal-header">
            <h2>{current?.title}</h2>
          </div>
          <div className="modal-body">
            <div className="modal-images" id="modalImagesGrid">
              {current?.images.map((src) => (
                <img
                  key={src}
                  src={publicUrl(src)}
                  alt={current.title}
                  onClick={() => openZoom(publicUrl(src), current.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      openZoom(publicUrl(src), current.title);
                  }}
                  role="presentation"
                />
              ))}
            </div>
            <div className="modal-video">
              {(() => {
                const embed = getVideoEmbedUrl(current?.video);
                if (!embed) return null;

                const handlePlay = () => {
                  if (embed.type === "iframe" || embed.type === "video") {
                    setActiveVideo({ url: embed.url, type: embed.type });
                    document.body.style.overflow = "hidden";
                  } else {
                    window.open(embed.url, "_blank", "noopener,noreferrer");
                  }
                };

                return (
                  <button
                    type="button"
                    className="video-btn"
                    onClick={handlePlay}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    {t(lang, "projects.videoLink")}
                  </button>
                );
              })()}
            </div>
            <div className="modal-description" id="modalDesc">
              <p>{current?.description}</p>
            </div>
            <div className="modal-features">
              <h5>{t(lang, "modal.features")}</h5>
              <ul id="modalFeaturesList">
                {current?.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="modal-tags" id="modalTagsCloud">
              {current?.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="modal-navigation">
              <button
                type="button"
                className="nav-btn prev-project"
                onClick={showPrev}
                disabled={detailIndex === 0}
                style={{
                  opacity: detailIndex === 0 ? 0.3 : 1,
                  pointerEvents: detailIndex === 0 ? "none" : "auto",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span>{t(lang, "projects.prev")}</span>
              </button>
              <button
                type="button"
                className="nav-btn next-project"
                onClick={showNext}
                disabled={detailIndex >= projects.length - 1}
                style={{
                  opacity: detailIndex >= projects.length - 1 ? 0.3 : 1,
                  pointerEvents:
                    detailIndex >= projects.length - 1 ? "none" : "auto",
                }}
              >
                <span>{t(lang, "projects.next")}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal${zoom ? " is-open" : ""}`}
        id="imageModal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeZoom();
        }}
      >
        <button
          type="button"
          className="close-details2"
          aria-label="Close"
          onClick={closeZoom}
        >
          <X size={24} />
        </button>
        {zoom ? (
          <>
            <img className="modal-content" src={zoom.src} alt={zoom.alt} />
            <div id="modalCaption" className="modal-caption">
              {zoom.alt}
            </div>
          </>
        ) : null}
      </div>
      <div
        className={`modal video-modal${activeVideo ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveVideo(null);
        }}
      >
        <button
          type="button"
          className="close-details2"
          aria-label="Close"
          onClick={() => setActiveVideo(null)}
        >
          <X size={24} />
        </button>
        <div className="video-modal-content">
          {activeVideo?.type === "iframe" ? (
            <iframe
              src={activeVideo.url}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Project Video"
            />
          ) : activeVideo?.type === "video" ? (
            <video controls autoPlay src={activeVideo.url} />
          ) : null}
        </div>
      </div>
    </>
  );
}

function ProjectRow({
  project,
  index,
  lang,
  onOpenDetails,
  onCardMouseMove,
  onMediaClick,
}: {
  project: Project;
  index: number;
  lang: Lang;
  onOpenDetails: () => void;
  onCardMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMediaClick: (src: string, alt: string) => void;
}) {
  const n = index + 1;
  return (
    <article
      className="project reveal interactive-card"
      onMouseMove={onCardMouseMove}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest(".project-media")) return;
        onOpenDetails();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails();
        }
      }}
      tabIndex={0}
    >
      <div className="project-info">
        <h4>
          #{n} {project.title}
        </h4>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="media-block">
        {project.isPlaceholder ? (
          <div
            style={{
              background: "var(--accent-soft)",
              width: "100%",
              height: "250px",
              borderRadius: "12px",
              display: "grid",
              placeItems: "center",
              color: "var(--muted)",
              fontWeight: 600,
            }}
          >
            {lang === "fr" ? "Bientot disponible" : "Coming Soon"}
          </div>
        ) : (
          project.images.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              className="project-media"
              src={publicUrl(src)}
              alt={project.title}
              loading="lazy"
              onClick={(e) => {
                e.stopPropagation();
                onMediaClick(publicUrl(src), project.title);
              }}
            />
          ))
        )}
      </div>
    </article>
  );
}
