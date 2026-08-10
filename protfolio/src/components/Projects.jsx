function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      desc: "Full-stack shopping platform with cart functionality",
      tags: ["React", "Node.js"],
      link: "#"
    },
    {
      title: "Task Manager",
      desc: "Productivity app with drag-and-drop interface",
      tags: ["React", "Tailwind"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      desc: "Real-time weather tracking with API integration",
      tags: ["JavaScript", "API"],
      link: "#"
    }
  ]

  return (
    <section id="work" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-colors group">
              <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">📁</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-cyan-400 text-sm font-bold hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects