
//Obsługa zegarów
function stylech(){
	if (document.getElementById("styler").className=="1"){document.getElementById("clockbg").style.backgroundImage="url(./clock/image/clockbg2.png)";document.getElementById("styler").className="2"}
	else{
		if (document.getElementById("styler").className=="2"){document.getElementById("clockbg").style.backgroundImage="url(./clock/image/clockbg.png)";document.getElementById("styler").className="1"};
	};
};
function stylechkbx(){
	if (document.getElementById("scon").checked){document.getElementById("s").style.visibility = "visible"}
	else{document.getElementById("s").style.visibility = "hidden"};
};
window.setInterval(function() {
	let mins = new Date().getMinutes();
	let hrs = new Date().getHours();
	document.getElementById("min").style.transform = 'translateY(0%) rotate(' + (mins*(360/60)) + 'deg)';
	document.getElementById("hr").style.transform = 'translateY(-216px) rotate(' + ((hrs *(360 /12)) + (mins*(30/60))) + 'deg)';
	if (mins<10){mins="0" + mins;}
}, 100);
window.setInterval(function() {
	let sec = new Date().getSeconds();
	let mili = new Date().getMilliseconds();
	document.getElementById("s").style.transform = 'translateY(-430px) rotate(' + ((sec *(360 / 60)) + (mili*((360 / 60)/1000))) + 'deg)';
}, 5);