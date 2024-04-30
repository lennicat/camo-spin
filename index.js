const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");
const musicPlayer = document.getElementById('player');
let isMuted;
window.onload = dialog.showModal();

closeButton.addEventListener("click", () => {
    dialog.close();
});

document.addEventListener('click', musicPlay);
function musicPlay() {
    musicPlayer.play();
    isMuted = 0;
    document.removeEventListener('click', musicPlay);
};

const muteButton = document.getElementById("mute_audio");
const icon = document.getElementById("mute_icon");
muteButton.addEventListener("click", () => {
    if (isMuted == 0) {
        musicPlayer.muted = true;
        isMuted = 1;
        icon.innerHTML = "volume_off"
    }
    else if (isMuted == 1) {
        musicPlayer.muted = false;
        isMuted = 0;
        icon.innerHTML = "volume_up"
    }
});