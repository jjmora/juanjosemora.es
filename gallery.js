let xPos = 0;
let newPos;

function prev(){
  if(xPos < 0){
    newPos = xPos + 220;
    xPos = newPos;
    document.getElementById("box-gallery").style.transform = "translateX("+xPos+"px)";
    // console.log(xPos);
  }

}
// Checking window width

function next(){
  var w = window.innerWidth;
  if(w<=768){
    if(xPos > -1080){
      newPos = xPos - 220;
      xPos = newPos;
      console.log(xPos);
      document.getElementById("box-gallery").style.transform = "translateX("+xPos+"px)";
    }
  } else if (w<=1200) {
    if(xPos > -680){
      newPos = xPos - 220;
      xPos = newPos;
      console.log(xPos);
      document.getElementById("box-gallery").style.transform = "translateX("+xPos+"px)";
    }
  } else {
    if(xPos > -660){
        newPos = xPos - 220;
        xPos = newPos;
        console.log(xPos);
        document.getElementById("box-gallery").style.transform = "translateX("+xPos+"px)";
        console.log(xPos);  
      }
  }



}


