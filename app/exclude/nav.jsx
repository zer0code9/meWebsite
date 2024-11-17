'use client';
import { useState } from 'react'
import styles from './Native.module.css'

export default function Nav() {
    async function handleTabChange(props) {
        console.log(props)
    }

    return (
        <>
            <nav className={ styles.nav }>
                <section className={ styles.header }>
                    <a className={ styles.tab } onClick={() => handleTabChange('projects')}>projects</a>
                    <a className={ styles.tab } onClick={() => handleTabChange('experiences')}>experiences</a>
                    <a className={ styles.tab } onClick={() => handleTabChange('tool')}>tools</a>
                </section>
            </nav>
        </>
    );
}