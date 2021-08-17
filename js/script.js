let scr = document.getElementById("sc");
let previousOperator = "0";
let previousNumber = 0;
document.querySelector('.container').addEventListener('click',function(event){
    if(isNaN(parseInt(event.target.innerText))){
        handleSymbol(event.target.innerText);
    }
    else{
        handleNumber(event.target.innerText);
    }
});
function handleNumber(value){
    if(scr.innerHTML === "0"){
        scr.innerHTML = value;
    }
    else{
        scr.innerHTML += value;
    }
}
function handleSymbol(value){
    if(value === 'C'){
        scr.innerHTML = "";
        previousNumber = 0;
        previousOperator = "0";
    }
    else if(value === "bs"){
        let s = scr.innerHTML;
        s = s.substring(0 , s.length - 1);
        scr.innerHTML = s;
    }
    else if(value === '='){
        if(previousOperator === '0'){
            previousNumber = parseInt(scr.innerHTML);
            scr.innerHTML = previousNumber;
            previousOperator = '0';
        }
        else{
            doOperation();
            scr.innerHTML = previousNumber;
            previousOperator = '0';
        }
    }
    else{
        if(previousOperator === '0'){
            previousOperator = value;
            previousNumber = parseInt(scr.innerHTML);
            scr.innerHTML = "";
        }
        else{
            doOperation();
            previousOperator = value;
            scr.innerHTML = "";
        }
    }
}
function doOperation(){
    if(previousOperator === '-'){
        previousNumber -= parseInt(scr.innerHTML);
    }
    else if(previousOperator === '+'){
        previousNumber += parseInt(scr.innerHTML);
    }
    else if(previousOperator === '*'){
        previousNumber *= parseInt(scr.innerHTML);
    }
    else {
        previousNumber /= parseInt(scr.innerHTML);
    }
}