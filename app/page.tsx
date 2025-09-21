import { Hero } from "../components/hero";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

export default function Page() {
  return (
    <main className="container space-y-24 pb-24 pt-10 md:pt-16">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
