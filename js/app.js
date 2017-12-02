//console.log("aohasdfhhdfiosfadsiho")
function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

function allowDrop(ev){
	ev.preventDefault();
}

function drop(ev) {
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
}

var gift1 = document.getElementById('other2');
var gift2 = document.getElementById('other3');
var gift3 = document.getElementById('other4');

gift1.addEventListener('click', function(){
	gift1.src = 'assets/ultramoon.jpg'
})
gift2.addEventListener('click', function(){
	gift2.src = 'assets/amazongiftcard.png'
})
gift3.addEventListener('click', function(){
	gift3.src = 'assets/pandacape.png'
})

var counter = 12;
var buttonThing = document.getElementById('buttonThing');
var ornamentContainer = document.getElementById('ornament-container');

var pink = document.getElementById('ornament1');
var red = document.getElementById('ornament2');
var orange = document.getElementById('ornament3');
var yellow = document.getElementById('ornament4');
var green = document.getElementById('ornament5');
var blue = document.getElementById('ornament6');
var darkblue = document.getElementById('ornament7');
var darkpurple = document.getElementById('ornament8');
var purple = document.getElementById('ornament9');
var white = document.getElementById('ornament10');
var black = document.getElementById('ornament11');

var ornament = [pink, red, orange, yellow, green, blue, darkblue, darkpurple, purple, white, black];

buttonThing.addEventListener('click', function(){
	var num = Math.floor(Math.random() * ornament.length)
	var img = document.createElement("img");
	img.setAttribute('src', ornament[num].src);
	img.setAttribute('id', 'ornament' + counter);
	img.setAttribute('class', 'ornament');
	img.setAttribute('draggable', 'true');
	img.setAttribute('ondragstart', 'drag(event)');
	ornamentContainer.appendChild(img);
	counter++;
})