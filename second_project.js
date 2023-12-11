const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Modal open function
 let openModal= () =>{
     console.log("Modal is open")
     modal.classList.add("active");
     overlay.classList.add("overlayactive")
 }

 //Modal close function

 let closeModal = () =>{
     modal.classList.remove("active");
     overlay.classList.remove("overlayactive")
 }