import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

export default function Contact() {
  return (
    <div id="Contact" className="isolate bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-start">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          I have a solid foundation in web development, with expertise in HTML,
          CSS, JavaScript, and various front-end frameworks and libraries. I’m
          looking for a front-end development job where I can apply my skills
          and learn from the best. If you’re interested in working with me, you
          can contact me through the button below.
        </p>
        <div className="mt-10">
          <a href="https://linkedin.com/in/kevin-birkan-beyer" target="_blank">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
