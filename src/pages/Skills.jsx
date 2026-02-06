export default function Skills() {
  const skills = [
    { name: 'React', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Git', level: 'Basic' },
  ]

  return (
    <section className="max-w-4xl mx-auto">
      <div className="space-y-8">

        
        <h2 className="text-3xl font-bold text-white">
          My <span className="text-teal-400">Skills</span>
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="
                group relative
                bg-black/50 border border-white/10
                rounded-xl p-5
                transition hover:border-teal-400/40
              "
            >
             
              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>

              
              <p className="text-sm text-gray-400 mt-1">
                {skill.level}
              </p>

              
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-400 rounded-full transition-all duration-500
                  group-hover:w-[85%]"
                  style={{
                    width:
                      skill.level === 'Intermediate'
                        ? '70%'
                        : '50%',
                  }}
                />
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
