const input = document.getElementById("input");
const button = document.getElementById("add-button");
const list = document.getElementById("list");

button.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") {
    alert("Your task cannot be empty!");
  } else {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(input.value);
    listItem.appendChild(itemText);
    list.appendChild(listItem);
  }
}
