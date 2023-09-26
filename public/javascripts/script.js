const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const todoForm = document.getElementById("todo-form");

// prevent the default behavior of the HTML element when the form is submitted
window.onload = function () {
  todoForm.onsubmit = function () {
    addTask();
    loadData();
    return false;
  };
};

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Append a delete button to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.nodeName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.nodeName === "SPAN") {
      let li = e.target.parentNode;
      li.remove(); // Remove the list item
      saveData();
    }
  },
  false
);

// Save data to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  let data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}

loadData();
