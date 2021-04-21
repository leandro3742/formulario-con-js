/* eslint-disable */
import validator from "validator";
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

let alerta = document.getElementById("alerta");

window.onload = function() {
  alerta.style.display = "none";
};

let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let card = document.getElementById("card");
  let cvc = document.getElementById("cvc");
  let amount = document.getElementById("amount");
  let firstName = document.getElementById("name");
  let lastName = document.getElementById("lastName");
  let city = document.getElementById("city");
  let state = document.getElementById("state");

  if (!validator.isCreditCard(card.value)) {
    card.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(cvc.value)) {
    cvc.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(amount.value)) {
    amount.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(firstName.value)) {
    firstName.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(lastName.value)) {
    lastName.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(lastName.value)) {
    lastName.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(city.value)) {
    city.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
  if (validator.isEmpty(state.value)) {
    state.style.backgroundColor = "#FFA8A8";
    alerta.style.display = "block";
  }
});
