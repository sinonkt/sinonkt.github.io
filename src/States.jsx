import { useEffect } from "react";
import { create } from "zustand";
import { songs } from "./globals/sound";

export const useUIStore = create((set) => ({
    isMobile: window.innerWidth < 786,
    setMobile: (bool) => set({ isMobile: bool })
}))

export const useSongStore = create((set) => ({
    focus: 'slidingDoors',
    analyse: true,
    active: false,
    quantumObserved: false,
    setFocus: (item) => set((state) => {
		songs[state.focus].sound.fade(songs[state.focus].sound.volume(), 0, 1000)
		songs[state.focus].sound.stop()
		songs[item].sound.play()
		return ({ ...state, focus: item })
	})
}))

export const useSoundStore = create((set) => ({
    isPlay: false,
    isMute: false,
    isHarmony: false,
    toggle: { hour: false, timber: false, brittle: false, deep: false, bramble: false },

    setPlaying: () => set({ isPlay: true }),
    toggleMute: () => set((state) => ({ isMute: !state.isMute })),
    toggleHarmony: () => set((state) => ({ isHarmony: !state.isHarmony  }) ),
    toggleInstrument: (planet) => set((state) => ({ ...state, toggle: {...state.toggle, [planet]: !state.toggle[planet]}  }) ),
    
}))