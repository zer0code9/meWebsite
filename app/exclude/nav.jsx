'use client';
import { useState } from 'react'
import styles from './native.module.css'

function OptionNav({ options }) {
    let optionMap = options.map(subtab => 
        <button className={styles.subtab}>
            {subtab.name}
        </button>
    )
    return (
        <subnav className={styles.subnav}>
            <section>
                {optionMap}
            </section>
        </subnav>
    );
}

export default function Nav() {
    const [selected, setSelected] = useState('home');
    let optionsHome = [
        { name: "Projects" },
        { name: "Experiences" },
        { name: "Skills" }
    ]

    async function handleTabChange(props) {
        setSelected(props);
    }

    return (
        <>
            <nav className={styles.nav}>
                <section className={styles.header}>
                    <button className={styles.tab} onClick={() => handleTabChange('home')}>Home</button>
                    <button className={styles.tab} onClick={() => handleTabChange('fun')}>Fun</button>
                </section>
            </nav>
            <OptionNav options={optionsHome} />
        </>
    );
}