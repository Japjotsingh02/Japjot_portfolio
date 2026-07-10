"use client";

import { Project } from "@/config/projects";
import { useRef, useState } from "react";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const displayUrl = project.liveUrl ?? project.githubUrl;
  const href = project.isLive && displayUrl ? displayUrl : undefined;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const card = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group relative flex h-full min-h-[220px] flex-col rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-5 transition-colors duration-300 hover:border-violet-500/55 md:p-6 overflow-visible"
    >
      {project.previewImage && (
        <div
          className="pointer-events-none absolute z-50 transition-all duration-200 ease-out"
          style={{
            left: mousePos.x + 16,
            top: mousePos.y - 80,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "scale(1) translateY(0px)"
              : "scale(0.92) translateY(8px)",
          }}
        >
          <div className="w-[220px] overflow-hidden rounded-lg border border-violet-500/20 shadow-2xl shadow-black/50 ring-1 ring-white/5">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            <div className="relative aspect-video w-full bg-[var(--bg2)]">
              <Image
                src={project.previewImage}
                alt={`${project.name} preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {displayUrl && (
              <div className="flex items-center gap-1.5 bg-[#0d0d0f] px-3 py-1.5">
                <div
                  className={`h-1.5 w-1.5 rounded-full ${
                    project.isLive ? "bg-violet-400/70" : "bg-white/20"
                  }`}
                />
                <span
                  className={`truncate font-mono text-[9px] tracking-wider ${
                    project.isLive ? "text-white/40" : "text-white/20"
                  }`}
                >
                  {displayUrl.replace(/^https?:\/\//, "")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mb-4 flex items-center justify-between gap-3">
        <span
          className="font-mono text-[10px] tracking-[0.12em]"
          style={{ color: "var(--text3)" }}
        >
          {project.num}
        </span>
        <span
          className="font-mono text-[10px] tracking-[0.1em] uppercase"
          style={{ color: "var(--text3)" }}
        >
          {project.category} · {project.year}
        </span>
      </div>

      <h3
        className="font-serif text-[1.35rem] font-normal leading-[1.15] tracking-[-0.01em]"
        style={{ color: "var(--text)" }}
      >
        {project.name}
      </h3>

      <p
        className="mt-3 font-sans text-[13px] font-light leading-[1.65]"
        style={{ color: "var(--text2)" }}
      >
        {project.description}
      </p>

      <div
        className="mt-auto border-t pt-4"
        style={{ borderColor: "var(--border)" }}
      >
        <p
          className="font-mono text-[10px] tracking-[0.08em] uppercase"
          style={{ color: "var(--text3)" }}
        >
          {project.tags.join(" · ")}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {card}
      </a>
    );
  }

  return card;
}
