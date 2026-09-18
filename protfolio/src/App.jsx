import React, { useState } from 'react';
import profilePic from './assets/avatar-lineart.png';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const handlePull = () => {
    setIsPulling(true);
    setTimeout(() => {
      setIsPulling(false);
      setIsLightOn(!isLightOn);
    }, 200);
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden font-sans text-[#2b2024] uppercase transition-colors duration-1000 ${isLightOn ? 'bg-[#3d1522]' : 'bg-[#15070c]'}`}>

      {/* Background Bottom Wave - fade in when light is on */}
      <svg viewBox="0 0 1440 320" className={`absolute bottom-0 w-full h-[35vh] lg:h-[45vh] transition-opacity duration-1000 pointer-events-none ${isLightOn ? 'opacity-100' : 'opacity-0'}`} preserveAspectRatio="none">
        <path fill="#61263d" d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>

      {/* Main Layout */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-2 sm:px-4 py-4 w-full">

        {/* Lamp Interactive Element */}
        <div className={`absolute z-30 transition-all duration-1000 ease-in-out ${isLightOn ? '-left-6 -top-8 sm:left-2 sm:top-2 md:left-8 md:top-8 scale-[0.35] sm:scale-50 opacity-80' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 sm:scale-125 opacity-100'}`}>
          <div className="relative cursor-pointer select-none group" onClick={handlePull}>

            {/* Lamp Glow */}
            <div className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-[300px] h-[400px] bg-yellow-200/20 blur-[80px] rounded-b-full transition-opacity duration-1000 pointer-events-none ${isLightOn ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Lamp SVG */}
            <svg width="200" height="250" viewBox="0 0 200 250" className="relative z-10 drop-shadow-2xl">
              {/* Base */}
              <rect x="50" y="230" width="100" height="10" rx="5" fill="#e8e0d5" />
              {/* Stem */}
              <rect x="92" y="100" width="16" height="130" fill="#d3cbc0" />
              {/* Shade Inside (glow) */}
              <path d="M40,100 Q100,130 160,100 Z" fill={isLightOn ? '#fef08a' : '#3d1522'} className="transition-colors duration-1000" />
              {/* Shade Top */}
              <path d="M20,100 C20,20 180,20 180,100 Z" fill="#f5f0e6" />

              {/* Pull String */}
              <line
                x1="130" y1="100"
                x2="130" y2={isPulling ? "170" : "150"}
                stroke="#666" strokeWidth="2"
                className="transition-all duration-200"
              />
              <circle
                cx="130" cy={isPulling ? "170" : "150"}
                r="6" fill="#d99b78"
                className="transition-all duration-200 group-hover:fill-yellow-500"
              />
            </svg>

            {/* Instruction text (only when off) */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest transition-opacity duration-500 whitespace-nowrap ${isLightOn ? 'opacity-0' : 'opacity-100'}`}>
              Pull to turn on
            </div>
          </div>
        </div>

        {/* Portfolio Card Section */}
        <div className={`transition-all duration-1000 ease-in-out z-20 w-full flex justify-center ${isLightOn ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-12 scale-95 pointer-events-none absolute'}`}>
          <div className="bg-[#f5f0e6] w-[95vw] max-w-7xl md:w-[85vw] lg:w-[75vw] xl:w-[65vw] min-h-[75vh] rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-8 md:p-12 lg:p-16 relative flex flex-col items-center border border-white/10 my-4 sm:my-8 md:my-12">

            {/* Top Label & Small Avatar */}
            <div className="absolute top-4 left-5 right-5 sm:top-8 sm:left-10 sm:right-10 flex justify-between items-center z-10">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#61263d]">
                {activeTab}
              </div>
              {activeTab !== 'Home' && (
                <img
                  src={profilePic}
                  alt="Avatar Logo"
                  className="w-9 h-9 sm:w-12 sm:h-12 object-cover object-center rounded-full border-2 border-[#61263d] cursor-pointer hover:scale-105 transition-transform shadow-md"
                  onClick={() => setActiveTab('Home')}
                  title="Go Home"
                />
              )}
            </div>

            {/* Content Container */}
            <div className="flex-grow w-full flex flex-col items-center justify-center relative my-10 sm:my-6">
              {activeTab === 'Home' && (
                <div className="flex flex-col items-center justify-center transition-opacity duration-500 w-full text-center px-2">
                  {/* Avatar - Circle Frame */}
                  <div className="mt-2 mb-4">
                    <img src={profilePic} alt="Avatar" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-center rounded-full mx-auto shadow-xl border-4 border-[#61263d]" />
                  </div>

                  {/* Greeting */}
                  <div className="text-center mb-2 sm:mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
                      <span className="font-light tracking-tight">Hi!</span>
                      <span className="font-bold tracking-tight">I'm</span>
                      <span className="font-bold text-[#61263d] tracking-tight">Eyerusalem</span>
                    </h1>
                    <p className="text-xs sm:text-base font-medium text-[#4a3a3f]">
                      Full-Stack Developer & AI Enthusiast
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'About Me' && (
                <div className="flex flex-col items-center justify-center transition-opacity duration-500 w-full max-w-5xl text-center px-2 sm:px-4 md:px-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#61263d] mb-3 sm:mb-4 normal-case tracking-normal">Hi, I'm Eyerusalem Tsegaye.</h2>
                  <div className="text-xs sm:text-sm md:text-base text-[#4a3a3f] space-y-3 sm:space-y-4 normal-case tracking-normal leading-relaxed font-medium text-center">
                    <p>
                      I'm a Computer Science graduate from University of Gondar in 2026. I build practical full-stack applications with Python, Django, and React. My approach is simple: turn complex challenges into working solutions that actually help people.
                    </p>
                    <p>
                      I’m particularly interested in data analysis and machine learning, and how we can use data to build smarter, more adaptive applications. I’m currently expanding my skills in these areas through projects and continuous learning.
                    </p>
                    <p>
                      Beyond the code, I value reliability, clear communication, and collaboration. If you're working on something interesting or just want to connect, I’d love to hear from you.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'Skills' && <Skills />}
              {activeTab === 'Works' && <Works />}

              {activeTab === 'FAQ' && (
                <div className="flex flex-col items-center justify-center transition-opacity duration-500 w-full max-w-3xl px-2 sm:px-4 space-y-3 sm:space-y-4 normal-case tracking-normal">
                  <div className="bg-[#ebdcd0] p-4 sm:p-5 rounded-2xl w-full border border-[#61263d]/10">
                    <h4 className="font-bold text-[#61263d] text-sm sm:text-base mb-1">What technologies do you work with?</h4>
                    <p className="text-[#4a3a3f] text-xs sm:text-sm">I specialize in Python, Django, React, JavaScript, Next.js, and Machine Learning tools.</p>
                  </div>
                  <div className="bg-[#ebdcd0] p-4 sm:p-5 rounded-2xl w-full border border-[#61263d]/10">
                    <h4 className="font-bold text-[#61263d] text-sm sm:text-base mb-1">Are you available for full-time roles or ?</h4>
                    <p className="text-[#4a3a3f] text-xs sm:text-sm">Yes, I am open to full-time developing roles, research collaborations, and freelance projects.</p>
                  </div>
                </div>
              )}

              {activeTab === 'Contact Me' && <Contact />}
            </div>

            {/* Icon Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-6 md:gap-10 mt-auto pt-4 sm:pt-8 relative z-50 w-full">
              <NavIcon name="About Me" onClick={() => setActiveTab('About Me')} svg={<><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>} />
              <NavIcon name="Skills" onClick={() => setActiveTab('Skills')} svg={<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>} />
              <NavIcon name="Works" onClick={() => setActiveTab('Works')} svg={<><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></>} />
              <NavIcon name="FAQ" onClick={() => setActiveTab('FAQ')} svg={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9.09 13.5a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 21h.01" /></>} />
              <NavIcon name="Contact Me" onClick={() => setActiveTab('Contact Me')} svg={<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>} />
            </div>

            {/* Social Icons inside card */}
            <div className="flex flex-col items-center mt-6 sm:mt-10 relative z-50">
              <div className="flex gap-6 sm:gap-8 justify-center mb-2 sm:mb-3 text-[#61263d]">
                <SocialIcon type="github" size={24} href="https://github.com/eyerusalem-dev" />
                <SocialIcon type="linkedin" size={24} href="https://www.linkedin.com/in/eyerusalem-tsegaye-prf" />
                <SocialIcon type="telegram" size={24} href="https://t.me/jerry_388" />
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#61263d] font-bold tracking-widest">
                © 2026 Eyerusalem Tsegaye
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function NavIcon({ name, svg, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1 sm:gap-3 group cursor-pointer hover:opacity-70 transition-opacity focus:outline-none bg-transparent border-none px-1"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-[#61263d]">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {svg}
        </svg>
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm font-bold text-[#61263d] tracking-normal sm:tracking-wide whitespace-nowrap">{name}</span>
    </button>
  );
}

function SocialIcon({ type, size = 24, href = "#" }) {
  let svg = null;
  if (type === 'github') svg = <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.54 6.5-7.1A5.8 5.8 0 0 0 19 5.31 5.6 5.6 0 0 0 19 2.5s-1.3-.4-4 1.4a13.3 13.3 0 0 0-7 0C5.3 2.1 4 2.5 4 2.5a5.6 5.6 0 0 0 0 2.81 5.8 5.8 0 0 0-1.5 2.57c0 5.56 3.35 6.72 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4" /><path d="M9 20c-3.1 1-5-1-5-3" /></>;
  if (type === 'linkedin') svg = <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>;
  if (type === 'telegram') svg = <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-[#61263d] transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {svg}
      </svg>
    </a>
  );
}

export default App;