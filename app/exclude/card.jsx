'use client';
import styles from './Native.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function CardHolder({ children }) {
    return (
        <cardholder className={ styles.cardHolder }>
            { children }
        </cardholder>
    )
}

export default function Card({ title, subtitle, description, source, icon }) {
    return (
        <card className={ styles.card }>
            <section style={ { display: 'flex', flexDirection: 'column' } }>
                <div style={ { fontSize: '20px', fontWeight: 'bold', color: 'red' } }>{ title }</div>
                <div style={ { fontSize: '15px', color: 'darkred' } }>{ subtitle }</div>
                <div style={ { fontSize: '12px', color: 'magenta' } }>{ description }</div>
            </section>
            <section style={ { display: 'flex', flexDirection: 'row', color: 'red' } }>
                { source ? <img src={ source } alt=""/> : null }
                { icon ? <FontAwesomeIcon style={ { fontSize: '50px' } } icon={ icon } /> : null }
            </section>
        </card>
    )
}