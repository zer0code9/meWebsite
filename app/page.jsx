'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ToolCard from "@/components/cards/ToolCard";
import ProjectCard from "@/components/cards/ProjectCard";
import Hero from "@/components/Hero";

import aliasLogo from "@/img/alias.png"
import devspaceLogo from "@/img/devspace.png"
import { faHtml5, faCss3, faJs,  faJava, faPython, faReact, faNodeJs, faGithub, faGit, faNpm } from '@fortawesome/free-brands-svg-icons';


export default function RootPage() {

  const data = [
    [
        { "name": "Alias", "description": "A small discord bot", "logo": aliasLogo, "source": "https://github.com/zer0code9/alias" },
        { "name": "Dev Space", "description": "A VScode extension", "logo": devspaceLogo, "source": "https://github.com/zer0code9/devspace" },
    ],
    [
        { "name": "HTML5", "type": "language", "icon": faHtml5 },
        { "name": "CSS3", "type": "language", "icon": faCss3 },
        { "name": "JavaScript", "type": "language", "icon": faJs }, 
        { "name": "React", "type": "language", "icon": faReact },
        { "name": "Node.js", "type": "work", "icon": faNodeJs },
        { "name": "NPM.js", "type": "other", "icon": faNpm },
        { "name": "Python", "type": "language", "icon": faPython },
        { "name": "Java", "type": "language", "icon": faJava },
        { "name": "Github", "type": "other", "icon": faGithub },
        { "name": "Git", "type": "other", "icon": faGit },
    ]
  ]

    let cardProjects = data[0].map((project) => {
        return <ProjectCard key={ project.name } title={ project.name } description={ project.description } logo={ project.logo } source={ project.source } />
    })
    let cardTools = data[1].map((tool) => {
        return <ToolCard key={ tool.name } title={ tool.name } icon={ tool.icon } />
    })

    return (
        <main className="relative w-full h-screen">
            <Nav />
            <Hero />

            <page className="flex flex-col items-center page">
                <section id="tools" className="pageSection">
                    <h2 className="text-center" style={ { fontSize: '30px' } }>tools</h2>
                    <cardholder className="flex flex-row flex-wrap justify-center" >
                        { cardTools }
                    </cardholder>
                </section>
                <section id="education" className="pageSection">
                <h2 className="text-center" style={ { fontSize: '30px' } }>education</h2>
                </section>
                <section id="projects" className="pageSection">
                    <h2 className="text-center" style={ { fontSize: '30px' } }>projects</h2>
                    <cardholder className="flex flex-row flex-wrap justify-center" >
                        { cardProjects }
                    </cardholder>
                </section>
            </page>

            <Footer />
        </main>
    );
}
