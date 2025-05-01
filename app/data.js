import aliasLogo from "@/img/alias.png"
import devspaceLogo from "@/img/devspace.png"
import websiteLogo from "@/img/logo.png"
import paraboardLogo from "@/img/paraboard.png"
import { faHtml5, faCss3, faJs,  faJava, faPython, faReact, faNodeJs, faGithub, faGit, faNpm, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

module.exports = {
    tools: [
        { name: "html", icon: faHtml5 },
        { name: "css", icon: faCss3 },
        { name: "javascript", icon: faJs }, 
        { name: "react", icon: faReact },
        { name: "node.js", icon: faNodeJs },
        { name: "npm.js", icon: faNpm },
        { name: "python", icon: faPython },
        { name: "java", icon: faJava },
        { name: "github", icon: faGithub },
        { name: "git", icon: faGit },
    ],

    education: [
        {
            name: "San Jose State University",
            description: "B.S. in Computer Engineering",
            gpa: "3.94",
            date: "August 2023 - May 2027",
            experiences: [
                { name: "Developer Team Member", organization: "Software and Computer Engineering Society", date: "September 2024 - Present" },
            ]
        },
    ],

    projects: [
        {
            name: "Alias",
            description: "A small discord bot",
            logo: aliasLogo,
            source: "https://github.com/zer0code9/alias",
            tools: ["JavaScript", "Node.JS", "Discord.JS", "Firebase"],
            links: [
                { name: "Github", href: "https://github.com/zer0code9/alias#readme", icon: faGithub },
            ]
        },
        {
            name: "Dev Space",
            description: "A VScode extension",
            logo: devspaceLogo,
            source: "https://github.com/zer0code9/devspace",
            tools: ["TypeScript", "Node.JS", "VSC-API"],
            links: [
                { name: "Github", href: "https://github.com/zer0code9/devspace#readme", icon: faGithub },
                { name: "VSCode", href: "https://marketplace.visualstudio.com/items?itemName=SlashDEV.devspace", icon: faMicrosoft },
            ]
        },
        {
            name: "Me Website",
            description: "This website",
            logo: websiteLogo,
            source: "https://github.com/zer0code9/meWebsite",
            tools: ["JavaScript", "Node.JS", "React", "Next.JS"],
            links: [
                { name: "Github", href: "https://github.com/zer0code9/meWebsite#readme", icon: faGithub },
            ]
        },
        {
            name: "Para Board",
            description: "A simple board for drawing",
            logo: paraboardLogo,
            source: "https://github.com/zer0code9/paraboard",
            tools: ["TypeScript", "Node.JS", "React", "Next.JS", "V0.dev"],
            links: [
                { name: "Github", href: "https://github.com/zer0code9/paraboard#readme", icon: faGithub },
                { name: "Website", href: "https://paraboard.vercel.app/", icon: faCode },
            ]
        },
    ]
}