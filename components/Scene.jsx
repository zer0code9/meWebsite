'use client';

import { Canvas } from "@react-three/fiber";
import Icons from "./Icons";

export default function Scene() {
    return (
        <Canvas className="h-full w-full">
            <ambientLight intensity={ 0.5 } />
            <pointLight position={ [-20, -20, -20] } intensity={ 0.5 } />
            <Icons count={ 9 } />
        </Canvas>
    )
}