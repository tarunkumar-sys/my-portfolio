import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    
    <section
      id="home"
      className="min-h-screen flex  z-100 items-center justify-center relative -mt-24"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-xl">
            Hi, I'm{" "}
            <span className="text-lime-400 decoration-lime-300">
              Tarun Kumar
            </span>
          </h1>

          <p className="text-gray-400 text-normal mb-6 max-w-2xl mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-4">
            <a
               href="https://drive.google.com/file/d/1Dcd2xLqmxSQU4i3j819ATgB8m0fxAEKn/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
              className="bg-lime-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-lime-400/50 text-lime-400 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-lime-400/10"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </RevealOnScroll>
      
    </section>
  );
};
