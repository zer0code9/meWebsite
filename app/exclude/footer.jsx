'use client';
import styles from './Native.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
            <footer className={ styles.footer }>
                <section className={ styles.space }>
                    <p>Thanks for looking!</p>
                </section>
                <section className={ styles.space }>
                    <a className={ styles.goto } href="https://github.com/zer0code9"><FontAwesomeIcon icon={ faGithub } beatFade /></a>
                    <a className={ styles.goto } href="mailto:asorinus@gmail.com"><FontAwesomeIcon icon={ faEnvelope } beatFade /></a>
                </section>
            </footer>
        </>
    )
}