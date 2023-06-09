import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Mesh from './Mesh';
import PropTypes from 'prop-types';

const CanvasModel = ({rota}) => {


  const meshDatas = 
    {
      id:"2",
      mesh_Url:"https://ik.imagekit.io/UniqJewlery/3DMeshes/CustWedRing_1/1.glb?updatedAt=1686295525200",
      type:"Ring",
      diamondScale:0.9,
      scale:0.2, 
      position:3.3,
      positionD:5.2,
    }

  const meshDatas2 = 
    {
      id:"2",
      mesh_Url:"https://ik.imagekit.io/UniqJewlery/3DMeshes/CustWedRing_1/2.glb?updatedAt=1686295525220",
      type:"Ring",
      diamondScale:0.9,
      scale:0.2, 
      position:3.3,
      positionD:5.5,
    }

  return (
    <Canvas
      shadows
      // camera={{ position: [-0.4, 0, 2], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas"
    >
        <ambientLight 
          intensity={0.5} 
        />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
        />
        <Environment preset='city'/>
         <OrbitControls
           enableZoom={false}
           rotateSpeed={0.5}
           autoRotate={false}
           autoRotateSpeed={1.5}
         />
          <Center 
            scale={0.55}
            position={[-0.6,-0.2,0]}
            rotation={[1.6,0,0]}
          >
            <Mesh meshDatas={meshDatas} /> 
            {/* <Mesh meshDatas={meshDatas2} />  */}
          </Center>
          <Center 
            scale={0.5}
            position={[1,0,0]}
            rotation={[1.6,-0.4,0]}
          >
            <Mesh meshDatas={meshDatas2} /> 
          </Center>
    </Canvas>
  )
}
CanvasModel.propTypes = {
  rota: PropTypes.bool,
}

export default CanvasModel