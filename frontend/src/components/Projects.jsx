/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import playTubeImg from "../assets/playTube.png";
import chatbotImg from "../assets/chatbot.png";

const projects = [
  {
    title: "PlayTube",
    subtitle: "Video streaming platform inspired by YouTube",
    description:
      "PlayTube is a modern full-stack video streaming platform which enables users to to register, upload videos, explore content, and manage their channels through a clean and responsive UI. The app provides real-time conversational responses with support for multiple large language models through a clean and user-friendly interface",
    highlights: [
      "Familiar YouTube-inspired experience for quick user adoption.",
      "Watch and explore a wide range of videos in a clean YouTube-like interface.",
      "Simple and intuitive navigation for effortless content discovery.",
    ],
    tech: [
      "React",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "Cloudinary",
      "Render",
    ],
    github: "https://github.com/sonukumar864/PlayTube",
    live: "https://play-tube-eta.vercel.app/",
    image: playTubeImg,
    accent: "from-[#27CBCB]/40",
  },
  {
    title: "AI-Chatbot",
    subtitle: "AI chatbot web application for real-time conversation responses",
    description:
      "An interactive AI chatbot web application built with Streamlit and powered by Groq LLMs.",
    highlights: [
      "Real-time conversational chat UI",
      "Multiple LLM support (Llama-3, Mixtral, Gemma)",
      "Session-based chat history",
      "Clean and responsive Streamlit interface",
    ],
    tech: [
      "Streamlit",
      "Python",
      "Groq API",
      "Large Language Models: Llama-3, Mixtral, Gemma",
      "python-dotenv",
    ],
    github: "https://github.com/sonukumar864/Chatbot",
    live: "https://chat-project-gold.vercel.app/",
    image: chatbotImg,
    accent: "from-violet-400/40",
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-xl border border-gray-700/40 bg-gray-900/20 backdrop-blur overflow-hidden"
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover scale-105 blur-[2px] group-hover:blur-0 group-hover:scale-100 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          initial={{ x: "-60%" }}
          whileHover={{ x: "60%" }}
          transition={{ duration: 1.2 }}
          className={`absolute inset-0 bg-linear-to-r ${project.accent} to-transparent opacity-60`}
        />
        <div className="absolute bottom-3 left-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-xs text-[#27CBCB]">{project.subtitle}</p>
        </div>
      </div>

      <div className="px-4 sm:px-5 py-3 sm:py-4 space-y-3 sm:space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-400">
          {project.highlights.map((h) => (
            <span key={h} className="text-xs">• {h}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.tech
            .slice(0, expanded ? project.tech.length : 4)
            .map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-2 py-1 text-xs rounded-md bg-gray-950 border border-gray-700/40 text-gray-400"
              >
                {t}
              </motion.span>
            ))}
          {project.tech.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-2 py-1 text-xs rounded-md border border-gray-700/40 text-[#27CBCB] hover:bg-[#27CBCB]/10 transition-colors"
            >
              {expanded ? "− less" : `+${project.tech.length - 4}`}
            </button>
          )}
        </div>

        <div className="flex gap-4 text-gray-400 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-6 sm:space-y-8 max-w-6xl lg:mr-36 mx-auto"
    >
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left">
          Things I&apos;ve Built
        </h2>
        <p className="mt-2 text-[#80978F] text-base sm:text-lg max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          Real-world projects focused on system design, scalability, and clean engineering.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <div className="flex justify-center text-[#27CBCB]">
        <a
          href="https://github.com/sonukumar864"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 group"
        >
          <span className="relative">
            View all projects on GitHub
            <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-[#27CBCB] transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </span>
          <ExternalLink
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </motion.section>
  );
};

export default Projects;