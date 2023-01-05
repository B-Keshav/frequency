import { useState } from 'react';
import * as Tone from 'tone'
import KeyRow from './KeyRow';

function Mixer() {
    const [synthState, setSynthState] = useState("Synth")
    const [title, setTitle] = useState("")

    function handleChange(e) {
        setTitle(e.target.value)
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
        
        let col1Str = col1.join()
        let col2Str = col2.join()
        let col3Str = col3.join()
        let col4Str = col4.join()
        let col5Str = col5.join()
        let col6Str = col6.join()
        let col7Str = col7.join()
        let col8Str = col8.join()
        
        fetch('/songs',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                title: title,
                synth: synthState,
                col1: col1Str,
                col2: col2Str,
                col3: col3Str,
                col4: col4Str,
                col5: col5Str,
                col6: col6Str,
                col7: col7Str,
                col8: col8Str
            })
        }).then(res => {
            if(res.ok){
                res.json().then(data => console.log(data))
            }else{
                res.json().then(errors => console.log(errors, "smt went wrong"))
            }
        })

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
            <div className='mixer_buttons'>
            <button className="button-56" onClick={playSound}>Play</button>
            <button className="button-56" onClick={stopSound}>Stop</button>
            <button className="button-56" onClick={handleSubmit}>Save</button>
            </div>
            <h3><label>Instrument: </label></h3>
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
                    value={title}
                />
            </form>
            <button className="button-56" onClick={handleSubmit}>Save</button>
        </>
    )
};

export default Mixer