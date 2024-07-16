function changeVideo(button, videoUrl, title) {
    document.querySelectorAll('.select-video').forEach(function(btn) {
        btn.classList.remove('active');
    });

    button.classList.add('active');

    var videoContainer = document.querySelector('.video-container');

    videoContainer.innerHTML = `
        <div class="video-playlist">
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
            <h2>${title}</h2>
        </div>
    `;
}
// Function to change the video being played
function changeVideo(button, videoUrl, videoTitle) {
    // Find the iframe element
    const iframe = document.querySelector('.video-container iframe');
    
    // Update the iframe's src attribute to the new video URL
    iframe.src = videoUrl;

    // Update the video title (optional)
    const videoTitleElement = document.querySelector('.video-container h2');
    videoTitleElement.textContent = videoTitle;

    // Update button styles
    const buttons = document.querySelectorAll('.playlist-selector button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
