'use client';
import { motion } from "framer-motion";

const groups = [
  { 
    title: "Languages", 
    items: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "SQL", "HTML5", "CSS3"] 
  },
  { 
    title: "Frontend", 
    items: ["React", "Redux", "Next.js", "Material-UI", "Bootstrap"] 
  },
  { 
    title: "Backend", 
    items: ["Node.js", "Express", "Java (Spring Boot)", "Flask", "FastAPI"] 
  },
  { 
    title: "Automation & Workflow", 
    items: ["n8n"] 
  },
  { 
    title: "Platforms", 
    items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "GCP"] 
  },
  { 
    title: "CI/CD & DevOps", 
    items: ["GitHub Actions", "GitLab CI", "Jenkins"] 
  },
  { 
    title: "Database", 
    items: ["PostgreSQL", "MongoDB", "VectorDB"] 
  },
  { 
    title: "Security", 
    items: ["JWT", "OAuth", "RBAC"] 
  },
  { 
    title: "Other", 
    items: ["Microservices", "API Development (REST, GraphQL)", "Agile/Scrum"] 
  }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="mb-6 text-center text-2xl font-semibold">Technical Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card p-6"
          >
            <h3 className="mb-3 text-lg font-medium">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span 
                  key={t} 
                  className="rounded-full border border-white/15 px-3 py-1 text-sm text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
