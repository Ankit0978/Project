//  To get the value of a counter

let countValue = document.querySelector("#counter")

//  To decrement the value we need a function

function decrement(){
    // To get the value from UI
let value = parseInt(countValue.innerText);
//  To decrement the value
value = value -1
// To set the value again in UI
countValue.innerText = value;

}

//  To increment the value we need a function

function increment(){
        // To get the value from UI
    let value = parseInt(countValue.innerText);
    //  To increment the value
    value = value +1
    // To set the value again in UI
    countValue.innerText = value;

}