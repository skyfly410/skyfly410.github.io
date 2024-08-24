document.addEventListener('DOMContentLoaded', function() {
    var token = new URLSearchParams(window.location.search).get('token');
    if (!token || !isValidToken(token)) {
        alert('无效的访问令牌，请从登录页面访问。');
        window.location.href = 'https://skyfly410.github.io/bmfile-bmpic.html'; // 重定向到登录页面
    }
});

function isValidToken(token) {
    // 这里应该有验证token的逻辑
    return token === 'expectedTokenValue';
}
