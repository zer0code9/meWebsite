'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToolCard({ title, icon }) {
    return (
        <toolcard className="flex flex-col items-center justify-center toolCard">
            { icon ? <FontAwesomeIcon style={ { fontSize: '50px' } } icon={ icon } /> : null }
            <div className="font-bold title" style={ { fontSize: '20px' } }>{ title }</div>
        </toolcard>
    )
}