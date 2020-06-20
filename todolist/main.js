const form = document.querySelector("form");
const ul = document.querySelector("ul");

const todoDatabase = JSON.parse(localStorage.getItem("todoDatabase")) || [];

const addNewTask = (e) => {
  e.preventDefault();
  const [input] = e.target.elements;
  if (input.value === "") return;
  const newTaskName = input.value;
  const newTask = {
    id: Date.now(),
    taskName: newTaskName,
  };
  todoDatabase.push(newTask);
  localStorage.setItem("todoDatabase", JSON.stringify(todoDatabase));
  updateHTML();
  input.value = "";
};

const updateHTML = () => {
  console.log(todoDatabase);
  const HTML = todoDatabase
    .map((task) => {
      return `<li data-id="${task.id}">
        <input type="checkbox">
        <span>${task.taskName}</span>
        <button class="btn-delete-task">X</button>
        </li>`;
    })
    .join("");
  ul.innerHTML = HTML;

  const btnsDeleteTask = document.querySelectorAll(".btn-delete-task");
  btnsDeleteTask.forEach((btn) => btn.addEventListener("click", deleteTask));
};

const deleteTask = (e) => {
  const liContainer = e.target.parentElement;
  const taskId = liContainer.dataset.id;
  const indexInDatabase = todoDatabase.findIndex((task) => task.id === parseInt(taskId));
  todoDatabase.splice(indexInDatabase, 1);
  localStorage.setItem("todoDatabase", JSON.stringify(todoDatabase));
  updateHTML();
};

form.addEventListener("submit", addNewTask);
updateHTML();
