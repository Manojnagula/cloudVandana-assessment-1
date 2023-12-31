// getting elements

let submit = document.getElementById("end");

// selected radio buttons combindly
let group1 = document.querySelectorAll('input[type="radio"][name="Group1"]');
let group2 = document.querySelectorAll('input[type="radio"][name="Group2"]');
let group3 = document.querySelectorAll('input[type="radio"][name="Group3"]');


let male = document.getElementById("male");
let female = document.getElementById("female");
let firstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let email = document.getElementById("email");
let overlay = document.getElementById("overlay");
let profession = document.getElementById("profession");
let mobile = document.getElementById("mobile");
let dob = document.getElementById("dob");
let country = document.getElementById("country");
let suggestions = document.getElementById("suggestions");
let xMark = document.getElementById("x-mark");

// grabbing all elements in popup
let popupFirstName = document.getElementById("FirstName-popup");
let popupLastName = document.getElementById("lastName-popup");
let popupEmail = document.getElementById("email-popup");
let popupProfession = document.getElementById("profession-popup");
let popupMobile = document.getElementById("mobile-popup");
let popupDOB = document.getElementById("dateOfBirth-popup");
let popupCountry = document.getElementById("country-popup");
let popupGender = document.getElementById("gender-popup");
let popupquestion1 = document.getElementById("first-question");
let popupquestion2 = document.getElementById("second-question");
let popupquestion3 = document.getElementById("third-question");
let popupquestion4 = document.getElementById("fourth-question");

// function to inject values into the popup fields.
function popup() {
  popupFirstName.textContent = firstName.value;
  popupLastName.textContent = LastName.value;
  popupEmail.textContent = email.value;
  popupProfession.textContent = profession.value;
  popupMobile.textContent = mobile.value;
  popupDOB.textContent = dob.value;
  popupCountry.textContent = country.options[country.selectedIndex].text;
  popupGender.textContent = GENDER;
  popupquestion1.textContent = getSelectedRadioButton(group1);
  popupquestion2.textContent = getSelectedRadioButton(group2);
  popupquestion3.textContent = getSelectedRadioButton(group3);
  popupquestion4.textContent = suggestions.value;
}

// Ensuring only one checkbox get checked for gender.
let GENDER = "";
male.addEventListener("change", () => {
  if (male.checked) {
    female.checked = false;
    female.required = false;
    GENDER = "MALE";
  }
});
female.addEventListener("change", () => {
  if (female.checked) {
    male.checked = false;
    male.required = false;
    GENDER = "FEMALE";
  }
});

// Event listener for submission of form
submit.addEventListener("click", (e) => {
  if (document.getElementById("my-form").checkValidity()) {
    e.preventDefault();
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    popup();
  } else {
    document.getElementById("warning").classList.remove("hidden");
    e.preventDefault();
  }
});

// Event listener for reset button
document.getElementById("reset").addEventListener("click", resetForm);
function resetForm() {
  document.getElementById("my-form").reset();
}

// closing popup
xMark.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
  document.getElementById("my-form").submit();

  setTimeout(() => {
    document.querySelector("form").reset();
  }, 500);
});

// Getting selected radio value from radio buttons
function getSelectedRadioButton(radioButton) {
  for (const radio of radioButton) {
    if (radio.checked) {
      return radio.value;
    }
  }
}
