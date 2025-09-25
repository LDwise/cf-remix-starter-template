import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from 'remix-themes';

import { Button } from '~/components/ui/button';
import { useTranslation } from 'react-i18next';
import { cn } from '~/lib/utils';

export function ModeToggle() {
  const [theme, setTheme] = useTheme();
  const nextTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  const { t } = useTranslation();
  return (
    <Button variant="ghost" size="icon" onClick={() => setTheme(nextTheme)}>
      <Sun
        className={cn(
          'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
        )}
      />
      <Moon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
        )}
      />
      <span className={cn('sr-only')}>{t('components.mode-toggle')}</span>
    </Button>
  );
}
