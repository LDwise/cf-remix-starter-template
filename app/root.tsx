import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  data,
  useRouteLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/cloudflare';
import './tailwind.css';
import { useChangeLanguage } from 'remix-i18next/react';
import { useTranslation } from 'react-i18next';
import i18next from '~/i18n/i18next.server';
import { themeSessionResolver, i18nSessionStorage } from '~/sessions.server';
import clsx from 'clsx';
import { PreventFlashOnWrongTheme, Theme, ThemeProvider, useTheme } from 'remix-themes';
import { supportedLngs } from '~/i18n/resources';

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
  const { getTheme } = await themeSessionResolver(request);
  const locale = await i18next.getLocale(request);
  return data({ theme: getTheme(), locale });
}

// export let handle = {
//   // In the handle export, we can add a i18n key with namespaces our route
//   // will need to load. This key can be a single string or an array of strings.
//   // TIP: In most cases, you should set this to your defaultNS from your i18n config
//   // or if you did not set one, set it to the i18next default namespace "translation"
//   i18n: "common",
// };

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.

export function Layout({ children }: { children: React.ReactNode }) {
  // Get the locale from the loader
  const data = useRouteLoaderData<typeof loader>('root');
  const theme = data?.theme || Theme.DARK;
  const locale = data?.locale || supportedLngs[0];

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <InnerLayout locale={locale} dir={i18n.dir()} ssrTheme={Boolean(theme)}>
        {children}
      </InnerLayout>
    </ThemeProvider>
  );
}

function InnerLayout({
  locale,
  dir,
  ssrTheme,
  children,
}: {
  locale: string;
  dir: string;
  ssrTheme: boolean;
  children: React.ReactNode;
}) {
  const [theme] = useTheme();
  return (
    <html lang={locale} dir={dir} className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
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
