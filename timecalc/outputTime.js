const sliderStartTime = document.getElementById('startTime'); //input time
const sliderHours = document.getElementById('addTime'); //input hours to add or sub
const checkYN = document.getElementById('subYN'); //checkbox true or false
const output = document.getElementById('output'); //output
const outputHours = document.getElementById("outputHours");

let startTime;
let hours;
let temp;
let checkYNvar;

checkYN,addEventListener("input", (e)=>{
    checkYNvar = document.getElementById('subYN');
    outputTiempo();
})

sliderStartTime.addEventListener("input", (e)=>{
    startTime = parseInt(sliderStartTime.value);
    outputTiempo();
})
sliderHours.addEventListener("input", (e)=>{
    hours = parseInt(sliderHours.value);
    outputTiempo();
})

function outputTiempo(){
    outputHours.innerHTML = ":00";
    if(checkYN.checked){
        temp = startTime - hours;
    }else if(checkYN.checked === false){
        temp = startTime + hours;
    }

    if(temp>24){
        temp = temp - 24;
        outputHours.innerHTML = ":00 (+1d)";
    }else if(temp<0){
        temp = temp + 24;
        outputHours.innerHTML = ":00 (-1d)";
    }
    output.innerText = temp;
}

function loading(){
    startTime = parseInt(sliderStartTime.value);
    hours = parseInt(sliderHours.value);
    outputTiempo();
}