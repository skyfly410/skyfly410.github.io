function validateAndRedirect() {
    var password = document.getElementById('password').value;
    var correctPassword = "2012"; 
    if (password === correctPassword) {
        sessionStorage.setItem('passwordVerified', 'true');
        window.location.href = 'https://skyfly410.github.io/bmfile-bmpic.html';//
        return false;
    } else {
        alert('请认真输入，要不然我就不给你看了，满足不了你的好奇心了！');
        // var messageElement = document.getElementById('message');
        // messageElement.textContent = '请认真输入，要不然我就不给你看了，满足不了你的好奇心了！';
        return false; 
    }
}
