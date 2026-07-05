# Getting sandronangoy.com live — a plain-English guide

You don't need to know how to code. This walks you through it in order. The whole
"get it on the web" part takes about 15 minutes and is free. The "publish it yourself"
part is the one fiddly bit — we can do that together in a follow-up if you'd rather.

---

## 0. Look at it right now (no setup)

Double-click **`PREVIEW-homepage.html`** in this folder. That's the real homepage.
(It's just a preview of the front page — the live site has all the other pages too.)

---

## 1. Put it on the web (free, ~15 min)

The site lives in a GitHub repo, and Vercel turns that repo into a live website and
re-publishes automatically every time anything changes.

### Step 1 — GitHub

1. Make a free account at **github.com** (if you don't have one).
2. Click **New repository**. Name it `sandronangoy-website`. Keep it **Public**. Create it.
3. On the new repo page, click **"uploading an existing file"**, then drag in the
   **contents of this `sandronangoy-website` folder** (not the folder itself — open it and
   select everything inside: `src`, `public`, `package.json`, etc.). Commit.

> Tip: don't upload `node_modules` or `dist` if you ever see them — the `.gitignore`
> already tells Git to skip them.

### Step 2 — Vercel

1. Go to **vercel.com**, click **Sign up**, and choose **Continue with GitHub**.
2. Click **Add New… → Project**, find `sandronangoy-website`, click **Import**.
3. Vercel auto-detects Astro. Don't change anything. Click **Deploy**.
4. Two minutes later you'll get a live URL like `sandronangoy-website.vercel.app`.

**That's a live website.** Every time you (or the CMS) change a file on GitHub, Vercel
rebuilds it within a minute. You never touch this step again.

---

## 2. Your own domain (optional, ~$12/year)

1. Buy `sandronangoy.com` from **Cloudflare** or **Namecheap**.
2. In Vercel: your project → **Settings → Domains** → type `sandronangoy.com` → **Add**.
3. Vercel shows you 1–2 DNS records to paste into your domain registrar. Paste them.
4. Give it an hour. Your site is now at your name.

(While you're here: it's worth pointing `www.sandronangoy.com` at it too — Vercel offers
that automatically.)

---

## 3. Turn on "write and publish it yourself"

This is the self-serve publishing button. It's the one technical part — **if it gets
annoying, stop and we'll do it together.** You only ever do this once.

The editor is already built (it's at `yoursite.com/admin`). It just needs permission to
save to your GitHub repo. There are two ways:

**The easy way (try this first):** Go to `yoursite.com/admin`. Sveltia CMS may offer a
direct **"Sign in with GitHub"** button that just works. If it logs you in and shows your
Letters/Thread/Models — you're done, skip the rest of this section.

**The reliable way (if the above asks for a `base_url`):** you deploy a tiny free
authentication helper. Full official instructions:
`https://github.com/sveltia/sveltia-cms-auth`. The short version:

1. Sign up at **cloudflare.com** (free) and click the **Deploy** button on that GitHub page.
   You'll get a worker URL like `https://sveltia-cms-auth.yourname.workers.dev`.
2. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - Homepage URL: your site.
   - Authorization callback URL: your worker URL + `/callback`.
   - Copy the **Client ID** and generate a **Client Secret**.
3. In Cloudflare, open the worker → **Settings → Variables**, add:
   `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, and `ALLOWED_DOMAINS` (your domain).
4. Open **`public/admin/config.yml`** in this project and fill in the two CAPITALISED lines:
   - `repo:` → `your-github-username/sandronangoy-website`
   - `base_url:` → your worker URL
   Commit that change (upload the edited file to GitHub the same way as Step 1).

Now `yoursite.com/admin` will let you sign in with GitHub.

---

## 4. How you publish, from now on

1. Go to **`yoursite.com/admin`** and sign in.
2. Pick **Letters**, **Thread**, or **Models** → **New**.
3. Write. For a letter: title, date, a one-line summary, then the body. For a thread post:
   just the date and a few sentences. For a model: title + attach your Excel/PDF/CSV.
4. Hit **Publish**.
5. It saves to GitHub, Vercel rebuilds, and it's live on your site in under a minute.

No code, no chat, no me. That was the whole point.

---

## 5. About the sample posts (and where writing lives)

I seeded one of each so you can see the design working:
- `src/content/letters/2026-q2-patience-as-a-position.md`
- `src/content/thread/2026-07-06-cpi.md` and `…07-05-watchlist.md`
- `src/content/models/2026-06-mco-reverse-dcf.md`

Delete or edit them any time (from the CMS, or just delete the files). Every post is a
plain markdown file in `src/content/` — you're never locked in.

**Covers:** if you don't add a cover image, each letter gets an automatic dark cover with a
quiet chart line generated from its title. Want a real cover (a chart, a terminal
screenshot)? Just attach it as the "Cover image" and it replaces the auto one.

---

## The design, for reference
- Font: Spectral. Palette: oat-paper `#EFEBE1`, ink `#2A2723`, clay accent `#A5694A`,
  dark cover tiles `#2B2823`. All in `src/styles/global.css` if you ever want to tweak.
- Footer socials: LinkedIn + Instagram wired; Discord sits dashed as "coming soon" until
  you launch one (then un-dash it in `src/components/Footer.astro`).

Stuck anywhere? Bring me the step number and we'll get past it.
