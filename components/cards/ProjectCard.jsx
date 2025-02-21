'use client';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, logo, source, tools }) {

    const toolsString = tools.map((tool) => {
        return tool + " "
    })
    return (
        <projectcard className="relative flex flex-col items-center justify-around projectCard">
            <section className="pcardSection">
                <Image src={ logo } alt="" width={ 60 } height={ 60 }/>
            </section>
            <section className="flex flex-col text-center pcardSection">
                <div className="font-bold" style={ { fontSize: '20px', color: 'var(--foreground)' } }>{ title }</div>
                <div style={ { fontSize: '15px', color: 'var(--foreground2)' } }>{ description }</div>
            </section>
            <section className="flex flex-col text-center pcardSection">
                <div style={ { fontSize: '15px', color: 'var(--foreground2)' } }>[ { toolsString }]</div>
            </section>
            <section id="mores" className="absolute top-0 h-full w-full hidden flex-col items-center">
                <div>{title.toLowerCase()}</div>
                <Link className="moreLink" href={ source + "#readme" } target='_blank'>
                    <span>GitHub </span>
                    <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
                </Link>
            </section>
        </projectcard>
    )
}