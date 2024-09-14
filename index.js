let A;
let B;
let C;
let delta;
let SX1;
let SX2;
let rdelta;
let X1
let X2
let dA
let Xv
let Yv
const myh2 = document.getElementById('myh2');
const myh22 = document.getElementById('myh22');
const myh23 = document.getElementById('myh23');
document.getElementById('mybutton').onclick = function(){
    A = document.getElementById("myText1").value;
    B = document.getElementById("myText2").value;
    C = document.getElementById("myText3").value; 
    dA = 2*A;
    console.log(A,B,C);
    delta = B**2-4*A*C;
    console.log(`delta é igual a ${delta}`);
    rdelta = Math.sqrt(delta);
    console.log(rdelta);
    SX1 = -B + rdelta
    SX2 = -B - rdelta
    X1 = SX1/dA
    X2 = SX2/dA
    console.log(X1,X2);
    myh2.textContent = `Delta = ${delta}`
    myh22.textContent = `X1 = ${X1}`
    myh23.textContent = `X2 = ${X2}`
    Xv = -B/2A;
    console.log(`Xv é igual ${Xv}`);
    Yv = -delta/4A
    console.log(`Yv é igual ${Yv}`);
}
