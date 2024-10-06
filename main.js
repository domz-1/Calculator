
let display =  document.querySelector("p.screen-text");

function clacAll(){
    try{
        display.innerText = eval(display.innerText)
    }catch{
        display.innerText = "Error"
    }
}


function addTodisplay(input) {
    display.innerText += input;
}

function clearAll() {
    let displayc = document.querySelector("p.screen-text");
    displayc.innerText = "";
}