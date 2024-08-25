// picbig.js
// 移除所有与边框相关的JavaScript代码
var modal = document.getElementById("myModal");
var img = document.getElementById("img01");
var modalImg = document.getElementsByClassName("image");
var captionText = document.getElementById("caption");
var closeBtn = document.getElementsByClassName("close")[0];

// 获取所有图片容器
var images = document.querySelectorAll('.image-container .image');

// 点击图片时执行的函数
function openModal(event) {
  modal.style.display = "block";
  img.src = this.src;
  captionText.innerHTML = this.alt;
}

// 点击关闭按钮时执行的函数
function closeModal() {
  modal.style.display = "none";
}

// 点击任何地方关闭模态框
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 为每个图片添加点击事件
images.forEach(function(image) {
  image.onclick = openModal;
});

// 关闭按钮的点击事件
closeBtn.onclick = closeModal;
