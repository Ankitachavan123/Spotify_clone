console.log("Welcome to Spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Am I going crazy or you - Jorj", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Get me to the moon - Justin", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Friends never lie ! - Arina", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hard to forget - Maze", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "I will be yours Forever - Joe", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "And last summer - Salina", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Memories got you back - Tom", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Hey, you konw that? - Lisa", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
]

songItem.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].src = songs[i].songName;
})

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <= 0)
  {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else
  {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);    //This formula is for calculating the percentage to show it in progress bar
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEacg((element)=>{
    element.target.classList.add('fa-pause-circle');
    element.target.classList.add('fa-play-circle');
  })
}


document.getElementsByClassName('songItemPlay').forEach(()=>{
  element.addEventListener('click', (e)=>{          //call back function called 
  //  console.log(e.target);                          //e.target will give element which has click on it
    makeAllPlays();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
  })
})