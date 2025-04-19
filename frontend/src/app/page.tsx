import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import Traction from "@/sections/Traction";
import ClientWrapper from "@/sections/ClientWrapper";


export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-black dark:text-white">
      <Hero />
      <About />
      <Problem/>
      <Solution/>
      <Traction/>
      <ClientWrapper />
    </main>
  );
}

