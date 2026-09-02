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

// Lead magnet (email section + exit-intent modal).
// Disabled for launch — the client's email backend isn't set up yet.
// To re-enable: set to true AND remove `hidden` from the email section
// in index.html, then wire both form actions to the email service.
const LEAD_MAGNET_ENABLED = false;

const modal = document.getElementById('exit-modal');

if (LEAD_MAGNET_ENABLED && modal) {
  const showExitModal = () => {
    if (sessionStorage.getItem('exitShown')) return;
    sessionStorage.setItem('exitShown', '1');
    modal.classList.add('visible');
  };

  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && e.clientY <= 0) showExitModal();
  });

  modal.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => modal.classList.remove('visible'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('visible');
  });
}

// Launch promo — honest urgency only.
// Set PROMO_ENDS_AT to the real end datetime of the real Gumroad discount
// (one fixed moment for everyone; the client changes the Gumroad price for
// the same window). While the promo is live: countdown strip + launch
// pricing on the bundle. When it ends the page reverts to regular pricing
// by itself — never a per-visitor timer, never a reset.
// The launch promo ran 2026-07-28 to 2026-08-04 and is over. Per the client's
// rebuild brief (2026-09-02) there is no countdown on the page for now, so this
// stays null. To run another real discount later, set it to the real end
// datetime of the real Gumroad discount.
const PROMO_ENDS_AT = null;

const BUNDLE_PRICING = {
  regular: '$29.99',
  launch: '$24.99',
  separately: '$44.97',
  regularBadge: '★ Best value — save $15',
  launchBadge: '★ Launch price — save $19.98',
  regularNote: 'About $45 separately · one-time · instant download · yours forever, no subscription',
  launchNote: 'Launch price — back to $29.99 when the timer ends',
};

const promoStrip = document.getElementById('promo-strip');
const promoTimer = document.getElementById('promo-timer');
const bundlePrice = document.getElementById('bundle-price');
const bundlePriceOld = document.getElementById('bundle-price-old');
const bundlePriceNote = document.getElementById('bundle-price-note');
const bundleBadge = document.getElementById('bundle-badge');
const bundlePriceTexts = document.querySelectorAll('.bundle-price-text');

function setBundlePricing(promoActive) {
  if (!bundlePrice) return;
  bundlePrice.textContent = promoActive ? BUNDLE_PRICING.launch : BUNDLE_PRICING.regular;
  bundlePriceOld.hidden = !promoActive;
  bundlePriceNote.textContent = promoActive ? BUNDLE_PRICING.launchNote : BUNDLE_PRICING.regularNote;
  bundleBadge.textContent = promoActive ? BUNDLE_PRICING.launchBadge : BUNDLE_PRICING.regularBadge;
  bundlePriceTexts.forEach((el) => {
    el.textContent = promoActive ? BUNDLE_PRICING.launch : BUNDLE_PRICING.regular;
  });
}

if (PROMO_ENDS_AT && promoStrip && promoTimer) {
  const end = new Date(PROMO_ENDS_AT).getTime();
  let timerId;

  const endPromo = () => {
    promoStrip.hidden = true;
    setBundlePricing(false);
  };

  const tick = () => {
    const left = end - Date.now();
    if (left <= 0) {
      endPromo();
      clearInterval(timerId);
      return;
    }
    const d = Math.floor(left / 86400000);
    const h = Math.floor((left % 86400000) / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);
    promoTimer.textContent =
      (d > 0 ? d + 'd ' : '') +
      String(h).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');
  };

  if (end > Date.now()) {
    setBundlePricing(true);
    promoStrip.hidden = false;
    timerId = setInterval(tick, 1000);
    tick();
  }
}
