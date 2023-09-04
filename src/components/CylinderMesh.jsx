import PropTypes from 'prop-types'

const CylinderMesh = ({ x=0, z=0, radiusTop=1, radiusBottom=5, height=0.3, foundationHeight=0, heightBorderCount=32}) => {

  return (
    <mesh
      position={[x, foundationHeight + (height / 2), z]}
    >
      <cylinderGeometry args={[ radiusTop, radiusBottom, height, heightBorderCount ]} />
      <meshStandardMaterial color="#516c91" />
    </mesh>
  )
}
CylinderMesh.propTypes = {
  x: PropTypes.number,
  z: PropTypes.number,
  radiusTop: PropTypes.number,
  radiusBottom: PropTypes.number,
  height: PropTypes.number,
  foundationHeight: PropTypes.number,
  heightBorderCount: PropTypes.number
}

export default CylinderMesh
