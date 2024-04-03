document.addEventListener('DOMContentLoaded', function() {


var boxcolor = document.getElementById('color-box')
console.log('boxcolor ',boxcolor )
var button = document.getElementById('change-color-btn')
console.log('button ',button)







function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');
    return color;
  }
  button.addEventListener('click',function(){
    var randomC=getRandomColor()
    boxcolor.style.background=randomC;

  })
  
})
