document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const muteToggle = document.getElementById('mute-toggle');
    const volumeDown = document.getElementById('volume-down');
    const volumeUp = document.getElementById('volume-up');

    muteToggle.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteToggle.textContent = 'Mute';
        } else {
            video.muted = true;
            muteToggle.textContent = 'Unmute';
        }
    });

    volumeDown.addEventListener('click', () => {
        video.volume = Math.max(0, video.volume - 0.1);
    });

    volumeUp.addEventListener('click', () => {
        video.volume = Math.min(1, video.volume + 0.1);
    });
});
