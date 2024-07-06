import beepSound from "../Assets/beep.mp3";

const audioContext = new AudioContext();

export const playBeepSound = (index) => {
    const audioSource = audioContext.createBufferSource();
    const gainNode = audioContext.createGain(); // Create a gain node

    fetch(beepSound)
        .then((response) => response.arrayBuffer())
        .then((buffer) => audioContext.decodeAudioData(buffer))
        .then((audioBuffer) => {
            audioSource.buffer = audioBuffer;
            const pitchFactor = index / 2 + 1; // Adjust pitch based on index
            audioSource.playbackRate.value = pitchFactor;

            // Adjust volume (reduce by half)
            gainNode.gain.value = 0.5; // Set gain to half of the original

            // Connect audio nodes: source -> gain -> destination
            audioSource.connect(gainNode);
            gainNode.connect(audioContext.destination);

            audioSource.start();
        })
        .catch((error) => {
            console.error("Failed to play audio:", error);
        });
};
