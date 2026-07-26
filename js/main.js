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

// Launch-promo countdown.
// Set PROMO_ENDS_AT to the real ISO datetime of an actual Gumroad discount
// deadline (one fixed moment for everyone). Leave null to keep the strip
// hidden. The strip hides itself automatically once the deadline passes —
// it never resets per visitor.
const PROMO_ENDS_AT = null; // e.g. '2026-07-28T23:59:00-05:00'

const promoStrip = document.getElementById('promo-strip');
const promoTimer = document.getElementById('promo-timer');

if (PROMO_ENDS_AT && promoStrip && promoTimer) {
  const end = new Date(PROMO_ENDS_AT).getTime();

  const tick = () => {
    const left = end - Date.now();
    if (left <= 0) {
      promoStrip.hidden = true;
      clearInterval(timerId);
      return;
    }
    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);
    promoTimer.textContent =
      String(h).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');
  };

  const timerId = setInterval(tick, 1000);
  tick();
  promoStrip.hidden = false;
}
