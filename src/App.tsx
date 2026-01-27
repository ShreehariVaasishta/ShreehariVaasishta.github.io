import { useState } from "react";
import { combinedInformation } from "./lib/DynamicValues";

function App() {
  const [activeView, setActiveView] = useState<"home" | "dump">("home");

  const {
    initialInformation,
    directMessageItems,
    experience,
    openSource,
    operatingPrinciples,
    competencies,
    education,
  } = combinedInformation;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (activeView !== "home") {
      setActiveView("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary relative bg-grid-white">
      {/* Background Glows shifted to absolute to not interfere with overflow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="glow-amber w-[500px] h-[500px] -top-48 -left-48 opacity-40" />
        <div className="glow-amber w-[600px] h-[600px] -bottom-48 -right-48 opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 px-6 font-mono" aria-label="Main Navigation">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div
            onClick={() => {
              setActiveView("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Go to Home"
          >
            shreehari
          </div>
          <div className="hidden md:flex gap-8 items-center text-[0.8rem] uppercase tracking-widest font-medium text-muted-foreground">
            <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-primary transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="hover:text-primary transition-colors">Projects</a>
            <button
              onClick={() => {
                setActiveView("dump");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`hover:text-primary transition-colors uppercase tracking-widest font-medium ${activeView === "dump" ? "text-primary border-b border-primary/50" : ""}`}
            >
              Dump
            </button>

            <div className="h-4 w-[1px] bg-white/10 mx-2" aria-hidden="true" />

            <a
              href={directMessageItems.find((i) => i.name === "github")?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors lowercase font-mono"
            >
              Github
            </a>

            <a
              href={directMessageItems.find((i) => i.name === "medium")?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors lowercase font-mono"
            >
              Blogs
            </a>

            <a
              href="assets/Shreehari_Vaasistha_L_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-white/90"
            >
              Resume
              <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>

            <a
              href={`mailto:${initialInformation.email}`}
              className="px-4 py-1.5 rounded-md bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-orange-500/10 tracking-normal"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto pt-44 pb-16 px-6 relative z-10">
        {activeView === "home" ? (
          <>
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center gap-6 mb-24 pt-12 animate-fade-in px-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-[0.6rem] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Working on AI Systems
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                  <span className="text-gradient">Shreehari Vaasishta</span>
                </h1>
                <p className="text-base md:text-xl font-medium text-white/80 max-w-[500px] mx-auto">
                  AI & Systems Engineer
                </p>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[550px] font-medium">
                {initialInformation.intro}
              </p>

              <div className="flex flex-col items-center gap-6 mt-4">                
                <div className="flex gap-6 text-muted-foreground font-mono text-[0.7rem] uppercase tracking-[0.2em]">
                  {directMessageItems.slice(0, 3).map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <span className="opacity-40">/</span> {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Content Centered Container */}
            <div className="max-w-[750px] mx-auto px-6">
              {/* Experience Section */}
              <section id="about" className="mb-24 pt-16">
                <div className="flex items-center mb-8">
                  <h2 className="section-title">what i do</h2>
                </div>
                <div className="space-y-12">
                  {experience.map((item, index) => (
                    <div key={index} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-[9px] h-[9px] bg-background border border-primary transition-colors group-hover:bg-primary" />
                      {index !== experience.length - 1 && (
                        <div className="absolute left-[4px] top-[15px] bottom-[-40px] w-[1px] bg-border" />
                      )}
                      <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-sm text-muted-foreground font-mono">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-[1.05rem] text-muted-foreground mb-4 leading-relaxed italic opacity-80">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.techStack?.map((tech) => (
                          <span key={tech} className="tech-tag !bg-white/10 !border-white/20 !text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Competencies Section */}
              <section id="skills" className="mb-24 pt-16">
                <div className="flex items-center mb-10">
                  <h2 className="section-title">core competencies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {competencies.map((category) => (
                    <div key={category.title} className="bg-white/[0.05] border border-white/10 p-6 hover:border-primary/30 transition-all group hover:bg-white/[0.08]">
                      <h3 className="text-primary font-mono text-[0.65rem] uppercase tracking-[0.3em] mb-4 font-bold">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 border border-white/10 bg-white/[0.05] text-[0.75rem] text-white/60 group-hover:text-white/80 transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Open Source Section */}
              <section id="projects" className="mb-24 pt-16">
                <div className="flex items-center mb-10">
                  <h2 className="section-title">open source</h2>
                </div>
                <div className="grid grid-cols-1 gap-5">
                  {openSource.map((project, index) => (
                    <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white/[0.05] border border-white/10 p-6 transition-all hover:border-primary/30 group relative"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <div className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </div>
                      <span className="text-[0.65rem] text-primary font-mono mb-3 block uppercase tracking-wider">
                        {project.role}
                      </span>
                      <div className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[0.65rem] border border-white/5 bg-white/5 px-2 py-0.5 text-white/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section className="mb-24">
                <div className="flex items-center mb-10">
                  <h2 className="section-title">education</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`p-6 border border-white/10 bg-white/[0.05] transition-all hover:bg-white/[0.08] ${edu.isAccent ? "border-primary/20" : ""
                        }`}
                    >
                      <div className="text-lg font-bold mb-1 text-white">
                        {edu.institution}
                      </div>
                      <span className="text-[0.7rem] text-primary font-mono mb-3 block">
                        {edu.degree}
                      </span>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {edu.description}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </>
        ) : (
          /* Neural Dump View */
          <div className="max-w-[700px] mx-auto animate-fade-in mb-24">
            <header className="mb-12">
              <h1 className="text-3xl font-bold text-white mb-3 tracking-tight uppercase">Neural Dump</h1>
              <p className="text-muted-foreground italic text-base opacity-80 leading-relaxed">
                A random brain dump of thoughts, principles, and heuristics for navigating entropy.
              </p>
            </header>

            <div className="space-y-6">
              {operatingPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="p-5 border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex gap-4">
                    <span className="text-primary font-mono font-bold pt-1 opacity-50 group-hover:opacity-100 transition-opacity text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/90 leading-relaxed font-sans cursor-default selection:bg-primary/20">
                      {principle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveView("home")}
              className="mt-12 text-primary flex items-center gap-2 hover:opacity-80 transition-opacity font-mono text-xs uppercase tracking-widest"
            >
              ← Back to home
            </button>
          </div>
        )}

        {/* Footer */}
        <footer id="contact" className="max-w-[800px] mx-auto mt-20 pt-12 pb-12 border-t border-white/5 text-center">
          <div className="flex justify-center gap-6 mb-6 text-[0.7rem] font-mono lowercase tracking-wide">
            {directMessageItems.map((item) => (
              <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <span className="font-mono text-[0.6rem] text-muted-foreground opacity-30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {initialInformation.name} — engineered for scale
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
