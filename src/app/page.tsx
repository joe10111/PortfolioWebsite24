import type { NextPage } from 'next'; //Import next js page
import Head from 'next/head';         //Import next js head
import Link from 'next/link';         //Import next js link

// Below : Home page component, displays a welcome message.
// Uses NextPage type for Next.js page.
// Exported as default.
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joseph Centeno's Portfolio</title>
        <meta name="description" content="Joseph Centeno - Backend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-body bg-white">

        <section className="bg-primary text-black text-center py-12 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src="/PXL_20210131_231826358 1.png" 
              alt="Joseph Centeno" 
              className="h-48 w-48 rounded-full border-4 border-white shadow-lg" 
            />
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-4xl font-bold">Hello, I'm Joseph Centeno</h1>
              <p className="mt-2">A Backend Developer from Seattle. A proud graduate of The Launch Program at the Turing School of Software and Design, I specialize in C# and .NET, focusing on creating accessible software solutions. Currently, I'm expanding my expertise into game development, leveraging my C++ background to design immersive worlds for players.</p>
              <a href="#projects" className="mt-4 inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark">View My Work</a>

              <img 
              src="/LaunchLogo.png" 
              alt="Launch Link" 
              className="w-full md:w-auto md:max-w-xs lg:max-w-sm rounded-lg" 
              />
            </div>
          </div>
          
        </section>

        <section id="projects" className="py-8 px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-8">Projects</h2>
          {/* Replace with a dynamic list of projects, TODO for later */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Project Cards */}
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2"> Code-Whisperer | Capstone </h3>
              
              <p className="text-black mb-4">
                Code Whisperer AI is a capstone project developed for Turing's Launch program,
                showcasing the cumulative learning from mods 0 to 5. This individual project spaned two weeks and represents
                a blend of skills and knowledge acquired through the rigorous program.
              </p>
              <a href="https://codewhispererai.azurewebsites.net" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="https://github.com/joe10111/Code-Whisperer-AI" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">LevelUp | Collaborative</h3>
              <p className="text-black mb-4">
                LevelUp is an innovative ASP.Net 
                Core web application that melds task management with gamification. 
                Offering a unique approach to accomplishing real-world tasks, 
                promoting community connection, and visualizing personal growth.
              </p>
              <a href="https://github.com/Eli-J-Paris/LevelUp" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">CCIPICL-API | Contract Work</h3>
              <p className="text-black mb-4">
                CCIPICL-ChatAssistant is a specialized REST API-driven chatbot designed to provide accurate, 
                focused information on Craniocervical Instability (CCI) and Percutaneous Implantation of the Craniocervical Ligaments (PICL).
              </p>
              <a href="https://github.com/joe10111/CCIPICL-ChatAssistant" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Cappuccino-Chatter | Turing </h3>
              <p className="text-black mb-4">
               Mod 3 Turing Launch Project Cappuccino - Chatter is a social media messaging app developed using .NET C# MVC.
                It has a unique focus on connecting coffee enthusiasts and fostering discussions around coffee-related topics.
                Features: user authentication, messaging, and profile management.
              </p>
              <a href="https://github.com/joe10111/Cappuccino-Chatter" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">GAM-150-WTFGO | College</h3>
              <p className="text-black mb-4">
                What The Food is Going On?! is an 2D cooking game developed during Digipen Summer 2021,
                where players assume the role of a chef aiming to concoct various dishes under time constraints.
                Developed in C using the Alpha Engine framework. As a developer in a team of four, 
                my responsibilities spanned graphics, audio, and gameplay programming.
              </p>
              <a href="https://github.com/joe10111/GAM-150-WTFGO" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">SCUBA-GAM-100 | College</h3>
              <p className="text-black mb-4">
                In the Spring semester of 2021, as part of a four-person team in the GAME 100 course at DigiPen Institute
                of Technology, I served as the Systems Programmer for SCUBA-GAM-100. This scuba-themed endless runner,
                crafted in C using the Alpha Engine framework, challenged players to adeptly pilot a submarine through
                treacherous waters, evading sharks and jellyfish.
              </p>
              <a href="https://github.com/joe10111/SCUBA-GAM-100" className="text-black hover:underline">View GitHub</a>
            </div>
          </div>
        </section>

        <section id="about-me" className="bg-white text-black py-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="md:flex-grow">
              <h2 className="text-3xl font-bold text-center md:text-left mb-8">About Me</h2>
              <p className="text-lg mb-4">Welcome! I'm Joseph, a passionate Backend Developer who recently completed The Launch Program at the Turing School of Software and Design. This innovative program designed specifically for young career starters deepened my expertise in C#/.NET object-oriented programming and databases, preparing me to tackle complex software development challenges with modern solutions.</p>
              <p className="text-lg mb-4">My journey doesn't end with software development; I'm also fervently exploring the realm of game development. Revisiting my foundational skills in C++ from my college days, I'm now engrossed in mastering Unreal Engine 5. My ambition is to blend my technical abilities with creative storytelling, crafting engaging worlds that offer players unique and memorable experiences.</p>
              <p className="text-lg mb-4">Outside of the digital domain, my adventures in the Pacific Northwest's wilderness, time spent with my cats, and the art of coffee brewing enrich my life. These experiences, combined with the invaluable customer service skills I developed as a Starbucks Barista, have shaped my approach to technology and teamwork.</p>
              <p className="text-lg">With a balanced skill set in both C#/.NET for software development and C++ for game creation, I am eager to contribute to meaningful projects in both spheres. I invite you to explore my portfolio further. Let's discuss how we can work together to bring innovative ideas to life.</p>
            </div>
            <div className="md:flex-shrink-0 md:ml-8">
              <img 
              src="/joe_portrait 2.png" 
              alt="Joseph Centeno in nature" 
              className="w-full md:w-auto md:max-w-xs lg:max-w-sm rounded-lg" 
              />
            </div>
          </div>
        </section>

        <footer className="bg-primary text-black text-center py-4 mt-8">
          <p>© 2024 Joseph Centeno. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
};

export default Home;