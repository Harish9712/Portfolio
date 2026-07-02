import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      name: 'E-Commerce Website',
      description: 'An online store built with React and Node.js.',
      demoLink: 'https://gregarious-bombolone-4f674d.netlify.app',
      codeLink: 'https://github.com/Harish9712/footify',
      image: '/picture/logo.png',
    },
    {
      name: 'Library Management System',
      description: 'Java based console application.',
      codeLink: 'https://github.com/Harish9712/Library_Management_system',
      image: '/picture/console.png',
    },
    {
      name: 'Pesticide recommendation system',
      description: 'Farmer can get the recommendation for the pesticide based on the crop and the disease.',
      codeLink: 'https://github.com/Harish9712/pesticide-recommendation',
      image: '/picture/farmer.png',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A few things I’ve built recently.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectData.map((project, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="relative">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-100">{project.name}</h3>
                <p className="text-slate-300 text-sm mt-2">{project.description}</p>

                <div className="flex gap-3 mt-5">
                  <a
                    href={project.demoLink}
                    className="text-sm text-slate-200 hover:text-white inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-sm text-slate-200 hover:text-white inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;

