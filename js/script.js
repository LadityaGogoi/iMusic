// script of spotify

// Initialize the variables

let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');


console.log("Welcome to beats");

let songs = [
    {songName: "NCS-1", filePath: "songs/1.mp3", coverPath: "image/covers/1.jpg"},
    {songName: "NCS-2", filePath: "songs/2.mp3", coverPath: "image/covers/2.jpg"},
    {songName: "NCS-3", filePath: "songs/3.mp3", coverPath: "image/covers/3.jpg"},
    {songName: "NCS-4", filePath: "songs/4.mp3", coverPath: "image/covers/4.jpg"},
    {songName: "NCS-5", filePath: "songs/5.mp3", coverPath: "image/covers/5.jpg"}
]

let audioElement = new Audio('songs/4.mp3');


// listen to event

masterPlay.addEventListener('click', ()=>
{

    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }


});

// audioElement.play();

audioElement.addEventListener('timeupdate', ()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;

});

// seekbar changes

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
