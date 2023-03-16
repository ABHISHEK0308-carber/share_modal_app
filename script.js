const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const  openModal = () =>
{
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
// modal close fucnction
const closeModal = () =>
{
    // console.log("modal is close ")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};