const dateSpan = document.getElementById('date');
const today = dayjs();
const addingday = today.add(8,'month');

console.log(today)
console.log(addingday)
console.log(today.format('DD-MM-YYYY'))
console.log(addingday.format('DD-MM-YYYY'))

dateSpan.innerHTML = addingday.format('DD-MM-YYYY');

