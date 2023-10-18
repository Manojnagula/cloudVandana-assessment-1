let submit = document.getElementById('submit');
let group1 = document.querySelectorAll('input[type="radio"][name="Group1"]');
let group2 = document.querySelectorAll('input[type="radio"][name="Group2"]');
let group3 = document.querySelectorAll('input[type="radio"][name="Group3"]');
let male = document.getElementById('male');
let female = document.getElementById('female');
let firstName = document.getElementById('FirstName');
let LastName = document.getElementById('LastName');
let email = document.getElementById('email');
let overlay = document.getElementById('overlay');
let profession = document.getElementById('profession')
let mobile = document.getElementById('mobile')
let dob = document.getElementById('dob');
let country = document.getElementById('country');

var GENDER = ''


// Ensuring only one checkbox get checked for gender. 
male.addEventListener('change',()=>{
        if(male.checked){
            female.checked=false;
            female.required=false;
            GENDER = 'MALE'

        }
});
female.addEventListener('change',()=>{
        if(female.checked){
            male.checked=false;
            male.required=false;
            GENDER = 'FEMALE'

        }
});

let radio1 = '';
// Event listener for submission of form
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    overlay.classList.remove('hidden')
    document.body.style.overflow='hidden';
    popup();

    Array.from(group1).forEach((radio)=>{
        if(radio.checked){
            radio1 = radio.value;
            console.log(radio.value);
            console.log(radio1);
        }

    })
})

console.log(radio1);


// grabbing all elements in popup
let popupFirstName = document.getElementById('FirstName-popup')
let popupLastName = document.getElementById('lastName-popup')
let popupEmail = document.getElementById('email-popup')
let popupProfession = document.getElementById('profession-popup')
let popupMobile = document.getElementById('mobile-popup')
let popupDOB = document.getElementById('dateOfBirth-popup')
let popupCountry = document.getElementById('country-popup')
let popupGender = document.getElementById('gender-popup')
let popupquestion1 = document.getElementById('first-question')
let popupquestion2 = document.getElementById('second-question')
let popupquestion3 = document.getElementById('third-question')
let popupquestion4 = document.getElementById('four-question')


console.log(GENDER);
function popup(){
        popupFirstName.textContent = firstName.value;
        popupLastName.textContent = LastName.value;
        popupEmail.textContent = email.value;
        popupProfession.textContent = profession.value;
        popupMobile.textContent = mobile.value;
        popupDOB.textContent = dob.value;
        popupCountry.textContent = country.options[country.selectedIndex].value;
        popupGender.textContent = GENDER;
        popupquestion1.textContent = radio1;

}