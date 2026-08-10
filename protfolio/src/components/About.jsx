function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 border-b-2 border-cyan-400/30 pb-4">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a developer who loves building things for the web. I focus on 
              clean code, responsive design, and great user experiences.
            </p>
            <p>
              When I'm not coding, I'm learning new technologies and improving 
              my craft. Currently obsessed with React and modern CSS.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Git', 'HTML5', 'CSS3'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About