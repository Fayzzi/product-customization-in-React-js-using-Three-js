// Using a Valtio state model to bridge reactivity between

import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

function Shoe() {
  const ref = useRef();
  const snap = useSnapshot(state);
  // Drei's useGLTF hook sets up draco automatically, that's how it differs from useLoader(GLTFLoader, url)
  // { nodes, materials } are extras that come from useLoader, these do not exist in threejs/GLTFLoader
  // nodes is a named collection of meshes, materials a named collection of materials
  const { nodes, materials } = useGLTF("shoe-draco.glb");

  // Animate model
  useFrame((ok) => {
    const t = ok.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 15;
    ref.current.rotation.x = Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 15;
  });

  // Cursor showing current color
  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      hovered ? cursor : auto
    )}'), auto`;
  }, [hovered]);

  // Using the GLTFJSX output here to wire in app-state and hook up events
  return (
    <group
      ref={ref}
      scale={[3, 3, 3]}
      dispose={null}
      // onPointerMissed={() => (state.current = null)}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.laces}
        onPointerOver={(e) => (e.stopPropagation(), set("laces"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "laces"))}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.mesh}
        onPointerOver={(e) => (e.stopPropagation(), set("mesh"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "mesh"))}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.caps}
        onPointerOver={(e) => (e.stopPropagation(), set("caps"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "caps"))}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.inner}
        onPointerOver={(e) => (e.stopPropagation(), set("inner"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "inner"))}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.sole}
        onPointerOver={(e) => (e.stopPropagation(), set("sole"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "sole"))}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.stripes}
        onPointerOver={(e) => (e.stopPropagation(), set("stripes"))}
        onPointerDown={(e) => (
          e.stopPropagation(), (state.current = "stripes")
        )}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.band}
        onPointerOver={(e) => (e.stopPropagation(), set("band"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "band"))}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        material={materials.patch}
        onPointerOver={(e) => (e.stopPropagation(), set("patch"))}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = "patch"))}
        material-color={snap.items.patch}
      />
    </group>
  );
}

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div
      className="fixed top-5 left-5"
      style={{ display: snap.current ? "block" : "none" }}
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1 className="uppercase text-5xl drop-shadow-md md:text-8xl">
        {snap.current}
      </h1>
    </div>
  );
}

export default function LeftSide() {
  const svgSaver = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");

    // Wait for the canvas to be fully rendered
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);

      link.href = url;
      link.download = "canvas.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the object URL
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="relative">
      <div className="h-[100vh]">
        <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
          <ambientLight intensity={0.3} />
          <spotLight
            intensity={0.3}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
          />
          <Suspense fallback={null}>
            <Shoe />
            <Environment files="royal_esplanade_1k.hdr" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={2}
              far={1}
            />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minPolarAngle={0}
            maxPolarAngle={(Math.PI / 2) * 0.9}
          />
        </Canvas>
        <Picker />
      </div>
      <button
        onClick={svgSaver}
        className="fixed top-7 right-7 p-2 bg-green-300 rounded text-white"
      >
        Download
      </button>
    </div>
  );
}
