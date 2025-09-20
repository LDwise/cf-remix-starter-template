import { Languages } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { supportedLngs } from '~/i18n/resources';
import { useTranslation } from 'react-i18next';
import { useFetcher } from '@remix-run/react';

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const fetcher = useFetcher();
  const currentIndex = supportedLngs.indexOf(i18n.language);
  const nextLanguage = supportedLngs[(currentIndex + 1) % supportedLngs.length];
  return (
    <fetcher.Form method="post" action="/action/set-lang">
      <input type="hidden" name="lng" value={nextLanguage} />
      <Button variant="ghost" size="icon" type="submit">
        <Languages className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Switch language</span>
      </Button>
    </fetcher.Form>
  );
}
