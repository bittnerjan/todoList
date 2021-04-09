const input = document.getElementById("input");
const searchInput = document.getElementById("search-input");
const list = document.getElementById("list");
const listItems = document.getElementsByTagName("li");
const close = document.getElementsByClassName("close");

appendRemoveButton();
makeTaskRemovable();

input.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  let key = event.key || event.keyCode;
  if (key === "Enter" || key === 13) {
    addTask();
  }
});

list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

searchInput.addEventListener("input", function (event) {
  if (event.defaultPrevented) {
    return;
  }
  filterList(event.target.value);
});

function filterList(searchInput) {
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].innerText.indexOf(searchInput) < 0) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "";
    }
  }
}

function appendRemoveButton() {
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
    input.style.border = "thin solid red";
    input.placeholder = "Your task cannot be empty!";
  } else {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(input.value);
    listItem.appendChild(itemText);
    list.appendChild(listItem);
    input.value = "";
    input.placeholder = "Please enter new TODO..";
    input.style.border = "thin solid #95d5b2";
    appendRemoveButton();
    makeTaskRemovable();
  }
}

function makeTaskRemovable() {
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    };
  }
}

function search() {
  for (let i = 0; i < list.length; i++) {}
}
