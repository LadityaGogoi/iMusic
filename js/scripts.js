// Get all necessary elements from the DOM
// const playBtn = document.querySelector('#mainPlayBtn');
const playBtn = document.getElementById('mainPlaybtn');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector("#btnNext");
const trackTitle = document.querySelector('.track-title');
const artistName = document.querySelector('.artist-name');
const cover = document.querySelector('.cover');
const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');
const progress = document.querySelector('.progress');
const time = document.querySelector('.time');
const fullTime = document.querySelector('.fulltime');
const volumeSlider = document.querySelector('.volume-slider .slider');



let audio = new Audio('/music/music1.mp3');



// Global variables is the track playing
let trackPlaying = false;

// is the volume muted
let volumeMuted = false;


// Which track is currently loaded (based on the numerical id)
let trackId = 0;


// Data track names
const tracks = [
    "music1",
    "music2"
];

// artist name 
const artists = [
    "marshmellow",
    "marshmellow"
];

// Cover names
const covers = [
    "cover1",
    "cover1"
];


// Add a click event on the play button
playBtn.addEventListener('click', playTrack);

// Play Track function
function playTrack() {
    // if the audio is not playing
    if (trackPlaying === false)
    {
        // Play the audio
        audio.play();


        // add a pause icon inside the button
        playBtn.innerHTML = '<span class="material-symbols-outlined">pause</span>';

        // set the trackPlaying to true, because the track is playing now
        trackPlaying = true;
    }
    // otherwise
    else 
    {
        audio.pause();

        // add a play icon inside the button
        playBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span>';


        // Set the trackplaying to false, because the track is paused again
        trackPlaying = false;
    }
}



