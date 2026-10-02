function validateAndRedirect() {
  var password=document.getElementById('password').value;
  var correctHash = "3463e71e843570640427f63637042760812024356126609043f881c5d4228731";
  var inputHash = sha256(password);
  if (inputHash === correctHash){
    sessionStorage.setItem('passwordVerified', 'true');
    window.location.href = 'https://skyfly410.github.io/bmfile-bmpv.html';
    return false;
  } else {
    alert('请认真输入，要不然我就不给你看了，满足不了你的好奇心了！');
    return false;
  }
}