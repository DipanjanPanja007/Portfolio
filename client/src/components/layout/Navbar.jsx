const navItems = [
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4.5V20h14v-1.5C19 16 16 14 12 14Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'About',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M11 10h2v8h-2v-8Zm1-7a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 5h6l2 2h8v12H4V5Zm2 4v8h12V9H6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="m14 3 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Zm-7 6 1.3 2.7L11 13l-2.7 1.3L7 17l-1.3-2.7L3 13l2.7-1.3L7 9Zm10 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'education',
    label: 'Education',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="m12 3 10 5-10 5L2 8l10-5Zm-6 8.2V14c0 2.2 2.7 4 6 4s6-1.8 6-4v-2.8l-6 3-6-3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 6h16v12H4V6Zm2 2v.6l6 4 6-4V8l-6 4-6-4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

function Navbar({ activeSection = 'profile', onNavigate }) {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-slate-800/80 bg-slate-950/70 backdrop-blur md:block">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <span className="text-lg font-semibold tracking-wide text-slate-100">
          Dipanjan 
        </span>
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-label={item.label}
                title={item.label}
                onClick={(event) => onNavigate?.(event, item.id)}
                className={`flex h-9 w-9 items-center justify-center rounded-md transition ${
                  activeSection === item.id
                    ? 'bg-blue-500/15 text-blue-300 shadow-[0_0_16px_rgba(96,165,250,0.65)]'
                    : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
