let plus = document.getElementById('+')
let minus = document.getElementById('-')
let divide = document.getElementById('%')
let multiply = document.getElementById('*')
let zero = document.getElementById('0')
let AC = document.getElementById('AC')
let point = document.getElementById('.')
let equals = document.getElementById('=')


var input = document.getElementById('input')

let buttons = document.getElementsByClassName('but')

// Event listeners

Array.from(buttons).forEach(button => {
    button.addEventListener('click',()=>{
        input.value += button.textContent
    })    
});


// specifying event listeners on individual basis since we used fontawesome icons instead of text.

plus.addEventListener('click',()=>{
    input.value += '+';
})
minus.addEventListener('click',()=>{
    input.value += '-';
})
multiply.addEventListener('click',()=>{
    input.value += '*';
})
divide.addEventListener('click',()=>{
    input.value += '/';
})
AC.addEventListener('click',()=>{
    input.value = '';
})
equals.addEventListener('click',result);

// just to enable enter key functionality for showing result
input.addEventListener('keydown',(event)=>{
        if(event.key == "Enter" || event.key == 13){
            result();
        }
})




// function to perform arithematic operation that in the input box
function result(){
    let math = input.value;

    const result=eval(math);
    input.value = result;
}
