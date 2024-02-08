export default function About() {
  return (
    <section id="About" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl text-center font-semibold leading-7 text-indigo-600">
          About Me
        </h2>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “I'm passionate about creating beautiful and user-friendly web
              applications using the latest technologies and frameworks. I have
              experience in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind. I'm
              always eager to learn new skills and improve my existing ones.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-14 w-14 rounded-full"
              src="me.png"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                Kevin Birkan Beyer
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
