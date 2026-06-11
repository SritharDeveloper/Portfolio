import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { fetchSkills } from "../api";

const SkillDots = ({ level }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        className={i <= level ? "skill-dot-filled" : "skill-dot"}
      />
    ))}
  </div>
);
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
const Skills = () => {
  const { data: skills = [], loading } = useFetch(fetchSkills);

  const skillsList = Array.isArray(skills) ? skills : [];

  const categories = ["Frontend", "Backend", "Database"];

  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-slate-200 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto">

        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Core Skills
        </motion.p>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-slate-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-10">

            {categories.map((cat) => {
              const catSkills = skillsList.filter(
                (s) => s.category === cat
              );

              if (!catSkills.length) return null;

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xs text-blue-600 uppercase tracking-wider mb-4 font-bold">
                    {cat}
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {catSkills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                        }}
                        className="
                      flex
                      items-center
                      justify-between
                      bg-white
                      rounded-2xl
                      px-4
                      py-4
                      border
                      border-slate-200
                      shadow-sm
                      hover:shadow-lg
                    "
                      >
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>

                        <SkillDots level={skill.level} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
