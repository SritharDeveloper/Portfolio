import useFetch from "../hooks/useFetch";
import { fetchExperience } from "../api";

const Experience = () => {
  const { data: experience = [], loading } = useFetch(fetchExperience);
  const experienceList = Array.isArray(experience) ? experience : [];
  return (
    <section id="experience" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Experience</p>

        {loading ? (
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-28 bg-slate-900 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-0 divide-y divide-slate-800">
           {experienceList.map((exp) => (
              <div
                key={exp.id}
                className="grid grid-cols-[100px_1fr] gap-6 py-8"
              >
                <div className="text-xs text-slate-500 pt-1 leading-relaxed">
                  {exp.period}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-100 mb-0.5">
                    {exp.role}
                  </div>
                  <div className="text-sm text-indigo-400 mb-3">
                    {exp.company}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
