function viewStorage() {
    const storage = [
        JSON.parse(localStorage.getItem('loginInfo'))
        ,
        JSON.parse(localStorage.getItem('number'))
    ]
    return `The Email: ${storage[0].mail}, ` +
    `The password: ${storage[0].pwd}, ` +
    `The Number: ${storage[1]}.`
}
function error() {
    const errorEffect = new Audio('audio/error_login.mp3')
    errorEffect.volume = 0.5
    errorEffect.play()
}