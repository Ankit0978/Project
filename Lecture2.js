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


// // Dynamic bature of objects

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


let src = {
    a:10,
    b:20,
    c:30
}
let dest = {...src}
console.log(dest)

src.a++
console.log(dest)
