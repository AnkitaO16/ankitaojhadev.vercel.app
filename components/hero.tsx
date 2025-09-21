'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-muted">Hi, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
          Ankita <span className="text-primary">Ojha</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Frontend Developer • Full‑Stack Enthusiast
        </p>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
          I build clean, scalable and delightful web applications.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/#contact" className="btn btn-primary">Let&apos;s Connect</Link>
          <Link href="/#projects" className="btn btn-outline">View Projects</Link>
        </div>
      </motion.div>
    </section>
  );
}
