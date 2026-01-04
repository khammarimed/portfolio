'use client'

import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ArmatureVar() {
  const group = useRef<THREE.Group>(null)

  const { scene, animations } = useGLTF('/model18.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!actions || animations.length === 0) return
    const action = actions[animations[0].name]
    action?.reset().fadeIn(0.5).play()
  }, [actions, animations])

  // 🔵 Auto rotate
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.6
    }
  })

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.8}
      position={[0, -1.2, 0]}
      castShadow
      receiveShadow
    />
  )
}

useGLTF.preload('/model18.glb')
