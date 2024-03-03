import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
export default function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-400">
  <div className="container px-5 py-4 flex flex-col md:flex-row ">
    <div className="flex-1">
      <img className="h-10 w-auto" src="kbb-logo.svg"/>
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <nav>
        <ul className="flex flex-col md:flex-row justify-center ">
          <li className="mr-4 hover:bg-gray-700 rounded-md px-3 py-2"><a href="/">Home</a></li>
          <li className="mr-4 hover:bg-gray-700 rounded-md px-3 py-2"><a href="#About">About</a></li>
          <li className="mr-4 hover:bg-gray-700 rounded-md px-3 py-2"><a href="#Projects">Projects</a></li>
          <li className="mr-4 hover:bg-gray-700 rounded-md px-3 py-2"><a href="#Blog">Blog</a></li>
          <li className="mr-4 hover:bg-gray-700 rounded-md px-3 py-2"><a href="https://linkendin.com/in/kevin-birkan-beyer" target="_blank">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="flex-2 mt-4 md:mt-0 ">
    <p className="text-sm">Follow me on social media:</p>
      <div className="flex mt-2 ">
        <a href="https://github.com/Kev-BB" target="_blank" className="mr-2"><FaGithubSquare className="text-3xl hover:fill-gray-900"/></a>
        <a href="https://linkedin.com/in/kevin-birkan-beyer" target="_blank" className="mr-2"><FaLinkedin className="text-3xl hover:fill-gray-900"/></a>
        <a href="https://medium.com/@Kev-BB" target="_blank" className="mr-2"><FaMedium className="text-3xl hover:fill-gray-900 "/></a>
      </div>
    </div>
  </div>
</footer>

  )
}

