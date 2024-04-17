import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-base-100 shadow-lg">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">James Buchanan</div>
          <div className="space-x-4">
            <a href="#about" className="btn btn-ghost">
              About
            </a>
            <a href="#projects" className="btn btn-ghost">
              Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello, I'm James Buchanan</h1>
            <p className="py-6">Professional Web Developer and Software Engineer</p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-5 py-10">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="text-center mt-5">I am a seasoned web developer with over 10 years of experience in building scalable and efficient web applications. I specialize in React and Node.js and have a passion for learning new technologies and frameworks.</p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-base-300 py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Project 1</h3>
                <p>Details about Project 1...</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Project 2</h3>
                <p>Details about Project 2...</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">Project 3</h3>
                <p>Details about Project 3...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-5 py-10">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="mailto:james@example.com" className="btn btn-circle btn-outline">
            <FaEnvelope size={24} />
          </a>
          <a href="https://linkedin.com/in/james" className="btn btn-circle btn-outline">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/james" className="btn btn-circle btn-outline">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-base-200 text-center py-4">
        <span>© 2023 James Buchanan. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
