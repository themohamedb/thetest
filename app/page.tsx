"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="thetest home">
          thetest
        </a>
        <p className="eyebrow">Private build / 01</p>
        <div className="status">
          <span className="pulse" aria-hidden="true" />
          System online
        </div>
      </header>

      <main id="top" className="main-grid">
        <section className="hero" aria-labelledby="hero-title">
          <p className="index">[ 00—01 ] / Incoming transmission</p>
          <h1 id="hero-title">
            Something thoughtful
            <br />
            is taking shape.
          </h1>
        </section>

        <aside className="signup-panel" aria-labelledby="early-access-title">
          <p id="early-access-title" className="section-label">
            // Early access
          </p>
          <p className="intro">
            A new digital experience is on the way. Join the list and be first
            to know.
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={submitted}
              autoComplete="email"
              placeholder="EMAIL@ADDRESS.COM"
            />
            <button className={submitted ? "is-submitted" : ""} type="submit">
              {submitted ? "Added ✓" : "Notify me"}
            </button>
          </form>
          <p className="form-message" aria-live="polite">
            {submitted ? "You’re on the list. We’ll be in touch." : ""}
          </p>

          <div className="progress-block" aria-label="Launch sequence: 68% complete">
            <div className="progress-head">
              <span>Launch sequence</span>
              <span>68%</span>
            </div>
            <div className="progress-track" aria-hidden="true">
              <span />
            </div>
          </div>
        </aside>
      </main>

      <footer className="site-footer">
        <span>© 2026 thetest</span>
        <span>UTC +03:00</span>
        <span>Built with intent</span>
      </footer>
    </div>
  );
}
