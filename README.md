# Frank's Land Report — Sales Page

Single-page sales site for "The Complete Cheap-Living Field Edition" ($29.99 ebook bundle),
built as a **re-skinnable template**: the structure is shared across all of the
client's channels; only theme + copy + product change per niche.

No build step — plain HTML/CSS/JS. Open `index.html` in a browser, or deploy the
folder as-is to Netlify / Vercel / GitHub Pages.

**Handoff model:** the client hosts, deploys, and pays for everything himself —
we deliver the files + [LAUNCH-GUIDE.md](LAUNCH-GUIDE.md) (client-facing,
step-by-step: Netlify drag-and-drop, GoDaddy domain, DNS). Preview for design
review: https://yt-wizards.github.io/Rick-Site/ (auto-updates on push to main).

## How to re-skin for a new niche

1. Copy the repo.
2. Edit the `THEME` block at the top of `css/styles.css` — all colors and fonts live there.
3. Replace the copy in `index.html` section by section (structure stays identical).
4. Swap `assets/` (avatar, favicon) and the checkout links (`data-checkout` buttons).
5. Update `terms.html` / `privacy.html` / `refund.html` and the footer disclaimer.

## Copy rules (client requirement — applies to every niche)

- Persona is a **researcher, not an advisor** — questions, checklists, research; never advice.
- Banned words: "system", "blueprint", "guaranteed" (outcomes), anything promising results.
- Allowed framing: guide, checklist, notebook, questions.
- The educational disclaimer in the footer ships verbatim on every page and inside every PDF.
- No fake urgency: no fake counters, fake purchase popups, or invented testimonials.
  Social proof = real viewer comments quoted with permission.

## TODO before launch

- [ ] Real checkout links (Gumroad / Lemon Squeezy — awaiting client's account)
- [x] Channel avatar + banner pulled from YouTube into `assets/` (ask client for higher-res originals if available)
- [ ] Real viewer comments in the proof section (visibly marked placeholders now)
- [ ] Wire both email forms to the email service (Kit / MailerLite)
- [ ] Legal entity name in `terms.html` / `privacy.html`
- [ ] Support email in the footer
- [x] Prices confirmed by client 2026-07-24: singles $14.99, bundle $29.99
- [ ] Client is writing the three guides — swap in his exact catch-card copy when drafts arrive
- [ ] Ask client: keep bundle name "The Cheap Land Buyer's Collection" or rename to match the wider lineup?
- [ ] Domain: frankslandreport.com bought on Namecheap (default DNS still parked) — client connects it per LAUNCH-GUIDE after Netlify deploy
