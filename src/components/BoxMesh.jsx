import PropTypes from 'prop-types'

const BoxMesh = ({ x=0, z=0, width=0.3, height=0.3, depth=0.3, foundationHeight=0}) => {
  
  return (
    <mesh
      position={[x, foundationHeight + (height / 2), z]}
    >
      <boxGeometry args={[ width, height, depth ]} />
      <meshStandardMaterial color="#516c91" />
    </mesh>
  )
}
BoxMesh.propTypes = {
  x: PropTypes.number,
  z: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
  foundationHeight: PropTypes.number
}

export default BoxMesh
