import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithubSquare } from "react-icons/fa";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 md:mb-10"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_2px_8px_rgba(198,255,0,0.2)] transition">
              <div className="mb-4">
                <img
                  src="/moodify.png"
                  alt="moodify"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Moodify – Mood Based Music Recommender</h3>

              <p className="text-gray-400 mb-4">
              A web app that recommends music based on the user's mood, enhancing the listening experience with personalized playlists.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "Ollama", "HTML/CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="border text-white py-1 px-3 rounded-full text-sm hover:bg-white hover:text-black 
                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* <a
                  href="https://your-live-project-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Live
                </a> */}
                <a
                  href="https://github.com/tarunkumar-sys/moodify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Code
                </a>
              </div>
            </div>
{/* 2nd */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_2px_8px_rgba(198,255,0,0.2)] transition">
              <div className="mb-4">
                <img
                  src="/scribenova.png"
                  alt="Cloud Platform Project"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">ScribeNova - AI Content & PDF Assistant</h3>

              <p className="text-gray-400 mb-4">
              A smart platform for AI-powered content creation with a built-in “Chat with PDF” feature, enabling users to interact with and extract insights from PDF files effortlessly.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["TypeScript", "Ollama", "Valkey", "Gimini API"].map((tech, key) => (
                  <span
                    key={key}
                    className="border text-white py-1 px-3 rounded-full text-sm hover:bg-white hover:text-black 
                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* <a
                  href="https://your-live-project-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Live
                </a> */}
                <a
                  href="https://github.com/tarunkumar-sys/ScribeNova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Code
                </a>
              </div>
            </div>
{/* 3rd */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_2px_8px_rgba(198,255,0,0.2)] transition">
              <div className="mb-4">
                <img
                  src="/sky-for.png"
                  alt="Cloud Platform Project"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Sky For – Campus Weather Dashboard</h3>

              <p className="text-gray-400 mb-4">
              A real-time weather web app built for college faculty, combining city weather data with indoor environment conditions using sensor input
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML/CSS", "JavaScript", "NodeMCU", "Firebase", "OpenWeatherMap API"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="border text-white py-1 px-3 rounded-full text-sm hover:bg-white hover:text-black 
                    transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://tarunkumar-sys.github.io/Sky-for/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/tarunkumar-sys/Sky-for"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Code
                </a>
              </div>
            </div>
{/* 4th */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_2px_8px_rgba(198,255,0,0.2)] transition">
              <div className="mb-4">
                <img
                  src="/unnamed.jpg"
                  alt="chat-bot"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">Rias – Offline AI Chatbot</h3>

              <p className="text-gray-400 mb-4">
              An offline AI chatbot designed with privacy in mind. Powered by Ollama and running models like LLaMA2 and Mistral, it delivers fast, real-time responses—no cloud required.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "JavaScript", "Tailwind CSS", "Ollama"].map((tech, key) => (
                  <span
                    key={key}
                    className="border text-white py-1 px-3 rounded-full text-sm hover:bg-white hover:text-black 
                    transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* <a
                  href="https://your-live-project-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Live
                </a> */}
                <a
                  href="https://github.com/tarunkumar-sys/Chatbot-rias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-lime-400 transition-colors my-4"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
