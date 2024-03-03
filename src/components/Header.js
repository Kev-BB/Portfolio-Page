export default function Header() {
  return (
    <div className="header">
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen">
        <div className="mr-auto max-w-6xl py-32 sm:py-40 lg:py-48">
          <div className="text-start">
            <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-8xl">
              Hi I'm Kevin a Front-End Developer
            </h1>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-gray-200">
              I enjoy every aspect of web development, from coding to learning new technologies, to collaborating with other developers on exciting projects.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="https://linkedin.com/in/kevin-birkan-beyer"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
