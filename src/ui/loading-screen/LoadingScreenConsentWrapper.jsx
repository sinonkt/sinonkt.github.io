import { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import "./loadingscreen.scss"
import { useSoundStore } from "../../States";
import MagicMouseIcon from "../../icons/MagicMouseIcon";


export default function LoadingScreenConsentWrapper({ consent, setConsent }) {
  const setPlaying = useSoundStore((state) => state.setPlaying);
  const buttonRef = useRef(null);

  const clickHandler = () => {
    setPlaying();
    setConsent(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-[98] w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-black text-ui-primary select-none `}
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
      <div className={`absolute mb-[2rem] text-[1rem] mt-24 m-6 font-spacemono text-ui-primary $`} ref={progressRef}>
        {Math.floor(progress)}%
      </div>

	  <MagicMouseIcon width={128} height={128} />
	  <ArrowDown className="animate-infinite-scroll-down"/>
	  <div className="flex flex-col justify-center items-center animate-[fade-in_3.5s]">
	  <div className="m-0 mt-[2rem] p-0 tracking-[0.2rem] text-ui-primary sm:text-[0.75rem]">
        Scroll Down to
      </div>
      <button
        id="start"
        ref={buttonRef}
        onClick={clickHandler}
        className={`cursor-pointer
			pointer-events-none
			 font-jostvar font-semibold text-[3rem] tracking-[0.2rem] bg-transparent border-transparent norder-solid text-ui-primary opacity-0 transition-all duration-500 ease-in-out hover:text-primary
			bg-gradient-to-b from-primary from-0% to-50% ${Math.floor(scroll.y%100)}% to-ui-primary to-100% text-transparent bg-clip-text`}
		  >
        EXPLORE
      </button>
		</div>
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
