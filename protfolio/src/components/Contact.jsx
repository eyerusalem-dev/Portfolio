function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Get In Touch
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <form className="flex flex-col gap-4 text-left">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" className="flex-1 bg-slate-950 border border-slate-800 text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors" />
            <input type="email" placeholder="Email" className="flex-1 bg-slate-950 border border-slate-800 text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors" />
          </div>
          <textarea placeholder="Message" rows="5" className="bg-slate-950 border border-slate-800 text-white p-4 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"></textarea>
          <button type="button" className="mt-4 px-8 py-4 bg-cyan-400 text-slate-950 font-extrabold rounded-full shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform self-center">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
