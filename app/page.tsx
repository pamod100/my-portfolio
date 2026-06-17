"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard, { Project } from "@/components/ProjectCard";

/* ─── Data ─────────────────────────────────────────────── */

const projects: Project[] = [
  {
    title: "AgriLease – Agricultural Machinery Rental Platform",
    description:
      "Final HND computing project. Web-based sharing economy marketplace connecting machine owners (Lessors) with farmers (Lessees) across Sri Lanka. Built with Vanilla PHP, MySQL, Tailwind CSS, and JavaScript. Designed and executed a 30-case black-box test plan; developed backend PHP API endpoints for fleet management, booking lifecycle, and the Lessor dashboard. Implemented OWASP security audits, PHP PDO prepared statements, and RBAC with session-based authentication.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "Leaflet.js", "Tesseract.js", "RBAC", "QA", "Agile/Scrum"],
    year: "Nov 2025 – May 2026",
    githubUrl: "https://github.com/pamod100",
    images: [
      "/projects/agrilease-1.png",
      "/projects/agrilease-2.png",
      "/projects/agrilease-3.png",
      "/projects/agrilease-4.png",
      "/projects/agrilease-5.png",
      "/projects/agrilease-6.png",
      "/projects/agrilease-7.png",
      "/projects/agrilease-8.png",
      "/projects/agrilease-9.png",
      "/projects/agrilease-10.png",
      
    ],
  },
  {
    title: "KMC Event Management Platform",
    description:
      "SOA-based REST API + web client for the Kandy Municipal Council. Supports event creation/management, participant registration, and public search/filter by date and type. Implemented RBAC with organizer and public dashboards; enables third-party API integrations to eliminate manual data entry.",
    tags: ["ASP.NET Core", "C#", "REST API", "SQL Server", "JavaScript", "RBAC"],
    year: "Feb – Apr 2026",
    githubUrl: "https://github.com/pamod100",
    images: [
      "/projects/kmc-1.png",
      "/projects/kmc-2.png",
      "/projects/kmc-3.png",
      "/projects/kmc-4.png",
      "/projects/kmc-5.png",
      "/projects/kmc-6.png",
      "/projects/kmc-7.png",
      "/projects/kmc-8.png",
      "/projects/kmc-9.png",
      "/projects/kmc-10.png",
    ],
  },
  {
    title: "Medicare Plus – Healthcare Web App",
    description:
      "Secure web application to digitize hospital operations and patient-doctor communication. Features Role-Based Access Control with Admin, Doctor, and Patient portals, plus real-time appointment checker and live chat via AJAX. Normalised MySQL database for patient records, appointments, and authentication.",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "RBAC", "Bootstrap"],
    year: "Oct – Nov 2025",
    githubUrl: "https://github.com/pamod100",
    images: [
      "/projects/medicare-1.png",
      "/projects/medicare-2.png",
      "/projects/medicare-3.png",
      "/projects/medicare-4.png",
      "/projects/medicare-5.png",
      "/projects/medicare-6.png",
      "/projects/medicare-7.png",
      "/projects/medicare-8.png",
      "/projects/medicare-9.png",
      "/projects/medicare-10.png",
    ],
  },
  {
    title: "TechCare – Device Repair App",
    description:
      "Native Android application for device repair services with SQLite database for user authentication, booking management, and service records. Built smooth Material Design UI with navigation across repair service categories.",
    tags: ["Java", "XML", "Android Studio", "SQLite", "Material Design", "GitHub"],
    year: "Dec 2025 – Jan 2026",
    githubUrl: "https://github.com/pamod100",
    images: [
      "/projects/techcare-1.png",
      "/projects/techcare-2.png",
      "/projects/techcare-3.png",
      "/projects/techcare-4.png",
      "/projects/techcare-5.png",
      "/projects/techcare-6.png",
      "/projects/techcare-7.png",
      "/projects/techcare-8.png",
      "/projects/techcare-9.png",
      "/projects/techcare-10.png",
    ],
  },
  {
    title: "BrainPath – Educational Roadmap App",
    description:
      "Mobile application digitizing the Sri Lankan national curriculum into an interactive node-based roadmap. Contributed as QA — conducted functional testing, bug tracking, and participated in Agile sprint reviews across multiple release cycles.",
    tags: ["Android Studio", "REST APIs", "JSON", "Agile/Scrum", "Jira", "Figma"],
    year: "Sep 2025 – Present",
    githubUrl: "https://github.com/pamod100",

  },
  {
    title: "Little Haven – Bookstore Management",
    description:
      "Management system to digitize bookstore workflows including inventory tracking and sales processing. Implemented CRUD operations, user role management, and data modeling with Java and MySQL using OOP design patterns.",
    tags: ["Java", "MySQL", "JDBC", "CRUD", "OOP"],
    year: "Apr – Jul 2025",
    githubUrl: "https://github.com/pamod100",
    images: [
      "/projects/littlehaven-1.png",
      "/projects/littlehaven-2.png",
      "/projects/littlehaven-3.png",
      "/projects/littlehaven-4.png",
      "/projects/littlehaven-5.png",
      "/projects/littlehaven-6.png",
      "/projects/littlehaven-7.png",
      "/projects/littlehaven-8.png",
      "/projects/littlehaven-9.png",
      "/projects/littlehaven-10.png",
    ],
  },
  {
    title: "Furniture Village – Ordering System",
    description:
      "Menu-driven C++ console application automating furniture inventory control and order processing. Includes user login, item management, order placement with live inventory updates, and a full SRS document with test cases.",
    tags: ["C++", "OOP", "File Handling", "Menu-Driven Architecture"],
    year: "Feb – Mar 2025",
    githubUrl: "https://github.com/pamod100",
  
  },
  {
    title: "TechVille Municipal Database System",
    description:
      "Centralised relational database for municipal management covering citizens, land use, and building permits. Normalised schemas to 3NF, wrote SQL DDL/DML scripts, and validated correctness with a structured black-box test plan.",
    tags: ["MySQL", "SQL", "Schema Design", "Normalisation (3NF)", "Black-Box Testing"],
    year: "Jun 2025",
    githubUrl: "https://github.com/pamod100",
    
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Java", "C++", "C#", "JavaScript", "PHP", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "PHP", "AJAX", "ASP.NET Core", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Mobile Development",
    items: ["Android Studio", "Android SDK", "Java (Android)", "XML", "SQLite", "Material Design"],
  },
  {
    category: "Tools & Methods",
    items: ["Git", "GitHub", "Figma", "Postman", "Agile / Scrum", "Jira", "ClickUp", "Black-Box Testing"],
  },
];

