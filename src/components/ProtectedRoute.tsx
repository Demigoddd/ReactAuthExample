import { Navigate } from 'react-router';

interface IProtectedRoute {
  isAuth: boolean,
  children: React.ReactNode,
}

export const ProtectedRoute = ({ isAuth, children }: IProtectedRoute) => {
  return isAuth ? children : <Navigate to="/auth" replace />;
};
