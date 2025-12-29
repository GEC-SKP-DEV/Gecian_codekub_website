"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const installCommand =
    "curl -sSL https://raw.githubusercontent.com/CodeCompasss/codekub/main/boot.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0e0f1a] to-[#0b0c14] text-slate-200 flex flex-col items-center px-6">
      {/* Header */}
      <section className="mt-24 text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-green-400">
          CODEKUB
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          A CSE-focused developer setup for Ubuntu 24.04+
          <br />
          <span className="text-slate-500">
            Built on top of Omakub, tailored for Computer Science & Engineering students
          </span>
        </p>

        {/* Install Command */}
        <div className="mt-8 flex items-center gap-2 bg-[#151728] border border-slate-700 rounded-lg px-5 py-3 font-mono text-sm text-slate-300">
          <span className="flex-1 break-all">{installCommand}</span>
          <button
            onClick={handleCopy}
            className="ml-2 px-3 py-1 rounded bg-green-500/30 hover:bg-green-500/50 text-green-300 transition text-sm"
          >
            {copied ? "Copied ✅" : "Copy"}
          </button>
        </div>

        {/* Manual Button */}
        <div className="mt-6">
          <a
            href="https://codecompasss.github.io/codekub_userguide/"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-500/20 px-5 py-2 text-sm font-medium text-indigo-300 hover:bg-indigo-500/30 transition"
          >
            📘 Manual
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section className="mt-16 w-full max-w-4xl">
        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/3avLiLyseS8"
            title="Codekub Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Description */}
      <section className="mt-12 max-w-3xl text-center text-slate-400">
        <p>
          Codekub provides a ready-to-use Linux development environment with tools,
          configurations, and workflows commonly used in academics, competitive programming,
          systems, web, and software development—so students can focus on learning, not setup.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-24 mb-10 text-center text-slate-500 text-sm">
        <p>Brought to you by</p>
        <a href="https://code-compass-website.vercel.app/">
          <p className="mt-1 font-semibold text-slate-300">CodeCompass</p>
        </a>
      </footer>
    </main>
  );
}
