// let createrec = ()=>{


// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function(){
//         console.log("Drawing circle")
//     }
// }
// // console.log(rectangle.length)
// // rectangle.draw()
// console.log(rectangle.breadth)
// }
// createrec()

// function createrec(x,y){
//     return rectangle = {
//         length : x,
//         breadth : y,

//     draw() {
//         console.log("drawing rectangle")
//         }
//     };
// }
// let rectobj = createrec(5,3);
// let rec2 = createrec(3,4);
// let rec3 = createrec(7,8)
// console.log(rec2)
// console.log(rec3)
// console.log(createrec)
// console.log(rectobj)

// Factory Function

// function createrectangle(x,y){
//     return rectangle = {
//         length : x,
//         breadth : y,

//         draw(){
//             console.log("drawing rectangle");
//         }
//     };

// }
// let rect = createrectangle(2,3);
// console.log(rect)

// Constructor Function

// function Createrec2(len,bre){
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function(){
//         console.log("")
//     }
// }

// let createrect3 = new Createrec2(3,4);
// console.log(createrect3)


// // Dynamic nature of objects

// // Adding new properties to a Object

// createrect3.color = "yellow"
// console.log(createrect3)

// Createrec2.bind
// console.log(Createrec2)
// createrect3.height = 23
// console.log(createrect3)

// console.log(createrect3.constructor)


// let a = {value:10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// function Circle(r,d){
//     this.radius = r,
//     this.diameter = d,
//     this.area = function () {
//         console.log("Find area of circle")
//     }

// }
//  let circleobj = new Circle(2,3);
//  console.log(circleobj)

//  circleobj.color = "yellow"
//  console.log(circleobj)

//  delete circleobj.color
//  console.log(circleobj)


//  let circle1 = new Function('radius', `this.radius = radius`)


// let a = 10
// function inc(a){
//     a++
// }
// inc(a)
// console.log(a)

// let a = {value:10}
// function inc(a){
//     a.value++;
// }
// inc(a)
// console.log(a)


// let obj1 = {
//     length : 10,
//     breadth : 20,
// }

// for (let key in obj1){
//     // keys are reflected through key varaible
//     //values are reflected through obj1[key]
//     console.log(key,obj1[key])
// }

// for(let key of Object.entries(obj1)){
//     console.log(key)

// }

// if ('breadth' in obj1){
//     console.log("Present")
// }
// else(
//     console.log("Absent")
// )

// Object clone - Method 1
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

// Object Clone - Method 2

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let src2 = {value:25}

// let src3 = {value1:30}

// let dest = Object.assign({}, src, src2, src3)
// console.log(dest)

// src.a++
// console.log(dest)

// Object Clone - Method 3


// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let dest = {...src}
// console.log(dest)

// src.a++
// console.log(dest)

// Different methods in Js

// Math.abs(2.33)


// let lastname = "   Babbar   "

// console.log(lastname)

// lastname.
// console.log(typeof(lastname))

// Object String
// let firstname = new String ("love")
// console.log(firstname)
// console.log(typeof(firstname))

//Template literal
// let message = "This is my first message"
// console.log(` This ${lastname}
// is
// a 
// template
// literal`)

// Date and Time
// let date = new Date();
// console.log(date)

// let date2 = new Date("June 20 1998 07:15")
// console.log(date2)

// let date3 = new Date(1998, 11, 20, 7)
// console.log(date3)
// date3.setFullYear(1947)
// console.log(date3)
// date3.setMonth(8)
// console.log(date3)

// date3.getMonth
// console.log(date3)

// Adding elements in an array
// let numbers = [1,3,5,7]
// console.log(numbers)

// console.log(numbers[1])
// console.log(numbers[3])
//end
// numbers.push(9) // push() - used to add element in the last of the array 
// numbers.push(8)
// console.log(numbers)
//starting
// numbers.unshift(2) // unshift() - used to add element in the starting of the array
// console.log(numbers)
//middle
// numbers.splice(3,0,"a","b","c") // splice - used to add element in between of the array
// console.log(numbers) 

// Check whether a number is present in an array
//  To check if a given number is present in the list or not
// if(numbers.indexOf(3) != -1)
//     console.log("present")

// console.log(numbers.includes(7))

// Arrow Function
// let courses = [
//     {no:1, naam:"Ankit"},
//     {no:2, naam:"Love"}
// ]
// // console.log(courses)

// // console.log(courses.includes({no:1,naam:"Ankit"}))

//    let course= courses.find(course => course.naam === "Ankit");
    
// console.log(course)

// Delete elements in an array

// let numbers = [1,2,3,44,4]
// //end
// numbers.pop();
// console.log(numbers)
// //beginning
// numbers.shift();
// console.log(numbers)
// //middle
// numbers.splice(1,1)
// console.log(numbers)


// Emptying an Array[]

// Method1
// let numbers = [1,2,3,4,5]
// let numbers2 = numbers

// numbers = []

// console.log(numbers)
// console.log(numbers2)

//Method2 -.length()

// let numbers = [1,2,3,4,5]
// let numbers2 = numbers

// // numbers.length = 0

// // numbers.splice(0,numbers.length)
// console.log(numbers)
// console.log(numbers2)

// Method3 - .splice method

// let numbers = [1,2,3,4,5]
// let numbers2 = numbers

// // numbers.length = 0

// numbers.splice(0,numbers.length)
// console.log(numbers)
// console.log(numbers2)

// Combining And Slicing Arrays


//  Combine method - Primitive data types
// let numbers = [1,24,4,4,5]
// let numbers2 = [1,3,4.4,4]
// let combined = numbers.concat(numbers2)
// console.log(combined)

// Slice method - Primittive data types

// let numbers = [1,24,4,4,5]
// let numbers2= numbers.slice(2,5)
// console.log(numbers2)
// let numbers3 = numbers.slice(2) 
// console.log(numbers)
// let numbers4 = numbers.slice()  // Full slicing
// console.log(numbers4)  


// Spread operator - combining and making copy of an array

// let numbers = [1,34,4,5]
// let numbers2 = [3,5.556,5]
// let numbers3 = [...numbers,"a",false,...numbers2,"b",true]
// console.log(numbers3)

// let combined = [...numbers3]
// console.log(combined)

// For-of Loop
// let arr = [10,20,30,40,50]
// // for(let value of arr){
// //     console.log(value)
// // }

// // For-each loop

// arr.forEach(numbers=> console.log(numbers)
// )

//Joining An array"

// let numbers1 = [10,20,30,40]
// let numbers2  = numbers1.join("+")
// console.log(numbers2)

// // Splitting an Array

// let para = " This is a paragraph"
// let para2 = para.split(" ")
// console.log(para2)

// Sorting an Array

// let numbers = [30,40,20,10]
// let num2= Number.parseInt(numbers.reverse())
// console.log(num2)
// console.log(typeof(num2))

// Filtering an array

// let numbers = [1,2,-1,-4]

// let num2 = numbers.filter(value=> value<0
// )
// console.log(num2)

// Mapping an array:

// let numbers = [1,23,4,5,6]

//  let items=numbers.map(value =>"student-no" + value
// )
// console.log(items)

// Mapping with objects

let numbers = [1,2,-1,-2]

let filtered = numbers.filter(function(value){
    return value<=0
})
console.log(filtered)

let items = filtered.map(function(num){
    return {value : num}
})
console.log(items)



