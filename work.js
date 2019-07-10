
var m=["url(images/cover1.jpg)","url(images/cover2.png)","url(images/cover3.png)","url(images/cover4.png"];
var i = 0;
function plusDivs(n) {
    i=i+n;
    if(i%4==0) i=0;
  var y = document.getElementsByClassName("layer2");
  y[0].style.backgroundImage = m[i]; 
  y[0].style.backgroundRepeat = "no-repeat"; 
  
  var y = document.getElementsByClassName("layer1");
  y[0].style.backgroundImage = m[i]; 
}
