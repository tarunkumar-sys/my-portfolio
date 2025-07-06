import { RevealOnScroll } from "../RevealOnScroll";
import BlockPlayground from "./BlockPlayground";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 select-none">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent">
            {" "}
            ABOUT ME
          </h2>

          <div className="rounded-xl py-8">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              <span className="mr-2">⚡</span>
              I'm <span className="font-semibold text-white">Tarun</span>, a
              passionate
              <span className="font-semibold text-white">
                {" "}
                web developer
              </span>{" "}
              dedicated to crafting visually stunning and user-centric digital
              experiences. With a sharp eye for design, meticulous attention to
              detail, and a strong drive to innovate, I blend creativity with
              functionality to bring modern interfaces to life.
              <span className="font-semibold text-white">
                {" "}
                An AI & ML enthusiast
              </span>{" "}
              at heart, I'm also
              <span className="font-semibold text-white">
                {" "}
                gradually venturing into the world of DevOps and Cloud
              </span>{" "}
              ☁️ — expanding my horizons to build more scalable and robust
              digital solutions. My mission is to design web experiences that
              are not only visually engaging but also seamless, intuitive, and
              future-ready.
            </p>

            <div class="mt-6 flex items-center space-x-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/040/526/432/small_2x/ai-generated-3d-rendering-of-a-toddler-boy-standing-and-smiling-on-transparent-background-ai-generated-png.png"
                alt="Orlando avatar"
                class="w-12 h-12 rounded-full border-2 border-lime-400"
              />
              <div className="z-10">
                <p class="text-sm font-semibold">Tarun kumar</p>
                <p class="text-xs text-gray-400">Web Developer</p>
              </div>
            </div>
            <BlockPlayground />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Voc in Internet of Things</strong> – Dayalbagh
                  Educational Institute (2023–Present)
                </li>
                <li>
                  Relevant Coursework: Embedded Systems, Web Development, Cloud
                  Computing, and Data Analytics...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                💡 What I'm Working On{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    AI Content Creation & PDF Interaction Platform
                  </h4>
                  <ul className="list-disc pl-5">
                    <li>
                      AI-powered content generation with an intuitive "Chat with
                      PDF" feature
                    </li>
                    <li>
                      Seamless interaction with PDF documents for efficient data
                      extraction
                    </li>
                  </ul>
                  <p className="pt-2">
                    Built with{" "}
                    <span className="font-semibold text-white">Next.js</span>,
                    <span className="font-semibold text-white">
                      {" "}
                      Gemini API
                    </span>
                    , <span className="font-semibold text-white">
                      {" "}
                      Ollama
                    </span>,{" "}
                    <span className="font-semibold text-white">
                      {" "}
                      Valkey
                    </span>,{" "}
                    <span className="font-semibold text-white"> Qdrant</span>...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
