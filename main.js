document.addEventListener("DOMContentLoaded", allWorkAndNoPlayisNoFunAtAll, false);

//Added a space in the array so the two words are seperated
var myMessage = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
//Removed the j variable
var i = 0;

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

//Assigned the audio file to a variable
var mySound = new Audio("bling.mp3");

function allWorkAndNoPlayisNoFunAtAll() {
	console.log("Get to Play!");

	//Removed the '&& (j < 300)' part of the while loop
	while (i < myMessage.length) {
		document.getElementById('hello_world').innerHTML += myMessage[i];
		//when the user clicks on the hello world text it will play the sound
		document.getElementById('hello_world').onclick = function(){
			playSoundAndMore();
		}

		//removed the two css classes on div id="content" to make the text visible
		document.getElementById('content').classList.remove("content");
		document.getElementById('content').classList.remove("invisible");

		//changed j++ to i++
		i++;
	}
}

function playSoundAndMore()
{
	//Plays the bling sound
	mySound.play();

	alert("Press OK to change the font color ☺");

	//Hello World will change to a random color
	document.getElementById('hello_world').style.color = randomColor;

	//Everything that has an h1 will change to a random color
	var a = document.getElementsByTagName("H1");
	var b;
	for (b = 0; b < a.length; b++) {
	a[b].style.color = randomColor;
	}

	//Everything that has an h2 tag will change to a random color
	var c = document.getElementsByTagName("H2");
	var d;
	for (d = 0; d < c.length; d++) {
	c[d].style.color = randomColor;
	}
}