// Fetching custom Attribrute
const inputSlider = document.querySelector("[data-lengthslider]"); 
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[dataPasswordDisplay]");
// const copyBtn = document.querySelector("[data-CopyMsg]");
const copyBtn = document.getElementById("Ab")
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
// All elements which have input type as checkbox will be fetched
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "~`!@#$%^&*()_-+={}[];?<>\|"

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength circle color to grey

// Set password length on the    II
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // or kuch bhi karna chaiye?

    // handleSlider wala function password length ko UI par update karata he.
}

//  Set color-shadow of the Indicator
function setIndicator(color){
 indicator.style.backgroundColor = color;
 indicator.style.boxShadow = color;
}

// To generate random Integer

function getRndInt(min,max){
return Math.floor(Math.random() * (max-min)) + min  
// Math.random generates a random number between 0 and 1 for eg (0.45) then we have min number -1 and max number -9
// so when we multiply bot of these number we get for eg (0.45*8)=3.2 then we apply floor method and we get
// result as round of 3, after then for the result to come into the given range we add the
// given number with min so that the answer comes into the range of min and max.
}

function generateRandomNumber(){ 
    return getRndInt(0,9);
}

function generateLowerCase(){
    return String.fromCharCode( getRndInt(97,123)); // String.fromCharCode method converts number to characters 
    //  97 is lowercase ASCII value of a
    //  123 is lowercase ASCII value of z
 
}

function generateUpperCase(){
 return  String.fromCharCode(getRndInt(65,91));
     //  65 is uppercase ASCII value of A
     //  91 is uppercase ASCII value of Z
}

function generateSymbol(){
 const randNum = getRndInt(0,symbols.length);
 return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true
    if (lowercaseCheck.checked) hasLower = true
    if (numbersCheck.checked) hasNum = true
    if (symbolsCheck.checked) hasSym = true

    if (hasUpper && hasLower && (hasNum|| hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength>= 6 
    ){
        setIndicator("#ff0")
    } else{
        setIndicator("#f00")
    }

}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copyBtn.innerText ="copied";

    }
    catch(e){
        copyBtn.innerText = "failed"
    }
    // To make copy button visible
    copyBtn.classList.add("active")

    setTimeout(function(){
        copyBtn.classList.remove("active");

    },2000);
}

function handleCheckBoxChange(){
    checkCount = 0
    allCheckBox.forEach((checkbox) =>{
        if(checkbox.checked)
        checkCount++
    })
} 

//  Shuffle password function

function shufflePassword(array){
    // Fischer Yates method
    for(let i = array.length-1; i>0 ; i--){
        const j = Math.floor(Math.random()* (i +1));
        const temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
    let str = ""
    array.forEach((el) => (str += el));
    return str;
}

// Special condition
if(passwordLength<checkCount){
    passwordLength = checkCount;
    handleSlider();
    }


allCheckBox.forEach(function(checkbox){
    checkbox.addEventListener("change", handleCheckBoxChange)
})

inputSlider.addEventListener("input", function(e){
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener("click", function(){
    if(passwordDisplay.value)
    console.log("copied")
    copyContent()
})

//  We are going to apply a listner to track how many checkboxes are tricked and how many not
// Atleast one checkbox needs to be clicked for the button to be clicked generate password
generateBtn.addEventListener("click", function(){
//  none of the checkbox are selected
    if(checkCount<=0) return;
    if(passwordLength< checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // lets start the journey of new password

    // remove old password
    password = ""
    // console.log("Starting The journey")
    //  let's put the stuff mentioned by checkboxes
    // if (uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if (lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }

    // if (numbersCheck.checked){
    //     password += generateRandomNumber();
    // }

    // if (symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = []

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase)

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase)

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber)
    
    if(symbolsCheck.checked)
        funcArr.push(generateSymbol)

    // Compulsary addition
    for(let i =0 ; i<funcArr.length; i++){
        password += funcArr[i]();
    }
    // console.log("Compulsary addition done")


    //  remaining addition
    for(let i = 0; i<passwordLength-funcArr.length; i ++){
      let randIndex = getRndInt(0,funcArr.length);
      password += funcArr[randIndex](); 
      
    }
    // console.log("Remaining addition done")


    //  Shuffle the password
    password = shufflePassword(Array.from(password));
    // console.log("Shuffling done")


    // Show in UI

    passwordDisplay.value = password;
    // console.log("UI addition done")


    // Calculate Strength
    calcStrength();  

});
