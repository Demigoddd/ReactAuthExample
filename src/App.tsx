import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useAuth } from '@/lib/authProvider';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Auth } from '@/pages/Auth';
import { Profile } from '@/pages/Profile';

const App: React.FC = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/auth" replace />}
          />
          <Route
            path="/auth"
            element={isAuth ? <Navigate to="/profile" replace /> : <Auth /> }
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
      <Toaster />
    </>
  );
};

export default App
