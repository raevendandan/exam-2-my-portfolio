export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      
    
      <h2 className="text-3xl font-bold text-white">
        Contact <span className="text-teal-400">Me</span>
      </h2>

     
      <div className="bg-black/50 border border-white/10 rounded-xl p-6 space-y-6">
        <p className="text-gray-400">
          Feel free to reach out to me through any of the platforms below.
        </p>

        <div className="space-y-4">
          
         
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Email</span>
            <a
              className="text-teal-400 hover:underline"
            >
              raevendandan@gmail.com
            </a>
          </div>

         
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Facebook</span>
            <a
              href="https://www.facebook.com/share/1869a1FE8J/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              Raeven John Dandan
            </a>
          </div>

         
          <div className="flex items-center justify-between">
            <span className="text-gray-300">GitHub</span>
            <a
              href="https://github.com/raevendandan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              github.com/raevendandan
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
