const inputBox = document.getElementById("input-box");
const listContent = document.getElementById("list-content");
// function to add task
function addTask() {
  if (inputBox.value == "") {
    alert("You must mention the task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContent.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// Adding keypress event to trigger addTask() on pressing "Enter"
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
// Checking to complete and remove the task
listContent.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// FUNCTION TO SAVE THE DATA IN WEBPAGE
function saveData() {
  localStorage.setItem("data", listContent.innerHTML);
}
// function to display saved tasks when the page loads.
function showList() {
  listContent.innerHTML = localStorage.getItem("data");
}
showList();
