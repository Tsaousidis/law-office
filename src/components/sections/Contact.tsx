"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { dict } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(data: { name: string; email: string; message: string }) {
    const errors: FieldErrors = {};
    if (data.name.trim().length < 2) errors.name = dict.contact.form.errors.name;
    if (!EMAIL_RE.test(data.email.trim())) errors.email = dict.contact.form.errors.email;
    if (data.message.trim().length < 10) errors.message = dict.contact.form.errors.message;
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const errors = validate(payload);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const infoRows = [
    { label: dict.footer.addressLabel, value: dict.footer.address },
    { label: dict.footer.phoneLabel, value: dict.footer.phone, href: `tel:${dict.footer.phone.replace(/\s/g, "")}` },
    { label: dict.footer.emailLabel, value: dict.footer.email, href: `mailto:${dict.footer.email}` },
    { label: dict.footer.hoursLabel, value: dict.footer.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-2 px-6 py-24 lg:px-10">
      <FloatingOrbs orbs={[{ size: 240, top: "5%", left: "-5%", tone: "gold" }]} />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {dict.contact.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            {dict.contact.heading}
          </h2>
          <p className="mt-4 text-base text-charcoal/70">{dict.contact.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5">
          <Reveal direction="left" className="md:col-span-2">
            <h3 className="font-serif text-lg font-semibold text-ink">
              {dict.contact.infoTitle}
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {infoRows.map((row) => (
                <li key={row.label}>
                  <span className="block text-xs uppercase tracking-wide text-charcoal/50">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a href={row.href} className="text-sm text-ink transition-colors hover:text-gold-deep">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm text-ink">{row.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 rounded-lg border border-ink/8 bg-cream p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  name="name"
                  label={dict.contact.form.name}
                  placeholder={dict.contact.form.namePlaceholder}
                  error={fieldErrors.name}
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label={dict.contact.form.email}
                  placeholder={dict.contact.form.emailPlaceholder}
                  error={fieldErrors.email}
                />
              </div>
              <Field
                id="phone"
                name="phone"
                type="tel"
                label={dict.contact.form.phone}
                placeholder={dict.contact.form.phonePlaceholder}
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={dict.contact.form.messagePlaceholder}
                  className="rounded-md border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
                {fieldErrors.message && (
                  <p className="text-xs text-red-700">{fieldErrors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.97 }}
                className="mt-2 rounded-full bg-ink px-8 py-3 text-sm font-semibold text-cream transition-colors hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? dict.contact.form.submitting : dict.contact.form.submit}
              </motion.button>

              {status === "success" && (
                <p role="status" className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  {dict.contact.form.success}
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {dict.contact.form.error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
}
