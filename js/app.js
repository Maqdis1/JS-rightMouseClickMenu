
const box = document.querySelector(".table");

window.addEventListener("contextmenu", (event) => {
	event.preventDefault();
	box.style.left = event.clientX + "px";
	box.style.top = event.clientY + "px";
	box.style.visibility = "visible";
	setTimeout(() => {
	box.style.visibility = "hidden";
	}, 3000);
});

function red(){ 
	document.body.style.background = "red";
	};
function green(){ 
	document.body.style.background = "green";
	};
function blue(){ 
	document.body.style.background = "blue";
	};
