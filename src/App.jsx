import { Scroll, ScrollControls, OrbitControls, Grid, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva, useControls } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./Experience";
import { Interface } from "./components/Interface";
// import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./ScrollManager";
import { framerMotionConfig } from "./config";
import { Background } from "./components/Background";
import LoadingScreen from "./ui/loading-screen/LoadingScreen";
import UI from "./ui/UI";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const { gridSize, ...gridConfig } = useControls({
	gridSize: [10.5, 10.5],
	cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
	cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
	cellColor: '#6f6f6f',
	sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
	sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
	sectionColor: '#9d4b4b',
	fadeDistance: { value: 10, min: 0, max: 100000, step: 1 },
	fadeStrength: { value: 1, min: 0, max: 100, step: 0.1 },
	followCamera: false,
	infiniteGrid: true,
  })
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas camera={{ position: [0, 4, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={1} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                  <Experience section={section} menuOpened={menuOpened} />
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>

		  {/* <Grid position={[0, -0.01, 0]} args={gridSize} {...gridConfig} />
			<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
			<GizmoViewport
				axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
				labelColor="white"
			/>
			</GizmoHelper> */}
        </Canvas>
		<UI />
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Cursor />
      </MotionConfig>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Leva hidden />
    </>
  );
}

export default App;

// {/* <Canvas camera={{ position: [0, 5, 0], fov: 42 }}> */}
// {/* <Canvas camera={{ position: [0, 0, 0], fov: 42 }}> */}
// 		{/* {started && (
// 			<group position={[0, -3, -10]}><Experience section={section} menuOpened={menuOpened} /></group>
// 		)} */}
// 		{/* <OrbitControls enablePan={true} enableRotate={true} enableZoom={false}/> */}