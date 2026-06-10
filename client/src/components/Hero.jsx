const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-slate-600" />
          <span className="text-xs tracking-widest uppercase text-slate-500">
            Full Stack Developer
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-6">
          Code that's clean.
          <br />
          <em className="text-slate-500">Products that work.</em>
        </h1>

        {/* Bio */}
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          I'm Srithar — a full stack developer building end-to-end web
          applications with React, Node.js, and modern databases. From insurance
          platforms to campus tools, I ship things that solve real problems.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/srithar-s-b64159302/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn ↗
          </a>
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-md">
          {[
            { num: "3+", label: "Years building" },
            { num: "3", label: "Projects shipped" },
            { num: "9", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-900 rounded-xl p-4">
              <div className="font-serif text-3xl font-medium">{s.num}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
