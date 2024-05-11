function playVideo() {
            var img = document.querySelector('img');
            var video = document.getElementById('video');

            img.style.display = 'none';
            video.style.display = 'block';
            video.play();
        }