var circleSlider = document.querySelector("button");
var body = document.querySelector("body");
var a = document.getElementsByClassName("aA");
var b = document.getElementsByClassName("b");
var c = document.getElementsByClassName("c");
var d = document.getElementsByClassName("d");
var e = document.getElementsByClassName("e");
var f = document.getElementsByClassName("f");
var g = document.getElementsByClassName("g");
var h = document.getElementsByClassName("h");
var i = document.getElementsByClassName("i");
var j = document.getElementsByClassName("j");
var k = document.getElementsByClassName("k");
var l = document.getElementsByClassName("l");
var x = document.getElementsByClassName("x");
var n = document.getElementsByClassName("n");
var head = document.getElementsByClassName("head");
var circle = document.getElementsByClassName("circle");

var count_clicks = 0;
function darkmode(){
		count_clicks++
			body.style.backgroundImage = "linear-gradient(to bottom, hsl(232, 19%, 15%) 10%, hsl(230, 17%, 14%) 10%)"; 
			body.style.color = "white";
		a[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		b[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		c[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		d[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		e[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		f[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		g[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		h[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		i[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		j[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		k[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		l[0].style.backgroundColor = "hsl(228, 28%, 20%)";
		x[0].style.color = "hsl(0, 0%, 100%)";
		x[1].style.color = "hsl(0, 0%, 100%)";
		x[2].style.color = "hsl(0, 0%, 100%)";
		x[3].style.color = "hsl(0, 0%, 100%)";
		n[0].style.color = "hsl(0, 0%, 100%)";
			   n[1].style.color = "hsl(0, 0%, 100%)";
			   n[2].style.color = "hsl(0, 0%, 100%)";
			   n[3].style.color = "hsl(0, 0%, 100%)";
			   n[4].style.color = "hsl(0, 0%, 100%)";
			   n[5].style.color = "hsl(0, 0%, 100%)";
			   n[6].style.color = "hsl(0, 0%, 100%)";
			   n[7].style.color = "hsl(0, 0%, 100%)";
		circle[0].style.left = "23px";
		head[0].style.color = "hsl(0, 0%, 100%)";
		circleSlider.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
 //for(var i = 0; i<x.length; i++){ x[i].style.color= "white";}
		
			if (count_clicks%2 == 0){
					body.style.backgroundImage = "linear-gradient(hsl(225, 100%, 98%) 40%, hsl(0, 0%, 100%))";
			   body.style.color = "black";
			   a[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   b[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   c[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   d[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   e[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   f[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   g[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   h[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   i[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   j[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   k[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   l[0].style.backgroundColor = "hsl(227, 47%, 96%)";
			   x[0].style.color = "hsl(230, 17%, 14%)";
			   x[1].style.color = "hsl(230, 17%, 14%)";
			   x[2].style.color = "hsl(230, 17%, 14%)";
			   x[3].style.color = "hsl(230, 17%, 14%)";
			   n[0].style.color = "hsl(230, 17%, 14%)";
			   n[1].style.color = "hsl(230, 17%, 14%)";
			   n[2].style.color = "hsl(230, 17%, 14%)";
			   n[3].style.color = "hsl(230, 17%, 14%)";
			   n[4].style.color = "hsl(230, 17%, 14%)";
			   n[5].style.color = "hsl(230, 17%, 14%)";
			   n[6].style.color = "hsl(230, 17%, 14%)";
			   n[7].style.color = "hsl(230, 17%, 14%)";
			   circle[0].style.left = "3px";
			   head[0].style.color = "hsl(230, 17%, 14%)"; circleSlider.style.backgroundColor= "hsl(230, 22%, 74%)";
		circleSlider.style.backgroundImage= "none";   
					}
				}  
circleSlider.addEventListener("click", 	darkmode, false);
  
	
		
		
		
		
