import React from 'react';

const projects = [
  {
    title: "Hope-Valley-Animal-Shelter",
    description: "A frontend demo website for a fictional animal shelter. It includes sample pages for browsing adoptable pets, filtering listings, viewing pet details, and reading a step-by-step adoption process.",
    githubUrl: "https://github.com/eyerusalem-dev/Hope-Valley-Animal-Shelter-Demo-.git",
    tags: ["React", "Frontend", "Demo"]
  },
  {
    title: "UOG Health Record and Referral Platform",
    description: "It is an electronic health care system that will address the issue of loss of medical records when patients are transferred from one health care facility to another by referral. The system assigns a permanent identifier (UPIN), to each patient and connects all of their medical history (diagnosis, medication, laboratory tests, and allergy) into one secure digital file.",
    githubUrl: "https://github.com/eyerusalem-dev/uog-student-referral-system.git",
    tags: ["Full-Stack", "Healthcare", "UPIN System"]
  }
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Works() {
  return (
    <div className="w-full max-w-5xl px-1 sm:px-4 md:px-6 py-1 sm:py-2 normal-case tracking-normal transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#ebdcd0] hover:bg-[#e4d3c5] p-4 sm:p-6 md:p-7 rounded-2xl border border-[#61263d]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3">
                <h3 className="font-bold text-[#61263d] text-base sm:text-lg md:text-xl group-hover:text-[#4a1c2e] transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#61263d]/10 group-hover:bg-[#61263d] text-[#61263d] group-hover:text-[#f5f0e6] flex items-center justify-center shrink-0 transition-colors">
                  <GithubIcon />
                </div>
              </div>
              <p className="text-[#4a3a3f] text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-3 pt-3 border-t border-[#61263d]/10">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#61263d]/10 text-[#61263d] rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#61263d] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View on GitHub →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
