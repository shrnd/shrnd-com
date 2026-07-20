# Deployment

The site is designed for Cloudflare Pages with `shrnd.com` as the canonical domain.

## Pages project

- Repository: `shrnd/shrnd-com`
- Production branch: `main`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.12 or newer
- Web Analytics: disabled

## Domain setup

The apex domain currently uses Namecheap nameservers and Google Workspace for email. Before changing
nameservers, export the complete DNS zone and verify that every existing mail and verification record
is present in Cloudflare, including MX, SPF, DKIM and DMARC records.

Add both `shrnd.com` and `www.shrnd.com` as custom domains. Keep `shrnd.com` primary and create a
permanent Cloudflare Redirect Rule or Bulk Redirect from `https://www.shrnd.com/*` to
`https://shrnd.com` with subpath matching and path and query preservation enabled.

Create a second permanent redirect from the generated `*.pages.dev` production hostname to
`https://shrnd.com`, also preserving path and query string.

After DNS propagation, verify HTTPS, the `www` redirect, the Pages hostname redirect, Google Workspace
mail delivery, and the response headers defined in `public/_headers`.
