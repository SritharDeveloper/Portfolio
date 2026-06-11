import { Github, ExternalLink } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { fetchProjects } from "../api";

const ProjectCard = ({ project, featured }) => (
  <div
    className={`card flex flex-col gap-4 ${
      featured ? "md:col-span-2 md:flex-row md:items-start" : ""
    }`}
  >
    {/* Visual placeholder */}
    <div
      className={`bg-slate-800 rounded-xl flex items-center justify-center shrink-0 ${
        featured ? "md:w-56 h-36" : "h-28"
      }`}
    >
      <span className="text-3xl">
        {project.tag === "Enterprise"
          ? "🛡️"
          : project.tag === "Healthcare"
          ? "🏥"
          : "🎓"}
      </span>
    </div>

    <div className="flex flex-col gap-3 flex-1">
      <div>
        <span className="text-xs text-indigo-400 border border-indigo-900 rounded-full px-2.5 py-0.5">
          {project.tag}
        </span>
        {project.featured && (
          <span className="ml-2 text-xs text-emerald-400 border border-emerald-900 rounded-full px-2.5 py-0.5">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-serif text-lg font-medium leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((t) => (
          <span key={t} className="tech-pill">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-1">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ExternalLink size={13} /> Live
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { data: projects = [], loading } = useFetch(fetchProjects);

  const featured = Array.isArray(projects)
  ? projects.find((p) => p.featured)
  : null;

const rest = Array.isArray(projects)
  ? projects.filter((p) => !p.featured)
  : [];

  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Selected projects</p>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-48 bg-slate-900 rounded-2xl animate-pulse ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {featured && (
              <ProjectCard project={featured} featured={true} />
            )}
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} featured={false} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
