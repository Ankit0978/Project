// Factory function

// function practice(x,y){
//     return set = {
//         length : x,
//         breadth : y,
    

//     draw() {
//         console.log("draw rectangle")
//     }

// }

// }

// let obj = practice(5,3);
// let obj1 = practice(3,4);
// console.log(obj)
// console.log(obj1)

// Constructor Function
// function area(e,d){
//     this.radius = r,
//     this.diameter = d,
//     this.area = function () {
//         console.log("Find the area of circle")
//     }
// }
// let ara1 = new area(2,3);
// console.log(ara1)

// Dynamic Nature of Objects

// function Createrec(len,bre){
//     this.len = len,
//     this.bre = bre,
//     this.draw = function(){
//         console.log("")
//     }
// }

// let Createrec2 = new Createrec(2,3);
// console.log(Createrec2)

// Createrec2.color = "yellow"
// console.log(Createrec2)

// Createrec2.wild = new Createrec(5,6)
// console.log(Createrec2)

// delete Createrec2.color
// console.log(Createrec2)


// Primitive Data Types
// let a = 10

// function inc(a){
//     a++
// }
// inc(a)
// console.log(a)

// Refernce data type

// let a = {value:10}
// function inc(a){
//     a.va++
// }
// inc(a)
// console.log(a)

// let obj1 = {
//     len: 20,
//     bre:20,
// }
// for(let key in obj1){
//     console.log(key,obj1[key])
// }

//Object Cloning - 
// Iteration

// let src = {
//     a : 10,
//     b : 20,
//     c : 30,
// }
// dest = {}

// for (let key in src){
//     dest[key] = src[key]
// }
// console.log(dest)
// src.a++
// console.log(dest)

// Assign Method 

// let src1 = {
//     a:10,
//     b:20,
//     c:30,
// }

// let src2 = {value:25}

// let src3 = {value1:35}

// let dest = Object.assign({} , src1 , src2, src3)
// console.log(dest)

// src.a++
// console.log(dest)

// Spread Operator

// let src = {
//     a:10,
//     b:20,
//     c:30,
// }
// let dest = {...src}
// console.log(dest)

// src.a++
// console.log(dest)

// let lastname = "Babbar"

// console.log(lastname)
// console.log(lastname.length)

// Callback Functions

// let courses = [
//     {no:1, name:"Ankit"},
//     {no:2, name:"Love"}
// ]

// let course = courses.find(function(course){
//     return course.name == "Ankit"
// })

// console.log(course)

// let numbers = [1,2,4,5,6]

// let numbers2  = numbers

// numbers.length = 0
// console.log(numbers)
// console.log(numbers2)

// Full slicing

// let numbers = [1,2,3,4,5]
// numbers2 = numbers.splice(1,3)
// console.log(numbers2)

// let numbers3 = numbers.slice()

// Spread Operator

// let numbers = [1,2,3,4,5]
// let num1 = [3,5,6,7]
// let num3 = [...num1,...numbers]
// console.log(num3)

// For-each Loop

// let arr1 = [10,20,30,40]
// arr1.forEach(function(numbers){
//     console.log(numbers)
// })

// Map function

// let numbers = [1,2,3,4,5]

// let items = numbers.map(value => "student-no." + value)
// console.log(items)

// Mapping with oBjects

// let numbers = [1,2,3,4]

// let filtered = numbers.filter(function(value){
//     return value<=0

// {)

// Hoisting

// run()
// function run(){
//     console.log("running")
// }
// run()


// let stand = function walk(){
//     console.log("walking")
// }
// stand()

// Anonyumous function assignment - We dont give function name in this case

// let stand = function(){
//     console.log("boncing")
// }
// stand()

// function sum (a,b){
//     let total = 0
//     for(let value of arguments)
//     total = total + value
//     return total
// }

// let stand = sum(1,2,3,4,5,6)
// console.log(stand)

// Rest operator

// function sum(num1,num2,...args){
//     console.log(args)
//     console.log(num1)
//     console.log(num2)
// }
// console.log(sum(1,2,3,4,5))

// Default parameters

// function interest(p,r=6,y=10){

// return p*r*y/100
// }
// console.log(interest(1000,5,100))

// Getter and Setter

// let person = {
//     fname : "Ankit",
//     lname : "Jha",
//     get name(){
//         return `${person.fname}` ${person.lname}
//     },
//     set name(value){
//         let parts = 
//     }
// }
    
// let doc = document.querySelector(".classname")
// let para = document.createElement("div")
// para.textContent("My name is Ankit")
// doc.appendChild("para")
// doc.insertAdjacentElement("afterbegin",newtext)

// let content = document.querySelector(".text")
// undefined
// content
// <h3 class=​"text">​Data Tagger: EVC Ventures ​</h3>​
// let add = document.createElement("div")
// undefined
// add;
// <div>​</div>​
// add.textContent("Hello")
// let p = document.createElement("p")
// undefined
// p;
// <p>​</p>​
// p.innerText = "Hello"
// 'Hello'
// add.appendChild(p)
// <p>​Hello​</p>​
// content.appendChild(add)
// <div>​<p>​Hello​</p>​</div>​
// add.removeChild(p)
// <p>​Hello​</p>​
// add;
// <div>​</div>


// let content = $0
// undefined
// content;
// content.setAttribute("Id","HeadingkiID");​

// let numbers = [1,2,-1,-2]

// let filtered = numbers.filter(function(value){
//     return value<=0
// })
// console.log(filtered)

// let items = filtered.map(function(num){
//     return {value : num}
// })
// console.log(items)

// let stand= function walk(){
//     console.log(walking)
// }
// stand()

// let stand2 = function(){
//     console.log("bouncing")
// }

// console.log(stand2())

// function(){
//     console.log("HI")
// }

// function(){
//     console.log("hi")
// }

// function print() {
//     console.log("I have clicked on the document")
// }
// document.addEventListener("click", print)










