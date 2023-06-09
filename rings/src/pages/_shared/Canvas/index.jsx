import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Mesh from './Mesh';

const CanvasModel = () => {
  const meshDatas = 
    {
      id:"2",
      mesh_Url:"https://ik.imagekit.io/UniqJewlery/3DMeshes/CustWedRing_1/3.glb?updatedAt=1686300017874",
      type:"Ring",
      diamondScale:0.9,
      scale:0.2, 
      position:3.3,
      positionD:5.2,
    }

  const meshDatas2 = 
    {
      id:"2",
      mesh_Url:"https://ik.imagekit.io/UniqJewlery/3DMeshes/CustWedRing_1/4.glb?updatedAt=1686300253527",
      type:"Ring",
      diamondScale:0.9,
      scale:0.2, 
      position:3.3,
      positionD:5.2,
    }
  const meshD = 
    {
      mesh_Url:"https://ik.imagekit.io/UniqJewlery/3DMeshes/CustWedRing_1/D.glb?updatedAt=1686300380273",
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
            <Mesh meshDatas={meshDatas} meshD={meshD}/> 
          </Center>
          <Center 
            scale={0.55}
            position={[1,0,0]}
            rotation={[1.6,-0.4,0]}
          >
            <Mesh meshDatas={meshDatas2} meshD={meshD}/> 
          </Center>
    </Canvas>
  )
}

export default CanvasModel