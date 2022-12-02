// script of spotify

// Initialize the variables

let audioElement = new Audio('songs/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('song-item'));

let songs = [
    { songName: "NCS-1", filePath: "songs/1.mp3", coverPath: "image/covers/1.jpg" },
    { songName: "NCS-2", filePath: "songs/2.mp3", coverPath: "image/covers/2.jpg" },
    { songName: "NCS-3", filePath: "songs/3.mp3", coverPath: "image/covers/3.jpg" },
    { songName: "NCS-4", filePath: "songs/4.mp3", coverPath: "image/covers/4.jpg" },
    { songName: "NCS-5", filePath: "songs/5.mp3", coverPath: "image/covers/5.jpg" }
]


// assigning songs to the respective group :
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
})


// listen to event

masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }


});

// audioElement.play();

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

});

// seekbar changes

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// making all the list button play
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}




// making the play button of the list responsive
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);       
        // it gives clicked element or target element
        
        index = parseInt(e.target.id) + 1;
        
        
        
        makeAllPlays();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = 'songs/'+ index + '.mp3';
        audioElement.currentTime = 0;
        audioElement.play();        
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    })
})
