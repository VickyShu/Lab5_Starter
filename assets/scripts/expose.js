// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("img");
  const hornSound = document.querySelector("audio");
  const playButton = document.querySelector("button");  
  const hornVolume = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener("change", (event) => {
    if (hornSelect.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornSound.src = "assets/audio/air-horn.mp3";
    } else if (hornSelect.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornSound.src = "assets/audio/car-horn.mp3";
    } else if (hornSelect.value == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornSound.src = "assets/audio/party-horn.mp3";
    }

    playButton.addEventListener("click", (event) => {
      hornSound.play();
      if (hornSelect.value == "party-horn") {
        jsConfetti.addConfetti();
      }
    });

    hornVolume.addEventListener("input", (event) => {
      hornSound.volume = hornVolume.value / 100;
      if (hornVolume.value == 0) {
        volumeIcon.src = "assets/icons/volume-level-0.svg";
        volumeIcon.alt = "Volume Level 0";
      } else if (hornVolume.value < 33) {
        volumeIcon.src = "assets/icons/volume-level-1.svg";
        volumeIcon.alt = "Volume Level 1";
      } else if (hornVolume.value < 67) {
        volumeIcon.src = "assets/icons/volume-level-2.svg";
        volumeIcon.alt = "Volume Level 2";
      } else {
        volumeIcon.src = "assets/icons/volume-level-3.svg";
        volumeIcon.alt = "Volume Level 3";
      }
    });
  });
}