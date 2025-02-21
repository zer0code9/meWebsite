import aliasLogo from "@/img/alias.png"
import devspaceLogo from "@/img/devspace.png"
import websiteLogo from "@/img/logo.jpg"
import { faHtml5, faCss3, faJs,  faJava, faPython, faReact, faNodeJs, faGithub, faGit, faNpm } from '@fortawesome/free-brands-svg-icons';

module.exports = {
    tools: [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3 },
        { name: "JavaScript", icon: faJs }, 
        { name: "React", icon: faReact },
        { name: "Node.JS", icon: faNodeJs },
        { name: "NPM.JS", icon: faNpm },
        { name: "Python", icon: faPython },
        { name: "Java", icon: faJava },
        { name: "Github", icon: faGithub },
        { name: "Git", icon: faGit },
    ],

    projects: [
        { name: "Alias", description: "A small discord bot", logo: aliasLogo, source: "https://github.com/zer0code9/alias", tools: ["JavaScript", "Node.JS", "Discord.JS", "Firebase"] },
        { name: "Dev Space", description: "A VScode extension", logo: devspaceLogo, source: "https://github.com/zer0code9/devspace", tools: ["TypeScript", "Node.JS", "VSC-API"] },
        { name: "Me Website", description: "This website", logo: websiteLogo, source: "https://github.com/zer0code9/meWebsite", tools: ["JavaScript", "Node.JS", "React", "Next.JS"] },
    ]
}