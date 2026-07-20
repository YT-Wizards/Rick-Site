// Sticky top bar — show after scrolling past the hero
const topbar = document.getElementById('topbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const past = window.scrollY > (hero ? hero.offsetHeight * 0.6 : 400);
  topbar.classList.toggle('visible', past);
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

// Exit-intent modal — desktop only, once per session
const modal = document.getElementById('exit-modal');

function showExitModal() {
  if (sessionStorage.getItem('exitShown')) return;
  sessionStorage.setItem('exitShown', '1');
  modal.classList.add('visible');
}

document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget && e.clientY <= 0) showExitModal();
});

modal.querySelectorAll('[data-close]').forEach((btn) => {
  btn.addEventListener('click', () => modal.classList.remove('visible'));
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('visible');
});

// Checkout links — placeholder until real checkout URLs are wired in.
// TODO: remove this handler once data-checkout hrefs point to Gumroad/Lemon Squeezy.
document.querySelectorAll('[data-checkout]').forEach((a) => {
  a.addEventListener('click', (e) => {
    if (a.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Checkout link not connected yet (demo mode).');
    }
  });
});
