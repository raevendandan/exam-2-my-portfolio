import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f14] via-[#0d1117] to-[#090c10] text-gray-300">
      
      
        <header className="fixed top-0 left-0 w-full z-50">
         <nav
          className="
        mx-auto max-w-6xl flex items-center justify-between
        px-6 py-4
        bg-black/60 backdrop-blur-md
        border border-white/10
        rounded-xl
        mt-4
        shadow-lg shadow-black/30
       "
     >

         
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-lg
                            border border-white/20 text-teal-400 font-bold">
              R
            </div>

            <span className="text-teal-400 font-semibold tracking-wide">
              Raeven{' '}
              </span>
          </div>

        
          <div className="flex items-center gap-7 text-sm">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/skills', 'Skills'],
              ['/projects', 'Projects'],
              ['/reviews', 'Reviews'],
              ['/contact', 'Contact Me'],
            ].map(([path, label]) => (
             <NavLink
           to={path}
           className={({ isActive }) =>
        `
        relative pb-1 transition-colors duration-200
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
        after:absolute after:left-0 after:-bottom-0.5
        after:h-[2px] after:w-full after:origin-left
        after:bg-teal-400 after:transition-transform after:duration-300
       ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'}
       hover:after:scale-x-100
     `
  }
>
  {label}
</NavLink>
            ))}
          </div>
        </nav>
      </header>

     
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-16">
        {children}
      </main>
    </div>
  )
}
