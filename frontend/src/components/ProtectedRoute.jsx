import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

