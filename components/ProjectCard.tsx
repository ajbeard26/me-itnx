import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-image ${project.imageClass}`} aria-hidden="true">
        <span>{project.title}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          View project <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
