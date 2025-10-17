"use client"

import type React from "react"

import { useState } from "react"
import { Terminal, Code2, FileCode, Folder, FolderOpen, FileType, ChevronDown, ChevronRight, Link, Mail, Github, Linkedin, Twitter, Files, GitBranch, Search, BugPlay, Bell, Ellipsis, Play, X, TriangleAlert, CircleX } from "lucide-react"
import { Card } from "@/components/ui/card"

type Tab = "about.tsx" | "projects.tsx" | "skills.tsx" | "contact.tsx"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<Tab>("about.tsx")
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "$ Welcome to my portfolio",
    '$ Type "help" for available commands',
  ])

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const command = terminalInput.trim().toLowerCase()

    const newHistory = [...terminalHistory, `$ ${terminalInput}`]

    switch (command) {
      case "help":
        newHistory.push("Available commands: about, projects, skills, contact, clear")
        break
      case "about":
        setActiveTab("about.tsx")
        newHistory.push("Opening about.tsx...")
        break
      case "projects":
        setActiveTab("projects.tsx")
        newHistory.push("Opening projects.tsx...")
        break
      case "skills":
        setActiveTab("skills.tsx")
        newHistory.push("Opening skills.tsx...")
        break
      case "contact":
        setActiveTab("contact.tsx")
        newHistory.push("Opening contact.tsx...")
        break
      case "clear":
        setTerminalHistory([])
        setTerminalInput("")
        return
      default:
        newHistory.push(`Command not found: ${command}`)
    }

    setTerminalHistory(newHistory)
    setTerminalInput("")
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950 flex-shrink-0">
        <div className="flex items-center gap-2 px-4 py-2">
          <Code2 className="h-5 w-5 text-neutral-400" />
          <span className="text-sm text-neutral-400">portfolio</span>
          <div className="ml-auto flex items-center gap-4">
            <a
              href="https://github.com/zer0code9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/anselmesorin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/zer0less9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 border-r border-neutral-800 bg-neutral-950 flex flex-col items-center py-4 flex-shrink-0">
          <button className="w-full h-12 flex items-center justify-center border-l-2 border-white bg-neutral-900">
            <Files className="h-6 w-6 text-white" />
          </button>
          <button className="w-full h-12 flex items-center justify-center text-neutral-500">
            <GitBranch className="h-6 w-6 text-neutral-500" />
          </button>
          <button className="w-full h-12 flex items-center justify-center text-neutral-500">
            <Search className="h-6 w-6 text-neutral-500" />
          </button>
          <button className="w-full h-12 flex items-center justify-center text-neutral-500">
            <BugPlay className="h-6 w-6 text-neutral-500" />
          </button>
        </div>

        {/* Sidebar */}
        <aside className="w-64 border-r border-neutral-800 bg-neutral-950 p-4 flex-shrink-0 overflow-y-auto">
          <div className="mb-4">
            {/* Explorer */}
            <h2 className="text-xs uppercase text-neutral-400 mb-2">Explorer</h2>
            <div className="text-sm text-neutral-400">
              <div className="flex flex-row items-center mb-1 text-white"><ChevronDown className="h-4 w-4 mr-2" /><FolderOpen className="h-4 w-4 mr-2" /> portfolio</div>
              <div className="ml-4 space-y-1">
                <div className="flex flex-row items-center text-white"><ChevronDown className="h-4 w-4 mr-2" /><FolderOpen className="h-4 w-4 mr-2" /> app</div>
                <div className="ml-8 space-y-1">
                  <button
                    onClick={() => setActiveTab("about.tsx")}
                    className={`flex flex-row items-center w-full text-left px-2 py-1 rounded ${
                      activeTab === "about.tsx" ? "bg-neutral-800 text-white" : "hover:bg-neutral-900"
                    }`}
                  >
                    <FileCode className="h-4 w-4 mr-2" /> about.tsx
                  </button>
                  <button
                    onClick={() => setActiveTab("projects.tsx")}
                    className={`flex flex-row items-center w-full text-left px-2 py-1 rounded ${
                      activeTab === "projects.tsx" ? "bg-neutral-800 text-white" : "hover:bg-neutral-900"
                    }`}
                  >
                    <FileCode className="h-4 w-4 mr-2" /> projects.tsx
                  </button>
                  <button
                    onClick={() => setActiveTab("skills.tsx")}
                    className={`flex flex-row items-center w-full text-left px-2 py-1 rounded ${
                      activeTab === "skills.tsx" ? "bg-neutral-800 text-white" : "hover:bg-neutral-900"
                    }`}
                  >
                    <FileCode className="h-4 w-4 mr-2" /> skills.tsx
                  </button>
                  <button
                    onClick={() => setActiveTab("contact.tsx")}
                    className={`flex flex-row items-center w-full text-left px-2 py-1 rounded ${
                      activeTab === "contact.tsx" ? "bg-neutral-800 text-white" : "hover:bg-neutral-900"
                    }`}
                  >
                    <FileCode className="h-4 w-4 mr-2" /> contact.tsx
                  </button>
                </div>
                <div className="flex flex-row items-center"><ChevronRight className="h-4 w-4 mr-2" /><Folder className="h-4 w-4 mr-2" /> components</div>
                <div className="flex flex-row items-center"><ChevronRight className="h-4 w-4 mr-2" /><Folder className="h-4 w-4 mr-2" /> lib</div>
                <div className="flex flex-row items-center text-neutral-500"><ChevronRight className="h-4 w-4 mr-2" /><Folder className="h-4 w-4 mr-2" /> node_modules</div>
                <div className="flex flex-row items-center"><ChevronDown className="h-4 w-4 mr-2" /><FolderOpen className="h-4 w-4 mr-2" /> public</div>
                <div className="ml-8 space-y-1">
                  <button
                    onClick={() => window.open("/resume_v2.pdf", "_blank")}
                    className={`flex flex-row items-center w-full text-left px-2 py-1 rounded hover:bg-neutral-900`}
                  >
                    <FileType className="h-4 w-4 mr-2" /> resume_v2.pdf
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Section */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-neutral-500" />
              <h2 className="text-xs uppercase text-neutral-500">Terminal</h2>
            </div>
            <Card className="bg-black border-neutral-800 p-3 h-48 overflow-y-auto">
              <div className="text-xs space-y-1">
                {terminalHistory.map((line, i) => (
                  <div key={i} className="text-green-400">
                    {line}
                  </div>
                ))}
              </div>
              <form onSubmit={handleTerminalCommand} className="mt-2">
                <div className="flex items-center gap-1">
                  <span className="text-green-400 text-xs">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-green-400 text-xs"
                    placeholder="type command..."
                  />
                </div>
              </form>
            </Card>
          </div>
        </aside>

        {/* Editor Groups */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 flex-shrink-0">
            <div className="flex items-center">
              <button
                onClick={() => setActiveTab("about.tsx")}
                className={`px-4 py-2 text-sm border-r border-neutral-800 ${
                  activeTab === "about.tsx" ? "bg-black text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <FileCode className="h-4 w-4 inline" /> about.tsx
                <X className={`h-4 w-4 inline ml-2 ${activeTab === "about.tsx" ? "text-white" : "invisible"}`} />
              </button>
              <button
                onClick={() => setActiveTab("projects.tsx")}
                className={`px-4 py-2 text-sm border-r border-neutral-800 ${
                  activeTab === "projects.tsx" ? "bg-black text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <FileCode className="h-4 w-4 inline" /> projects.tsx
                <X className={`h-4 w-4 inline ml-2 ${activeTab === "projects.tsx" ? "text-white" : "invisible"}`} />
              </button>
              <button
                onClick={() => setActiveTab("skills.tsx")}
                className={`px-4 py-2 text-sm border-r border-neutral-800 ${
                  activeTab === "skills.tsx" ? "bg-black text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <FileCode className="h-4 w-4 inline" /> skills.tsx
                <X className={`h-4 w-4 inline ml-2 ${activeTab === "skills.tsx" ? "text-white" : "invisible"}`} />
              </button>
              <button
                onClick={() => setActiveTab("contact.tsx")}
                className={`px-4 py-2 text-sm border-r border-neutral-800 ${
                  activeTab === "contact.tsx" ? "bg-black text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                <FileCode className="h-4 w-4 inline" /> contact.tsx
                <X className={`h-4 w-4 inline ml-2 ${activeTab === "contact.tsx" ? "text-white" : "invisible"}`} />
              </button>
            </div>
            <div className="flex items-center">
              <Play className="h-4 w-4 text-neutral-400 mr-4" />
              <Ellipsis className="h-4 w-4 text-neutral-400 mr-4" />
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 h-2 overflow-y-scroll p-8">
            {activeTab === "about.tsx" && <AboutContent />}
            {activeTab === "projects.tsx" && <ProjectsContent />}
            {activeTab === "skills.tsx" && <SkillsContent />}
            {activeTab === "contact.tsx" && <ContactContent />}
          </div>
        </main>
      </div>

      {/* Status Bar */}
      <div className="border-t border-neutral-800 bg-neutral-950 px-4 py-1 flex flex-shrink-0 items-center justify-between text-sm text-neutral-400">
        <div className="flex items-center gap-4">
          <span><GitBranch className="h-4 w-4 inline" /> master</span>
          <span className="flex items-center gap-1"><CircleX className="h-4 w-4 inline" /> 0 <TriangleAlert className="h-4 w-4 inline" /> 0</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <span>TypeScript JSX</span>
          <span><Bell className="h-4 w-4" /></span>
        </div>
      </div>
    </div>
  )
}

{/* Tab Contents */}
function AboutContent() {
  const experiences = [
    {
      title: "Development Member",
      company: "Software and Computer Engineering Society",
      location: "San Jose, CA",
      date: "Sep. 2024 - Present",
      description: [
        "Developed a full-stack web application with teammates using Next.JS/React, PostgreSQL, and Docker to search for courses on Spartan Compass",
        "Implemented 7 front-end designs using ShadCN that became more efficient from 84ms to 49ms",
        "Implemented 4 components in the back-end with TypeScript and PostgreSQL to store 8 more information about courses that were scraped",
        "Suggested features and gave feedback on 10+ programs/algorithms, collaborating with teammates to improve functionality and user experience",
      ],
    }
  ]
  const eduction = [
    {
      school: "San Jose State University",
      major: "Bachelor of Science in Computer Engineering",
      minor: "Mathematics",
      gpa: "3.94",
      location: "San Jose, CA",
      date: "Aug. 2023 - May 2027",
      classes: [
        "Advanced Algorithm Design",
        "Microprocessor Design",
        "Digital Design",
      ],
      honors: [
        "Dean's List (2023 - 2024)",
      ],
      organizations: [
        "Software and Computer Engineering Society (SCES) - Development Member",
        "Climbing Club - Member",
        "Game Development Club - Member",
      ]
    }
  ]
  return (
    <div className="max-w-4xl space-y-6">
      <div className="text-sm text-neutral-500 mb-4">// 1: About</div>
      <div className="text-neutral-500 text-sm mb-4">// 2: Experience</div>
      <div className="text-neutral-500 text-sm mb-4">// 3: Education</div>

      {/* ABOUT */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">developer</span> <span className="text-white">=</span>{" "}
          <span className="text-white">{"{"}</span>
        </div>

        <div className="ml-8 space-y-2">
          <div>
            <span className="text-green-400">name</span>
            <span className="text-white">:</span> <span className="text-orange-400">"Anselme Sorin"</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-green-400">role</span>
            <span className="text-white">:</span> <span className="text-orange-400">"Full Stack Developer and Cybersecurity Enthusiast"</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-green-400">location</span>
            <span className="text-white">:</span> <span className="text-orange-400">"San Mateo, CA"</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-green-400">bio</span>
            <span className="text-white">:</span>{" "}
            <span className="text-orange-400">
              "Passionate developer in software and hardware studying Computer Engineering."
            </span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-green-400">interests</span>
            <span className="text-white">:</span> <span className="text-white">[</span>
            <span className="text-orange-400">"Cybersecurity"</span>
            <span className="text-white">,</span> <span className="text-orange-400">"AI/ML"</span>
            <span className="text-white">,</span> <span className="text-orange-400">"Application Development"</span>
            <span className="text-white">,</span> <span className="text-orange-400">"Hardware"</span>
            <span className="text-white">,</span> <span className="text-orange-400">"UI/UX Design"</span>
            <span className="text-white">]</span>
          </div>
        </div>

        <div>
          <span className="text-white">{"}"}</span>
          <span className="text-white">;</span>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">experiences</span> <span className="text-white">=</span>{" "}
          <span className="text-white">[</span>
        </div>

        <div className="ml-8 space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-neutral-950 border-neutral-800 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{exp.title}</h3>
                  <span className="text-sm text-neutral-400">{exp.date}</span>
                </div>

                <div className="text-sm text-neutral-400">
                  {exp.company} - {exp.location}
                </div>

                <ul className="list-disc list-inside text-neutral-300 text-sm leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <span className="text-white">]</span>
          <span className="text-white">;</span>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">education</span> <span className="text-white">=</span>{" "}
          <span className="text-white">[</span>
        </div>

        <div className="ml-8 space-y-6">
          {eduction.map((edu, index) => (
            <Card key={index} className="bg-neutral-950 border-neutral-800 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{edu.school}</h3>
                  <span className="text-sm text-neutral-400">{edu.date}</span>
                </div>

                <div className="text-sm text-neutral-400">
                  {edu.location}
                </div>

                <div className="text-sm text-neutral-300">
                  {edu.major} with {edu.minor} - GPA: {edu.gpa}
                </div>

                <ul className="list-disc list-inside text-neutral-300 text-sm leading-relaxed">
                  {edu.classes.map((classN, i) => (
                    <li key={i}>{classN}</li>
                  ))}
                </ul>

                <ul className="list-disc list-inside text-neutral-300 text-sm leading-relaxed">
                  {edu.organizations.map((org, i) => (
                    <li key={i}>{org}</li>
                  ))}
                </ul>

                <ul className="list-disc list-inside text-neutral-300 text-sm leading-relaxed">
                  {edu.honors.map((hon, i) => (
                    <li key={i}>{hon}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <span className="text-white">]</span>
          <span className="text-white">;</span>
        </div>
      </div>
    </div>
  )
}

function ProjectsContent() {
  const projects = [
    {
      name: "Dev Space",
      description: [
        "Developed a Visual Studio Code extension to improve user experience with customizable developer tools and productivity enhancements",
        "Implemented VS Code API to customize 3 sections of the VS Code UI (Activity Bar, Side Bar, Status Bar)",
        "550+ and growing installations on VS Code Marketplace"
      ],
      tech: ["TypeScript", "Node.JS", "VSCode API"],
      time: "May 2022 - Present",
      github: "https://github.com/zer0code9/devspace",
      web: "https://marketplace.visualstudio.com/items?itemName=SlashDEV.devspace",
    },
    {
      name: "Alias",
      description: [
        "Developed a self-learning project using JavaScript and the Discord.JS API to make a possible moderating bot",
        "Learned how to use APIs like Discord.JS and DBs like Firebase and MongoDB",
        "Leveraged Gemini API to learn AI installations and how to use those APIs"
      ],
      tech: ["JavaScript", "Discord.JS", "Firebase"],
      time: "July 2020 - June 2025",
      github: "https://github.com/zer0code9/alias",
      web: "",
    },
    {
      name: "Arduino Pointer",
      description: [
        "Developed a pointer that points up using an Arduino and a Servo Motor within 180 degrees",
        "Obtain data from the MPU of the Arduino and convert to degrees to receive an angle and make one of the branches of the motor point up",
        "Obtain new data in degrees for the X and Y axis every 100ms"
      ],
      tech: ["C++", "Arduino"],
      time: "September 2023",
      github: "https://github.com/zer0code9/arduinoPointer",
      web: "",
    },
    {
      name: "Paraboard",
      description: [
        "Developed a collaborative whiteboard application using Next.js and Tailwind CSS, enabling real-time drawing and collaboration",
        "Implemented multiple professional items for a better user experience",
        "Deployed the application on Vercel for seamless access and scalability"
      ],
      tech: ["TypeScript", "Node.JS", "React", "Next.JS", "v0.dev"],
      time: "September 2024 - Present",
      github: "https://github.com/zer0code9/paraboard",
      web: "https://paraboard.vercel.app/",
    },
    {
      name: "Portfolio",
      description: [
        "Developed a personal portfolio website built with Next.js and Tailwind CSS, showcasing my projects and skills"
      ],
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      time: "April 2024 - Present",
      github: "https://github.com/zer0code9/meWebsite",
      web: "https://zer0code9.vercel.app/",
    },
    {
      name: "Java Excel",
      description: [
        "Developed a working Java application that simulates a basic Excel spreadsheet",
        "Implemented a UI with interfaces, abstract classes, and class inheritance",
        "Made cells that can old integers, doubles, strings, and formulas",
      ],
      tech: ["Java"],
      time: "March 2022 - December 2024",
      github: "https://github.com/zer0code9/javaExcel",
      web: "",
    }
  ]

  return (
    <div className="max-w-4xl space-y-6">
      <div className="text-sm text-neutral-500 mb-4">// 1: Projects</div>

      {/* PROJECTS */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">projects</span> <span className="text-white">=</span>{" "}
          <span className="text-white">[</span>
        </div>

        <div className="ml-8 space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-neutral-950 border-neutral-800 p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                  <div className="flex gap-2">
                    {project.web && (
                      <a
                        href={project.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        <Link className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="text-sm text-neutral-400">{project.time}</div>

                <ul className="list-disc list-inside text-neutral-300 text-sm leading-relaxed">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <span className="text-white">]</span>
          <span className="text-white">;</span>
        </div>
      </div>
    </div>
  )
}

function SkillsContent() {
  const skills = {
    worldLanguages: ["English (Fluent)", "French (Native)", "Spanish (Intermediate)"],
    languages: ["TypeScript", "JavaScript", "Java", "Python", "C", "C++", "PostgreSQL", "HTML/CSS", "Shell", "Assembly"],
    frameworks: ["React", "Node.js", "Next.js", "Tailwind CSS"],
    tools: ["Git", "Docker", "MongoDB", "Firebase", "Vercel", "Discord.JS", "VSCode", "Visual Studio", "CLion", "PyCharm", "IntelliJ IDEA", "Eclipse", "Arduino IDE"],
    ai: ["OpenAI GPT", "Google Gemini", "GitHub Copilot", "Generative AI", "Deep Learning"],
    libraries: ["pandas", "NumPy", "jQuery", "PyTorch"],
  }

  const certifications = [
    {
      name: "Cyber Security",
      issuer: "W3Schools",
      date: "October 2025",
      link: "https://verify.w3schools.com/1QEJT8SDIG",
    }
  ]

  return (
    <div className="max-w-4xl space-y-6">
      <div className="text-sm text-neutral-500 mb-4">// 1: Skills</div>
      <div className="text-sm text-neutral-500 mb-4">// 2: Certifications</div>

      {/* SKILLS */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">skills</span> <span className="text-white">=</span>{" "}
          <span className="text-white">{"{"}</span>
        </div>

        <div className="ml-8 space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <div className="mb-3">
                <span className="text-green-400">{category}</span>
                <span className="text-white">:</span> <span className="text-white">[</span>
              </div>
              <div className="ml-8 flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <Card key={i} className="bg-neutral-950 border-neutral-800 px-4 py-2">
                    <span className="text-orange-400 text-sm">"{skill}"</span>
                  </Card>
                ))}
              </div>
              <div className="mt-2">
                <span className="text-white">]</span>
                <span className="text-white">,</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <span className="text-white">{"}"}</span>
          <span className="text-white">;</span>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">certifications</span> <span className="text-white">=</span>{" "}
          <span className="text-white">[</span>
        </div>

        <div className="ml-8 space-y-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-neutral-950 border-neutral-800 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{cert.name}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    <Link className="h-4 w-4" />
                  </a>
                </div>

                <div className="text-sm text-neutral-400">
                  {cert.issuer} - {cert.date}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <span className="text-white">]</span>
          <span className="text-white">;</span>
        </div>
      </div>
    </div>
  )
}

function ContactContent() {
  return (
    <div className="max-w-4xl space-y-6">
      <div className="text-sm text-neutral-500 mb-4">// 1: Contact</div>

      {/* CONTACT */}
      <div className="space-y-4">
        <div>
          <span className="text-purple-400">export</span> <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">contact</span> <span className="text-white">=</span>{" "}
          <span className="text-white">{"{"}</span>
        </div>

        <div className="ml-8 space-y-4">
          <Card className="bg-neutral-950 border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="h-5 w-5 text-neutral-400" />
              <span className="text-green-400">email</span>
              <span className="text-white">:</span>
            </div>
            <a
              href="mailto:asorinus@gmail.com"
              className="text-orange-400 hover:text-orange-300 transition-colors ml-8"
            >
              "asorinus@gmail.com"
            </a>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Github className="h-5 w-5 text-neutral-400" />
              <span className="text-green-400">github</span>
              <span className="text-white">:</span>
            </div>
            <a
              href="https://github.com/zer0code9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors ml-8"
            >
              "github.com/zer0code9"
            </a>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Linkedin className="h-5 w-5 text-neutral-400" />
              <span className="text-green-400">linkedin</span>
              <span className="text-white">:</span>
            </div>
            <a
              href="https://linkedin.com/in/anselmeosorin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors ml-8"
            >
              "linkedin.com/in/anselmesorin"
            </a>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Twitter className="h-5 w-5 text-neutral-400" />
              <span className="text-green-400">twitter</span>
              <span className="text-white">:</span>
            </div>
            <a
              href="https://x.com/zer0less9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors ml-8"
            >
              "@zer0less9"
            </a>
          </Card>
        </div>

        <div>
          <span className="text-white">{"}"}</span>
          <span className="text-white">;</span>
        </div>
      </div>

      {/* <div className="mt-8 pt-8 border-t border-neutral-800">
        <div className="text-neutral-500 text-sm mb-4">// Send a message</div>
        <Card className="bg-neutral-950 border-neutral-800 p-6">
          <form className="space-y-4">
            <div>
              <label className="text-green-400 text-sm mb-2 block">name:</label>
              <input
                type="text"
                className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-neutral-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-green-400 text-sm mb-2 block">email:</label>
              <input
                type="email"
                className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-neutral-600"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="text-green-400 text-sm mb-2 block">message:</label>
              <textarea
                rows={4}
                className="w-full bg-black border border-neutral-800 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-neutral-600"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </Card>
      </div> */}
    </div>
  )
}
