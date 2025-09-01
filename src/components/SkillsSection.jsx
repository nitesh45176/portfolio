import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiExpress,
  SiPostman,   // ✅ Added Postman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// ✅ Skills data with icons
const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: <SiHtml5 className="text-orange-600 text-2xl" /> },
  { name: "CSS", level: 95, category: "frontend", icon: <SiCss3 className="text-blue-600 text-2xl" /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <SiJavascript className="text-yellow-500 text-2xl" /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact className="text-sky-400 text-2xl" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-sky-500 text-2xl" /> },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: "Express", level: 75, category: "backend", icon: <SiExpress className="text-gray-700 text-2xl" /> },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb className="text-green-700 text-2xl" /> },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: <SiGit className="text-orange-500 text-2xl" /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode className="text-blue-500 text-2xl" /> },
  { name: "Postman", level: 85, category: "tools", icon: <SiPostman className="text-orange-500 text-2xl" /> }, // ✅ Added here
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md card-hover hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
