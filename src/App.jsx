import { useState } from "react";
import LeftSide from "./Components/leftSide";

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
  const [selected, setSelected] = useState(0);
  return <>{selected === 0 && <LeftSide />}</>;
}

export default App;
