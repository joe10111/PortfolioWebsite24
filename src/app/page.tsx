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
            </div>
          </div>
        </section>

        <section id="projects" className="py-8 px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-8">Projects</h2>
          {/* Replace with a dynamic list of projects, TODO for later */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Project Cards */}
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-black text-xl mb-2">Project Title</h3>
              <p className="text-black mb-4">Short project description.</p>
              <a href="#" className="text-black hover:underline">View Live</a>
              {' | '}
              <a href="#" className="text-black hover:underline">View GitHub</a>
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