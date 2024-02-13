const headerNav = document.querySelector('.nav__links');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = headerNav.getAttribute('data-visible');

  if (visibility === 'false') {
    headerNav.setAttribute('data-visible', true); 
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    headerNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);

  }
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})