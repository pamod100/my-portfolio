"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  year: string;
  githubUrl?: string;
  images?: string[];
  image?: string;
}

function getImages(p: Project): string[] {
  if (p.images && p.images.length > 0) return p.images;
  if (p.image) return [p.image];
  return [];
}

function Carousel({ images, hovered }: { images: string[]; hovered: boolean }) {
  const [active, setActive] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    ref.current = setInterval(() => setActive(p => (p + 1) % images.length), 3000);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [images.length]);

  return (
    <div style={{ position: "relative", height: "196px", overflow: "hidden", background: "#0d0d0d" }}>
      {images.map((src, i) => (
        <div key={src} style={{
          position: "absolute", inset: 0,
          opacity: i === active ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}>
          <Image
            src={src}
            alt=""
            fill
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              filter: hovered ? "brightness(0.8)" : "brightness(0.6)",
              transition: "transform 0.6s ease, filter 0.3s ease",
            }}
          />
        </div>
      ))}

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "72px",
        background: "linear-gradient(to bottom, transparent, var(--bg-card))",
        pointerEvents: "none", zIndex: 2,
      }} />

      {/* Count badge */}
      {images.length > 1 && (
        <div style={{
          position: "absolute", top: "10px", right: "10px",
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "100px",
          padding: "2px 9px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.75)",
          fontWeight: 500,
          letterSpacing: "0.04em",
          zIndex: 3,
        }}>
          {active + 1} / {images.length}
        </div>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div style={{
          position: "absolute", bottom: "10px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: "5px", zIndex: 3,
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: "5px",
                width: i === active ? "16px" : "5px",
                borderRadius: "100px",
                background: i === active ? "var(--accent)" : "rgba(255,255,255,0.25)",
                border: "none", padding: 0, cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project; index?: number }) {
  const [hovered, setHovered] = useState(false);
  const images = getImages(project);
  const hasImages = images.length > 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)",
        border: "1px solid",
        borderColor: hovered ? "rgba(232,255,90,0.35)" : "var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(232,255,90,0.07)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Only render carousel if images exist — no placeholder for image-less cards */}
      {hasImages && <Carousel images={images} hovered={hovered} />}

      <div style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flex: 1,
        // Extra top padding for cards with no image so content doesn't feel cramped at top
        paddingTop: hasImages ? "20px" : "28px",
      }}>

        {/* Year + GitHub row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--accent)",
            background: "rgba(232,255,90,0.07)",
            border: "1px solid rgba(232,255,90,0.15)",
            borderRadius: "100px",
            padding: "3px 10px",
          }}>
            {project.year}
          </span>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              style={{
                width: "28px", height: "28px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: hovered ? "rgba(232,255,90,0.22)" : "var(--border)",
                background: hovered ? "rgba(232,255,90,0.07)" : "transparent",
                color: hovered ? "var(--accent)" : "var(--text-muted)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "15px",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}>
          {project.title}
        </h3>

        {/* Description — show more lines when no image */}
        <p style={{
          fontSize: "12.5px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          flex: 1,
          display: "-webkit-box",
          WebkitLineClamp: hasImages ? 3 : 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {project.description}
        </p>

        <div style={{ height: "1px", background: "var(--border)" }} />

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} className="tag" style={{ fontSize: "10px" }}>{tag}</span>
          ))}
          {project.tags.length > 5 && (
            <span style={{ fontSize: "11px", color: "var(--text-muted)", alignSelf: "center", padding: "2px 4px" }}>
              +{project.tags.length - 5}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}