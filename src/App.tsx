import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from '@/lib/themeProvider';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Auth } from '@/pages/Auth';
import { Profile } from '@/pages/Profile';

const App: React.FC = () => {
  const [isAuth] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/profile" replace /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/auth"
            element={<Auth />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate replace to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App
