> WIP: This repo Work in progress

# Better Auth + i18n + Cloudflare Workers

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ldwise/cf-remix-starter-template/)

<!-- dash-content-start -->

Build a fullstack Remix application, deployed to Cloudflare Workers.

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

<!-- dash-content-end -->

## Tech Stack

- Full Stack: [Remix](https://v2.remix.run/docs/guides/templates#official-templates)
- UI Components: [shadcn](https://ui.shadcn.com/) + [TailwindCSS v3](https://v3.tailwindcss.com/docs/guides/remix) (v3 for browser compatibility)
- Internationalization: [remix-i18next](https://github.com/sergiodxa/remix-i18next/tree/v6.4.1) (Use `resources` to the `i18next` configuration without a backend in a [serverless runtime](https://developers.cloudflare.com/workers/runtime-apis/) on Cloudflare Workers)
- Authentication: [Better Auth](https://www.better-auth.com/docs/installation)
- Database: [Cloudflare D1](https://developers.cloudflare.com/d1/) + [Drizzle ORM](https://orm.drizzle.team/docs/get-started/d1-new)
- Formatter: [Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Deployment: [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

**Start from CLI**: Scaffold a full-stack app with [Remix](https://v2.remix.run/docs/guides/templates#official-templates) and the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/) for lightning-fast development.

```sh
pnpm create cloudflare@latest my-remix-app --template=ldwise/cf-remix-starter-template
```

## Development

Run the dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to build your app:

```sh
npm run build
```

And deploy it:

```sh
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
