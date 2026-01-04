// Armature.tsx (keep your existing code)
'use client'

import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Armature() {
  const group = useRef<THREE.Group | null>(null)

  const { scene, animations } = useGLTF('/model14.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!actions || animations.length === 0) return
    const action = actions[animations[0].name]
    if (action) action.reset().fadeIn(0.5).play()
  }, [actions, animations])

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2}
      position={[0, -1, 0]}
      castShadow
      receiveShadow
    />
  )
}

useGLTF.preload('/model12.glb')