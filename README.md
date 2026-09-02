# Frank's Land Report — Sales Page

Single-page sales site for **"The Home Buyer's Secret Files"**
($29.99 ebook bundle) and its three standalone guides, sold via Gumroad.
Built as a **re-skinnable template**: the structure is shared across all of
the client's channels; only theme + copy + product change per niche.

- **Live preview:** https://yt-wizards.github.io/Rick-Site/ (GitHub Pages,
  auto-deploys from `main` a minute or two after every push)
- **Production (client-hosted):** frankslandreport.com — Netlify, deployed by
  the client per [LAUNCH-GUIDE.md](LAUNCH-GUIDE.md)
- **Checkout:** Gumroad, account `rickscontentforge` (client's own account)

No build step — plain HTML/CSS/JS. Open `index.html` in a browser and it works.

---

## 1. File map

| File | What it is |
|---|---|
| `index.html` | The entire sales page, section by section (see §2) |
| `css/styles.css` | All styling. The `THEME` block at the top is the re-skin point |
| `js/main.js` | Sticky bar, FAQ accordion, exit-intent modal, promo countdown |
| `assets/avatar.jpg` | Channel avatar (pulled from YouTube) |
| `assets/banner.jpg` | Channel banner — used as the hero / final-CTA background |
| `assets/covers/*.jpg` | Real product covers (cropped from the client's art) |
| `terms.html`, `privacy.html`, `refund.html` | Legal pages, written under the Frank's Land Report brand |
| `LAUNCH-GUIDE.md` | **Client-facing** step-by-step: Netlify deploy + Namecheap domain |
| `README.md` | This file — full team documentation |

## 2. Page structure (top to bottom)

Rebuilt 2026-09-02 to the client's brief (`website changes .pdf`), after the
first version converted badly. All copy in the brief is his and ships verbatim.

1. **Promo strip** — countdown, hidden. No countdown on the page for now (§5)
2. **Sticky topbar** — appears after scrolling past the hero
3. **Hero** — headline "Buy the Right Home. Avoid the Costly Mistakes. Keep
   Your Money.", channel banner behind a forest-green overlay, stats
   (90+ things to check / 50 states / $0 a month)
4. **The Real Cost** — six calm room-by-room cards, then the itemised
   "what one mistake costs" box, closing line, and small print
   (card texts are the client's final copy — don't edit without him)
5. **Meet Frank** — persona block, "not a realtor, not a lawyer" quote.
   The client asked for this section to stay untouched; it's the trust anchor
6. **Pricing** — three single-guide cards ($14.99 each) + wide bundle card
   ($29.99, honest "about $45 separately")
7. **Proof** — three real YouTube comments, quoted verbatim. Never invent
   testimonials; any sample card must be labelled "SAMPLE — replace before
   publishing"
8. **Guarantee** — 7-day money-back (must always match Gumroad's setting)
9. **FAQ** — six Q&As from the brief, including the "is this advice?" answer
10. **Email capture + exit-intent modal** — free "10 questions" lead magnet.
    **Hidden and not wired** (§6)
11. **Final CTA** and **footer** with the verbatim educational disclaimer

## 3. Deploy & domain (what the client does)

The client owns hosting, domain, and payments; we ship files + instructions.
Full click-by-click version: [LAUNCH-GUIDE.md](LAUNCH-GUIDE.md). Summary:

1. **Get the files** — Download ZIP:
   `https://github.com/YT-Wizards/Rick-Site/archive/refs/heads/main.zip`
   Unzip; the folder that directly contains `index.html` is the site.
2. **Netlify** — free signup → app.netlify.com/drop → drag the folder in.
   Site is live at `<name>.netlify.app` in ~30 s. Rename the site to
   `frankslandreport` in Site settings for a clean subdomain.
3. **Connect frankslandreport.com** (bought on Namecheap):
   - Netlify → Domain management → Add a domain → `frankslandreport.com`
   - Namecheap → Domain List → Manage → **Advanced DNS**:
     - delete the default parking CNAME and URL-redirect records
     - add **A Record** · Host `@` · Value `75.2.60.5`
     - add **CNAME Record** · Host `www` · Value `frankslandreport.netlify.app`
   - wait 10–30 min → Netlify → Verify → HTTPS cert issues automatically
4. **Updating the site later** — Netlify → Deploys tab → drag the new folder.
   That's the whole redeploy process.

Only ever publish the **domain** URL in video descriptions — never the
netlify.app or github.io addresses.

## 4. Checkout links (Gumroad)

The four buy buttons carry `data-checkout` attributes in `index.html`:

| Button | data-checkout | URL |
|---|---|---|
| Buying a Home Safely | `safety` | https://rickscontentforge.gumroad.com/l/cheap-house-catches |
| The Smart-Choices Home Guide | `smart` | **`#` — product doesn't exist yet** |
| Notebook | `notebook` | https://rickscontentforge.gumroad.com/l/cheap-living-notebook |
| Bundle | `bundle` | https://rickscontentforge.gumroad.com/l/cheap-living-collection |

Gumroad slugs predate the renames — that's fine, the URLs are stable. If the
client ever changes a product URL, update the matching `href` and redeploy.

The old land guide (`/l/cheap-land-catches`) is **off the page** as of the
2026-09-02 rebuild — the client dropped it from the lineup. The Gumroad
product still exists, so old video-description links keep working.

**The site must not be deployed while the Smart-Choices `href` is `#`.**
A dead buy button on a live sales page is worse than no card at all.

## 5. Launch-promo countdown (honest urgency only)

`js/main.js`, top of the promo section:

```js
const PROMO_ENDS_AT = null; // no countdown on the page (client brief 2026-09-02)
```

- The launch promo ran 2026-07-28 → 2026-08-04 ($24.99, real Gumroad
  discount) and expired on its own. The client's rebuild brief says **no
  launch countdown for now**, so this is back to `null`.
- Setting `PROMO_ENDS_AT` again turns on: the countdown strip, $24.99 on the
  bundle card / topbar / final CTA, the crossed-out $44.97, and the
  "Launch price" badge. When the timer hits zero the page reverts to
  regular $29.99 pricing by itself (`BUNDLE_PRICING` in `js/main.js`
  holds all the strings).
- **Policy (agreed with the client 2026-07-26, restated in his own brief
  2026-09-02):** no per-visitor resetting timers, no fake "people viewing"
  counters, no invented testimonials. Fake urgency risks Gumroad account
  suspension and FTC action, and the brand is built on trust. Real Gumroad
  purchase popups are fine. Don't relitigate this.

## 6. Not wired yet / waiting on client

- [ ] **Smart-Choices Home Guide**: the PDF and the cover are still being
      made, and the Gumroad product doesn't exist. Its buy button is `#`.
      **Blocks deploy** (§4).
- [ ] **New cover art**: the client is sending four new covers as image
      files. Until then, three cards reuse the old artwork and the
      Smart-Choices card shows the CSS mock cover. See the `COVER ART TODO`
      comment in `index.html`.
- [ ] **Gumroad renames**: the house guide → "Buying a Home Safely", the
      bundle → "The Home Buyer's Secret Files". Names must read identically
      on site, cover, and Gumroad — his own rule.
- [ ] **"Save 50%" claim**: his brief keeps a *SAVE 50%* banner and his
      bundle cover carries one, but his own price line says "$29.99 (about
      $45 separately)", which is about a third off. Asked him to pick:
      drop the bundle to $22.49, or change the badge to "save $15". The
      honest badge stays on the page until he answers.
- [x] **Email forms**: hidden for launch (client decision 2026-07-27 — no
      email backend yet). The section has `hidden` in `index.html` and the
      exit-intent modal is off via `LEAD_MAGNET_ENABLED = false` in
      `js/main.js`. To re-enable later: flip both and wire the form actions
      to his email service.
- [x] **Viewer quotes**: three real YouTube comments from the client's
      screenshots, quoted verbatim (added 2026-07-30).
- [x] **Support email**: support@frankslandreport.com forwards to the
      client's inbox (he set up Namecheap Email Forwarding, confirmed
      2026-07-28).

## 7. Re-skin checklist (new niche = new channel)

1. Copy the repo into a new repo for that channel.
2. `css/styles.css` → `THEME` block: swap the palette + fonts. Current
   palette is derived from the channel's YouTube branding (forest green
   badge, cream, golden-hour amber, subscribe-red CTA) — do the same
   exercise with the new channel's banner.
3. `assets/` → new avatar + banner (grab from the channel page), new covers
   into `assets/covers/`. If there's no cover art yet, use the CSS mock
   covers (`.book-cover` markup is kept in the stylesheet as a fallback).
4. `index.html` → rewrite copy section by section; structure, classes, and
   section order stay identical. Keep every `data-checkout` button and the
   promo strip markup.
5. New Gumroad product links (§4), new domain (§3), legal pages, footer
   disclaimer adapted to the new brand name.
6. Deploy the same way (§3).

## 8. Copy rules (apply to every niche)

- Persona is a **researcher, not an advisor** — questions, checklists,
  research; never advice. The footer disclaimer ships verbatim on every
  page and inside every PDF.
- Banned words: "system", "blueprint", "guaranteed" (outcomes), anything
  promising results. Allowed framing: guide, checklist, notebook, questions.
- Refund window on the site must always equal the Gumroad setting
  (currently **7 days** everywhere).
- No fake urgency, no fake social proof — see §5.

## 9. Working on this repo

- Local preview: just open `index.html` in a browser.
- Every push to `main` auto-updates the GitHub Pages preview within ~1–2 min.
- The client's production site does **not** auto-update — he redeploys by
  dragging a fresh ZIP into Netlify (send him one after each approved change).
