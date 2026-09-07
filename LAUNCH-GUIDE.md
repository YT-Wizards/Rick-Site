# How to Launch Your Site — Step by Step

This guide takes you from "folder of files" to "live site on your own domain."
Everything runs on **your** accounts and cards — you own the site, the domain,
and the revenue. Total time: about 30–40 minutes. No technical skills needed.

If you get stuck at any step, message me and we'll walk through it together.

---

## What you'll end up with

- Your site live at **your domain** (e.g. frankslandreport.com)
- Hosted for **free** on Netlify (a standard hosting service for sites like this)
- Secure padlock (HTTPS) — automatic, no setup
- You can update the site later by dragging a new folder — nothing to install

---

## Step 1 — Get the site files (2 min)

1. Download the current version:
   **https://github.com/YT-Wizards/Rick-Site/archive/refs/heads/main.zip**
   This link always gives you the latest files — bookmark it.
2. Unzip it. Inside you'll get a folder containing `index.html`, `css`, `js`,
   `assets` and so on. **That inner folder is the site** — the one that has
   `index.html` sitting directly in it, not the one wrapped around it.

## Step 2 — Put the site online with Netlify (10 min)

1. Go to **netlify.com** and click **Sign up** (free plan is all you need).
   Sign up with your email — you don't need to connect GitHub.
2. After signing in, go to **app.netlify.com/drop**.
3. Drag the unzipped site folder from your computer into the drop area.
4. Wait ~30 seconds. Your site is now live at a temporary address like
   `random-name-12345.netlify.app`. Open it and check it looks right.
5. Optional: in **Site settings → Change site name**, rename it to something
   readable like `frankslandreport.netlify.app`.

**To update the site later:** open your site in Netlify → **Deploys** tab →
drag the new folder into the page. The site updates in seconds.

## Step 3 — Your domain ✓ (already done)

You already own **frankslandreport.com** on Namecheap — that's all this step
needed. (Namecheap works exactly the same as any other registrar for our
purposes.)

## Step 4 — Connect the domain to the site (10 min)

**In Netlify:**

1. Open your site → **Domain management** → **Add a domain**.
2. Type `frankslandreport.com` → **Add domain**.
   Netlify will say "Check DNS configuration" — that's expected, keep going.

**In Namecheap:**

3. Sign in → **Domain List** → next to frankslandreport.com click **Manage**.
4. Open the **Advanced DNS** tab.
5. Delete the default records Namecheap put there (usually a "CNAME www →
   parkingpage..." and a "URL Redirect" record).
6. Click **Add New Record** twice and create these two:
   - **A Record** · Host: `@` · Value: `75.2.60.5` · TTL: Automatic
   - **CNAME Record** · Host: `www` · Value: your Netlify address
     (e.g. `frankslandreport.netlify.app`) · TTL: Automatic
7. Save all changes (the green check marks next to each row).

**Back in Netlify:**

8. Wait 10–30 minutes (DNS changes take a little time), then on the Domain
   management page click **Verify** / **Retry DNS verification**.
9. Netlify will automatically issue the HTTPS certificate (the padlock).
   When the domain shows a green check — you're live.

## Step 5 — Gumroad products and checkout links ✓ (already set up)

The four buy buttons on the site point at these products:

| Button on the site | Price | Gumroad link |
|---|---|---|
| Buying a Home Safely | $14.99 | `/l/buying-a-home-safely` |
| The Smart-Choices Home Guide | $14.99 | `/l/Smart-Choices-Home-Guide` |
| The State-by-State Cheap-Living Notebook | $14.99 | `/l/cheap-living-notebook` |
| The Home Buyer's Secret Files | $29.99 | `/l/home-buyers-secret-files` |

All four sit under `rickscontentforge.gumroad.com`. If you ever change a
product's URL, tell me and I'll repoint the button — a changed slug leaves a
redirect behind, so the old link keeps working and it's easy to miss that two
buttons have quietly ended up on the same product.

Three things to keep in sync, because the site can't read them from Gumroad:

- **Prices.** The site prints $14.99 and $29.99. Change one in Gumroad and it
  has to change on the site too.
- **The comparison figure.** Three guides at $14.99 come to $44.97, so the
  bundle saves $15. Any "bought separately" number, on the site, on a cover,
  or in a Gumroad description, has to match that.
- **The refund window.** 7 days everywhere: your Gumroad setting, the site's
  guarantee band, the FAQ, and `refund.html`.

Tip: in each product's settings, keep "Generate license keys" off.

---

## Costs summary

| Item | Who pays | Cost |
|---|---|---|
| Hosting (Netlify) | you | $0 |
| Domain (Namecheap) | you | ~$12–20/year |
| Payments (Gumroad) | you | % per sale only |

## Troubleshooting

- **Site shows but looks broken** → the folder you dragged must be the one
  that directly contains `index.html` (not a folder containing another folder).
- **Domain not working after an hour** → in Namecheap Advanced DNS,
  double-check the A record is exactly `75.2.60.5`, and that the old
  parking/redirect records from step 4.5 are really gone.
- **Anything else** → message me a screenshot and I'll sort it out with you.
