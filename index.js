let myLeads = [];

let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");

let clearBtn = document.getElementById("clear-btn");

let ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

var listItemCheckbox = document.createElement('input')
listItemCheckbox.type = 'checkbox';

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//renderleads function using parameters
function render(leads) {
  let defaultLeads = "";
  for (let i = 0; i < leads.length; i++) {
    //rendering defaultLeads using innerHTML.textCONTENT & template strings
    defaultLeads += `<li class = "list">
            ${leads[i]}
        </li>`;
  }
  ulEl.innerHTML = defaultLeads;
}

//recreate the renderleads function
// using createElement and appendChild instead of the classic "innerHTML"

clearBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  //clearing the router DOM
  console.log(myLeads);
  ulEl.textContent = "";
  myLeads = [];
  console.log(leads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  console.log(myLeads);
  render(myLeads);
});

function buttonCode() {
  alert("Button clicked");
}

//TODO
//1. Adding a checkbox beside array items itself
//2. "Enter" button mechanic for user input
