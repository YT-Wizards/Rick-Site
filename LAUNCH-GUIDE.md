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

1. Open the site's GitHub page (I'll send the link).
2. Click the green **Code** button → **Download ZIP**.
3. Unzip it. You'll get a folder containing `index.html`, `css`, `js`, `assets` etc.
   That folder **is** the site.

*(Alternatively I'll just email you the ZIP — same thing.)*

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

## Step 5 — Gumroad products and checkout links

On **gumroad.com**, create four products (New product → Digital product,
upload the PDFs, set the price):

1. "Buying a Home Safely" — $14.99 (this is the existing house guide,
   renamed in Gumroad so the title matches the site and the cover)
2. "The Smart-Choices Home Guide" — $14.99 (new product)
3. "The State-by-State Cheap-Living Notebook" — $14.99
4. "The Home Buyer's Secret Files" — $29.99, containing all three guides
   **plus** the Due-Diligence Worksheet Pack (the bundle is its own product
   with all files attached, not a link to the others)

The product name has to read exactly the same on the site, on the cover, and
in Gumroad — that's what stops buyers wondering whether they bought the right
thing.

Then copy each product's **share link** (the `.../l/...` URL Gumroad shows on
the product page) and send me all four. I'll plug them into the buy buttons
and send you the updated folder — you drag it into Netlify (see "To update
the site later" above) and the buttons go live.

Tip: in each product's settings, keep "Generate license keys" off. Your
Gumroad refund policy is set to 7 days — the site says the same, keep them
matching if you ever change it.

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
