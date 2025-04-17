"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { random } from "maath"

function ParticleCloud({ count = 2000 }) {
  const points = useRef<THREE.Points>(null)
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 3 }) as Float32Array

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 10
      points.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8a2be2"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <ParticleCloud />
      </Canvas>
    </div>
  )
}
