export default function Projects() {
  const projects = [
    {
      title: 'Unsplash Gallery',
      description:
        'A responsive photo gallery application that fetches images from the Unsplash API. Users can search for photos, view them in a grid layout, and click to see larger versions.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Unsplash API'],
      github: 'https://github.com/raevendandan/Weekly_Exam.git',
    },
    {
      title: 'YouTube Cloning',
      description:
        'A task management application that allows users to add, update, and delete tasks. This project demonstrates state management and local storage usage.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/raevendandan/Option-A.git',
    },
    {
      title: 'Product Dashboard',
      description:
        'A mini CRUD-based web application developed as part of my academic work. It focuses on form handling, data flow, and basic application logic.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/raevendandan/Homework.git',
    },
  ]

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      
      
      <h2 className="text-3xl font-bold text-white">
        My <span className="text-teal-400">Projects</span>
      </h2>

      
      {projects.map(project => (
        <div
          key={project.title}
          className="
            bg-black/50 border border-white/10
            rounded-xl p-6
            transition hover:border-teal-400/40
          "
        >
       
          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          
          <p className="mt-3 text-gray-400 leading-relaxed">
            {project.description}
          </p>

          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="
                  text-xs px-3 py-1 rounded-full
                  border border-teal-400/30
                  text-teal-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

         
          <div className="mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-4 py-2 rounded-lg
                border border-white/20
                text-gray-300 text-sm
                hover:border-teal-400 hover:text-teal-400 transition
              "
            >
              Github Repository
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
