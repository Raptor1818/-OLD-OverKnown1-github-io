var sliderStart = document.getElementById("startTime");
var outputStart = document.getElementById("startValue");

var sliderAdd = document.getElementById("addTime");
var outputAdd = document.getElementById("addValue");

outputStart.innerHTML = sliderStart.value; 
sliderStart.oninput = function() {
  outputStart.innerHTML = this.value;
}

outputAdd.innerHTML = sliderAdd.value; 
sliderAdd.oninput = function() {
  outputAdd.innerHTML = this.value;
}