import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { useAuth } from '@/lib/authProvider';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Auth } from '@/pages/Auth';
import { Profile } from '@/pages/Profile';

const App: React.FC = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
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
          element={<Navigate replace to="/auth" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App
