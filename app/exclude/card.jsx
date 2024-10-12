'use client';
export function Holder({ children }) {
    return (
        <>
            {children}
        </>
    )
}

export default function Card({ title, subtitle, description }) {
    return (
        <card>
            <section style={{ display: 'flex', flexDirection: 'row'}}>
                <div></div>
                <div></div>
            </section>
            <section>

            </section>
        </card>
    )
}