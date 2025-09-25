import { type LoaderFunctionArgs, redirect } from '@remix-run/cloudflare';
import { createThemeAction } from 'remix-themes';

import { themeSessionResolver } from '~/lib/sessions.server';

export const action = createThemeAction(themeSessionResolver);

export async function loader({ request }: LoaderFunctionArgs) {
  // Redirect GET requests to the home page (avoid open redirect vulnerability)
  return redirect('/');
}
