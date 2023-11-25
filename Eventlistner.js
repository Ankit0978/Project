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
let t1 = performance.now()

let fragment = document.createDocumentFragment();
for (let i=1; i<=100;i++){
        let newElement = document.createElement("p");
        newElement.textContent ="This is para" +i;
    
        fragment.appendChild(newElement);
    }
    document.body.appendChild(fragment) // 1 reflow and 1 repaint
    let t2 = performance.now()
    console.log("This is" + (t2-t1) + "ms");