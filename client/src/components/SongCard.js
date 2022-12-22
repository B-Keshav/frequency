import * as Tone from 'tone'

function SongCard({ song }) {
    console.log(song)
    const { title, col1, col2, col3, col4, col5, col6, col7, col8} = song
    const synth = new Tone.PolySynth(Tone[song.synth]).toDestination();

    let seq

    const col1Spl = col1.split(",")  
    const col2Spl = col2.split(",")  
    const col3Spl = col3.split(",")  
    const col4Spl = col4.split(",")  
    const col5Spl = col5.split(",")  
    const col6Spl = col6.split(",")  
    const col7Spl = col7.split(",")  
    const col8Spl = col8.split(",")  

    function playSound() {
        const notesToPlay = [col1Spl, col2Spl, col3Spl, col4Spl, col5Spl, col6Spl, col7Spl, col8Spl]
        Tone.Transport.bpm.value = 120
        seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 1.0, time)
        },
            notesToPlay,
            "8n"
        )
        seq.start()
        Tone.Transport.start()
    }

    function stopSound() {
        seq.stop()
        Tone.Transport.stop()
    }

    return (
        <div>
            <h4>a song</h4>
            <h4>{title}</h4>
            <button onClick={playSound}>Play</button>
            <button onClick={stopSound}>Stop</button>
        </div>
    )
}

export default SongCard