"use client";

import { useState } from "react";

export interface Project {
  title:       string;
  description: string;
  tags:        string[];
  year:        string;
  liveUrl?:    string;
  githubUrl?:  string;
  featured?:   boolean;
}

interface ProjectCardProps {
  project: Project;
  index:   number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:       "relative",
        background:     hovered ? "var(--bg-hover)" : "var(--bg-card)",
        border:         `1px solid ${hovered ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius:   "16px",
        padding:        "32px",
        cursor:         "default",
        transition:     "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform:      hovered ? "translateY(-4px)" : "translateY(0)",
        overflow:       "hidden",
        animationDelay: `${index * 0.1}s`,
      }}
      className="fade-up"
    >
      {/* Featured badge */}
      {project.featured && (
        <span
          style={{
            position:      "absolute",
            top:           "20px",
            right:         "20px",
            padding:       "3px 10px",
            background:    "var(--accent-dim)",
            border:        "1px solid rgba(232,255,90,0.2)",
            borderRadius:  "100px",
            fontSize:      "10px",
            fontWeight:    600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color:         "var(--accent)",
          }}
        >
          Featured
        </span>
      )}

      {/* Accent line top */}
      <div
        style={{
          position:   "absolute",
          top:        0,
          left:       "32px",
          right:      "32px",
          height:     "1px",
          background: hovered
            ? "linear-gradient(90deg, transparent, var(--accent), transparent)"
            : "transparent",
          transition: "all 0.4s ease",
        }}
      />

      {/* Number */}
      <p
        style={{
          fontFamily:    "var(--font-heading)",
          fontSize:      "12px",
          fontWeight:    700,
          letterSpacing: "0.1em",
          color:         "var(--text-muted)",
          marginBottom:  "20px",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily:    "var(--font-heading)",
          fontSize:      "22px",
          fontWeight:    700,
          color:         hovered ? "var(--accent)" : "var(--text-primary)",
          marginBottom:  "12px",
          lineHeight:    1.2,
          transition:    "color 0.25s ease",
          letterSpacing: "-0.01em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize:     "14px",
          lineHeight:   1.7,
          color:        "var(--text-secondary)",
          marginBottom: "28px",
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display:      "flex",
          flexWrap:     "wrap",
          gap:          "8px",
          marginBottom: "28px",
        }}
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding:       "4px 10px",
              background:    "transparent",
              border:        "1px solid var(--border-hover)",
              borderRadius:  "100px",
              fontSize:      "11px",
              fontWeight:    400,
              color:         "var(--text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer row */}
      <div
        style={{
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize:  "12px",
            color:     "var(--text-muted)",
            fontWeight: 400,
          }}
        >
          {project.year}
        </span>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color:      "var(--text-muted)",
                transition: "color 0.2s ease",
                display:    "flex",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:     "flex",
                alignItems:  "center",
                gap:         "6px",
                fontSize:    "12px",
                fontWeight:  500,
                color:       hovered ? "var(--accent)" : "var(--text-muted)",
                transition:  "color 0.2s ease",
                letterSpacing: "0.04em",
              }}
            >
              Live
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}