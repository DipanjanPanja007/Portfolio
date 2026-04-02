function Skills() {
  const skillGroups = [
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
        { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express' },
      ],
    },
    {
      title: 'AI / ML',
      skills: [
        { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch' },
        { name: 'Deep Learning' },
        { name: 'NLP' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
        { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: 'https://cdn.simpleicons.org/react' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      ],
    },
    {
      title: 'Tools & Concepts',
      skills: [
        { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/postman' },
        { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens' },
        { name: 'WebSockets', icon: 'https://cdn.simpleicons.org/socketdotio' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-[40vh] scroll-mt-20 py-7 sm:py-8">
      <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-sm text-slate-300">
          Technologies and tools I use to build scalable systems and intelligent applications.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-700/70 bg-slate-950/45 p-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {group.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-2 py-1 text-xs text-slate-200 transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-4 w-4"
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills