"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="landing-page">
      <div className="frame" aria-hidden="true" />

      <section className="content-column" aria-labelledby="hero-title">
        <p className="coming-soon"><span aria-hidden="true" />Coming soon</p>

        <h1 id="hero-title">
          <span>Something</span>
          <span>thoughtful is</span>
          <span className="blue">taking</span>
          <span className="blue underline">shape.</span>
        </h1>

        <p className="intro-copy">
          A new digital experience is
          <br />
          on the way. Join the list and
          <br />
          be first to know.
        </p>

        <form className="notify-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            required
            disabled={submitted}
            autoComplete="email"
            placeholder="you@example.com"
          />
          <button type="submit" className={submitted ? "success" : ""}>
            {submitted ? "You’re in!" : "Notify me"}
          </button>
        </form>
        <p className="form-status" aria-live="polite">
          {submitted ? "Thanks — we’ll let you know when we launch." : ""}
        </p>
      </section>

      <div className="art-column" aria-hidden="true">
        <Image
          src="/assets/taking-shape-hero.png"
          alt=""
          width={1254}
          height={1254}
          priority
        />
      </div>
    </main>
  );
}
