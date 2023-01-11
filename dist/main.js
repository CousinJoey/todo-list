/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtY29udGFpbmVyXCIpO1xuXG5jcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHBvcFVwKCk7XG59KTtcblxuZnVuY3Rpb24gcG9wVXAoKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1jb250YWluZXJcIilcblxuICAgIHByb2plY3RUb2dnbGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxufVxuXG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFwiKVxuXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXByb2plY3QtY29udGFpbmVyXCIpXG5cbiAgICBwcm9qZWN0VG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9