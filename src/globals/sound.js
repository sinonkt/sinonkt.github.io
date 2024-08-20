import { Howl, Howler } from "howler"

const slidingDoors = new Howl({
    src: ["sounds/SlidingDoors.ogg"],
	// sprite: {
	// 	intro: [0, 8 * 1000],
	// 	peak: [50 * 1000, 165 * 1000],
	// },
    loop: true,
    volume: 0.0,
})

const interstellar = new Howl({
    src: ["sounds/Interstellar.ogg"],
    loop: true,
    volume: 0.0,
})

const pokemon = new Howl({
    src: ["sounds/Pokemon.ogg"],
    loop: true,
    volume: 0.0,
})

export const analyser = Howler.ctx.createAnalyser()
Howler.masterGain.disconnect()
Howler.masterGain.connect(analyser)
analyser.fftSize = 2048
analyser.connect(Howler.ctx.destination)

export const songs = {
    slidingDoors: {
		artist: "Helmut Schenker",
		name: "Sliding Doors",
		sound: slidingDoors,
		thumbnail: "ui/HelmutSchenker.png"
	},
    interstellar: {
		artist: "Johari (Cover)",
		name: "Interstellar",
		sound: interstellar,
		thumbnail: "ui/Johari.png"
	},
	pokemon: {
		artist: "Qumu (Pokémon Remix)",
		name: "Jubilife City",
		sound: pokemon,
		thumbnail: "ui/Qumu.png"
	}
}

