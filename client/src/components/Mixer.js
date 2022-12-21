import { useState } from 'react';
import * as Tone from 'tone'
import KeyRow from './KeyRow';

function Mixer() {
    const [synthState, setSynthState] = useState("Synth")
    const [songForm, setSongForm] = useState({
        title: "",
        lyrics: ""
    })

    function handleChange(e) {
        const { name, value } = e.target

        setSongForm({ ...songForm, [name]: value })
    }

    const synth = new Tone.PolySynth(Tone[synthState]).toDestination();

    let seq

    function playSound() {
        const notesToPlay = [col1, col2, col3, col4, col5, col6, col7, col8]
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

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Save Button")

        const recorder = new Tone.Recorder()
        synth.connect(recorder)
        recorder.start()
        playSound()

        setTimeout(async () => {
            // the recorded audio is returned as a blob
            stopSound()
            const recording = await recorder.stop();
            console.log(recording)

            // fetch('/songs',{
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         music: recording,
            //         title: songForm.title,
            //         lyrics: songForm.lyrics
            //     })
            // })
            // .then(res => {
            //     if(res.ok){
            //         res.jons().then(data => console.log(data))
            //     }else{
            //         res.json().then(data => console.log(data, "smt went wrong"))
            //     }
            // })
            
            // download the recording by creating an anchor element and blob url
            // const url = URL.createObjectURL(recording);
            // console.log(url)
            // const anchor = document.createElement("a");
            // anchor.download = "recording.webm";
            // anchor.href = url;
            // anchor.click();
        }, 4000);

    }

    const notes = ['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4']

    const col1 = []
    const col2 = []
    const col3 = []
    const col4 = []
    const col5 = []
    const col6 = []
    const col7 = []
    const col8 = []

    function addSound(e) {
        const note = e.target.value.split(', ')
        if (note[1] === '1') {
            col1.push(note[0])
        }
        else if (note[1] === '2') {
            col2.push(note[0])
        }
        else if (note[1] === '3') {
            col3.push(note[0])
        }
        else if (note[1] === '4') {
            col4.push(note[0])
        }
        else if (note[1] === '5') {
            col5.push(note[0])
        }
        else if (note[1] === '6') {
            col6.push(note[0])
        }
        else if (note[1] === '7') {
            col7.push(note[0])
        }
        else if (note[1] === '8') {
            col8.push(note[0])
        }
    }

    function removeOneNote(col, note) {
        for (let i = 0; i < col.length; i++) {
            if (col[i] === note) {
                col.splice(i, 1);
            }
        }
    }

    function removeSound(e) {
        const note = e.target.value.split(', ')
        if (note[1] === '1') {
            removeOneNote(col1, note[0])
        }
        else if (note[1] === '2') {
            removeOneNote(col2, note[0])

        }
        else if (note[1] === '3') {
            removeOneNote(col3, note[0])

        }
        else if (note[1] === '4') {
            removeOneNote(col4, note[0])

        }
        else if (note[1] === '5') {
            removeOneNote(col5, note[0])

        }
        else if (note[1] === '6') {
            removeOneNote(col6, note[0])

        }
        else if (note[1] === '7') {
            removeOneNote(col7, note[0])

        }
        else if (note[1] === '8') {
            removeOneNote(col8, note[0])
        }
    }


    const renderAllKeys = notes.map((note) => {
        return (
            <div key={note} className='keyboard'>
                <p><strong>{note}</strong></p>
                <KeyRow note={note} addSound={addSound} removeSound={removeSound} />
            </div>
        )
    })

    function synthChange(e) {
        setSynthState(e.target.value)
    }

    return (
        <>
            <br />
            <button onClick={playSound}>Play</button>
            <button onClick={stopSound}>Stop</button>
            <button onClick={handleSubmit}>Save</button>
            <select onChange={synthChange}>
                <option value="Synth">Synth</option>
                <option value="MembraneSynth">MembraneSynth</option>
                <option value="AMSynth">AMSynth</option>
                <option value="FMSynth">FMSynth</option>
                <option value="MetalSynth">MetalSynth</option>
            </select>
            <div className='keyboard_container'>
                <div className='keyboard'>
                    <h4></h4>
                    <h4>1</h4>
                    <h4>2</h4>
                    <h4>3</h4>
                    <h4>4</h4>
                    <h4>5</h4>
                    <h4>6</h4>
                    <h4>7</h4>
                    <h4>8</h4>
                </div>
                {renderAllKeys}
            </div>
            <form>
                <input
                    type="text"
                    name='title'
                    placeholder='Enter a Title'
                    onChange={handleChange}
                />
                <br />
                <textarea
                    rows="20"
                    cols="60"
                    name='lyrics'
                    placeholder='Enter Your Lyrics Here...'
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleSubmit}>Save</button>
        </>
    )
};

export default Mixer