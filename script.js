const addToDoGroupBtn = document.getElementById("addToDoGroup");

const addTaskBtn = document.querySelector(".to-do-group > button");
const toDoList = document.querySelector(".to-do-group .to-do-list");
const mainContainer = document.querySelector(".main-container");

function addTask(container) {
  const label = document.createElement("label");
  const inputCheckbox = document.createElement("input");
  const toDoText = document.createElement("p");
  const task = prompt("What do you want to add?");

  toDoText.textContent = task;
  inputCheckbox.type = "checkbox";
  label.appendChild(inputCheckbox);
  label.appendChild(toDoText);
  container.appendChild(label);
}

addTaskBtn.addEventListener("click", () => addTask(toDoList));
addToDoGroupBtn.addEventListener("click", () => {
  const task = prompt("What should be the heading of your to do group?");
  const parentDiv = document.createElement("div");
  const childDiv = document.createElement("div");
  const toDoHeading = document.createElement("h1");
  const addTaskBtn = document.createElement("button");

  toDoHeading.textContent = task;
  parentDiv.classList.add("to-do-group");
  parentDiv.appendChild(toDoHeading);
  childDiv.classList.add("to-do-list");
  addTaskBtn.id = "addTask";
  addTaskBtn.textContent = "+";
  parentDiv.appendChild(childDiv)
  parentDiv.appendChild(addTaskBtn);
  mainContainer.appendChild(parentDiv);
  addTaskBtn.addEventListener("click",() =>  addTask(childDiv));

});

{
  /* <div class="to-do-group">
<h1>To Do Group Heading</h1>
<div class="to-do-list">
  <label>
    <input type="checkbox" />
    <p>sample task</p>
  </label>
</div>
<button id="addTask">+</button>
</div> */
}
