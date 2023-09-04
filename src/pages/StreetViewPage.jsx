import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { BoxMesh, CylinderMesh, StreetView } from '/components'

const StreetViewPage = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <color attach="background" args={['#0e101a']} />
        <OrbitControls maxPolarAngle={1.2}/>
        <OrbitControls/>
        <PerspectiveCamera makeDefault fov={15} position={[-6, 2, -3]} />

        <ambientLight intensity={0.5} />
        <spotLight color={'rgb(0, 158, 156)'} position={[0, 10, 0]} penumbra={0.5} intensity={1.5}/>

        {/* L 型樓 */}
        <BoxMesh
          x={1}
          z={-0.05}
          width={0.3}
          depth={0.15}
          height={0.4}
        />
        <BoxMesh
          x={1.075}
          z={-0.17}
          width={0.15}
          depth={0.1}
          height={0.4}
        />

        {/* L 型樓後方樓 */}
        <BoxMesh
          x={1.5}
          z={-0.2}
          width={0.2}
          depth={0.15}
          height={0.3}
        />

        {/* 偽 101 */}
        <BoxMesh
          x={0.5}
          z={-0.7}
          width={0.15}
          depth={0.15}
          height={0.8}
        />
        <BoxMesh
          x={0.5}
          z={-0.7}
          width={0.1}
          depth={0.1}
          height={0.1}
          foundationHeight={0.8}
        />
        <BoxMesh
          x={0.5}
          z={-0.7}
          width={0.02}
          depth={0.02}
          height={0.1}
          foundationHeight={0.9}
        />

        {/* 聖誕樹 */}
        <CylinderMesh
          x={0.25}
          z={-0.7}
          radiusTop={0}
          radiusBottom={0.05}
          height={0.15}
        />
        <CylinderMesh
          x={0.25}
          z={-0.7}
          radiusTop={0}
          radiusBottom={0.04}
          height={0.12}
          foundationHeight={0.055}
        />
        <CylinderMesh
          x={0.25}
          z={-0.7}
          radiusTop={0}
          radiusBottom={0.03}
          height={0.08}
          foundationHeight={0.11}
        />

        {/* 偽 101 前方樓 */}
        <BoxMesh
          x={0.25}
          z={-0.5}
          width={0.3}
          depth={0.1}
          height={0.3}
        />
        <CylinderMesh
          x={0.15}
          z={-0.5}
          radiusTop={0.025}
          radiusBottom={0.025}
          height={0.045}
          foundationHeight={0.3}
        />
        <CylinderMesh
          x={0.22}
          z={-0.5}
          radiusTop={0.025}
          radiusBottom={0.025}
          height={0.045}
          foundationHeight={0.3}
        />
        
        {/* 橋旁邊的樓 */}
        <BoxMesh
          x={-0.8}
          z={0.58}
          width={0.2}
          depth={0.1}
          height={0.18}
        />
        <BoxMesh
          x={-0.9}
          z={0.75}
          width={0.2}
          depth={0.1}
          height={0.14}
        />
        
        {/* 樹旁大樓 */}
        <BoxMesh
          x={-0.75}
          z={0.1}
          width={0.1}
          depth={0.1}
          height={0.5}
        />

        {/* 路邊樹 */}
        <CylinderMesh
          x={-0.87}
          z={0.25}
          radiusTop={0}
          radiusBottom={0.03}
          height={0.15}
        />
        <CylinderMesh
          x={-0.97}
          z={0.22}
          radiusTop={0}
          radiusBottom={0.03}
          height={0.15}
        />
        <StreetView />
      </Canvas>
    </Suspense>
  )
}

export default StreetViewPage