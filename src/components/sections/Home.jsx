import { RevealOnScroll } from "../RevealOnScroll";
import SocialIcons from "../SocialIcons";
export const Home = () => {
  return (
    <>
      <style>{`
  .signature {
    font-family: 'Great Vibes';
  }

  .scanlines::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(172, 165, 165, 0.15) 0,
      rgba(111, 107, 107, 0.15) 1px,
      transparent 2px,
      transparent 8px
    );
    pointer-events: none;
  }

  .mouse {
    width: 25px;
    height: 45px;
    border: 3px solid #333;
    border-radius: 60px;
    position: relative;
  }

  .mouse::before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;
    -webkit-animation: wheel 2s infinite;
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 40px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 40px;
    }
  }
      `}</style>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative "
      >
        <RevealOnScroll>
          <SocialIcons />
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1600px] mx-auto px-4 py-20">
            {/* Left Side: Text */}
            <div className="text-center md:text-left md:w-1/2 z-10 px-4">
              <p className="text-lime-300 text-lg md:text-4xl font-medium">
                Hi, I’m
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-xl">
                Tarun Kumar
              </h1>

              <p className="text-gray-300 text-xl mt-4 font-semibold">
                Full-Stack Web Developer 🚀
              </p>

              <p className="text-gray-400 text-base mb-6 max-w-xl">
                I specialize in building high-performance web apps with modern
                design and clean architecture. Focused on elegant UI, scalable
                backends, and user-first experiences.
              </p>

              <div className="flex pt-5 z-100 justify-center md:justify-start space-x-4">
                <a
                  href="https://drive.google.com/file/d/1Dcd2xLqmxSQU4i3j819ATgB8m0fxAEKn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-400 text-white py-3 px-6 rounded-4xl font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="border border-lime-400/50 text-lime-400 py-3 px-6 rounded-4xl font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(163,230,53,0.2)] hover:bg-lime-400/10"
                >
                  Let’s Talk
                </a>
              </div>
            </div>

            {/* Right Side: Image with Tags */}
            <div className="relative md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <div className="scanlines relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-lime-300 shadow-xl">
                <img
                  // src="https://plus.unsplash.com/premium_photo-1713788509854-2caebf3fa08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D"
                  src="public\new_ani.jpg"
                  alt="Tarun Kumar"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>

              {/* Floating Tags */}
              <span className="absolute top-7  -left-5 sm:top-8 sm:left-14 bg-white text-lime-500 px-3 py-1 rounded-full shadow-md text-sm font-medium">
              Full Stack Developer
              </span>
              <span className="absolute bottom-8 left-0 sm:bottom-12 sm:left-12 bg-white text-lime-500 px-3 py-1 rounded-full shadow-md text-sm font-medium">
              Python
              </span>
              <span className="absolute top-26 -right-6 sm:top-28 sm:right-8 bg-white text-lime-500 px-3 py-1 rounded-full shadow-md text-sm font-medium">
                UI/UX
              </span>
            </div>
          </div>

          {/* scrolling animation button*/}
          {/* <div className="w-full flex justify-center items-center -mt-16">
            <div className="mouse"></div>
          </div> */}
        </RevealOnScroll>
      </section>
    </>
  );
};
