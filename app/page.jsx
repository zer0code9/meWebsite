'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ToolCard from "@/components/cards/ToolCard";
import ProjectCard from "@/components/cards/ProjectCard";
import Hero from "@/components/Hero";

import aliasLogo from "@/img/alias.png"
import devspaceLogo from "@/img/devspace.png"
import websiteLogo from "@/img/logo.jpg"
import { tools, projects } from "./data"
import { faHtml5, faCss3, faJs,  faJava, faPython, faReact, faNodeJs, faGithub, faGit, faNpm } from '@fortawesome/free-brands-svg-icons';


export default function RootPage() {

    let cardTools = tools.map((tool) => {
        return <ToolCard key={ tool.name } title={ tool.name } icon={ tool.icon } />
    })

    let cardProjects = projects.map((project) => {
        return <ProjectCard key={ project.name } title={ project.name } description={ project.description } logo={ project.logo } source={ project.source } tools={ project.tools } />
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
