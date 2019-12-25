window.onload = TopMenuMinimizer;
let hamburgerBtn = document.getElementById('js-hamburger-toggle')

function mainMenuDisplayToggler(e) {
  document.children[0].classList.toggle('show-main-menu')
  this.classList.toggle('is-active')
}
hamburgerBtn.addEventListener('click', mainMenuDisplayToggler)

function TopMenuMinimizer() {

  var breakpoint = 100; // scroll position for when to minimize top menu when scrolling in 992px view
  var outermost = document.querySelector('.outermost');


  if (window.innerWidth > 992 &&
    document.documentElement.scrollTop < breakpoint) {
    outermost.classList.add('j-top-menu-full');
  } else {
    outermost.classList.remove('j-top-menu-full');
  }
}

document.addEventListener('scroll', TopMenuMinimizer)
window.addEventListener('resize', TopMenuMinimizer)

function stickyElement(e) { // if the bottom screen reach the the bottom of the sticky element
  console.log(e);
  let elements = document.querySelectorAll('.js-sticky'); // get all elements with sticky-nw
  elements.forEach(el => {
    if (window.innerWidth >= 992) {

      var parent = window.getComputedStyle(el.parentElement, null);
      let parentSidePadding = parseInt(parent.getPropertyValue('padding-left')) + parseInt(parent.getPropertyValue('padding-right'));
      let parentLeftPadding = parseInt(parent.getPropertyValue('padding-left'));

      let scrollPosBottom = document.documentElement.scrollTop + window.innerHeight;
      let elScrollPosBottom = el.parentElement.offsetTop + el.offsetHeight;

      if (scrollPosBottom >= elScrollPosBottom) {
        if (el.style.width === "" && el.style.left == "") {
          el.style.width = `${el.parentElement.clientWidth - parentSidePadding}px`;
          el.style.left = `${el.parentElement.offsetLeft + parentLeftPadding}px`;
        }
        el.style.position = 'fixed';
        el.style.bottom = `0`;
        if (scrollPosBottom >= el.parentElement.offsetTop + el.parentElement.clientHeight) {
          el.style.position = 'relative';
          el.style.bottom = `-${el.parentElement.clientHeight - el.clientHeight}px`
          el.style.left = '';
        }
      } else {
        el.style.width = '';
        el.style.left = '';
        el.style.position = '';
        el.style.bottom = '';
      }
    } else {
      el.style.width = '';
      el.style.left = '';
      el.style.position = '';
      el.style.bottom = '';
    }
  });
}

document.addEventListener('scroll', stickyElement);
window.addEventListener('resize', stickyElement);
