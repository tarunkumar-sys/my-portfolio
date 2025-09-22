import React from "react";
import {
  FaGithub,
  // FaDev,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

// Replace with your actual links
const socialprofils = {
  github: "https://github.com/tarunkumar-sys",
  linkedin: "https://www.linkedin.com/in/tarun-kumar-295-scary-crimson",
  Dribbble: "https://dribbble.com/Scary_crimson",
  //   Dev: "https://dev.to/scary_crimson",
};

const ICON_MAPPING = {
  //   Dev: FaDev,
  github: FaGithub,
  Dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

const SocialIcons = () => {
  return (
    <div className="fixed -left-16 top-40 -translate-y-1/2  flex flex-col items-center space-y-4">
      <div className="w-[1px] h-48 bg-white"></div>
      <ul className="flex flex-col items-center space-y-4">
        {Object.entries(socialprofils).map(([platform, url]) => {
          const Icon = ICON_MAPPING[platform];
          if (!Icon) return null;
          return (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color)] hover:text-lime-400 transition-transform hover:-translate-y-1 duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
