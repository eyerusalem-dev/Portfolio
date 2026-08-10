function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-white tracking-tighter hover:text-cyan-400 transition-colors">
          PORT<span className="text-cyan-400">FOLIO</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-bold">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#work" className="text-slate-300 hover:text-cyan-400 transition-colors">Work</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-white hover:text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
