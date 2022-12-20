import { useState } from "react"

function SingleKey({ note, pos, addSound, removeSound }) {
    const [isClicked, setIsClicked] = useState(false)


    return (
        <>
            {isClicked ?
                <button
                    className="clicked_key"
                    // style={{ color: "white" }}
                    onClick={(e) => {
                        removeSound(e)
                        setIsClicked(!isClicked)
                    }}
                    value={`${note}, ${pos}`}
                >
                    
                </button>
                :
                <button
                    className="unclicked_key"
                    // style={{ color: "black" }}
                    onClick={(e) => {
                        // playSound(e)
                        addSound(e)
                        setIsClicked(!isClicked)
                    }}
                    value={`${note}, ${pos}`}
                >
                    
                </button>
            }
        </>
    )
}

export default SingleKey