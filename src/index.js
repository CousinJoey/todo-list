
const createProjectBtn = document.getElementById("add-project-container");

createProjectBtn.addEventListener("click", (e) => {
    popUp();
});

function popUp() {

    const projectToggle = document.querySelector(".create-project-container")

    projectToggle.style.display = "block";

}

const cancelBtn = document.getElementById("cancel")

cancelBtn.addEventListener("click", (e) => {
    const projectToggle = document.querySelector(".create-project-container")

    projectToggle.style.display = "none";
})