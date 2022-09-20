console.log("Todo App");

const todoAdd = document.querySelector("#todo-button");
const todoInput = document.querySelector("#todo-input");
const todoUl = document.querySelector("#todo-ul");
// console.log(todoInput)

todoAdd.addEventListener("click", () => {
  let value = todoInput.value;
  console.log(value);
  if (!value) {
    alert("Lütfen bir todo girin!");
  } else {
    todoUl.innerHTML += `<li><i class="fa-solid fa-check"></i><p>${value}</p><i class="fa-solid fa-trash"></i></li>`;
    todoInput.value = "";
  }
});

todoInput.addEventListener("keydown", (e) => {
  e.code === "Enter" && todoAdd.click();
});

todoUl.addEventListener("click", (e) => {
  if(e.target.className.includes("fa-check")){
    e.target.parentElement.classList.toggle("checked") 
  }
  if(e.target.className.includes("fa-trash")){
    e.target.parentElement.remove()
  }
});
