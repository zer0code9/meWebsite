'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Hero() {
    return (
        <hero id="me" className="flex flex-row items-center justify-center text-center h-[400px]">
            <section className="relative z-10">
                <span className='flex flex-row justify-center' style={ { fontSize: '50px' } }>
                    <h1 className='font-bold' style={ { color: 'var(--foreground)' } }>Anselme</h1>
                    <h2 style={ { color: 'var(--foreground2)' } }>: zer0code9</h2>
                </span>
                <h2>Fullstack Developer</h2>
                <h3>Good with JavaScript</h3>
            </section>
        </hero>
    )
}