/* ─── Component ─────────────────────────────────────────── */

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent,  setFormSent]  = useState(false);
  const heroRef                   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mojydzbb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });
    if (res.ok) setFormSent(true);
  };

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />

      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "72px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "64px",
              alignItems: "center",
            }} className="hero-grid">

              {/* LEFT — text content */}
              <div>
                <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 14px", background: "rgba(232,255,90,0.06)", border: "1px solid rgba(232,255,90,0.15)", borderRadius: "100px", marginBottom: "40px" }}>
                  <span className="glow-dot" />
                  <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.06em" }}>
                    HND Graduate &amp; open to opportunities
                  </span>
                </div>

                <p className="fade-up" style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px", animationDelay: "0.05s" }}>
                  Pamod Dhananjana
                </p>

                <h1 className="fade-up" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "32px", animationDelay: "0.1s" }}>
                  Software
                  <br />
                  <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>
                    Engineer.
                  </span>
                </h1>

                <p className="fade-up" style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "540px", marginBottom: "48px", animationDelay: "0.2s" }}>
                  HND graduate in Computer Software Engineering (ICBT Campus — Cardiff
                  Metropolitan University), specialising in full-stack web development,
                  Android apps, and QA engineering.
                </p>

                <div className="fade-up" style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", animationDelay: "0.3s" }}>
                  <a href="#projects" className="btn btn-primary">
                    View projects
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#contact" className="btn btn-outline">Get in touch</a>
                </div>
              </div>

              {/* RIGHT — profile photo */}
              <div className="fade-up" style={{ animationDelay: "0.25s", flexShrink: 0 }}>
                <div style={{
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid rgba(232,255,90,0.3)",
                  position: "relative",
                  boxShadow: "0 0 60px rgba(232,255,90,0.06)",
                }}>
                  <Image
                    src="/profile.jpg.jpeg"
                    alt="Pamod Dhananjana"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="fade-up"
            style={{
              position: "absolute",
              bottom: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              animationDelay: "0.8s",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em" }}>SCROLL</span>
            <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, var(--text-muted), transparent)", animation: "scrollLine 2s ease-in-out infinite" }} />
          </div>
        </section>

        <div className="divider" />

        {/* ── ABOUT ────────────────────────────────────────── */}
        <section id="about">
          <div className="container">
            <p className="section-label">About me</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="about-grid">
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "32px" }}>
                  Building software that
                  <span style={{ color: "var(--accent)" }}> solves real problems.</span>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "20px" }}>
                  I'm Pamod Dhananjana, a Software Engineering graduate — I recently
                  completed my Higher National Diploma at ICBT Campus (Cardiff
                  Metropolitan University). I specialise in full-stack web development,
                  Android apps, and QA engineering.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "20px" }}>
                  My final project, AgriLease, is a web-based agricultural machinery
                  rental platform built for Sri Lankan farmers — I served as QA &
                  Integration Specialist and Back-end Developer. I've also shipped a
                  native Android repair app, a healthcare platform with RBAC, and a
                  SOA-based event management system.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "40px" }}>
                  Based in Kiribathgoda, Sri Lanka 🇱🇰 — actively seeking junior developer
                  roles in Android or full-stack development.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href="#contact" className="btn btn-primary">Let's work together</a>
                  <a
                    href="/Pamod_Dhananjana.pdf"
                    download="Pamod_Dhananjana.pdf"
                    className="btn btn-outline"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round"/>
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {[
                  { value: "8+",  label: "Real-world projects"              },
                  { value: "3",   label: "Platforms (Web, Android, Systems)" },
                  { value: "HND", label: "Cardiff Met University — Completed" },
                  { value: "🇱🇰",  label: "Kiribathgoda, Sri Lanka"          },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: "36px 28px" }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: "44px", fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: "8px", letterSpacing: "-0.02em" }}>
                      {stat.value}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education block */}
            <div style={{ marginTop: "80px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "36px", display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ width: "48px", height: "48px", background: "var(--accent-dim)", border: "1px solid rgba(232,255,90,0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "8px", fontWeight: 600 }}>
                  Education — Completed
                </p>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Higher National Diploma in Computer Software Engineering
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px" }}>
                  ICBT Campus — Cardiff Metropolitan University &nbsp;·&nbsp; Nov 2024 – May 2026 &nbsp;·&nbsp;
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>Graduated ✓</span>
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["OOP", "Data Structures & Algorithms", "Mobile App Dev", "Web App Dev", "Database Design", "SDLC", "Service-Oriented Computing"].map((m) => (
                    <span key={m} className="tag">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── PROJECTS ─────────────────────────────────────── */}
        <section id="projects">
          <div className="container">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Projects</h2>

            {/* ── Uniform modern card grid — all projects ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "20px",
            }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "64px" }}>
              <a href="https://github.com/pamod100" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                All projects on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── SKILLS ───────────────────────────────────────── */}
        <section id="skills">
          <div className="container">
            <p className="section-label">What I work with</p>
            <h2 className="section-title">Skills</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2px" }}>
              {skills.map((group) => (
                <div key={group.category} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", padding: "32px" }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "20px" }}>
                    {group.category}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {group.items.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--text-secondary)" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── CONTACT ──────────────────────────────────────── */}
        <section id="contact">
          <div className="container">
            <p className="section-label">Get in touch</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="contact-grid">
              <div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "24px" }}>
                  Let's build<br />something<br /><span style={{ color: "var(--accent)" }}>great.</span>
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "40px" }}>
                  I recently graduated with my HND and am actively seeking junior developer
                  roles in Android or full-stack development. Feel free to reach out — I'd
                  love to chat about your project or team.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    {
                      label: "pamoddananjana487@gmail.com",
                      href:  "mailto:pamoddananjana487@gmail.com",
                      icon:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                    },
                    {
                      label: "github.com/pamod100",
                      href:  "https://github.com/pamod100",
                      icon:  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
                    },
                    {
                      label: "linkedin.com/in/pamod-dhananjana",
                      href:  "https://linkedin.com/in/pamod-dhananjana-4799943a7",
                      icon:  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                    },
                    {
                      label: "+94 76 722 6743",
                      href:  "tel:+94767226743",
                      icon:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                    },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "var(--text-secondary)", transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Form */}
              {formSent ? (
                <div style={{ background: "var(--accent-dim)", border: "1px solid rgba(232,255,90,0.2)", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
                  <p style={{ fontSize: "32px", marginBottom: "12px" }}>✓</p>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: "var(--accent)", marginBottom: "8px" }}>
                    Message sent!
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { name: "name",  label: "Name",  type: "text",  placeholder: "Your name"         },
                    { name: "email", label: "Email", type: "email", placeholder: "hello@example.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} style={{ display: "block", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>
                        {field.label}
                      </label>
                      <input id={field.name} type={field.type} required placeholder={field.placeholder}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={(e) => setFormState((p) => ({ ...p, [field.name]: e.target.value }))}
                        style={{ width: "100%", padding: "14px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", fontSize: "14px", color: "var(--text-primary)", outline: "none", fontFamily: "var(--font-body)", transition: "border-color 0.2s ease" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e)  => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" style={{ display: "block", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "8px" }}>
                      Message
                    </label>
                    <textarea id="message" required rows={5} placeholder="Tell me about your project or opportunity…"
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      style={{ width: "100%", padding: "14px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "10px", fontSize: "14px", color: "var(--text-primary)", outline: "none", fontFamily: "var(--font-body)", resize: "vertical", lineHeight: 1.6, transition: "border-color 0.2s ease" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e)  => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: "8px" }}>
                    Send message
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8h12M10 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Pamod Dhananjana — Kiribathgoda, Sri Lanka
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes scrollLine {
          0%   { opacity: 1; transform: scaleY(1);   transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0.3); transform-origin: top; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
        }
        @media (max-width: 768px) {
          .about-grid   { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .cursor       { display: none; }
        }
      `}</style>
{/* WhatsApp Floating Button */}
      
        href="https://wa.me/94767226743"
        <a
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          zIndex: 9999,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      ;
    </>
  );
}