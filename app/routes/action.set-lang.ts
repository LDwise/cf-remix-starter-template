import { data, ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/cloudflare';
import { i18nSessionStorage } from '~/sessions.server';
import { supportedLngs } from '~/i18n/resources';

export async function loader({ request }: LoaderFunctionArgs) {
  // Redirect GET requests to the home page (avoid open redirect vulnerability)
  return redirect('/');
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const lng = formData.get('lng') as string;

  // Early return for invalid language
  if (!lng || !supportedLngs.includes(lng)) {
    return data({ success: false, error: 'Invalid language' });
  }

  const session = await i18nSessionStorage.getSession(request.headers.get('Cookie'));

  // Early return if language hasn't changed
  const currentLng = session.get('lng');
  if (currentLng === lng) {
    return data({ success: true, lng, unchanged: true });
  }

  // Only set and commit session if language has changed
  session.set('lng', lng);
  return data(
    { success: true, lng },
    {
      headers: {
        'Set-Cookie': await i18nSessionStorage.commitSession(session),
      },
    },
  );
}
