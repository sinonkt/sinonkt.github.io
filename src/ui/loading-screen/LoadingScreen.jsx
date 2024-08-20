import { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import "./loadingscreen.scss"
import { useSoundStore } from "../../States";
import MagicMouseIcon from "../../icons/MagicMouseIcon";

function ArrowDown(props) {
	return (
		<div {...props} >
		<svg
		  className="m-0 p-0"
		  xmlns="http://www.w3.org/2000/svg"
		  width="24"
		  height="36"
		  viewBox="0 0 24 36"
		  fill="none"
		  stroke="currentColor"
		  strokeWidth="2"
		  strokeLinecap="round"
		  strokeLinejoin="round"
		>
		  <polyline points="19 12 12 19 5 12"></polyline>
		  <polyline points="19 12 12 19 5 12" transform="translate(0, 12)"></polyline>
		</svg>
	  </div>
	);
  }

export default function LoadingScreen({ started, setStarted }) {
  const { progress, active, total, loaded, item } = useProgress();
  const [hideLoadingScreen, setHideLoadingScreen] = useState(false);
  const setPlaying = useSoundStore((state) => state.setPlaying);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const maxLoadingTime = 5 * 1000
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const clickHandler = () => {
    setPlaying();
    setStarted(true);
  };
  useEffect(() => {
    const updateClock = () => {
      setElapsedTime((Date.now() - startTime) / 1000); // Convert to seconds
      requestAnimationFrame(updateClock);
    };

    const rafId = requestAnimationFrame(updateClock);

    return () => cancelAnimationFrame(rafId);
  }, [startTime]);

  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        const startButton = document.getElementById("start");
        startButton.classList.add("animate-[fade-in_3s]");
        startButton.style.opacity = 1;
        startButton.style.pointerEvents = "auto";
      }, maxLoadingTime - elapsedTime * 1000);
	  console.log(`Assets Loading time ${elapsedTime}`, maxLoadingTime - elapsedTime * 1000)
    }
  }, [active]);

  useEffect(() => {
    buttonRef.current.style.pointerEvents = "none";
  }, [started]);

  return (
    <div
      className={`fixed top-0 left-0 z-[98] w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-black text-ui-primary select-none ${
        started ? "disabled" : ""
      } `}
      ref={containerRef}
    >
      <div className="m-0 mb-[0.1rem] p-0 text-[5rem] tracking-[0.3rem] text-ui-primary sm:text-[2.75rem]"> 
	  <div className="relative">
	  <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500 text-ui-primary"
          style={{
            height: `${100}%`,
          }}
        >
		  OAT
        </div>
        <div className="opacity-40">
		OAT
		</div>
	  </div></div>
      {/* <h3 className="m-0 mb-[2rem] p-0 tracking-[0.2rem] text-ui-primary sm:text-[0.75rem]">
      </h3> */}
	  <div className="text-[1rem] relative sm">
	  <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500 text-ui-primary"
          style={{
            width: `${progress}%`,
          }}
        >
		  KRITTIN PHORNSIRICHAREONPHANT
        </div>
        <div className="opacity-40">
		KRITTIN PHORNSIRICHAREONPHANT
		</div>
	  </div>
	  <br/>
      <div className={`absolute mb-[2rem] text-[1rem] m-6 font-spacemono text-ui-primary $`} ref={progressRef}>
        {Math.floor(progress)}%
      </div>

	  <MagicMouseIcon width={128} height={128} />
	  <ArrowDown className="animate-infinite-scroll-down"/>
	  <div className="flex flex-col justify-center items-center animate-[fade-in_3.5s]">
	  <div className="m-0 mt-[2rem] p-0 tracking-[0.2rem] text-ui-primary sm:text-[0.75rem]">
        Scroll Down to
      </div>
		</div>
      <button
        id="start"
        ref={buttonRef}
		onClick={clickHandler}
        className={`cursor-pointer
		pointer-events-none opacity-0 m-4 pb-2 pt-2 pl-8 pr-8
		 font-semibold text-[2rem] tracking-[0.2rem] bg-transparent rounded-md border-2 border-ui-primary norder-solid text-ui-primary  bg-clip-text`}
      >
        EXPLORE
      </button>
    </div>
  );
}

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
//   flex items-center justify-center bg-indigo-50 
//   ${started ? "opacity-0" : "opacity-100"}`}
//     >
//       <div className="text-4xl md:text-9xl font-bold text-indigo-900 relative">
//         <div
//           className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
//           style={{
//             width: `${progress}%`,
//           }}
//         >
//           Wawa Sensei
//         </div>
//         <div className="opacity-40">Wawa Sensei</div>
//       </div>
//     </div>
//   );
// };
