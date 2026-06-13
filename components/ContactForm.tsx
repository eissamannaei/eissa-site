"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionaries";

export default function ContactForm({ dict }: { dict: Dictionary["contact"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry — ${name || "Hello"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xs border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent";

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={dict.formName}
        className={field}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.formEmail}
        className={field}
      />
      <textarea
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={dict.formMessage}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-xs bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-press sm:w-auto"
      >
        {dict.formSubmit}
      </button>
      <p className="font-mono text-[11px] text-ink-soft">{dict.formNote}</p>
    </form>
  );
}
