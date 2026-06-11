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

const Skills = () => {
const { data: skills = [], loading } = useFetch(fetchSkills);

const skillsList = Array.isArray(skills) ? skills : [];

  const categories = ["Frontend", "Backend", "Database"];

  return (
    <section id="skills" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Core skills</p>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-12 bg-slate-900 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {categories.map((cat) => {
              const catSkills = skillsList.filter((s) => s.category === cat);
              if (!catSkills.length) return null;
              return (
                <div key={cat}>
                  <p className="text-xs text-slate-600 uppercase tracking-wider mb-3">
                    {cat}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {catSkills.map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center justify-between bg-slate-900 rounded-xl px-4 py-3 border border-slate-800"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <SkillDots level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
