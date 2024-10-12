'use client';
export function Holder({ children }) {
    return (
        <holder>
            {children}
        </holder>
    )
}

export default function Card({ title, subtitle, description }) {
    return (
        <card>
            <section style={{ display: 'flex', flexDirection: 'row'}}>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>{description}</div>
            </section>
            <section>

            </section>
        </card>
    )
}