'use client'

import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense } from 'react'
import Armature from './Armature'

export default function Scene() {
  return (
    <Canvas shadows gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 1.2, 5]} fov={45} />

      {/* Lights */}
      <ambientLight intensity={0.3} />

      <spotLight
        position={[8, 10, 6]}
        angle={0.2}
        penumbra={0.8}
        intensity={1.4}
        castShadow
      />

      <directionalLight
        position={[0, 5, -5]}
        intensity={0.6}
      />

      <pointLight
        position={[-6, 2, -6]}
        intensity={0.4}
        color="#ffffffff"
      />

      {/* Environment */}
      <Environment preset="city" />

      <Suspense fallback={null}>
        <Armature />
      </Suspense>

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.35}
        scale={8}
        blur={3}
        far={3}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.4}
        target={[0, 0.8, 0]}
        makeDefault
      />
    </Canvas>
  )
}
