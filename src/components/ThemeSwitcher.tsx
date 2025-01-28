import { Moon, Sun } from "lucide-react"
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/themeProvider';

export const ThemeSwitcher: React.FC<{classNames?: string}> = ({ classNames = '' }) => {
  const { theme, setTheme } = useTheme();
  const isLight = (theme === 'light');

  return (
    <div className={classNames}>
      <Button
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
      >
        {isLight ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
