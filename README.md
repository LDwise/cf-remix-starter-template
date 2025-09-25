# Welcome to Remix + Cloudflare Workers + remix-i18next + ShadCN UI !

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ldwise/cf-remix-starter-template/)

<!-- dash-content-start -->

Build a fullstack Remix application, deployed to Cloudflare Workers.

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

<!-- dash-content-end -->

## Tech Stack

- Frontend: [Remix](https://v2.remix.run/docs/guides/templates#official-templates) + [TailwindCSS v3](https://v3.tailwindcss.com/docs/guides/remix)
- UI Components: [ShadCN UI](https://ui.shadcn.com/)
- Internationalization: [remix-i18next](https://v2.remix.run/resources/remix-i18next)
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
