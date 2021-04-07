const input = document.getElementById("input");
const button = document.getElementById("add-button");
const list = document.getElementById("list");
let listItems = document.getElementsByTagName("li");

button.addEventListener("click", addTask);

appendRemoveEl();

function appendRemoveEl() {
  for (let i = 0; i < listItems.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItems[i].appendChild(span);
  }
}

function addTask() {
  if (input.value === "") {
    alert("Your task cannot be empty!");
  } else {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(input.value);
    listItem.appendChild(itemText);
    list.appendChild(listItem);
    appendRemoveEl();
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
