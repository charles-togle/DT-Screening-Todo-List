const addToDoGroupBtn = document.getElementById("addToDoGroup");

const addTaskBtn = document.querySelector(".to-do-group > button");
const toDoList = document.querySelector(".to-do-group .to-do-list");
const mainContainer = document.querySelector(".main-container");

async function addTask(container) {
  const task = await useModal("What do you want to add?");
  if (task === "") return;
  const label = document.createElement("label");
  const inputCheckbox = document.createElement("input");
  const toDoText = document.createElement("p");
  toDoText.textContent = task;
  inputCheckbox.type = "checkbox";
  label.appendChild(inputCheckbox);
  label.appendChild(toDoText);
  container.appendChild(label);
}

addTaskBtn.addEventListener("click", async () => addTask(toDoList));
addToDoGroupBtn.addEventListener("click", async () => {
  const task = await useModal(
    "What should be the heading of your to do group?"
  );
  if (task === "") return;
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
  parentDiv.appendChild(childDiv);
  parentDiv.appendChild(addTaskBtn);
  mainContainer.appendChild(parentDiv);
  addTaskBtn.addEventListener("click", async () => addTask(childDiv));
});

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const modalHeading = document.querySelector(".modal p");
const modalInput = document.querySelector(".modal input");
const confirmModal = document.querySelector(
  ".modal div.modal-buttons button:nth-of-type(1)"
);
const cancelModal = document.querySelector(
  ".modal div.modal-buttons button:nth-of-type(2)"
);

function useModal(modalText) {
  return new Promise((resolve) => {
    modalContainer.classList.add("active");
    modalHeading.textContent = modalText || "";
    modalInput.value = "";

    const handleConfirm = () => {
      const inputText = modalInput.value;
      modalContainer.classList.remove("active");
      confirmModal.removeEventListener("click", handleConfirm);
      cancelModal.removeEventListener("click", handleCancel);
      resolve(inputText);
    };

    const handleCancel = () => {
      modalContainer.classList.remove("active");
      confirmModal.removeEventListener("click", handleConfirm);
      cancelModal.removeEventListener("click", handleCancel);
      resolve("");
    };

    confirmModal.addEventListener("click", handleConfirm);
    cancelModal.addEventListener("click", handleCancel);
  });
}


const resetButton = document.querySelector("aside button")

resetButton.addEventListener("click", ()=>{
    location.reload(true);
})