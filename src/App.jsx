import { Github, Linkedin, Mail, Code2, BookOpen, Download, School } from 'lucide-react';
import Projects from './Projects';
import { saveAs } from 'file-saver';
import resume from '/pdf/HARISH-R-Resume.pdf'; // Adjust the path to your resume file
import Timeline from './Timeline';

function App() {
  const download = async () => {
    saveAs(resume, 'HARISH-R-Resume.pdf');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(168,85,247,0.16),transparent_52%),radial-gradient(1000px_circle_at_50%_90%,rgba(20,184,166,0.10),transparent_55%)]">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="glass rounded-2xl px-4 py-3 flex justify-between items-center">
            <h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100">
              Harish&apos;s Portfolio
            </h1>

            <ul className="hidden md:flex gap-1">
              {[
                ['About', '#about'],
                ['Internship', '#internship'],
                ['Projects', '#projects'],
                ['Skills', '#skills'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-3 py-2 rounded-xl text-sm text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-100 transition"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </nav>

      <div className="h-20" />

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/picture/IMG_20240301_124848.jpg" alt="" className="h-full w-full object-cover opacity-[0.10]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <p className="text-sm text-slate-300">Aspiring Software Engineer</p>
              <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-slate-100">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-violet-300 to-teal-200">
                  Harish R
                </span>
              </h2>
              <p className="mt-4 text-slate-300 max-w-xl">
                Information Technology student focused on Web development ,Core Java, building clean UI and practical
                projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={download}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500/90 to-violet-500/90 hover:from-sky-500 hover:to-violet-500 text-white font-medium shadow-lg shadow-sky-500/10 transition"
                >
                  <span className="inline-flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                </button>

                <a
                  href="#projects"
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-100 font-medium transition"
                >
                  View Projects
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/Harish9712"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:rharishh20@gmail.com"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-teal-500/20 blur-2xl" />
                <img
                  src="/picture/Harish-profile -photo.png"
                  alt="Profile"
                  className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl">
              Curious, adaptable, and focused on building useful software with great UX.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
            <div className="card p-7">
              <p className="text-slate-300 leading-relaxed">
                As a passionate undergraduate student, I have developed a deep interest in Full Stack. Throughout my
                academic journey, I have honed strong analytical and problem-solving skills. My involvement in Full
                Stack development has equipped me with the ability to foster team spirit and collaboration. Adaptable
                and driven, I thrive in high-pressure situations and am dedicated to continuous self improvement. With
                excellent communication and teamwork abilities, I am eager to take on new challenges and make
                meaningful contributions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://www.kpriet.ac.in/" target="_blank" className="card p-6 hover:bg-white/5 transition">
                <School className="w-8 h-8 text-teal-300 mb-4" />
                <h3 className="font-semibold text-slate-100 mb-1">College</h3>
                <p className="text-slate-300 text-sm">Kpr Institute of Engineering and Technology</p>
                <p className="text-slate-300 text-sm mt-2">B.Tech IT • CGPA: 7.85</p>
              </a>

              <a
                href="https://www.jaytechcbseschool.com/"
                target="_blank"
                className="card p-6 hover:bg-white/5 transition"
              >
                <School className="w-8 h-8 text-sky-300 mb-4" />
                <h3 className="font-semibold text-slate-100 mb-1">School</h3>
                <p className="text-slate-300 text-sm">SBM Jay Tech International School (CBSE)</p>
                <p className="text-slate-300 text-sm mt-2">12th: 65.17%</p>
              </a>

              <div className="card p-6">
                <Code2 className="w-8 h-8 text-violet-300 mb-4" />
                <h3 className="font-semibold text-slate-100 mb-1">Development</h3>
                <p className="text-slate-300 text-sm">Full-stack web development with modern technologies</p>
              </div>

              <div className="card p-6">
                <BookOpen className="w-8 h-8 text-teal-300 mb-4" />
                <h3 className="font-semibold text-slate-100 mb-1">Learning</h3>
                <p className="text-slate-300 text-sm">Always learning and improving through projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="py-20 px-4">
        <Timeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Tools I use to build fast, clean apps.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {['Java','Python','SQL','Git','React', 'JavaScript', 'HTML', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="card px-4 py-4 text-center">
                <p className="font-medium text-slate-100">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="card p-10 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-500/10 rounded-full blur-2xl" />

            <h2 className="section-title">Get In Touch</h2>
            <p className="mt-3 text-slate-300">I&apos;m currently looking for internship opportunities. Let&apos;s connect!</p>

            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <a
                href="mailto:rharishh20@gmail.com"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-100 font-medium transition"
              >
                Say Hello
              </a>
              <a
                href="https://github.com/Harish9712"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500/90 to-violet-500/90 hover:from-sky-500 hover:to-violet-500 text-white font-medium shadow-lg shadow-sky-500/10 transition"
              >
                View GitHub
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Harish R • Built with React</p>
        </div>
      </section>
    </div>
  );
}

export default App;

