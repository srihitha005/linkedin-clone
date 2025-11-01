


// ...existing code...
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { registerUser, loginUser } from '../api';

export default function LoginPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async (form) => {
    const data = isLogin ? await loginUser(form) : await registerUser(form);
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onLogin(data.user);
    } else {
      alert(data.message || 'Something went wrong');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="card card-glass auth-card" style={{width: '420px'}}>
        <div className="card-header text-center">
          {isLogin ? 'Welcome back' : 'Create your account'}
        </div>

        <div className="card-body">
          <AuthForm type={isLogin ? 'login' : 'register'} onSubmit={handleAuth} />
          <div className="text-center mt-3">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="btn btn-link">Register</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="btn btn-link">Login</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// ...existing code...