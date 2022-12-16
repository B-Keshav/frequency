import * as Tone from 'tone'

function Mixer() {
    // synth.triggerAttackRelease("E4", "8n", now + 0.5)
    // synth.triggerAttackRelease("G4", "8n", now + 1)
    // const now = Tone.now()
    const synth = new Tone.MetalSynth().toDestination();

    async function playSound(e) {
        // console.log(e.target.value)
        synth.triggerAttackRelease(e.target.value, "8n")
        await Tone.start()
    }

    const keys = ['C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4'] 


    return (
        <div style={{width: "50px"}}>
            <button value='C2' onClick={playSound}>C2</button>
            <button value='C#2' onClick={playSound}>C#2</button>
            <button value='D2' onClick={playSound}>D2</button>
            <button value='D#2' onClick={playSound}>D#2</button>
            <button value='E2' onClick={playSound}>E2</button>
            <button value='F2' onClick={playSound}>F2</button>
            <button value='F#2' onClick={playSound}>F#2</button>
            <button value='G2' onClick={playSound}>G2</button>
            <button value='G#2' onClick={playSound}>G#2</button>
            <button value='A2' onClick={playSound}>A2</button>
            <button value='A#2' onClick={playSound}>A#2</button>
            <button value='B2' onClick={playSound}>B2</button>
            <button value='C3' onClick={playSound}>C3</button>
            <button value='C#3' onClick={playSound}>C#3</button>
            <button value='D3' onClick={playSound}>D3</button>
            <button value='D#3' onClick={playSound}>D#3</button>
            <button value='E3' onClick={playSound}>E3</button>
            <button value='F3' onClick={playSound}>F3</button>
            <button value='F#3' onClick={playSound}>F#3</button>
            <button value='G3' onClick={playSound}>G3</button>
            <button value='G#3' onClick={playSound}>G#3</button>
            <button value='A3' onClick={playSound}>A3</button>
            <button value='A#3' onClick={playSound}>A#3</button>
            <button value='B3' onClick={playSound}>B3</button>
            <button value='C4' onClick={playSound}>C4</button>
            <button value='C#4' onClick={playSound}>C#4</button>
            <button value='D4' onClick={playSound}>D4</button>
            <button value='D#4' onClick={playSound}>D#4</button>
            <button value='E4' onClick={playSound}>E4</button>
            <button value='F4' onClick={playSound}>F4</button>
            <button value='F#4' onClick={playSound}>F#4</button>
            <button value='G4' onClick={playSound}>G4</button>
            <button value='G#4' onClick={playSound}>G#4</button>
            <button value='A4' onClick={playSound}>A4</button>
            <button value='A#4' onClick={playSound}>A#4</button>
            <button value='B4' onClick={playSound}>B4</button>
        </div>
    )
};

export default Mixer