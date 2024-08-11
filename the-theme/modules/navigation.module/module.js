document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.js-navigation-burger');
  const menu = document.querySelector('.js-nav-items');  

  // Click event listener for mobile burger menu
  hamburgerButton.addEventListener('click', () => {
    if(menu.classList.contains('nav-items--revealed')) {
      menu.classList.replace('nav-items--revealed', 'nav-items');
    } else if(menu.classList.contains('nav-items')) {
      menu.classList.replace('nav-items', 'nav-items--revealed');
    }
  });
});