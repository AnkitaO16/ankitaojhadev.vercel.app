"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Contact() {
  const [state, handleSubmit] = useForm("xldjwpoj"); 

  return (
    <section id="contact" className="scroll-mt-20 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold">Get In Touch</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {/* --- Send a Message Form --- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg"
        >
          <h3 className="mb-2 text-xl font-semibold">Send a Message</h3>
          <p className="mb-4 text-sm text-gray-400">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>

          {state.succeeded ? (
            <p className="mt-3 text-sm text-green-400">
              🎉 Thank you! Your message has been sent.
            </p>
          ) : (
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={Yup.object({
                name: Yup.string().min(2, "Too short").required("Name is required"),
                email: Yup.string().email("Invalid email").required("Email is required"),
                message: Yup.string().min(10, "Message is too short").required("Message is required"),
              })}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid gap-3">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-sm outline-none"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-400 text-xs mt-1" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-sm outline-none"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ErrorMessage name="email" component="div" className="text-red-400 text-xs mt-1" />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="h-28 w-full rounded-lg border border-white/20 bg-transparent p-3 text-sm outline-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <ErrorMessage name="message" component="div" className="text-red-400 text-xs mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting || isSubmitting}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-black transition hover:bg-gray-200"
                  >
                    {state.submitting || isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </motion.div>

        {/* --- Connect With Me --- */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-lg">
          <h3 className="mb-4 text-xl font-semibold">Connect With Me</h3>
          <div className="grid gap-3">
            <a
              href="https://github.com/AnkitaO16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankitaaojhaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://x.com/ankitaojhadev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Twitter size={18} /> Twitter
            </a>
            <a
              href="https://www.instagram.com/ankitao.inn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="mailto:aojha1411@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 p-3 hover:bg-white/10"
            >
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-12 text-center text-xs text-gray-500">
        © 2025 Ankita Ojha. All rights reserved. • Privacy Policy • Terms of Service
      </p>
    </section>
  );
}
