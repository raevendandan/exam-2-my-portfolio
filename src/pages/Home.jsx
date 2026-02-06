import prof from '../assets/profpic.jpg'
export default function Home() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center space-y-6">

        <div className="relative mx-auto w-48 h-48">
 
  <div className="absolute inset-0 rounded-xl bg-teal-500/30 blur-2xl"></div>

  <img
    src={prof}
    alt={prof}
    className="
      relative w-48 h-48
      rounded-xl
      border-2 border-teal-400
      object-cover
    "
  />
</div>

        
        <h1 className="text-4xl font-bold text-white tracking-wide">
         Raeven John Abarra
        </h1>

       
        <p className="text-xl text-teal-400 font-medium">
          BSIT STUDENT{' '}
          <span className="text-teal-400">(Front-End Developer)</span>
        </p>

       
        <p className="max-w-xl mx-auto text-gray-400">
            Passionate about crafting engaging web experiences with React. Dedicated to continuous learning and creating impactful projects.
        </p>

       
       
        </div>
     
    </section>
  )
}
