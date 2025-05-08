export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = ["home", "about", "projects", "contact"];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.9)] backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Navigation links with animated underline */}
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={() => setMenuOpen(false)}
          className={`
            relative text-2xl font-semibold text-white my-4 transition-all duration-300 ease-in-out
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
            after:h-[2px] after:w-full after:bg-lime-400
            after:scale-x-0 hover:after:scale-x-100
            after:transition-transform after:duration-300 after:origin-left
          `}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </div>
  );
};
