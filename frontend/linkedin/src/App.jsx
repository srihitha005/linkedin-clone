

// ...existing code...
import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import CreatePost from './components/CreatePost';

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  });

  const navigate = useNavigate();

  const handleLogin = (u) => {
    setUser(u);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const requireAuth = (element) => (user ? element : <Navigate to="/login" replace />);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<FeedPage user={user} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/create-post" element={requireAuth(<CreatePost user={user} />)} />
          <Route
            path="/profile/:id"
            element={<ProfileStub user={user} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

// Minimal profile page stub — replace with full profile page as needed
function ProfileStub({ user }) {
  const { id } = Object.fromEntries(new URLSearchParams(window.location.search)); // fallback
  const urlId = window.location.pathname.split('/').pop();
  const isOwn = user && (user._id === urlId || user.id === urlId);
  return (
    <div>
      <h2>{isOwn ? 'Your Profile' : 'Profile'}</h2>
      {user && isOwn ? (
        <div>
          <p>Name: {user.name || user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Public profile view (implement fetch by id)</p>
      )}
    </div>
  );
}
// ...existing code...