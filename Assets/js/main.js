console.log("%c i'm scared of job applications ", "background: #222; color: #ff6b6b; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px; border: 2px solid #ff6b6b;");

const cursor = document.getElementById('custom-cursor');

// Only run if the cursor element exists 
if (cursor) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isHovering = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });


  const interactiveElements = document.querySelectorAll('a, button, .project-card, .nav-link');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.background = 'rgba(255, 107, 107, 0.3)';
      cursor.style.borderColor = '#ff6b6b';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.background = 'rgba(255, 255, 255, 0.1)';
      cursor.style.borderColor = '#ffffff';
    });
  });

  function cursorLoop() {
    // Smooth interpolation (Lerp) 
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(cursorLoop);
  }

  cursorLoop();
}