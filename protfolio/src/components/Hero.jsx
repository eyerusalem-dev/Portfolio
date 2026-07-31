function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
        PORTFOLIO
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-cyan-300 mb-4">
        React · Tailwind · Design
      </h2>
      <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10">
        I build fast, responsive websites and web apps. Let's make something great.
      </p>
      <a 
        href="#work" 
        className="px-8 py-4 bg-cyan-400 text-slate-950 font-extrabold rounded-full shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform"
      >
        See My Work
      </a>
    </section>
  )
}

export default Hero