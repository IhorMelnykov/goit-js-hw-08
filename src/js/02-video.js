import throttle from 'lodash.throttle';
  

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


player.on('timeupdate', throttle(function(data) {
    const updatedPlaybackTime = JSON.stringify(data.seconds);
    localStorage.setItem("videoplayer-current-time", updatedPlaybackTime);
}, 1000));

const stoppedTime = localStorage.getItem("videoplayer-current-time");
    
const parsedStoppedTime = JSON.parse(stoppedTime);
    
player.setCurrentTime(parsedStoppedTime).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});