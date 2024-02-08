"use client"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Project from "@/components/Project";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home(){
  return (
    <>  
    <Navbar/>
    <Header/>
    <About/>
    <Project/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}
