const cube = document.getElementById("cube");

const result = document.getElementById("result");

const but = document.getElementById("but");
let hod = 1;
let hody = [];
let timer = false;



but.addEventListener("click",function(){
    if(!timer) {
        timer = setInterval(animace, 50);
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
    result.innerHTML = `<p>Poslední hod: ${hod}</p>`;
    result.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    result.innerHTML += `<p>Součet: ${suma()}</p>`;
    result.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
    result.innerHTML += `<p>Maximum: ${max()}</p>`;
    result.innerHTML += `<p>Minimum: ${min()}</p>`;
}