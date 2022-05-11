import { projectsArray } from "./list";
import { Project } from "./project";

function updateProjectsList() {
    let projectsList = document.querySelector(".projects-list");
    let newProject = document.createElement("div");
    for(let i = 0; i < projectsArray.length; i++) {
        newProject.textContent = projectsArray[i].name;
        newProject.classList.add("project-item");
        projectsList.appendChild(newProject);
    }
}

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
    let input = "";

    submitButton.addEventListener("click", function(e) {
        input = document.getElementById("project-input").value;
        projectsArray.push(new Project(input));
        inputForm.style.display = "none";
        updateProjectsList();
    })
}

export function displayTodos() {
    let projectItems = Array.from(document.querySelectorAll(".project-item"));
    //loop thru the divs in the project items to add click event listeners
    //use the div to access the corresponding element in the projectsArray
    //display project.name and the contents of project.todos
}