'use client';
import styles from './native.module.css'

export function CardHolder({ children }) {
    return (
        <cardHolder className={styles.cardHolder}>
            { children }
        </cardHolder>
    )
}

export default function Card({ title, subtitle, description, source }) {
    return (
        <card className={styles.card}>
            <section style={{ display: 'flex', flexDirection: 'row'}}>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</div>
                <div style={{ fontSize: '15px', color: 'gray' }}>{subtitle}</div>
                <div style={{ fontSize: '12px', color: 'grey' }}>{description}</div>
            </section>
            <section>
                { (source) ? <img src={source} alt=""/> : null }
            </section>
        </card>
    )
}