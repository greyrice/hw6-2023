var video;

video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.loop = false
	console.log("Loop is set to false");
	video.autoplay = false
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = document.getElementById("slider").value+"%"
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slower Video");
	video.playbackRate *= 0.9;
	console.log("time is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("faster Video");
	video.playbackRate /= 0.9;
	console.log("time is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping Video");
	video.currentTime += 10;
	console.log("time is " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	
	if(video.muted == true){
		document.getElementById("mute").innerHTML = "mute"
		video.muted = false;
		console.log("unmute Video");
	}else{
		document.getElementById("mute").innerHTML = "Unmute"
		video.muted = true;
		console.log("mute Video");
	}
})

document.querySelector("#slider").addEventListener("input",function(){
	
	// video.volume = parseFloat(document.getElementById("#slider").value/100);
	volume = document.getElementById("slider").value
	video.volume = volume/100
    console.log("Current Volume: " + video.volume);
	document.getElementById("volume").innerHTML = volume+"%"
})

document.querySelector("#vintage").addEventListener("click",function(){
	
	
	video.classList.add("oldSchool")
	
})

document.querySelector("#orig").addEventListener("click",function(){
	
	video.classList.remove("oldSchool")
})