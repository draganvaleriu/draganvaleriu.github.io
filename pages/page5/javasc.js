window.onscroll = function(){
 	var pos = document.documentElement.scrollTop;
 	let p1 =document.getElementById("unu").getBoundingClientRect().top + pos;
 	let p2 = document.getElementById('doi').getBoundingClientRect().top + pos ;
 	let p3 = document.getElementById('trei').getBoundingClientRect().top + pos;
 	let p4 = document.getElementById('trei_1').getBoundingClientRect().top + pos;
 	let p5 = document.getElementById('trei_2').getBoundingClientRect().top + pos;
 	let p6 = document.getElementById('trei_3').getBoundingClientRect().top + pos;
 	let p7 = document.getElementById('patru').getBoundingClientRect().top + pos;
 	let p8 = document.getElementById('cinci').getBoundingClientRect().top + pos;
 	 
 	
 	 if(pos > 0 && pos < p2-200){
 		document.getElementById("term").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("term").className = "";
 	 }
 	  if(pos >= p2- 200 && pos < p3-200){
 	 	document.getElementById("grad").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("grad").className = "";
 	 }
 	  if(pos >= p3 - 200 && pos < p4-200){
 	 	document.getElementById("reprez").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("reprez").className = "";
 	 }

 	 if(pos >= p4 - 200 && pos < p5-200){
 	 	document.getElementById("Matricea").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("Matricea").className = "";
 	 }
 	 if(pos >= p5 - 200 && pos < p6-200){
 	 	document.getElementById("muchii").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("muchii").className = "";
 	 }

 	 if(pos >= p6 - 200 && pos < p7-200){
 	 	document.getElementById("vecini").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("vecini").className = "";
 	 }
 	 if(pos >= p7 - 200 && pos < p8-200){
 	 	document.getElementById("partial").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("partial").className = "";
 	 }if(pos >= p8-200){
 	 	document.getElementById("nul").className = "AAA";
 	 }
 	 else{
 	 	document.getElementById("nul").className = "";
 	 }

 	  
 };

 function a(elem) {
  let box = elem.getBoundingClientRect();
 
    b(box.top + pageYOffset);  
}
function b(pix)
{ 
	window.scroll(0,pix);	 
}

