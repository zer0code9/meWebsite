'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="relative w-full h-16 flex flex-row items-center justify-center footer">
            <section className="flex flex-row flex-wrap">
                <a className="goto" href="https://github.com/zer0code9"><FontAwesomeIcon icon={ faGithub } /> GitHub</a>
                <a className="goto" href="mailto:asorinus@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /> Contact</a>
                <a className="goto" href="https://www.linkedin.com/in/anselmesorin/"><FontAwesomeIcon icon={ faLinkedin } /> LinkedIn</a>
            </section>
            <div className='flex-grow'></div>
            <section>
                2025 zer0code9
            </section>
        </footer>
    )
}