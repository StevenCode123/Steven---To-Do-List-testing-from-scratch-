let myLeads = [];

let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");

let clearBtn = document.getElementById("clear-btn");

let ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let defaultLeads = "";
  for (let i = 0; i < leads.length; i++) {
    defaultLeads += `<li class = "list"> 
            ${leads[i]} 
        </li>`;
  }
  ulEl.innerHTML = defaultLeads;
}

clearBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  //clearing the router DOM
  console.log(myLeads);
  ulEl.textContent = ""
  myLeads = []
  console.log(leads)
});


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = ""
  console.log(myLeads)
  render(myLeads);
});

document.getElementById('input-el'), function (e) {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  console.log(myLeads);
  renderLeads();
});


function buttonCode(){
  alert("Button clicked")
}



//TODO
//1. Adding a checkbox beside array items itself
//2. "Enter" button mechanic for user input

