import { Links, Meta, Outlet, Scripts, ScrollRestoration, data, useLoaderData } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';

import './tailwind.css';
import { useChangeLanguage } from 'remix-i18next/react';
import { useTranslation } from 'react-i18next';
import i18next from '~/i18n/i18next.server';
import { sessionStorage as i18nSessionStorage } from '~/i18n/i18next.server';

// export const links: LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//   },
// ];

export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request);
  let session = await i18nSessionStorage.getSession(request.headers.get('Cookie'));

  // Early return if session already has the correct language
  const currentSessionLng = session.get('lng');
  if (currentSessionLng === locale) {
    return data({ locale });
  }

  // Only set and commit session if language has changed
  session.set('lng', locale);
  return data(
    { locale },
    {
      headers: {
        'Set-Cookie': await i18nSessionStorage.commitSession(session),
      },
    },
  );
}

// export let handle = {
//   // In the handle export, we can add a i18n key with namespaces our route
//   // will need to load. This key can be a single string or an array of strings.
//   // TIP: In most cases, you should set this to your defaultNS from your i18n config
//   // or if you did not set one, set it to the i18next default namespace "translation"
//   i18n: "common",
// };

export function Layout({ children }: { children: React.ReactNode }) {
  // Get the locale from the loader
  const data = useLoaderData<typeof loader>();
  const locale = data?.locale || 'en';

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
