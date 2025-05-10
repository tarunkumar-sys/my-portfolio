import React from "react";
import Gravity, { MatterBody } from "@/fancy/components/physics/gravity";

const skills = [
  "react", "bootstrap", "html", "css", "vscode", "github", "figma", "tailwind", "git",
  "docker", "linux", "ollama", "nodejs", "python", "javascript", "typescript",
  "firebase", "django", "nextjs", "mysql"
];

const colors = [
  "bg-lime-400", "bg-blue-500", "bg-pink-500", "bg-purple-500", "bg-yellow-500",
  "bg-red-500", "bg-green-600", "bg-[#1f464d]", "bg-[#ff5941]", "bg-[#f97316]",
  "bg-[#ffd726]", "bg-teal-500", "bg-cyan-600", "bg-indigo-500", "bg-rose-500",
  "bg-emerald-500", "bg-orange-500", "bg-sky-500", "bg-amber-500", "bg-violet-500"
];

export default function BlockPlayground() {
  return (
    <div className="w-full  h-[400px] -mt-72 flex flex-col relative border-b font-azeret-mono">
      <div className="pt-64 text-5xl sm:text-6xl md:text-7xl text-foreground dark:text-muted w-full text-center font-calendas italic">
        My Skills
      </div>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {skills.map((skill, index) => (
          <MatterBody
            key={skill}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${10 + (index * 5) % 90}%`}
            y={`${(index * 7) % 90}%`}
            angle={(index * 13) % 45}
          >
            <div
              className={`text-xs sm:text-sm md:text-base ${
                colors[index % colors.length]
              } text-white rounded-full hover:cursor-grab py-0.5 px-2`}
            >
              {skill}
            </div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
}
