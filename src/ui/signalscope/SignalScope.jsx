import { useRef, useEffect, useMemo } from "react";
import { useSongStore, useSoundStore } from "../../States";
import { analyser } from "../../globals/sound";
import "./signalscope.scss";
import useAudio from "../audio-controls/useAudio";

function SignalScope() {
    const canvasRef = useRef(null);
    const bufferLen = analyser.frequencyBinCount;
    const dataArray = useMemo(() => new Uint8Array(bufferLen), []);
    useAudio();

    // draw method for canvas
    const draw = (ctx) => {
        analyser.getByteTimeDomainData(dataArray);

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = "#7FD0D1";
        ctx.lineWidth = 2;
        ctx.beginPath();

		const reducedBufferLen = Math.floor(bufferLen / 8);
        const sliceWidth = ctx.canvas.width / reducedBufferLen;
        let x = 0;
        for (let i = 0; i < reducedBufferLen; i++) {
			const avgV = ((dataArray[2 * i] + dataArray[2 * i + 1] +
dataArray[2 * i + 2] + dataArray[2 * i + 3] +
dataArray[2 * i + 4] + dataArray[2 * i + 5] +
dataArray[2 * i + 6] + dataArray[2 * i + 7]
			) / 8) * (10 / 128.0) - 9.0;
            const y = (avgV * ctx.canvas.height) / 2;
            ctx.moveTo(x, ctx.canvas.height/2);
			ctx.lineTo(x, ctx.canvas.height - y);

            x += sliceWidth;
        }

        // ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
        ctx.stroke();
    };

    // useEffect for animation loop in canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.canvas.height = 30;
        let animationFrameId;

        const render = () => {
            draw(context);
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    // const handleResize = (context) => {
    //     context.canvas.height = window.innerWidth / 32;
    // };

    // // resize canvas event listener
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext("2d");
    //     window.addEventListener("resize", () => handleResize(context));

    //     return () => {
    //         window.removeEventListener("resize", () => handleResize(context));
    //     };
    // }, []);

    return <canvas className="signalscope" ref={canvasRef}></canvas>;
}

export default SignalScope;
