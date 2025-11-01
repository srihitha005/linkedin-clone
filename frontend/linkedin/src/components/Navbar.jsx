

// ...existing code...
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="avatar-circle">LI</span>
          <span>Linked-In</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-post">Post</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/profile/${user._id || user.id}`}>Profile</Link>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center">
            {!user ? (
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            ) : (
              <>
                <span className="navbar-text me-3">
                  {user.name || user.username}
                </span>
                <button className="btn btn-danger" onClick={onLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
