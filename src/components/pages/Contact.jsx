import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const EMAIL = "mehdifilban.work@gmail.com";

const contactCards = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: EnvelopeIcon,
  },
  {
    label: "LinkedIn",
    value: "mehdi-filban",
    href: "https://linkedin.com/in/mehdi-filban",
    icon: ArrowTopRightOnSquareIcon,
  },
];

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const projectType = formData.get("projectType")?.toString().trim();
    const budget = formData.get("budget")?.toString().trim();
    const timeline = formData.get("timeline")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        `Timeline: ${timeline || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    setStatus("Your email app is opening with the message ready to send.");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("Email address copied to clipboard.");
    } catch {
      setStatus(
        "Could not copy automatically. You can copy the email manually.",
      );
    }
  };

  return (
    <section
      id='contact'
      className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'
    >
      <div className='absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-[#009689]/10 blur-3xl dark:bg-[#009689]/20' />
      <div className='absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10' />

      <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center'>
        <motion.div
          className='lg:col-span-5'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className='inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[#009689] shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:text-[#2dd4bf] dark:ring-white/10'>
            Contact
          </div>

          <h2 className='mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl'>
            Let’s turn your idea into a clean, fast frontend experience.
          </h2>

          <p className='mt-4 leading-8 text-gray-600 dark:text-zinc-300'>
            Send a quick brief about your project, dashboard, landing page or
            React application. The form prepares a professional email with your
            details, so you can send it directly from your email app.
          </p>

          <div className='mt-8 grid gap-3'>
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className='group flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10 dark:ring-white/10'
                >
                  <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#009689]/10 text-[#009689] transition group-hover:bg-[#009689] group-hover:text-white dark:bg-[#2dd4bf]/10 dark:text-[#2dd4bf]'>
                    <Icon className='h-5 w-5' aria-hidden='true' />
                  </span>

                  <span className='min-w-0'>
                    <span className='block text-sm font-bold text-gray-950 dark:text-white'>
                      {card.label}
                    </span>

                    <span className='block truncate text-sm font-semibold text-gray-500 group-hover:text-[#009689] dark:text-zinc-400 dark:group-hover:text-[#2dd4bf]'>
                      {card.value}
                    </span>
                  </span>
                </a>
              );
            })}

            <button
              type='button'
              onClick={copyEmail}
              className='group flex items-center gap-4 rounded-3xl bg-white p-4 text-left shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10 dark:ring-white/10'
            >
              <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 text-gray-700 transition group-hover:bg-[#009689] group-hover:text-white dark:bg-white/10 dark:text-zinc-200'>
                <ClipboardDocumentIcon className='h-5 w-5' aria-hidden='true' />
              </span>

              <span>
                <span className='block text-sm font-bold text-gray-950 dark:text-white'>
                  Copy Email
                </span>

                <span className='block text-sm font-semibold text-gray-500 group-hover:text-[#009689] dark:text-zinc-400 dark:group-hover:text-[#2dd4bf]'>
                  Quick copy for manual contact
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className='lg:col-span-7'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <form
            onSubmit={handleSubmit}
            className='rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-black/5 sm:p-8 dark:bg-white/10 dark:ring-white/10'
          >
            <div className='flex items-start justify-between gap-4 border-b border-black/5 pb-6 dark:border-white/10'>
              <div>
                <p className='text-sm font-bold text-[#009689] dark:text-[#2dd4bf]'>
                  Project Brief
                </p>

                <h3 className='mt-2 text-2xl font-black tracking-tight text-gray-950 dark:text-white'>
                  Tell me what you want to build.
                </h3>
              </div>

              <span className='hidden rounded-full bg-zinc-50 px-3 py-1 text-xs font-bold text-gray-500 ring-1 ring-black/5 sm:inline-flex dark:bg-white/10 dark:text-zinc-300 dark:ring-white/10'>
                Mail-ready form
              </span>
            </div>

            <div className='mt-6 grid gap-5 sm:grid-cols-2'>
              <Field label='Name' htmlFor='name'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  placeholder='Your name'
                  className='input-field'
                />
              </Field>

              <Field label='Email' htmlFor='email'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='your@email.com'
                  className='input-field'
                />
              </Field>

              <Field label='Project Type' htmlFor='projectType'>
                <select
                  id='projectType'
                  name='projectType'
                  className='input-field'
                >
                  <option>React Application</option>
                  <option>Next.js Website</option>
                  <option>Landing Page</option>
                  <option>Admin Dashboard</option>
                  <option>UI Refactor</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label='Timeline' htmlFor='timeline'>
                <select id='timeline' name='timeline' className='input-field'>
                  <option>Flexible</option>
                  <option>1 - 2 weeks</option>
                  <option>2 - 4 weeks</option>
                  <option>1+ month</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
            </div>

            <div className='mt-5'>
              <Field label='Budget / Scope' htmlFor='budget'>
                <input
                  type='text'
                  id='budget'
                  name='budget'
                  placeholder='Example: small landing page, full dashboard, hourly work...'
                  className='input-field'
                />
              </Field>
            </div>

            <div className='mt-5'>
              <Field label='Message' htmlFor='message'>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  required
                  placeholder='Tell me about your project goals, pages, features, deadline and preferred tech stack...'
                  className='input-field resize-none'
                />
              </Field>
            </div>

            <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
              <button
                type='submit'
                className='inline-flex items-center justify-center gap-2 rounded-2xl bg-[#009689] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#007f75] hover:shadow-md active:scale-[0.98]'
              >
                <PaperAirplaneIcon className='h-5 w-5' aria-hidden='true' />
                Send Message
              </button>

              <p className='text-xs font-semibold leading-5 text-gray-500 dark:text-zinc-400'>
                This opens your email app with the message already prepared.
              </p>
            </div>

            {status && (
              <p className='mt-4 rounded-2xl bg-[#009689]/10 px-4 py-3 text-sm font-semibold text-[#007f75] dark:bg-[#2dd4bf]/10 dark:text-[#2dd4bf]'>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className='text-sm font-bold text-gray-800 dark:text-zinc-200'
      >
        {label}
      </label>

      <div className='mt-2'>{children}</div>
    </div>
  );
}

export default Contact;
