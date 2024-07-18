const  modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//Modal open 
const openModal = () =>{
    modal.classList.add("active");
    modal.classList.add("overlayactive");
}
//Modal close
const closeModal = () =>{
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");
}