
import { useMemo, useState } from 'react';

const internships = [
  {
    id: 'intern-1',
    title: 'Google cloud platform Intern',
    company: 'DC Innovision',
    location: 'Remote',
    period: 'July 2024 – August 2024',
    summary: 'I worked on the Google cloud platform and learned about the cloud computing and the cloud services.',
    learned: [
      'Developed a Proof of Concept (POC) to evaluate API integration and its impact on system performance',
      'Tested API functionality and analyzed feasibility for real-time implementation.',
      'Contributed to improving project efficiency through effective API usage',
    ],
    tech: ['Cloud', 'API', 'Cloud computing', 'Cloud services'],
  },
  {
    id: 'intern-2',
    title: 'Web development Intern',
    company: 'Yellow Summer',
    location: 'Remote',
    period: 'January 2025 – February 2025',
    summary: 'Worked on both frontend and backend features for a web application.',
    learned: [
      'Learned and applied web technologies during internship.',
      'Worked with databases (CRUD) and basic schema design',
      'Collaborated using Git branches and pull requests',
    ],
    tech: ['React', 'HTML', 'CSS', 'SQL/MongoDB', 'Git'],
  },
];

const Timeline = () => {
  const defaultSelected = useMemo(() => internships[0]?.id ?? null, []);
  const [selectedId, setSelectedId] = useState(defaultSelected);

  const selected = internships.find((i) => i.id === selectedId) ?? internships[0];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="section-title">Internship</h2>
        <p className="section-subtitle">Click an internship to see what I learned.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Timeline (left) */}
        <div className="border-l border-slate-800 pl-6 space-y-4">
          {internships.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={[
                  'relative text-left w-full rounded-2xl p-5 transition border',
                  isActive
                    ? 'bg-white/5 border-white/10 shadow-[0_10px_50px_-30px_rgba(56,189,248,0.45)]'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10',
                ].join(' ')}
              >
                <span
                  className={[
                    'absolute -left-[31px] top-7 w-3 h-3 rounded-full border',
                    isActive ? 'bg-sky-400 border-sky-400' : 'bg-slate-950 border-slate-700',
                  ].join(' ')}
                />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div className="text-base font-semibold text-slate-100">{item.title}</div>
                  <div className="text-sm text-slate-400">• {item.company}</div>
                </div>
                <div className="text-sm text-slate-500 mt-1">
                  {item.period} {item.location ? `• ${item.location}` : ''}
                </div>
                <div className="text-sm text-slate-300 mt-2">{item.summary}</div>
              </button>
            );
          })}
        </div>

        {/* Details (right) */}
        <div className="card p-7 lg:sticky lg:top-24">
          {selected ? (
            <>
              <div className="text-xl font-semibold text-slate-100">{selected.title}</div>
              <div className="text-sm text-slate-400 mt-1">
                {selected.company} {selected.period ? `• ${selected.period}` : ''}
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold text-slate-100">What I learned</div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-300">
                  {selected.learned.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {selected.tech?.length ? (
                <div className="mt-5">
                  <div className="text-sm font-semibold text-slate-100">Tech used</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="text-sm text-slate-400">Add an internship to see details.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

