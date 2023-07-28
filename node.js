const videoList = document.getElementById('videoList');
const videoPlayer = document.getElementById('videoPlayer');

// Add event listener to each video item in the list
videoList.addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === 'LI') {
    const videoUrl = target.getAttribute('data-video');
    videoPlayer.setAttribute('src', videoUrl);
  }
});
