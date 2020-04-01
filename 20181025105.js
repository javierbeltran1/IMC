

function calcular(){

    let x=0;
    let P=document.getElementById('peso').value;
    let E=document.getElementById('estatura').value;
    x=P/(E*E);
    document.getElementById('resultado').innerHTML = x;

}
