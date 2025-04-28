'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { NavContainer, NavItem } from "@/components/Nav";
import { FooterContainer, FooterSection, FooterItem } from "@/components/Footer";
import { CardContainer, Card, CardTitle, CardText, CardButton } from "@/components/Card";
import Hero from "@/components/Hero";

import { tools, education, projects } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


export default function RootPage() {

    const router = useRouter();

    const handleClick = useCallback((href) => {
        router.push(href);
    });

    return (
        <page className="relative w-full h-screen">
            <NavContainer className="sticky top-[20px]">
                <NavItem name="me" />
                <NavItem name="tools" />
                <NavItem name="education" />
                <NavItem name="projects" />
            </NavContainer>
            <Hero />

            <div className="flex flex-col items-center justify-center w-full">
                <section id="tools" className="pageSection relative p-[30px] w-full">
                    <h2 className="text-center text-[30px]">tools</h2>
                    <CardContainer>
                        { tools.map((tool) => 
                            <Card key={ tool.name } className="w-[90px] md:w-[140px] h-[106px]">
                                { tool.icon ? <FontAwesomeIcon className="text-[50px] text-primary-foreground" icon={ tool.icon } /> : null }
                                <CardTitle className="text-secondary-foreground hidden md:inline">{ tool.name }</CardTitle>
                            </Card>
                        ) }
                    </CardContainer>
                </section>
                <section id="education" className="pageSection relative p-[30px] w-full">
                    <h2 className="text-center text-[30px]">education</h2>
                    <CardContainer>
                        { education.map((education) => 
                            <Card key={ education.name } className="w-[540px] h-[206px]">
                                <CardTitle className="text-primary-foreground">{ education.name }</CardTitle>
                                <CardText className="text-secondary-foreground text-[15px]">{ education.description }</CardText>
                                <CardText className="text-secondary-foreground text-[15px]">{ education.date }</CardText>
                                <CardText className="text-secondary-foreground text-[13px]">GPA: { education.gpa }</CardText>
                                <Card>
                                    <CardTitle className="text-primary-foreground text-[18px]">{ education.experiences[0].name }</CardTitle>
                                    <CardText className="text-secondary-foreground text-[13px]">{ education.experiences[0].organization }</CardText>
                                    <CardText className="text-secondary-foreground text-[13px]">{ education.experiences[0].date }</CardText>
                                </Card>
                            </Card>
                        ) }
                    </CardContainer>
                </section>
                <section id="projects" className="pageSection relative p-[30px] w-full">
                    <h2 className="text-center text-[30px]">projects</h2>
                    <CardContainer>
                        { projects.map((project) => 
                            <Card key={ project.name } className="w-[540px] h-[206px]">
                                <Image src={ project.logo } alt="" width={ 60 } height={ 60 }/>
                                <CardTitle className="text-primary-foreground">{ project.name }</CardTitle>
                                <CardText className="text-secondary-foreground text-[15px]">{ project.description }</CardText>
                                <CardText className="text-secondary-foreground text-[13px]">[ { project.tools.map((tool) => tool + " ") }]</CardText>
                                <div className="absolute right-1 ">
                                { project.links.map((link) => 
                                    <CardButton key={ link.name } className="flex flex-row items-center justify-center m-1" onClick={ () => handleClick(link.href) }>
                                        <CardText>{ link.name }</CardText>
                                        <FontAwesomeIcon className="pl-[5px]" icon={ link.icon } />
                                    </CardButton>
                                )}
                                </div>
                            </Card>
                        ) }
                    </CardContainer>
                </section>
            </div>

            <FooterContainer>
                <FooterSection>
                    <FooterItem name="github" icon={ faGithub } link="https://github.com/zer0code9" />
                    <FooterItem name="email" icon={ faEnvelope } link="mailto:asorinus@gmail.com" />
                    <FooterItem name="linkedin" icon={ faLinkedin } link="https://www.linkedin.com/in/anselmesorin/" />
                </FooterSection>
                <div className='flex-grow'></div>
                <FooterSection>2025 zer0code9</FooterSection>
            </FooterContainer>
        </page>
    );
}