// "use client"

// import { useRef } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { Points, PointMaterial } from "@react-three/drei"
// import * as THREE from "three"
// import { random } from "maath"

// function ParticleCloud({ count = 2000 }) {
//   const points = useRef<THREE.Points>(null)
//   const sphere = random.inSphere(new Float32Array(count * 3), { radius: 3 }) as Float32Array

//   useFrame((state, delta) => {
//     if (points.current) {
//       points.current.rotation.x -= delta / 10
//       points.current.rotation.y -= delta / 15
//     }
//   })

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#8a2be2"
//           size={0.02}
//           sizeAttenuation={true}
//           depthWrite={false}
//           blending={THREE.AdditiveBlending}
//         />
//       </Points>
//     </group>
//   )
// }

// export default function ParticlesBackground() {
//   return (
//     <div className="absolute inset-0 w-full h-full">
//       <Canvas camera={{ position: [0, 0, 3] }}>
//         <ambientLight intensity={0.5} />
//         <ParticleCloud />
//       </Canvas>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef } from "react"

export default function DataFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      isDataPacket: boolean

      constructor(isDataPacket = false) {
        this.x = canvas ? Math.random() * canvas.width : 0
        this.y = canvas ? Math.random() * canvas.height : 0
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = isDataPacket ? "#8b5cf6" : "#3b82f6"
        this.alpha = Math.random() * 0.5 + 0.1
        this.isDataPacket = isDataPacket
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (canvas && (this.x > canvas.width || this.x < 0)) {
          this.speedX = -this.speedX
        }
        if (canvas && (this.y > canvas.height || this.y < 0)) {
          this.speedY = -this.speedY
        }

        // Data packets move faster and pulse
        if (this.isDataPacket) {
          this.alpha = 0.5 + Math.sin(Date.now() * 0.008) * 0.3
          this.size = 5 + Math.sin(Date.now() * 0.008) * 1
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 8)
        ctx.fillStyle = this.isDataPacket ? `rgba(139, 92, 246, ${this.alpha})` : `rgba(59, 130, 246, ${this.alpha})`
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 1000) // Adjust density
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i % 10 === 0)) // Every 10th particle is a data packet
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Only connect particles within a certain distance
            const opacity = 1 - distance / 100
            if (particles[i].isDataPacket || particles[j].isDataPacket) {
              ctx.strokeStyle = `rgba(149, 92, 250, ${opacity * 0.5})`
            } else {
              ctx.strokeStyle = `rgba(69, 130, 246, ${opacity * 0.5})`
            }
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-gray-950/90"></div>
    </div>
  )
}
