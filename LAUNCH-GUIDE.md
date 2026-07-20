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

## Step 3 — Buy your domain on GoDaddy (10 min)

1. Go to **godaddy.com**, create an account.
2. Search for the domain (recommendation: **frankslandreport.com**).
3. Buy it — usually $12–20/year. Skip all the add-ons GoDaddy offers at
   checkout (hosting, email, "protection" upsells) — you don't need them.

## Step 4 — Connect the domain to the site (10 min)

**In Netlify:**

1. Open your site → **Domain management** → **Add a domain**.
2. Type your domain (e.g. `frankslandreport.com`) → **Add domain**.
   Netlify will say "Check DNS configuration" — that's expected, keep going.

**In GoDaddy:**

3. My Products → your domain → **Manage DNS**.
4. Find the row: **Type A, Name @** → click edit → change the value to:
   `75.2.60.5` → Save.
5. Find the row: **Type CNAME, Name www** → click edit → change the value to
   your Netlify address (e.g. `frankslandreport.netlify.app`) → Save.
   If there's no such row, click **Add New Record** and create it.

**Back in Netlify:**

6. Wait 10–30 minutes (DNS changes take a little time), then on the Domain
   management page click **Verify** / **Retry DNS verification**.
7. Netlify will automatically issue the HTTPS certificate (the padlock).
   When the domain shows a green check — you're live.

## Step 5 — Connect your checkout links

Once you've created your products on the payment platform (Gumroad /
Lemon Squeezy — separate quick guide for that), send me the checkout links.
I'll plug them into the buy buttons and send you the updated folder —
you drag it into Netlify (see "To update the site later" above) and the
buttons go live.

---

## Costs summary

| Item | Who pays | Cost |
|---|---|---|
| Hosting (Netlify) | you | $0 |
| Domain (GoDaddy) | you | ~$12–20/year |
| Payment platform | you | % per sale only |

## Troubleshooting

- **Site shows but looks broken** → the folder you dragged must be the one
  that directly contains `index.html` (not a folder containing another folder).
- **Domain not working after an hour** → in GoDaddy Manage DNS, double-check
  the A record is exactly `75.2.60.5` and there are no other A records left.
- **Anything else** → message me a screenshot and I'll sort it out with you.
