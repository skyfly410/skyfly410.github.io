function validateAndRedirect() {
    var password = document.getElementById('password').value;
    var correctPassword = "2012"; 
    if (password === correctPassword) {
        window.location.href = 'https://skyfly410.github.io/bmfile-bmpic.html';//
        return false;
    } else {
        alert('输入错误，请重试！');
        // var messageElement = document.getElementById('message');
        // messageElement.textContent = '输入错误，请重试！';
        return false; 
    }
}
