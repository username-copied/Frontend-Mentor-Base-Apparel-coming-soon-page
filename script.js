"use strict";

//Selctors
const btnSubmit = document.querySelector(".submit");
const errorSign = document.querySelector(".error");
const warningTxt = document.querySelector(".warning");
const mailTxt = document.querySelector(".mail");

//Variables:
const regex = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]+){1,10}$/;

mailTxt.addEventListener("blur", function () {
  console.log("bdcdch");
  if (regex.test(mailTxt.value)) {
    errorSign.classList.add("hidden");
    warningTxt.classList.add("hidden");
  } else {
    errorSign.classList.remove("hidden");
    warningTxt.classList.remove("hidden");
  }
});
