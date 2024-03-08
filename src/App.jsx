import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import image from "./assets/canvas.png";
import {
  AccumulativeShadows,
  Center,
  OrbitControls,
  RandomizedLight,
  useGLTF,
  useTexture,
} from "@react-three/drei";

export function Model({ seatTexture, crossTexture, legsColor, ...props }) {
  const { nodes, materials } = useGLTF("/projectshoe.gltf");
  return (
    <group {...props} rotation={[0.7, 0, 0.3]} dispose={null}>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Group24115.geometry}
        material={nodes.Group24115.material}
      >
        <meshBasicMaterial map={useTexture(crossTexture)} />
      </mesh>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Default.geometry}
        material={nodes.Default.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Group59965.geometry}
        material={nodes.Group59965.material}
      >
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Group1755.geometry}
        material={nodes.Group1755.material}
      >
        <meshBasicMaterial map={useTexture(seatTexture)} />
      </mesh>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Group15983.geometry}
        material={nodes.Group15983.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow // Enable receiving shadows
        position={[0, -1.5, 1]}
        scale={[18, 18, 18]}
        geometry={nodes.Group15983_1.geometry}
        material={nodes.Group15983_1.material}
      >
        {" "}
        <meshBasicMaterial color={"white"} />
      </mesh>
    </group>
  );
}
// export function Model({ seatTexture, crossTexture, legsColor, ...props }) {
//   const { nodes, materials } = useGLTF("/highHeels.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
// castShadow
// receiveShadow // Enable receiving shadows
// position={[0, -1.5, 1]}
// scale={[20, 20, 20]}
//         geometry={nodes.Heel.geometry}
//         material={nodes.Heel.material}
//       >
//         <meshBasicMaterial map={useTexture(seatTexture)} />
//       </mesh>
//       <mesh
//         geometry={nodes.TopPiece.geometry}
//         material={nodes.TopPiece.material}
//       ></mesh>
//       <mesh
//         castShadow
//         receiveShadow // Enable receiving shadows
//         position={[0, -1.5, 1]}
//         scale={[20, 20, 20]}
//         geometry={nodes.Outer.geometry}
//         material={nodes.Outer.material}
//       >
//         <meshBasicMaterial map={useTexture(crossTexture)} />
//       </mesh>
//       <mesh
//         castShadow
//         receiveShadow // Enable receiving shadows
//         position={[0, -1.5, 1]}
//         scale={[20, 20, 20]}
//         geometry={nodes.Outsole.geometry}
//         material={nodes.Outsole.material}
//       ></mesh>
//       <mesh
//         castShadow
//         receiveShadow // Enable receiving shadows
//         position={[0, -1.5, 1]}
//         scale={[20, 20, 20]}
//         geometry={nodes.Insole.geometry}
//         material={nodes.Insole.material}
//       >
//         <meshBasicMaterial color={"yellow"} />
//       </mesh>
//       <mesh
//         castShadow
//         receiveShadow // Enable receiving shadows
//         position={[0, -1.5, 1]}
//         scale={[20, 20, 20]}
//         geometry={nodes.Cushion.geometry}
//         material={nodes.Cushion.material}
//       >
//         <meshBasicMaterial color={legsColor} />
//       </mesh>
//     </group>
//   );
// }
function App() {
  const [seatTexture, setSeatTexture] = useState("/materials/0000/preview.jpg");
  const [crossTexture, setCrossTexture] = useState(
    "/materials/0001/preview.jpg"
  );
  const [legsColor, setLegsColor] = useState("#000001");
  const textures = [
    "/materials/0001/preview.jpg",
    "/materials/0003/preview.jpg",
    "/materials/0004/preview.jpg",
    "/materials/0005/preview.jpg",
    "/materials/0006/preview.jpg",
    "/materials/0007/preview.jpg",
  ];
  const svgSaver = () => {
    const canvas = document.querySelector("Canvas");
    const dataurl = canvas.toDataURL("");
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = "canvas.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="w-screen h-screen bg-blue-300 flex flex-col items-center justify-center">
        <div className=" w-[90%]  py-4 mx-auto md:h-[90%] bg-blue-400 shadow border px-4 rounded">
          <div className="h-[80%] z-[50] w-full bg-white rounded">
            <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
              <Suspense fallback={null}>
                <ambientLight />
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={1}
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  minPolarAngle={0}
                  maxPolarAngle={(Math.PI / 2) * 0.9}
                />
                <Center>
                  <Model
                    seatTexture={seatTexture}
                    crossTexture={crossTexture}
                    legsColor={legsColor}
                  />
                </Center>
                <AccumulativeShadows
                  temporal
                  frames={60}
                  color="rbg(231,192,22)"
                  colorBlend={2}
                  toneMapped={true}
                  alphaTest={0.9}
                  opacity={1}
                  scale={12}
                  position={[0, -2.35, 0]}
                >
                  <RandomizedLight
                    amount={8}
                    radius={4}
                    ambient={0.5}
                    position={[5, 9, 0]}
                  />
                </AccumulativeShadows>
              </Suspense>
            </Canvas>
          </div>
          <div className="h-[20%] flex items-center justify-between p-2">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                {textures.map((t, i) => (
                  <img
                    key={i}
                    onClick={(e) => setSeatTexture(t)}
                    className="h-6 w-6 rounded-full"
                    src={t}
                  />
                ))}
              </div>

              <label className="text-white select-none" htmlFor="">
                Main Texture
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                {textures.map((t, i) => (
                  <img
                    key={i}
                    onClick={(e) => setCrossTexture(t)}
                    className="h-6 w-6 rounded-full"
                    src={t}
                  />
                ))}
              </div>
              <label className="text-white select-none" htmlFor="">
                Stripes Texture
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <input
                className="cursor-pointer"
                type="color"
                value={legsColor}
                onChange={(e) => setLegsColor(e.target.value)}
              />
              <label className="text-white select-none" htmlFor="">
                Legs Color
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={svgSaver}
        className="fixed bottom-0 right-2 p-2 bg-green-500 text-white cursor-pointer"
      >
        download SVG
      </div>
    </>
  );
}

export default App;
