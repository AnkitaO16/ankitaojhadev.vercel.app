import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    // <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/60 backdrop-blur dark:bg-black/40">
    //   <div className="container flex h-16 items-center justify-between">
    //     <Link href="/" className="font-semibold tracking-tight">
    //       <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
    //         Ankita Ojha
    //       </span>
    //     </Link>
    //     <nav className="flex items-center gap-2 sm:gap-4">
    //       <Link href="/#skills" className="hidden text-sm text-muted hover:text-white sm:inline">
    //         Skills
    //       </Link>
    //       <Link href="/#projects" className="hidden text-sm text-muted hover:text-white sm:inline">
    //         Projects
    //       </Link>
    //       <Link href="/#contact" className="hidden text-sm text-muted hover:text-white sm:inline">
    //         Contact
    //       </Link>
    //       <Link href="/#resume.pdf" className="btn btn-outline text-sm">Resume</Link>
    //       <ThemeToggle />
    //     </nav>
    //   </div>
    // </header>

    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/60 backdrop-blur dark:bg-black/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ankita Ojha
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#skills"
            className="hidden text-sm text-muted hover:text-white sm:inline"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="hidden text-sm text-muted hover:text-white sm:inline"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="hidden text-sm text-muted hover:text-white sm:inline"
          >
            Contact
          </Link>
          <a
            href="/Ankita_Ojha_25_2509.pdf"
            download="Ankita_Ojha_Resume.pdf"
            className="btn btn-outline text-sm"
          >
            Download Resume
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
