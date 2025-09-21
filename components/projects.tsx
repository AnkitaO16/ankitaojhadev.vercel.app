'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "MedhaPro",
    blurb: "School Management Software used by institutions to manage student enrollment, fees, transport, attendance, and communication between parents, teachers, and administrators.",
    stack: ["React", "Java", "PostgreSQL", "AWS"],
    demo: "https://app.medhapro.com/",
  },
  {
    title: "Vidyut HR",
    blurb: "End-to-end HR Management System for enterprises to handle attendance, payroll, performance reviews, and secure role-based access with automation features.",
    stack: ["React", "Java", "PostgreSQL", "AWS"],
    demo: "http://hrms.medhapro.com/",
  },
  {
    title: "Bharat FLP",
    blurb: "Financial Literacy Learning Portal for students with gamified lessons, live online classes, and progress tracking to promote awareness of financial concepts.",
    stack: ["React", "Node.js", "Express", "MongoDB", "styled-components"],
    demo: "https://bharatflp.com/",
  },
  {
    title: "Exam Manager",
    blurb: "Student Assessment & Exam Portal that enables instructors to schedule tests, conduct MCQ-based assessments, and monitor results via instructor dashboards.",
    stack: ["React", "Node.js", "Express", "MongoDB", "styled-components"],
    demo: "https://exam-portal-frontend-five.vercel.app/",
    code: "https://github.com/AnkitaO16/exam-portal-frontend",
  },
  {
    title: "Grievance Tracker",
    blurb: "Complaint Management System for organizations to collect, monitor, and resolve user grievances. Features built-in authentication, reporting, and real-time tracking.",
    stack: ["Next.js", "PostgreSQL (Neon)", "Vercel", "Authentication"],
    code: "https://github.com/AnkitaO16/grievance-tracker",
  },
  {
    title: "Crypto Tracker App",
    blurb: "Single-page crypto tracking & conversion app showing top 12 cryptocurrencies with logos, current prices, 24h/7d price changes (with color indicators), and real-time crypto-to-crypto conversion.",
    stack: ["React", "Vite", "SCSS", "Axios", "React Router"],
    demo: "https://crypto-tracker-6jgghe32p-ankita-ojhas-projects.vercel.app/",
    code: "https://github.com/AnkitaO16/crypto-tracker",
  }
];



export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="mb-6 text-center text-2xl font-semibold">Featured Projects</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card p-6"
          >
            <header className="mb-3">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted">{p.blurb}</p>
            </header>

            {/* Tech Stack */}
            <div className="mb-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/15 px-2 py-1 text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {p.demo && (
                <Link href={p.demo} target="_blank" className="btn btn-outline">
                  Demo
                </Link>
              )}
              {p.code && (
                <Link href={p.code} target="_blank" className="btn btn-outline">
                  Code
                </Link>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
