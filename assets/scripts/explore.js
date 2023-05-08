// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");
  const talk = document.querySelector("button");
  const textToSpeak = document.getElementById("text-to-speak");
  const smile = document.querySelector("img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talk.addEventListener('click', () => {
    const toSpeak = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
    const voices = synth.getVoices();
    const chosenVoice = voices.find((voice) => voice.name === selectedVoice);
    toSpeak.voice = chosenVoice;
  
    synth.speak(toSpeak);
    
    toSpeak.addEventListener('start', () => {
      smile.src = "assets/images/smiling-open.png";
    });

    toSpeak.addEventListener('end', () => {
      smile.src = "assets/images/smiling.png";
    });
  });
}