import React from 'react';

// Skill icons matching brand logos
const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0z" fill="#E44D26"/>
    <path d="M12 2.18v19.605l6.544-1.818 1.547-17.787H12z" fill="#F16529"/>
    <path d="M12 8.423H8.38l.245 2.766H12v2.766H5.962l-.736-8.298H12v2.766zM12 16.602l-.023.006-2.737-.739-.175-1.966H6.291l.343 3.856 5.364 1.488.002-.001v-2.644z" fill="#EBEBEB"/>
    <path d="M12 8.423v2.766h3.407l-.32 3.606-3.087.833v2.645l5.362-1.488.047-.534.616-6.93.075-.894H12z" fill="#FFFFFF"/>
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0z" fill="#264DE4"/>
    <path d="M12 2.18v19.605l6.544-1.818 1.547-17.787H12z" fill="#2965F1"/>
    <path d="M12 8.423H8.38l.245 2.766H12v2.766H5.962l-.736-8.298H12v2.766zM12 16.602l-.023.006-2.737-.739-.175-1.966H6.291l.343 3.856 5.364 1.488.002-.001v-2.644z" fill="#EBEBEB"/>
    <path d="M12 8.423v2.766h3.407l-.32 3.606-3.087.833v2.645l5.362-1.488.047-.534.616-6.93.075-.894H12z" fill="#FFFFFF"/>
  </svg>
);

const JsIcon = () => (
  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#F7DF1E] text-black font-extrabold text-[10px] sm:text-[11px] flex items-center justify-center shrink-0 leading-none shadow-sm select-none">
    JS
  </div>
);

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0">
    <path fill="#3776AB" d="M62.61 0c-32.96 0-30.88 14.3-30.88 14.3l.04 14.77h31.42v4.44H18.84S0 31.4 0 64.67c0 33.28 16.44 32.18 16.44 32.18h9.84V82.52s-.53-17.06 16.8-17.06h28.77s15.99.27 15.99-15.45V15.46S90.41 0 62.61 0zm-16.7 9.87c2.93 0 5.3 2.37 5.3 5.3 0 2.94-2.37 5.31-5.3 5.31-2.94 0-5.31-2.37-5.31-5.31 0-2.93 2.37-5.3 5.31-5.3z"/>
    <path fill="#FFD43B" d="M65.39 128c32.96 0 30.88-14.3 30.88-14.3l-.04-14.77H64.81v-4.44h44.35s18.84 2.11 18.84-31.16c0-33.28-16.44-32.18-16.44-32.18h-9.84v14.33s.53 17.06-16.8 17.06H56.15s-15.99-.27-15.99 15.45v34.55s-2.57 15.46 25.23 15.46zm16.7-9.87c-2.93 0-5.3-2.37-5.3-5.3 0-2.94 2.37-5.31 5.3-5.31 2.94 0 5.31 2.37 5.31 5.31 0 2.93-2.37 5.3-5.31 5.3z"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
  </svg>
);

const NextIcon = () => (
  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
    <svg viewBox="0 0 128 128" className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm24.5 90.7L54.7 46.2V88H45V40h10.9l32.7 43.4V40h9.8v50.7h-3.9z"/>
    </svg>
  </div>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="none">
    <path d="M12 1.8l9.5 5.5v11L12 23.8 2.5 18.3v-11L12 1.8z" fill="#339933"/>
    <path d="M12 4.2L4.5 8.5v7l7.5 4.3 7.5-4.3v-7L12 4.2z" fill="#5FA04E"/>
    <path d="M10 8h4v8h-4z" fill="#FFFFFF"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" fill="#F05032">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l3.243 3.243c.642-.218 1.385-.07 1.89.435.51.509.654 1.256.43 1.898l3.125 3.125c.642-.224 1.388-.078 1.895.428.718.718.718 1.884 0 2.603-.718.717-1.884.717-2.603 0-.525-.525-.664-1.286-.416-1.936l-2.91-2.91v7.697c.22.128.42.296.58.5.718.718.718 1.885 0 2.603-.718.718-1.885.718-2.603 0-.718-.718-.718-1.885 0-2.603.22-.22.48-.387.766-.492V8.981c-.286-.105-.546-.272-.766-.492-.522-.521-.664-1.278-.42-1.926L8.03 3.305.454 10.88c-.605.604-.605 1.581 0 2.186l10.478 10.48c.605.603 1.582.603 2.187 0l10.427-10.428c.605-.604.605-1.581 0-2.188z"/>
  </svg>
);

const skillColumns = [
  // Column 1
  [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "JavaScript", icon: <JsIcon /> },
    { name: "Python", icon: <PythonIcon /> }
  ],
  // Column 2
  [
    { name: "React.js", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Git", icon: <GitIcon /> }
  ]
];

export default function Skills() {
  return (
    <div className="w-full max-w-4xl px-1 sm:px-4 md:px-6 py-1 sm:py-2 normal-case tracking-normal transition-all duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6 w-full">
        {skillColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4 sm:gap-5 w-full">
            {col.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-1.5 sm:gap-2 group hover:translate-x-1 transition-transform duration-300">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {skill.icon}
                  <span className="font-bold text-[#2b2024] text-xs sm:text-sm md:text-base tracking-wide">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-[#e6dfd3] h-2 sm:h-2.5 rounded-full overflow-hidden shadow-inner relative">
                  <div className="h-full bg-gradient-to-r from-[#61263d] to-[#8c3a5b] rounded-full shadow-sm w-full" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
