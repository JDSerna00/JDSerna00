console.log("%c i'm scared of job applications ", "background: #222; color: #ff6b6b; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px; border: 2px solid #ff6b6b;");

const cursor = document.getElementById('custom-cursor');

// Only run if the cursor element exists 
if (cursor) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isFirstMove = true;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (isFirstMove) {
      cursor.style.opacity = 1;
      isFirstMove = false;
    }
  });

  function cursorLoop() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(cursorLoop);
  }

  cursorLoop();
}