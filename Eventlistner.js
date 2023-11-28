// let content = document.querySelector("#wrapper")

// content.addEventListener("click", function(event){
//     console.log(event);
// })

// let links = document.querySelectorAll("a");
// let third = links[2];

// third.addEventListener("click",function(event){

//     event.preventDefault();
//     console.log("achhi maja aayi")
// });

// Avoiding too many events
// let myDiv = document.createElement("div")

// function parastatus(event){
//     console.log("Para" + event.target.textContent)
// }
// myDiv.addEventListener("click", parastatus);

// for (let i =0; i<100 ; i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is para" + i;

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv)


// let element = document.querySelector("#wrapper")
// element.addEventListener("click", function(event){
//     if(event.target.nodeName === "SPAN"){
//     console.log("Span par click karna he" + event.target.textContent)
//     }
// })

// Adding 100 para

// const t1 = performance.now()
// for (let i=1; i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent ="This is para" +i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now()
// console.log("This took" + (t2-t1) + "ms")

// Optimising code

// const t3 = performance.now()
// let mydiv = document.createElement("div");

// for (let i =1; i>=100; i++){
//     let element = document.createElement("p")
//     element.textContent="This is para" + i;

//     mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv)
// const t4 = performance.now();
// console.log("This took" + (t4-t3) + "ms")

// Using Document Fragment
// let t1 = performance.now()

// let fragment = document.createDocumentFragment();
// for (let i=1; i<=100;i++){
//         let newElement = document.createElement("p");
//         newElement.textContent ="This is para" +i;
    
//         fragment.appendChild(newElement);
//     }
//     document.body.appendChild(fragment) // 1 reflow and 1 repaint
//     let t2 = performance.now()
//     console.log("This is" + (t2-t1) + "ms");

// Promise

// let meraPromise = new Promise(function(resolve,reject){
//     console.log("I am inside promise");
//     resolve(1998)
// })
// console.log("Pehla pyaar")

// let prom3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Chautha")
//     },8000)
// })

// let prom2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Teesra")
//     },3000)
// })
// Then method() in promise
// let prom = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Pehla")
//     },5000);
//     resolve(8318440978)
//     // reject("error aaye hein")
// })
// prom.then((value) => {console.log(value)});
// console.log("dusra")

// Catch method() in promise

// let prom = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Pehla")
//     },5000);
//     // resolve(8318440978)
//     reject("error aaye hein")
// })
// prom.catch((error) => {console.log("Bhaiyya error he")});
// console.log("dusra")

// Calling promise inside promise and then returing the value from one promise to another

// let waada1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("set Timeout1 started")
//     },5000)
//     resolve(true)
// })

// let output = waada1.then((value)=> {
//     let waada2 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("set Timeout2 started")
//         },8000)
//         resolve("Waada2 resolved")
//     })
//     return waada2;
// })
// output.then ((value) => console.log(value));

//Async and Await()

// async function abcde(){
//     return ("kya huya tera")
// }
// console.log(abcde())

// async function utility() {
// let DelhiMausam = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("Delhi mein bahut garmi he")
//     },3000)
//     resolve(true)
// })
// let HyderabadMausam = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hyderabad is cool")
//     },9000)
//     resolve(true)
// })

// let dm = await DelhiMausam
// let hm = await HyderabadMausam

// return(dm,hm)
// }

// Fetch API using Get call
// async function utility(){
// let api = await fetch("https://jsonplaceholder.typicode.com/posts/1")
// let output = await api.json();
// let output = await api.text();
// let output = await api.ok();


// console.log(output)
// }

// "employees":[
//     {"firstname": "JOhn" , "lastname":"Doe"},
//     {"firstname": "ANNA", "lastname": "SMith"}
// ]


// Fetch Api using POST call
 
async function helper(){
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      body: JSON.stringify({
        title: 'Ankit',
        body: 'Welldone Ankit',
        userId: 1996,
      }),
      
    };



let content = await fetch("https://json placeholder.typicode.com/posts", options)
let response = await content.json();
return response
}

async function utility(){
    let ans = await helper();
    console.log(ans);
}

console.log(utility())
