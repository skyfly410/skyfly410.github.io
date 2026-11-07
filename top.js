// 选择“回到顶部”按钮
const backToTopBtn = document.getElementById('backTopBtn');

// 监听滚动事件
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// 拖动相关变量
let isDrag = false;
let startX = 0;
let startY = 0;
let btnLeft = 0;
let btnTop = 0;

// 监听“拖动按钮”的触摸开始 / 鼠标按下
backToTopBtn.addEventListener('mousedown', startDrag);
backToTopBtn.addEventListener('touchstart', startDrag, { passive: true });

function startDrag(e) {
  isDrag = true;

  const touch = e.touches ? e.touches[0] : e;
  startX = touch.clientX;
  startY = touch.clientY;

  const rect = backToTopBtn.getBoundingClientRect();
  btnLeft = rect.left;
  btnTop = rect.top;

  // 拖动时取消默认行为，避免触发点击
  e.preventDefault();
}

// 监听拖动
document.addEventListener('mousemove', moveDrag);
document.addEventListener('touchmove', moveDrag, { passive: true });

function moveDrag(e) {
  if (!isDrag) return;

  const touch = e.touches ? e.touches[0] : e;

  let dx = touch.clientX - startX;
  let dy = touch.clientY - startY;

  let newLeft = btnLeft + dx;
  let newTop = btnTop + dy;

  // 限制按钮不拖出屏幕
  const maxX = window.innerWidth - backToTopBtn.offsetWidth;
  const maxY = window.innerHeight - backToTopBtn.offsetHeight;

  if (newLeft < 0) newLeft = 0;
  if (newTop < 0) newTop = 0;
  if (newLeft > maxX) newLeft = maxX;
  if (newTop > maxY) newTop = maxY;

  backToTopBtn.style.left = newLeft + 'px';
  backToTopBtn.style.top = newTop + 'px';
  backToTopBtn.style.right = 'auto';
  backToTopBtn.style.bottom = 'auto';
}

// 监听松开
document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function endDrag(e) {
  if (!isDrag) return;
  isDrag = false;

  const touch = e.changedTouches ? e.changedTouches[0] : e;

  const disX = Math.abs(touch.clientX - startX);
  const disY = Math.abs(touch.clientY - startY);

  // 只有移动很小，才算点击返回顶部
  if (disX < 12 && disY < 12) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}