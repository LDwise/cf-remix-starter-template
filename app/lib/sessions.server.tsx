import { createCookieSessionStorage } from '@remix-run/cloudflare';
import { createThemeSessionResolver } from 'remix-themes';

// You can default to 'development' if process.env.NODE_ENV is not set
const isProduction = process.env.NODE_ENV === 'production';

export const themeSessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: ['s3cr3t'],
    // Set domain and secure only if in production
    ...(isProduction ? { domain: 'your-production-domain.com', secure: true } : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(themeSessionStorage);

export const i18nSessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'lng',
    path: '/',
    sameSite: 'lax',
    secure: isProduction,
    httpOnly: true,
    secrets: ['n3wsecr3t', 'olds3cret'],
  },
});
