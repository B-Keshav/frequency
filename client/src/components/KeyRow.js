import SingleKey from "./SingleKey"

function KeyRow({ note, addSound, removeSound }) {

    const position = [1, 2, 3, 4, 5, 6, 7, 8]

    const renderRow = position.map((pos) => {
        return <SingleKey key={pos} note={note} pos={pos} addSound={addSound} removeSound={removeSound}/>
    })

    return (
        <>
            {renderRow}
        </>
    )
}

export default KeyRow