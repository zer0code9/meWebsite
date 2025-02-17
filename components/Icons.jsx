'use client';

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Icons({ count }) {
    const groupRef = useRef();
    const iconRef = useRef([]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2 + time * 0.1;
            const radius = 3 + Math.sin(time * 0.5 + i) * 0.5;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(time * 0.3 + i) * radius;
            const z = Math.sin(angle) * radius;

            iconRef.current[i].position.set(x, y, z);
            iconRef.current[i].rotation.x = time * 0.5 + i;
            iconRef.current[i].rotation.y = time * 0.3 + i;
        }
    })

    return (
        <group ref={groupRef}>
            {Array.from({ length: count }, (_, i) => (
                <group key={ i } ref={ el => iconRef.current[i] = el }>
                    <Html transform scale={ 0.2 }>
                        <FontAwesomeIcon icon={ faCode } style={ { fontSize: '9rem', color: 'red' } } />
                    </Html>
                </group>
            ))}
        </group>
    )
}