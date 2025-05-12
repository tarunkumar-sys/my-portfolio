import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Scroll observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Scribe<span className="text-lime-400">Nova</span>
          </a>

           {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative text-gray-300 transition-colors hover:text-white duration-300 ease-in-out
                  ${
                    activeSection === item
                      ? "text-white after:scale-x-100"
                      : "after:scale-x-0"
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-lime-400 after:transition-transform after:duration-300 after:origin-left
                `}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
