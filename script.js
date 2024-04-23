const form = document.querySelector("form");
const sheet = document.getElementById("blancesheet");
const incomeBal = document.getElementById("income");
const expanseBal = document.getElementById("expanse");

let balanceList = [];

function print() {
  sheet.innerHTML = "";
  let income = 0;
  let expanse = 0;
  for (let i = 0; i < balanceList.length; i++) {
    if (balanceList[i] > 0) {
      income = income + balanceList[i];
      sheet.innerHTML += `<div class="flex justify-between py-1 " id="${i}">
          <div class="flex gap-4"><span class="font-bold">${balanceList[i]}</span> <span>Income</span></div>
          <div class="flex gap-3"><button onclick="del(${i})" >Delete</button> <button>Edit</button></div>
        </div>`;
    } else {
      expanse = expanse + balanceList[i];

      sheet.innerHTML += `<div class="flex justify-between py-1 " id="${i}">
          <div class="flex gap-4"><span class="font-bold">${balanceList[i]}</span> <span>Expance</span></div>
          <div class="flex gap-3"><button onclick="del(${i})">Delete</button> <button>Edit</button></div>
        </div>`;
    }
  }
  expanse = Math.abs(expanse);
  incomeBal.innerText = income;
  expanseBal.innerText = expanse;
}

function read() {
  let balance = localStorage.getItem("balance");
  if (balance){
    balanceList = JSON.parse(balance);
  }

  print();
}

function save() {
  localStorage.setItem("balance", JSON.stringify(balanceList));
}

function add() {
  const val = document.getElementById("balance").value;
  if (+val != 0)
  {
  balanceList.push(+val);
  print();
  save();
  }
}

function del(id) {
  delete balanceList[+id];
  balanceList = balanceList.filter(Number);
  print();
  save();
}

function edit(id){
  edit balanceList 

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
