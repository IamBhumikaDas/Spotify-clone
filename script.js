console.log("welcome to spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song1.mpeg')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif= document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"))
let masterSongName = document.getElementById("masterSongName")



let songs =[
    {songName: "Dandelines", filePath : "song1.mpeg" ,coverPath:"dandelines.jpg"},
    {songName: "Perfect", filePath : "song2.mpeg" ,coverPath:"perfect.jpg"},
    {songName: "Love yourself", filePath : "song3.mpeg" ,coverPath:"love yourself.jpg"},
    {songName: "Love me like you do", filePath : "song4.mpeg" ,coverPath:"love me like you do.jpg"},
    {songName: "Thousand years", filePath : "song5.mpeg" ,coverPath:"thousand years.jpg"},
    {songName: "I love you baby", filePath : "song6.mpeg" ,coverPath:"i love you baby.jpg"},
    {songName: "Let me down Slowly", filePath : "song7.mpeg" ,coverPath:"let me.jpg"},
    {songName: "Friday Night", filePath : "song8.mpeg" ,coverPath:"friday night.jpg"},
    {songName: "I dont fucking care", filePath : "song9.mpeg" ,coverPath:"idfc.jpeg"},
    {songName: "Give me tough love", filePath : "song10.mpeg" ,coverPath:"tough.jpg"},
    {songName: "Unstoppable", filePath : "song11.mpeg" ,coverPath:"unstoppable.jpeg"}

]
songItems.forEach((element ,i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

    
});
//handle play pause click
masterPlay.addEventListener('click',()=>{
    a= document.getElementById(songIndex);
    if(audioElement.paused || audioElement.currentTime<=0){
      
       console.log(a)
       
       a.classList.remove('fa-play-circle')
       a.classList.add('fa-pause-circle')

        audioElement.play();
       
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=8;
        
        
    }
    else{
        a.classList.remove('fa-pause-circle')
        a.classList.add('fa-play-circle')
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle')
            masterPlay.classList.add('fa-play') 
            gif.style.opacity=0;


    }
})
//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})


myProgressBar.addEventListener("change",()=>{
audioElement.currentTime= (myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle')
})}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
       makeAllPlays();
       songIndex = parseInt(e.target.id)

e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle')
audioElement.src=`song${songIndex+1}.mpeg`;
masterSongName.innerHTML= songs[songIndex].songName;
gif.style.opacity=8;
console.log(songIndex)
audioElement.play();
audioElement.currentTime=0;
masterPlay.classList.remove('fa-play')
masterPlay.classList.add('fa-pause-circle');
  }
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle')
    masterPlay.classList.add('fa-play') 
    gif.style.opacity=0;
    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle')

} })

    })
document.getElementById('next').addEventListener('click',()=>{
if(songIndex==10){
    songIndex=0
    b=document.getElementById(10)
b.classList.remove('fa-pause-circle')
b.classList.add('fa-play-circle')
c=document.getElementById(songIndex)
c.classList.remove('fa-play-circle')
c.classList.add('fa-pause-circle')
}
else{
    songIndex += 1;
    b=document.getElementById(songIndex-1)
b.classList.remove('fa-pause-circle')
b.classList.add('fa-play-circle')
c=document.getElementById(songIndex)
c.classList.remove('fa-play-circle')
c.classList.add('fa-pause-circle')
}
audioElement.src=`song${songIndex+1}.mpeg`
masterSongName.innerHTML= songs[songIndex].songName;
gif.style.opacity=8;
audioElement.play();
audioElement.currentTime=0;
//masterPlay.classList.remove('fa-play-circle')
//masterPlay.classList.add('fa-pause-circle');}
})

document.getElementById('previous').addEventListener('click',()=>{
if(songIndex==0){
  songIndex=0
}
else{
  songIndex-=1;
 } 
  audioElement.src=`song${songIndex + 1}.mpeg`;
  masterSongName.innerHTML= songs[songIndex].songName;
  gif.style.opacity=8;
  audioElement.play();
  audioElement.currentTime=0;

  masterPlay.classList.add('fa-pause-circle');
  masterPlay.classList.remove('fa-play-circle');
  b=document.getElementById(songIndex+1)
b.classList.remove('fa-pause-circle')
b.classList.add('fa-play-circle')
c=document.getElementById(songIndex)
c.classList.remove('fa-play-circle')
c.classList.add('fa-pause-circle')

  

            })
