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
| Buying a Home Safely | `safety` | https://rickscontentforge.gumroad.com/l/buying-a-home-safely |
| The Smart-Choices Home Guide | `smart` | https://rickscontentforge.gumroad.com/l/Smart-Choices-Home-Guide |
| Notebook | `notebook` | https://rickscontentforge.gumroad.com/l/cheap-living-notebook |
| Bundle | `bundle` | https://rickscontentforge.gumroad.com/l/home-buyers-secret-files |

All four verified 2026-09-07: distinct products, right copy, $14.99 / $14.99 /
$14.99 / $29.99. The Smart-Choices slug is capitalised — the lowercase form
redirects, so use the capitalised one and skip the hop. If the client ever
changes a product URL, update the matching `href`, redeploy, and re-check that
no two buttons land on the same product.

**Superseded products still live in Gumroad** — `/l/cheap-house-catches`,
`/l/cheap-living-collection` and `/l/cheap-land-catches` all still return 200.
The first two are now duplicates of products on the page under their old
names, so a buyer arriving from an old video description gets the old title
and the old files. Worth asking the client to unpublish or repoint them; the
land guide is deliberately off the page and can stay as it is.

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

- [ ] **Wide "Secret Files" banner**: the client sent one (1693×929) with no
      instruction on where it goes. Not in the repo yet — ask him first.
- [ ] **Superseded Gumroad products**: the client said he'd unpublish
      `/l/cheap-house-catches` ("40 Catches Hidden in Cheap Houses") and
      `/l/cheap-living-collection` ("The Cheap Living Collection"); both still
      returned 200 on 2026-09-07, as does `/l/cheap-land-catches`.
- [ ] **Product name has no hyphen**: Gumroad says "The Smart Choices Home
      Guide", the site and the cover say "The Smart-Choices Home Guide".
      Cosmetic, but it's his own read-identically rule.
- [x] **Two buttons, one product** (found 2026-09-07, fixed by the client the
      same day). `/l/smart-choices-home-guide` used to 302 to
      `/l/buying-a-home-safely` — one product wearing the safety title and the
      Smart-Choices description, so cards 1 and 2 sold the same file. There
      are now four distinct products, each with the right copy at the right
      price. Worth re-checking after any slug change: a renamed slug leaves a
      redirect behind, so two buttons can quietly converge without 404ing.
- [x] **Bundle description maths**: was "the three run $59.97 … You keep the
      other half"; now reads "$14.99 × 3 = $44.97 … You save nearly $15" and
      the banner ribbon says BEST VALUE $15 OFF. Site and store agree.
- [x] **Notebook cover**: received 2026-09-07, so all four covers are now his
      flat artwork in one style.
- [x] **Smart-Choices Home Guide**: Gumroad product live, button wired
      (2026-09-05).
- [x] **New cover art**: his covers arrive as PNGs mounted on a cream board
      with a painted drop shadow. Everything outside the cover has to be
      trimmed off (the card draws its own shadow), then saved at 2× the CSS
      width: 480px for `safety.jpg` / `smart-choices.jpg` / `notebook.jpg`,
      640px for `bundle.jpg`. A plain luminance cut doesn't work because the
      notebook cover is gold — walk in from each edge instead, dropping lines
      that are still within ~55 of the mount colour, and skip the trim
      entirely when the corner pixel is dark (the bundle art is full-bleed).
- [x] **Gumroad renames**: he made new products rather than renaming, so the
      slugs are clean and the names match the covers.
- [x] **"Save 50%" claim**: settled 2026-09-02. The client keeps the pricing
      as it is and the badge now reads "Best value — save $15" ($44.97 minus
      $29.99). **His bundle cover art still carries a SAVE 50% ribbon** — it
      has to come off before the cover goes on the page, or the site and the
      cover contradict each other.
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
