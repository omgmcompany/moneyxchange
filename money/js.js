  document.querySelector('#btn').onclick = myCalc;
function myCalc () {
    let a = document.querySelector('#get').value;
    document.querySelector('#out').value = a*0.97;
};
