'use client'
import Card, { CardHolder } from "./exclude/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs,  faJava, faPython, faReact, faNodeJs, faGithub, faGit, faNpm } from '@fortawesome/free-brands-svg-icons';


export default function RootPage() {

  const data = [
    [
        { "name": "Alias", "description": "A small discord bot" },
        { "name": "DevSpace", "description": "A VScode extension" },
    ],
    [
        { "name": "HTML5", "type": "language", "icon": faHtml5, "skill": "very good" },
        { "name": "CSS3", "type": "language", "icon": faCss3, "skill": "very good" },
        { "name": "JavaScript", "type": "language", "icon": faJs, "skill": "very good" }, 
        { "name": "TypeScript", "type": "language", "icon": faJs, "skill": "very good" },
        { "name": "React", "type": "language", "icon": faReact, "skill": "good" },
        { "name": "Python", "type": "language", "icon": faPython, "skill": "good" },
        { "name": "Java", "type": "language", "icon": faJava, "skill": "very good" },
        { "name": "C", "type": "language" },
        { "name": "C++", "type": "language" },
        { "name": "Node.js", "type": "work", "icon": faNodeJs },
        { "name": "Next.js", "type": "work" },
        { "name": "Angular.js", "type": "work" },
        { "name": "Discord.js", "type": "api" },
        { "name": "Firebase", "type": "api" },
        { "name": "VSCode", "type": "ide" },
        { "name": "IntelliJ IDEA", "type": "ide" },
        { "name": "PyCharm", "type": "ide" },
        { "name": "CLion", "type": "ide" },
        { "name": "Eclipse", "type": "ide" },
        { "name": "VSCode", "type": "ide" },
        { "name": "Github", "type": "other", "icon": faGithub },
        { "name": "Git", "type": "other", "icon": faGit },
        { "name": "NPM.js", "type": "other", "icon": faNpm },
    ]
  ]

  let cardProjects = data[0].map((project) => {
        return <Card key={ project.name } title={ project.name } description={ project.description } />
  })
  let cardTools = data[1].map((tool) => {
        return <Card title={ tool.name } description={ tool.type } icon={ tool.icon ?? undefined } />
  })

  return (
    <>
        <section id="projects" style={ { padding: '30px'} }>
            <h1 style={ { textAlign: 'center', fontSize: '30px', fontDecoration: 'underline' } }>projects</h1>
            <CardHolder>
                { cardProjects }
            </CardHolder>
        </section>
        <section id="tools" style={ { padding: '30px'} }>
            <h1 style={ { textAlign: 'center', fontSize: '30px', fontDecoration: 'underline' } }>tools</h1>
            <CardHolder >
                { cardTools }
            </CardHolder>
        </section>
    </>
  );
}
