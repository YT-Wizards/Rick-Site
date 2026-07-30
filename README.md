# Frank's Land Report — Sales Page

Single-page sales site for **"The Complete Cheap-Living Field Edition"**
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
| `terms.html`, `privacy.html`, `refund.html` | Legal pages (Terms/Privacy still placeholders) |
| `LAUNCH-GUIDE.md` | **Client-facing** step-by-step: Netlify deploy + Namecheap domain |
| `README.md` | This file — full team documentation |

## 2. Page structure (top to bottom)

1. **Promo strip** — launch countdown, hidden until configured (§5)
2. **Sticky topbar** — appears after scrolling past the hero
3. **Hero** — headline "The Deal Is Cheap. The Mistakes Aren't.", channel
   banner behind a forest-green overlay, product stats (50/40/50)
4. **Catches** — six problem cards: 4 land + 1 house + 1 relocation
   (card texts are the client's final copy — don't edit without him)
5. **Meet Frank** — persona block, "not a realtor, not a lawyer" quote
6. **Pricing** — three single-guide cards ($14.99 each) + wide bundle card
   ($29.99, "$59.96 value")
7. **Proof** — viewer quotes. **Still placeholders** — waiting for real
   comment screenshots from the client. Never invent testimonials.
8. **Guarantee** — 7-day money-back (must always match Gumroad's setting)
9. **FAQ** — includes the "is this advice?" disclaimer answer
10. **Email capture + exit-intent modal** — free "10 questions" lead magnet.
    **Forms are not wired yet** (§6)
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
| Land guide | `land` | https://rickscontentforge.gumroad.com/l/cheap-land-catches |
| House guide | `houses` | https://rickscontentforge.gumroad.com/l/cheap-house-catches |
| Notebook | `notebook` | https://rickscontentforge.gumroad.com/l/cheap-living-notebook |
| Bundle | `bundle` | https://rickscontentforge.gumroad.com/l/cheap-living-collection |

The Gumroad slug for the bundle predates the rename — that's fine, the URL
is stable. If the client ever changes a product URL, update the matching
`href` and redeploy.

## 5. Launch-promo countdown (honest urgency only)

`js/main.js`, top of the promo section:

```js
const PROMO_ENDS_AT = null; // set on launch day, e.g. '2026-07-27T21:00:00-05:00'
```

- Agreed launch promo (client, 2026-07-27): bundle at **$24.99** for 7 days
  from launch, then back to regular **$29.99**. Crossed-out comparison price
  is the honest **$44.97** (three guides bought separately). The client
  changes the Gumroad price for the same window and sends the exact end
  datetime on launch day.
- Setting `PROMO_ENDS_AT` turns on: the countdown strip, $24.99 on the
  bundle card / topbar / final CTA, the crossed-out $44.97, and the
  "Launch price" badge. When the timer hits zero the page reverts to
  regular $29.99 pricing by itself (`BUNDLE_PRICING` in `js/main.js`
  holds all the strings).
- Leave `null` → strip hidden, regular pricing shown.
- **Policy (agreed with the client 2026-07-26):** no per-visitor resetting
  timers, no fake "people viewing" counters, no invented testimonials.
  Fake urgency risks Gumroad account suspension and FTC action, and the
  brand is built on trust. The client explicitly approved the honest
  version — don't relitigate this.

## 6. Not wired yet / waiting on client

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
- [ ] **Countdown date**: waiting for the client's Gumroad discount deadline.

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
