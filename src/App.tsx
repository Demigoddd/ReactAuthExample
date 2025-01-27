import { useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const ThemeApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme}
    </Button>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>

      <ThemeApp />
    </ThemeProvider>
  );
};

export default App
