"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui/FormField";
import { REGISTER } from "@/content/auth";

type Errors = Partial<Record<"fullName" | "email" | "password", string>>;

export function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    const next: Errors = {};
    if (!fullName) next.fullName = "Please enter your full name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (password.length < 8)
      next.password = "Password must be at least 8 characters.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    // TODO: wire to auth endpoint
    setTimeout(() => setSubmitting(false), 800);
  }

  const f = REGISTER.form.fields;

  return (
    <div className="w-full max-w-[560px] rounded-3xl bg-white p-8 shadow-[0_32px_64px_-32px_rgb(0_0_0_/_0.28)] sm:p-10 lg:p-12">
      <p className="text-body-m text-primary-800">{REGISTER.form.eyebrow}</p>

      <h1 className="text-heading-s mt-3 text-neutral-950">
        {REGISTER.form.heading}
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-8 flex flex-col gap-6"
      >
        <FormField
          id="fullName"
          name="fullName"
          label={f.fullName.label}
          placeholder={f.fullName.placeholder}
          autoComplete="name"
          required
          error={errors.fullName}
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label={f.email.label}
          placeholder={f.email.placeholder}
          autoComplete="email"
          required
          error={errors.email}
        />

        <FormField
          id="password"
          name="password"
          type="password"
          label={f.password.label}
          placeholder={f.password.placeholder}
          autoComplete="new-password"
          minLength={8}
          required
          error={errors.password}
        />

        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="text-label-m inline-flex h-12 items-center rounded-full bg-secondary-400 px-8 text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {submitting ? "Creating account…" : REGISTER.form.submit}
          </button>
        </div>
      </form>

      <p className="text-body-s mt-10 text-center text-neutral-500">
        {REGISTER.form.footer.prompt}{" "}
        <Link
          href={REGISTER.form.footer.linkHref}
          className="text-primary-800 underline-offset-4 hover:underline"
        >
          {REGISTER.form.footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
