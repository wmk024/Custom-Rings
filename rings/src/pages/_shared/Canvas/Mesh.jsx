

import PropTypes from 'prop-types';
import * as THREE from "three";
import { 
  useCubeTexture, 
  useGLTF, 
  MeshRefractionMaterial  
} from '@react-three/drei'


const Mesh = ({meshDatas, meshD}) => {
  const texture = useCubeTexture(
    [
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/px.png?updatedAt=1685801642944",
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/nx.png?updatedAt=1685801642898",
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/py.png?updatedAt=1685801642924",
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/ny.png?updatedAt=1685801642907",
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/pz.png?updatedAt=1685801642926",
      "https://ik.imagekit.io/UniqJewlery/3DMeshes/diamond_Env/nz.png?updatedAt=1685801643046"
    ],
    {
      path:""
    }
  )
  const mesh = useGLTF(meshDatas.mesh_Url)
  const meshDi = useGLTF(meshD.mesh_Url)
  const nodes = mesh.nodes
  const nodesD = meshDi.nodes
  const RedMat = new THREE.MeshStandardMaterial({ 
    color: new THREE.Color( "#f5ac84"),
    emissive: new THREE.Color("#242405"),
    roughness: 0.2,
    metalness: 1,
  });
 
  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.Ring.geometry}
        scale={meshDatas.scale}
        material={RedMat}
        position-y={meshDatas.position}
      />

      <mesh
        geometry={nodesD.RingD.geometry}
        scale={meshDatas.diamondScale}
        position-y={meshDatas.positionD}
      >
        <MeshRefractionMaterial 
          envMap={texture}  
          bounces={1.5}
          aberrationStrength={0.01}
          ior={2}
          color={"#efffff"}
        />
      </mesh>
    </group>
  )
}
Mesh.propTypes = {
  meshDatas: PropTypes.object,
}
export default Mesh