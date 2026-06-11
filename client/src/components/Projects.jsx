import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { fetchProjects } from "../api";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectCard = ({ project, featured }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    transition={{
      type: "spring",
      stiffness: 250,
    }}
    className={`
      card
      flex
      flex-col
      gap-4
      hover:shadow-2xl
      transition-all
      duration-300
      ${
        featured
          ? "md:col-span-2 md:flex-row md:items-start"
          : ""
      }
    `}
  >
    {/* Project Visual */}
    <motion.div
      whileHover={{
        rotate: 3,
        scale: 1.05,
      }}
      className={`bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0 ${
        featured ? "md:w-56 h-36" : "h-28"
      }`}
    >
      <span className="text-4xl">
        {project.tag === "Enterprise"
          ? "🛡️"
          : project.tag === "Healthcare"
          ? "🏥"
          : "🎓"}
      </span>
    </motion.div>

    <div className="flex flex-col gap-3 flex-1">
      <div>
        <span className="text-xs text-indigo-500 border border-indigo-200 bg-indigo-50 rounded-full px-2.5 py-0.5">
          {project.tag}
        </span>

        {project.featured && (
          <span className="ml-2 text-xs text-emerald-500 border border-emerald-200 bg-emerald-50 rounded-full px-2.5 py-0.5">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-serif text-lg font-semibold leading-snug text-slate-800">
        {project.title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech, index) => (
          <motion.span
            key={tech}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
            }}
            className="tech-pill"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        {project.github_url && (
          <motion.a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              x: 4,
            }}
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-slate-500
              hover:text-blue-600
              transition-all
            "
          >
            <Github size={14} />
            GitHub
          </motion.a>
        )}

        {project.live_url && (
          <motion.a
            href={project.live_url}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              x: 4,
            }}
            className="
              flex
              items-center
              gap-1.5
              text-xs
              text-slate-500
              hover:text-blue-600
              transition-all
            "
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
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
    <section
      id="projects"
      className="py-24 px-6 border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label mb-8"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          Selected Projects
        </motion.p>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`h-48 bg-slate-200 rounded-2xl animate-pulse ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {featured && (
              <ProjectCard
                project={featured}
                featured={true}
              />
            )}

            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={false}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;