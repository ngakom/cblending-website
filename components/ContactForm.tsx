"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

// Web3Forms delivers submissions to the inbox the access key was created for (it should be SITE.email).
// The key is public by design. Without one, the form opens the visitor's email app instead.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const TOPICS = ["New product / blending enquiry", "Contract packing", "Supplier enquiry", "Careers", "Other"];

const label = "mb-1.5 block text-sm font-bold lowercase text-white";
const field =
  "w-full border border-line bg-night px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-muted/60 focus:border-green";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const subject = `${data.topic}: ${data.company || data.name}`;

    if (!WEB3FORMS_KEY) {
      const body = `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\nTopic: ${data.topic}\n\n${data.message}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: "CBS website", replyto: data.email, ...data }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="box p-8 text-center">
        <p className="text-2xl font-black lowercase text-white">thank you — your enquiry has been sent.</p>
        <p className="mt-2 text-muted">Our team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>
          Full name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className={label}>
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>
          Email *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="topic" className={label}>
          Enquiry type
        </label>
        <select id="topic" name="topic" className={field} defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Product type, estimated volumes, packaging format, timelines and any certification needs (e.g. Halaal, Kosher)."
          className={field}
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "sending"} className="btn-primary lowercase disabled:opacity-60">
          {status === "sending" ? "sending…" : "send enquiry"}
        </button>
        <p className="text-sm text-muted" role="status">
          {status === "mailto" && "Your email app has opened with the enquiry — just press send."}
          {status === "error" && `Something went wrong. Please email ${SITE.email} directly.`}
          {status === "idle" && "We treat every enquiry in confidence."}
        </p>
      </div>
    </form>
  );
}
