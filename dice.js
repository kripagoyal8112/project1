function rollthedice()
{
	let n1=Math.floor(Math.random()*6)+1;
	let n2=Math.floor(Math.random()*6)+1;
	document.querySelector(".img1").setAttribute("src","dice"+n1+".png");
	document.querySelector(".img2").setAttribute("src","dice"+n2+".png");
	if (n1==n2)
	 {
	 	document.querySelector("h1").innerHTML="its DRAW!"
	 }
	 else if(n1>n2)
	 {
	 	document.querySelector("h1").innerHTML="player 1 wins!"
	 }
    else{
    	document.querySelector("h1").innerHTML="player 2 wins!"
    }
}