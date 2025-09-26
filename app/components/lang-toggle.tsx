import { Languages } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { supportedLngs } from '~/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useFetcher } from '@remix-run/react';
import { cn } from '~/lib/utils';

export function LangToggle() {
  const { t, i18n } = useTranslation();
  const fetcher = useFetcher();
  const currentIndex = supportedLngs.indexOf(i18n.language);
  const nextLanguage = supportedLngs[(currentIndex + 1) % supportedLngs.length];
  return (
    <fetcher.Form method="post" action="/action/set-lang">
      <input type="hidden" name="lng" value={nextLanguage} />
      <Button variant="ghost" size="icon" type="submit">
        <Languages className={cn('h-[1.2rem] w-[1.2rem]')} />
        <span className={cn('sr-only')}>{t('components.lang-toggle')}</span>
      </Button>
    </fetcher.Form>
  );
}
