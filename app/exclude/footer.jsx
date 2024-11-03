'use client';
import styles from './native.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.space}>
                    <p>Thanks for looking!</p>
                </section>
                <section className={styles.space}>
                    <a className={styles.goto} href="https://github.com/zer0code9"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                    <a className={styles.goto} href="mailto:asorinus@gmail.com"><FontAwesomeIcon icon="fa-brands fa-envelope" /></a>
                </section>
            </footer>
        </>
    )
}