import { useEffect, useRef, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ClipboardDocumentIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const EMAIL = "mehdifilban.work@gmail.com";

function Contact({ t, language }) {
  const [status, setStatus] = useState("");
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState(
    t.projectTypes[0],
  );
  const [selectedTimeline, setSelectedTimeline] = useState(t.timelines[0]);

  const copyTimerRef = useRef(null);
  const isFa = language === "fa";

  useEffect(() => {
    setSelectedProjectType(t.projectTypes[0]);
    setSelectedTimeline(t.timelines[0]);
  }, [language, t.projectTypes, t.timelines]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const contactCards = [
    {
      label: t.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: EnvelopeIcon,
    },
    {
      label: t.linkedin,
      value: "mehdi-filban",
      href: "https://linkedin.com/in/mehdi-filban",
      icon: ArrowTopRightOnSquareIcon,
    },
  ];

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

    const labels = t.emailBodyLabels;

    const subject = `${t.emailSubjectPrefix} ${name}`;

    const body = [
      `${labels.name}: ${name}`,
      `${labels.email}: ${email}`,
      `${labels.projectType}: ${projectType || labels.notSpecified}`,
      `${labels.budget}: ${budget || labels.notSpecified}`,
      `${labels.timeline}: ${timeline || labels.notSpecified}`,
      "",
      `${labels.message}:`,
      message,
    ].join("\n");

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(t.statusReady);
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);

      setStatus("");
      setIsEmailCopied(true);

      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = setTimeout(() => {
        setIsEmailCopied(false);
      }, 2500);
    } catch {
      setStatus(t.statusCopyError);
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
          className={["lg:col-span-5", isFa ? "text-right" : "text-left"].join(
            " ",
          )}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className='inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[#009689] shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:text-[#2dd4bf] dark:ring-white/10'>
            {t.badge}
          </div>

          <h2
            className={[
              "mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl",
              isFa ? "fa-heading leading-[1.45]" : "leading-[1.08]",
            ].join(" ")}
          >
            {t.title}
          </h2>

          <p className='mt-4 leading-8 text-gray-600 dark:text-zinc-300'>
            {t.description}
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

                    <span
                      dir='ltr'
                      className='block truncate text-sm font-semibold text-gray-500 group-hover:text-[#009689] dark:text-zinc-400 dark:group-hover:text-[#2dd4bf]'
                    >
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

              <span className={isFa ? "text-right" : "text-left"}>
                <span className='block text-sm font-bold text-gray-950 dark:text-white'>
                  {isEmailCopied ? t.statusCopied : t.copyEmail}
                </span>

                <span className='block text-sm font-semibold text-gray-500 group-hover:text-[#009689] dark:text-zinc-400 dark:group-hover:text-[#2dd4bf]'>
                  {t.copyEmailDescription}
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
            className={[
              "rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-black/5 sm:p-8 dark:bg-white/10 dark:ring-white/10",
              isFa ? "text-right" : "text-left",
            ].join(" ")}
          >
            <div className='flex items-start justify-between gap-4 border-b border-black/5 pb-6 dark:border-white/10'>
              <div>
                <p className='text-sm font-bold text-[#009689] dark:text-[#2dd4bf]'>
                  {t.formBadge}
                </p>

                <h3
                  className={[
                    "mt-2 text-2xl font-black tracking-tight text-gray-950 dark:text-white",
                    isFa ? "fa-heading leading-[1.45]" : "leading-tight",
                  ].join(" ")}
                >
                  {t.formTitle}
                </h3>
              </div>

              <span className='hidden rounded-full bg-zinc-50 px-3 py-1 text-xs font-bold text-gray-500 ring-1 ring-black/5 sm:inline-flex dark:bg-white/10 dark:text-zinc-300 dark:ring-white/10'>
                {t.formPill}
              </span>
            </div>

            <div className='mt-6 grid gap-5 sm:grid-cols-2'>
              <Field label={t.fields.name} htmlFor='name'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  placeholder={t.placeholders.name}
                  className='input-field'
                />
              </Field>

              <Field label={t.fields.email} htmlFor='email'>
                <input
                  dir='ltr'
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder={t.placeholders.email}
                  className='input-field text-left'
                />
              </Field>

              <Field label={t.fields.projectType} htmlFor='projectType'>
                <CustomSelect
                  id='projectType'
                  name='projectType'
                  value={selectedProjectType}
                  onChange={setSelectedProjectType}
                  options={t.projectTypes}
                  isFa={isFa}
                />
              </Field>

              <Field label={t.fields.timeline} htmlFor='timeline'>
                <CustomSelect
                  id='timeline'
                  name='timeline'
                  value={selectedTimeline}
                  onChange={setSelectedTimeline}
                  options={t.timelines}
                  isFa={isFa}
                />
              </Field>
            </div>

            <div className='mt-5'>
              <Field label={t.fields.budget} htmlFor='budget'>
                <input
                  type='text'
                  id='budget'
                  name='budget'
                  placeholder={t.placeholders.budget}
                  className='input-field'
                />
              </Field>
            </div>

            <div className='mt-5'>
              <Field label={t.fields.message} htmlFor='message'>
                <textarea
                  id='message'
                  name='message'
                  rows='6'
                  required
                  placeholder={t.placeholders.message}
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
                {t.submit}
              </button>

              <p className='text-xs font-semibold leading-5 text-gray-500 dark:text-zinc-400'>
                {t.submitHint}
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

function CustomSelect({ id, name, value, onChange, options, isFa }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className='relative'>
        <input type='hidden' name={name} value={value} />

        <ListboxButton
          id={id}
          className={[
            "input-field flex items-center justify-between gap-3 text-sm font-semibold",
            isFa ? "text-right" : "text-left",
          ].join(" ")}
        >
          <span className='block truncate'>{value}</span>

          <ChevronUpDownIcon
            className='h-5 w-5 shrink-0 text-gray-400 dark:text-zinc-500'
            aria-hidden='true'
          />
        </ListboxButton>

        <ListboxOptions
          dir={isFa ? "rtl" : "ltr"}
          className='absolute z-[80] mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-black/10 bg-white p-1 shadow-2xl shadow-black/10 outline-none ring-1 ring-black/5 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40 dark:ring-white/10'
        >
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className={({ focus, selected }) =>
                [
                  "relative cursor-pointer select-none rounded-xl px-3 py-2.5 text-sm font-semibold transition",
                  isFa ? "text-right pr-9" : "text-left pl-9",
                  focus
                    ? "bg-[#009689]/10 text-[#007f75] dark:bg-[#2dd4bf]/10 dark:text-[#2dd4bf]"
                    : "text-gray-700 dark:text-zinc-200",
                  selected
                    ? "bg-[#009689]/10 text-[#007f75] dark:bg-[#2dd4bf]/10 dark:text-[#2dd4bf]"
                    : "",
                ].join(" ")
              }
            >
              {({ selected }) => (
                <>
                  {selected && (
                    <span
                      className={[
                        "absolute top-1/2 -translate-y-1/2 text-[#009689] dark:text-[#2dd4bf]",
                        isFa ? "right-3" : "left-3",
                      ].join(" ")}
                    >
                      <CheckIcon className='h-4 w-4' aria-hidden='true' />
                    </span>
                  )}

                  <span className='block truncate'>{option}</span>
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default Contact;
