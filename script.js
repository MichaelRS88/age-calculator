// GENERAL INPUTS
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
dayInp, monthInp, yearInp; // This will log the elements found


// GENERAL OUTPUTS
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

// FORM ELEMENT
const form = document.querySelector("form");

// ADD SUBMIT EVENTLISTENER ON FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = [dayInp, monthInp, yearInp]; // Store the input elements in an array
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (i === monthInp && (i.value > 12 || i.value < 1)) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Must be a valid month (1-12).";
      validator = false;
    } else if (i === dayInp && (i.value > 31 || i.value < 1)) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Must be a valid day (1-31).";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    const inputDay = parseInt(dayInp.value, 10);
    const inputMonth = parseInt(monthInp.value, 10);
    const inputYear = parseInt(yearInp.value, 10);
    
    let d = currentDay - inputDay;
    let m = currentMonth - inputMonth;
    let y = currentYear - inputYear;
    
    if (d < 0) {
      m--;
      const daysInLastMonth = months[currentMonth - 2];
      d = daysInLastMonth + d;
    }
    
    if (m < 0) {
      y--;
      m = 12 + m;
    }
    
    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}
