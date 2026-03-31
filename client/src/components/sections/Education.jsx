function Education() {
  const educationItems = [
    {
      title: 'B.Tech in Computer Science and Technology',
      institute: 'Academy of Technology',
      board: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
      year: '2022 - 2026',
      score: 'CGPA: 8.16 (till now)',
      extra: '',
    },
    {
      title: 'Higher Secondary',
      institute: 'Singur Mahamaya High School',
      board: 'West Bengal Council of Higher Secondary Education',
      year: '2022',
      score: '86.66%',
      extra: 'Science background',
    },
    {
      title: 'Matriculation',
      institute: 'Singur Mahamaya High School',
      board: 'West Bengal Board of Secondary Education',
      year: '2020',
      score: '92%',
      extra: '',
    },
  ]

  return (
    <section id="education" className="min-h-[40vh] scroll-mt-20 py-8">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <p className="mt-2 text-sm text-slate-300">
          Academic background and formal qualifications.
        </p>

        <div className="mt-6 space-y-4">
          {educationItems.map((item) => (
            <article
              key={`${item.title}-${item.year}`}
              className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 self-start">
                  <span className="rounded-md border border-blue-400/30 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-300">
                    {item.year}
                  </span>
                  <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                    {item.score}
                  </span>
                </div>
              </div>

              <p className="mt-2 text-sm text-slate-200">{item.institute}</p>
              <p className="mt-1 text-sm text-slate-400">{item.board}</p>
              {item.extra && (
                <p className="mt-2 text-sm text-slate-300">{item.extra}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
