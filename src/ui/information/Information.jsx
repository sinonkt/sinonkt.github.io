import { useSongStore } from "../../States"
import { useMemo } from "react"
import "./information.scss"
import SignalScope from "../signalscope/SignalScope"
import { songs } from '../../globals/sound'

function Information() {

    const focus = useSongStore( (state) => state.focus )
	const song = songs[focus]

    return(
        <div className="info text-ui-primary">
            <div className="info__icon">
                <img src={song.thumbnail} />
            </div>
            <div className="info__text">

				<div className="gravity">
					Artist: { song.artist }
				</div>
				<SignalScope />
                <div className="name"> { song.name } </div>
            </div>
        </div>
    )
}
export default Information