import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { fetchExperience } from "../api";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const { data: experience = [], loading } = useFetch(fetchExperience);
  const experienceList = Array.isArray(experience) ? experience : [];

  return (
    <section
      id="experience"
      className="py-24 px-6 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Experience</p>
        </motion.div>

        {loading ? (
          <div className="space-y-4 mt-10">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="h-28 bg-slate-100 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="space-y-10 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experienceList.map((exp) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="
                  flex flex-col md:flex-row gap-6
                  border border-slate-200
                  rounded-2xl
                  p-6
                  bg-white
                  hover:shadow-xl
                  hover:border-blue-200
                  transition-all
                  duration-300
                "
              >
                {/* Timeline */}
                <div className="md:w-44 flex-shrink-0">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm font-medium text-slate-500"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold text-slate-900"
                  >
                    {exp.role}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-blue-600 font-medium mt-1"
                  >
                    {exp.company}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-4 text-slate-600 leading-7"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies
                          .split(",")
                          .map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{
                                opacity: 0,
                                scale: 0.8,
                              }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              transition={{
                                delay: index * 0.05,
                                duration: 0.3,
                              }}
                              whileHover={{
                                scale: 1.08,
                                y: -2,
                              }}
                              viewport={{ once: true }}
                              className="
                                px-3 py-1
                                rounded-full
                                bg-slate-100
                                text-slate-700
                                text-sm
                                cursor-default
                              "
                            >
                              {tech.trim()}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-slate-700 mb-3">
                        Key Contributions
                      </h4>

                      <ul className="space-y-2">
                        {exp.achievements
                          .split(",")
                          .map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{
                                opacity: 0,
                                x: 20,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.1,
                                duration: 0.4,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 text-slate-600"
                            >
                              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span>{item.trim()}</span>
                            </motion.li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;