import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { srcMapPng } from '/assets/images'

const StreetView = () => {
  const streetView = useLoader(TextureLoader, srcMapPng)

  const planeWidth = streetView.image.width / 100
  const planeHeight = streetView.image.height / 100

  return (
    <mesh
      position={[0, 0, 0]}
      rotation-x={-Math.PI * 0.5}
    >
      <planeGeometry args={[planeWidth, planeHeight]} />
      <meshStandardMaterial map={streetView} />
    </mesh>
  )
}

export default StreetView