import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export const SkillBlocks = () => {
  const skills = [
    { id: 1, name: "React", color: "bg-blue-500" },
    { id: 2, name: "Tailwind CSS", color: "bg-cyan-400" },
    { id: 3, name: "Node.js", color: "bg-green-500" },
    { id: 4, name: "Figma", color: "bg-pink-500" },
    { id: 5, name: "Next.js", color: "bg-gray-800 text-white" },
    { id: 6, name: "TypeScript", color: "bg-blue-700" },
  ];

  const radius = 130; // radius of circular path

  return (
    <div className="rounded-full w-[380px] h-[380px] border items-center overflow-hidden justify-center flex">
    <div className="relative rounded-full w-[350px] h-[350px]  bg-white overflow-hidden flex flex-wrap gap-6  justify-center items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.id}
          className={`${skill.color} rounded-xl text-sm flex items-center justify-center shadow-lg cursor-pointer text-center`}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 4 + index * 0.5,
            ease: "easeInOut",
          }}
        >
          <span className="px-2">{skill.name}</span>
        </motion.div>
      ))}
    </div>
    </div>
  );
};
