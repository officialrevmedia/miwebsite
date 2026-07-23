import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// One signature dimensional element for the hero: the emblem's arch as a
// threshold of layered warm-clay ridgelines with slow ambient drift and a
// weighted, damped pointer response. Flat matte materials keep it faithful
// to the printed brand. No orbs, no particles, no reflections.

const PALETTE = ['#EFDDBC', '#BE6B33', '#A8431F', '#8C3115', '#461B07']

function ridgeGeometry(seed: number, base: number) {
  const shape = new THREE.Shape()
  shape.moveTo(-4, -3.2)
  shape.lineTo(-4, base)
  const steps = 26
  for (let i = 0; i <= steps; i++) {
    const x = -4 + (8 * i) / steps
    const y =
      base +
      Math.sin(i * 0.55 + seed * 2.1) * 0.22 +
      Math.sin(i * 0.21 + seed) * 0.34
    shape.lineTo(x, y)
  }
  shape.lineTo(4, -3.2)
  shape.closePath()
  return new THREE.ShapeGeometry(shape, 24)
}

function Ridges() {
  const group = useRef<THREE.Group>(null)
  const target = useRef({ x: 0, y: 0 })

  useFrame(({ pointer, clock }) => {
    if (!group.current) return
    // Weighted pointer response, heavily damped.
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.x * 0.12, 0.03)
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.y * 0.07, 0.03)
    group.current.rotation.y = target.current.x
    group.current.rotation.x = -target.current.y
    // Slow ambient drift.
    const t = clock.getElapsedTime()
    group.current.position.y = Math.sin(t * 0.22) * 0.045
    group.current.children.forEach((child, i) => {
      child.position.x = Math.sin(t * 0.1 + i) * 0.04 * (i + 1) * 0.35
    })
  })

  return (
    <group ref={group}>
      <mesh position={[0, 1.05, -2.6]}>
        <circleGeometry args={[0.62, 48]} />
        <meshBasicMaterial color="#B98A2E" />
      </mesh>
      {/* Minaret silhouette */}
      <mesh position={[0, 1.35, -2.5]}>
        <coneGeometry args={[0.075, 1.5, 4]} />
        <meshBasicMaterial color="#461B07" />
      </mesh>
      {PALETTE.map((color, i) => (
        <mesh key={color} geometry={ridgeGeometry(i, 0.55 - i * 0.62)} position={[0, 0, -2 + i * 0.55]}>
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  )
}

export default function ThresholdScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 3.4], fov: 42 }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor('#F8ECD4')
        scene.fog = new THREE.Fog('#F8ECD4', 3.2, 6.5)
      }}
    >
      <Ridges />
    </Canvas>
  )
}
