

// console.log("Let's start")

// let rectangle = {
//     length:23,
//     breadth:34,

//     draw: function() {
//         console.log("drawing rectangle")
//     }
// }

// console.log(rectangle.draw)
// let rectangle;
// function createRectangle(){
//     return rectangle = {
//         length:1,
//         breadth:2,

//         draw(){
//             console.log("Drawing rectangle ")
//         }
//     }
// console.log(rectangle.draw())    
// }
// createRectangle()

// rectangle.length

// Functions - JS

// Function declaration

// function run(){
//     console.log("running")
// }

// run()

// Function Assignment

// stand()
// let stand= function walk(){
//     console.log("walking")
// }

// stand()

// Anonymous Function assignment

// let stand2 = function(){
//     console.log("bouncing")
// }

// stand2()

// Dynamic Function using Arguements
// function sum(a,b){
//     let total =0
//     for(let value of arguments)
//     total = total + value
//     return total
    
// }
// let stand= sum(1,2,3,4,5)
// console.log(stand);

// Rest operator
// function sum(num1,num2,...args){
//     console.log(args)
// }
// console.log(sum(1,3,34.4,5,6))

// Default Parameters

// function interest(p,r=6,y){
//     return p*r*y/100
// }
// console.log(interest(1000))

// Getter and Setter
// Try and Catch

// let person = {
//     fname : "Ankit",
//     lname : "Jha",
//     get name(){
//         return `${person.fname} ${person.lname}`
//     },
//     set name(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string")
//         }
//         let parts = value.split(" ")
//         this.fname = parts[0]
//         this.lname = parts[1]
         
//     }

// }
// console.log(person.name)

// try{
//     person.name = 1 

// }
// catch (e){
//  alert(e)
// }


// console.log(person.name)

// Scope:

// {

//     let a = 5
//  }
// console.log(a)

// function a (){
//     const ab = 5
// }
// console.log(a())
// function b (){
//     const bc = 5
// }
// console.log(b())

// function ab(){
//     var a =5
// }
// console.log(ab())

let arr1 = [1,2,3,4]
// let total = 0
// for(let value of arr1)
//     total = total + value

// console.log(total)

let totalsum = arr1.reduce(accumulator,currentvalue) => accumulator + currentvalue,0); 
 

