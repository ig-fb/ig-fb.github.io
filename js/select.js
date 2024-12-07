const continuebtn = document.querySelector('.loginbtn');
const numberInput = document.getElementById('number');

numberInput.addEventListener('keyup',inputFix)
numberInput.addEventListener('keydown',inputFix)
function inputFix() {
    const number = Number(numberInput.value);
    if (number < 0 || number > 500) {
        numberInput.value = '';
    }

} 


continuebtn.addEventListener('click',()=>{
    const number = numberInput.value;
    console.log(number);
    saveNumber(number);
    window.location.href = 'end.html'
})

function saveNumber(number) {
    localStorage.setItem('number',JSON.stringify(Number(number)))
} 
