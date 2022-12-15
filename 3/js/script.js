const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('.navigation__btn');

// if (document.querySelector('.no-js')) {
//   body.classList.remove('no-js');
// }

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('navigation--opened');
  })
}
