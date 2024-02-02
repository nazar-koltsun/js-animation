const nav = document.querySelector('nav');
const navlinks = nav.querySelectorAll('.nav-links li');

const animation = gsap
  .timeline({ paused: true })
  .to('.nav-open', { opacity: 1, pointerEvents: 'all' })
  .to('.cover', { right: '-20%', }, 0.4)

navlinks.forEach((link) =>
  link.addEventListener('mouseenter', () => {
    animation.play();
  })
);

nav.addEventListener('mouseleave', () => {
  animation.reverse();
});

