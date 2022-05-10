export function addProjectButton() {
    let addProjectButton = document.querySelector(".add-project");
    let inputForm = document.querySelector(".project-form");
    addProjectButton.addEventListener("click", function(e) {
        inputForm.style.display = "flex";
    })
}

export function submitButton() {
    let submitButton = document.querySelector(".submit");
    let inputForm = document.querySelector(".project-form");
    submitButton.addEventListener("click", function(e) {
        inputForm.style.display = "none";
    })
}