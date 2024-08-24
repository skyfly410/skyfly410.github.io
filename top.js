// top.js

// 选择“回到顶部”按钮
const backToTopButton = document.getElementById('backToTop');

// 监听滚动事件
window.addEventListener('scroll', () => {
    // 检查页面滚动距离
    if (window.scrollY > 100) { // 如果滚动超过100px
        backToTopButton.style.display = 'block'; // 显示按钮
    } else {
        backToTopButton.style.display = 'none'; // 隐藏按钮
    }
});

// 监听“回到顶部”按钮的点击事件
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // 阻止链接的默认行为
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动到顶部
    });
});
