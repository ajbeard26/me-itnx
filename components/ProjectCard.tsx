import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "@/components/ProjectPreview";

export default function ProjectCard({ project }: { project: Project }) {
  const external = project.href.startsWith("http");

  return (
    <article className="project-card">
      <div
        className={`project-shot${project.logo ? " project-shot-logo" : ""}`}
        style={project.logoBg ? { background: project.logoBg } : undefined}
        aria-hidden={project.logo ? undefined : true}
      >
        {project.logo ? (
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={320}
            height={180}
            className="project-logo"
          />
        ) : (
          <ProjectPreview variant={project.preview} />
        )}
      </div>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a
          href={project.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          View project <ArrowUpRight size={15} strokeWidth={2.5} />
        </a>
      </div>
    </article>
  );
}
