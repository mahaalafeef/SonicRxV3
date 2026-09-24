# SonicRx Website

A clean Next.js starter website for SonicRx, ready to run locally and deploy to Vercel.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Edit the website

The main page is:

- `app/page.tsx` — text, sections, leadership information, contact email
- `app/globals.css` — colors, typography, layout, responsive design
- `app/layout.tsx` — SEO title/description
- `public/` — put your logo, headshots, diagrams, and other assets here

### Replace the temporary leadership initials

The two leadership cards currently use styled placeholders (`MA` and `DH`). Replace those blocks with `next/image` images when you have professional headshots.

Example:

```tsx
import Image from 'next/image'

<Image src="/maha.jpg" alt="Dr. Maha Alafeef" width={900} height={900} />
```

Then add `maha.jpg` to `public/`.

## 4. Deploy to Vercel

### Easiest method: GitHub + Vercel

1. Create a GitHub repository, for example `sonicrx-website`.
2. Upload all files in this folder to the repository.
3. Go to Vercel and sign in with GitHub.
4. Choose **Add New → Project**.
5. Import `sonicrx-website`.
6. Vercel should detect Next.js automatically.
7. Click **Deploy**.

No server configuration is needed for this starter.

## Suggested next edits

- Add the official SonicRx logo.
- Add professional headshots for Maha and Dr. Daniel Hayes.
- Add a real company email.
- Add a Technology page with your nanoparticle / ultrasound platform details.
- Add Publications, IP/Patents, News, and Contact pages if desired.
- Add a privacy policy before collecting visitor information.
