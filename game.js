const cube = document.getElementById("cube");

const result = document.getElementById("result");

const but = document.getElementById("but");
let hod = 1;
let hody = [];
let timer = false;



but.addEventListener("click",function(){
    if(!timer) {
        timer = setInterval(animace, 100);
        but.innerText = "STOP";
    } else {
        clearInterval(timer);
        timer = false;
        but.innerText = "HÁZEJ";
         hody.push(hod);
        vypis();
    }
})


function animace() {
     hod = Math.ceil(Math.random() * 6);
     cube.src = "img/k" + hod + ".png"; 
}

function suma() {
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function max() {
    let max = 1;
    hody.forEach(function(value, index){
        if(value > max) max = value;
    })
    return max;
}
function min() {
    let min = 6;
    hody.forEach(function(value, index){
        if(value < min) min = value;
    })
    return min;
}

function vypis() {
    result.innerHTML = `<p>Last throw: ${hod}</p>`;
    result.innerHTML += `<p>Number of throws: ${hody.length}</p>`;
    result.innerHTML += `<p>Total: ${suma()}</p>`;
    result.innerHTML += `<p>Average: ${(suma() / hody.length).toFixed(2)}</p>`;
    result.innerHTML += `<p>Max: ${max()}</p>`;
    result.innerHTML += `<p>Min: ${min()}</p>`;
}