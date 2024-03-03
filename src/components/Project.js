
const callouts = [
    {
      name: 'Graduation Project',
      description: 'Collaborative Project Showcasing Graduated Students',
      imageSrc: 'graduation-project.png',
      imageAlt: 'Collaborative Project Showcasing Graduated Students.',
      href: 'https://graduation-project-flame.vercel.app/',
    },
    {
      name: 'LogosSphere',
      description: 'English Dictionary App',
      imageSrc: 'logosSphere.png',
      imageAlt: 'English Dictionary App',
      href: 'https://logos-sphere.vercel.app/',
    },
    {
      name: 'Git-Trailblazer',
      description: "Github User Search",
      imageSrc: 'GitTrailBlazer.png',
      imageAlt: 'App for searching github users',
      href: 'https://git-trailblazer.vercel.app/',
    },
  ]
  
  export default function Project() {
    return (
      <div id="Projects" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:max-w-none lg:py-24">
            <h2 className="text-3xl pb-10 font-bold text-center  text-gray-900">Projects</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <div className="relative h-80 w-full overflow-hidden rounded bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center border-solid border-2 border-zinc-600"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} target="_blank">
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  