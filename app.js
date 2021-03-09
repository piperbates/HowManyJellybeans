const submit = document.getElementById("submit");

const jellybeanWeight = 1.1; //Jellybean weight in grams

submit.addEventListener("click", calculateJellybeans);


function calculateJellybeans() {
  const personWeight = document.getElementById("weightInput").value * 454; //Converts persons inputted weight into grams

  const total = Math.ceil(personWeight / jellybeanWeight); 
  alert(`You are made of ${total} Jellybeans`);
}
