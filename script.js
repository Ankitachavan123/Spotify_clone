console.log("Welcome to Spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dil Dhadkne do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]

//audioElement.play();


//handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0)
  {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  }
  else
  {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
  }
})
//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
})