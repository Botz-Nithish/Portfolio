// components/SpotlightSkillGrid.jsx
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaMobileAlt,
  FaPalette,
  FaCogs
} from "react-icons/fa";
import SpotlightCard from "../components/SpotlightCard"; // make sure the path is correct
import ScrambledText from "../components/ScrambledText";
const skillsData = [
  {
    title: "Full-Stack Web Development",
    icon: <FaReact />,
    color: "rgba(0, 229, 255, 0.2)",
    description: "React, Node.js & Express apps with clean UI & APIs."
  },
  {
    title: "Data Structures & Algorithms",
    icon: <FaCogs />,
    color: "rgba(255, 165, 0, 0.2)",
    description: "100+ Leetcode problems solved using core CS concepts."
  },
  {
    title: "Machine Learning & CV",
    icon: <FaDatabase />,
    color: "rgba(0, 255, 133, 0.2)",
    description: "Built ML models with Scikit-learn, CNN, TensorFlow."
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt />,
    color: "rgba(255, 99, 132, 0.2)",
    description: "React Native & Android basics for cross-platform apps."
  },
  {
    title: "UI/UX Design & Prototyping",
    icon: <FaPalette />,
    color: "rgba(186, 85, 211, 0.2)",
    description: "User-focused designs using Figma."
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    color: "rgba(60, 179, 113, 0.2)",
    description: "MySQL & MongoDB — queries, joins & modeling."
  },
  {
    title: "Version Control & Collaboration",
    icon: <FaGithub />,
    color: "rgba(100, 149, 237, 0.2)",
    description: "Git, GitHub & Atlassian for team projects."
  },
  {
    title: "Cloud & Deployment",
    icon: <FaCloud />,
    color: "rgba(0, 191, 255, 0.2)",
    description: "Apps deployed via Vercel & GitHub Pages."
  }
];

export default function SpotlightSkillGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 m-12">
      {skillsData.map((skill, index) => (
        <SpotlightCard
          key={index}
          className="text-white size-64 flex flex-col justify-center items-center gap-4 text-center p-4"
          spotlightColor={skill.color}
        >
          <div className="text-5xl" style={{ color: skill.color.replace("0.2", "1") }}>
            {skill.icon}
          </div>
          <ScrambledText
            className="scrambled-text-demo text-center text-xl "
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"."}
          >
            {skill.title}
          </ScrambledText>
          <ScrambledText
            className="scrambled-text-demo text-center "
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"."}
          >
            {skill.description}
          </ScrambledText>
        </SpotlightCard>
      ))}
    </div>
  );
}
