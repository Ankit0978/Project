// console.log("Aur kya haal chaal")

// const API_KEY = "292b0abf6a62f47774e65aa926a4013d"

// // async function showWeather(){

// //     try{
// // // let latitude = 15.3333;
// //     // let longitude = 74.0833;
// //     let city = "Dehradun";

// // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
// // const data = await response.json();
// // console.log("Weather data:->" , data);

// // let newPara = document.createElement("p");
// // newPara.textContent = `${data?.main?.temp.toFixed(2)} *C`
// // document.body.appendChild(newPara)

// // renderWeather(data)
// //     }

// //     catch(err) {

// //     }
// // }

// // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}


// async function getCustomWeatherDeatils(){
//     try{
//         let latitude = 17.6333;
//         let longitude = 18.3333;

//         let response1 = await fetch(` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
//         let data2 = await response1.json();
//         console.log( data2);
//     }



// catch(er){
//  console.log("Error found" , er)
//     }
// }

// // To get the latitude and logitude using current GeoLocation

// function geoLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         console.log("No geo Location Found")
//     }
// }

// function showPosition(position){

//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;

//     console.log(lat);
//     console.log(long);
// }

const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")
const weatherInfo = document.querySelector(".weather-container")
const grantCon = document.querySelector(".grant-location-container")
const formCon = document.querySelector("[data-searchForm]")
const loadCon = document.querySelector(".loading-container")
const userInfo = document.querySelector(".user-info-container")
const paraCon = document.querySelector(".parameter-container")

// Initial- Variables Need

let oldTab = userTab;
// const API_KEY = "292b0abf6a62f47774e65aa926a4013d";
const API_KEY= "c41adc9771134d7eb50153506240401"
oldTab.classList.add("current-tab")

getfromSessionStorage();

// Ek kaam or pending he
//  If curent tab and new tab are different then only we switch
function switchTab(newTab){
    if(newTab != oldTab){ 
        // If old tab and new tab are not equal then we switch the background color
        oldTab.classList.remove("current-tab");
        // isme se humne bg-color hataya
        oldTab = newTab;
        // phir new wale tab mein background color add kar diya.
        oldTab.classList.add("current-tab")

//  If any tab is visible on the screen so that we can tell that active wali class is present inside it
        if(!formCon.classList. container("active")){
            //  kya search form wala container is invisible then usko visible karte hein
            userInfo.classList.remove("active");
            grantCon.classList.remove("active")
            formCon.classList.add("active")
        }
        else{
//  mein pehle search weather wale tab par tha, ab your weather tab visible karna he.
            formCon.classList.remove("active")
            userInfo.classList.remove("active")
// ab mein your weather tab mein aa gya hun, to weather bi display karna hoga, so lets check local storage first
// for coordinates, if we have saved them there
            getfromSessionStorage();
// If coordinates are present inside this session locally then only this function can generate weather on its own, so for that we need to create a function

        }
    }

}

//  basically jis bi tab ko humlog click karte hein use hum switchTab wale function mein pass kar dete hein

userTab.addEventListener("click" , () =>{
    // Pass clicked tab as input Parameter

    switchTab(userTab) 
})

searchTab.addEventListener("click", () =>{
    switchTab(searchTab)
})

//  Checks if coordinates are present in the session storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // agar local coordinates nahi mile
        grantCon.classList.add("active")
        // searchTab.classList.add("remove")
        // userInfo.classList.add("remove")
        // agar local coordinates present hein toh
    }
        else{
            const coordinates = JSON.parse(localCoordinates);
            fetchUserWeatherInfo(coordinates);

        
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat,long} = coordinates;
    // make grant container invisible
    grantCon.classList.remove("active")
    // make loader container visible
    loadCon.classList.add("active")

    // API CAll
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        const data = await response.json()

        loadCon.classList.remove("active")
        userInfo.classList.add("active")

        renderWeatherinfo(data);
    }
    catch(err){
        loadCon.classList.remove("active")
        // HW
    }
    
} 

function renderWeatherinfo(weatherInfo){
//  Firstly we have to fetch the elements

const cityName = document.querySelector("[data-cityName]")
const countryIcon = document.querySelector("[data-countryIcon]")
const Description = document.querySelector("[data-weatherDesc]")
const weatherIcon = document.querySelector("[data-weatherIcon]")
const temp = document.querySelector("[data-temp]")
const windspeed = document.querySelector("[data-windspeed]")
const humidity = document.querySelector("[data-humidity]")
const cloudiness = document.querySelector("[data-cloudiness]")


// fetch values from weatherInfo object and put in Ui elements

cityName.innerText = weatherInfo?.name;
countryIcon.src = `https://flagcdn.com/144*108/${weatherInfo?.sys?.countryIcon.toLowercase()}.png`;
Description.innerText = weatherInfo?.weather?.[0]?.Description;
weatherIcon.innerText = `htts://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
temp.innerText = weatherInfo?.main?.temp;
windspeed.innerText = weatherInfo?.wind?.speed;
humidity.innerText = weatherInfo?.main?.humidity;
cloudiness.innerText = weatherInfo?.clouds?.all;

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // H.w - show an alert for no geolocation support available
        alert("No such geolocation exists")
    }
}

function showPosition(position){

    const userCoordinates = {
         lat : position.coords.latitude,
         long : position.coords.longitude
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const grantAccessButton = document.querySelector("[data-grantAccess]")
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]")
formCon.addEventListener("submit", (e) =>{
e.preventDefault();
let cityName = searchInput.arialValueMax;

if(cityName ==="")
    return;
    else
    fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city){
    loadCon.classList.add("active")
    userInfo.classList.remove("active")
    grantCon.classList.remove("active")

    try{
        const response = await fetch(``);
        const data = await response.json();
        console.log(data)
        loadCon.classList.remove("remove")
        grantCon.classList.add("active");

    }
    catch(err){
        console.log("This is error",err.message)
        alert("this city doesnot exist")
    }
    

}


(function(){

})