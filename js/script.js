const smallnav = document.querySelector('.smallnav');
const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
    if (smallnav.style.height === '0px' || smallnav.style.height === '') {
        smallnav.style.height = '208px';  
    } else {
        smallnav.style.height = '0';
    }
});

/*--------for right click events---------*/
window.addEventListener('contextmenu', (event) => {
    event.preventDefault();  // Disable right-click
    alert("Right-click is disabled!");
});

window.addEventListener('keydown', (event) => {
    // Disable F12
    if (event.key === 'F12') {
        event.preventDefault();
        alert("F12 is disabled!");
    }
    // Disable Ctrl+Shift+I (DevTools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        alert("Developer Tools are disabled!");
    }
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
        alert("View Source is disabled!");
    }
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';  // Restores original size after 0.3s
    }, 200);
  });
});

