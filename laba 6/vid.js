var video
var duration
var nach
var volume
var timePicker

window.onload = function(){
    video = document.getElementById("video")
    duration = document.getElementById("ratio")
    volume = document.getElementById("volume")
    duration.value = 0
    duration.min = 0
    duration.max = video.duration
    timePicker = document.getElementById('timer')
}

function PlayPause(){
    if(video.paused){
        video.play()
        nach = setInterval(nachalo)
    }
    else{

        video.pause()
        clearInterval(nach)}}

function dv(){
    video.currentTime = duration.value
    PlayPause()}

function changeVolume(){
    video.volume = volume.value/100}


function FullScreen(){
    video.webkitRequestFullScreen()}

function nachalo(){
    duration.value = video.currentTime}

function clearan(){
    clearInterval(nach)
    if(video.paused){
    }
    else{
    PlayPause()}}

