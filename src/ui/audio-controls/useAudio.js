import { useEffect } from "react";
import { songs } from "../../globals/sound";
import { useSoundStore, useSongStore} from "../../States";

function useAudio(){

    const focus = useSongStore((state) => state.focus)
    const isPlay = useSoundStore((state) => state.isPlay)
    const isMute = useSoundStore((state) => state.isMute)
    const isHarmony = useSoundStore((state) => state.isHarmony)
    const toggle = useSoundStore((state) => state.toggle)

    useEffect(() => {
        if (isPlay) {
            songs[focus].sound.play();
        }
    }, [isPlay])

    useEffect(() => {
        if( isMute ) {
            for (const planet in songs) {
                songs[planet].sound.fade(songs[planet].sound.volume(), 0, 1000)
            }
        }
    }, [isMute])

    useEffect(() => {
        if( !isMute && !isHarmony ) {
            for (const planet in songs) {
                if (planet === focus) {
                    songs[planet].sound.fade(
                        songs[planet].sound.volume(),
                        0.15,
                        1000
                    );
                } else {
                    songs[planet].sound.fade(
                        songs[planet].sound.volume(),
                        0.0,
                        1000
                    );
                }
            }
        }
    },[isMute, isHarmony, focus])

    useEffect(() => {
        if (!isMute && isHarmony) {
            for (const planet in songs) {
                if (toggle[planet]) {
                    songs[planet].sound.fade(
                        songs[planet].sound.volume(),
                        0.15,
                        1000
                    );
                } 
                else {
                    songs[planet].sound.fade(
                        songs[planet].sound.volume(),
                        0.0,
                        1000
                    );
                }
            }
        }
    }, [isHarmony, isMute, toggle])
}
export default useAudio