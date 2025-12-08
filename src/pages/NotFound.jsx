import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
      <h1>404</h1>
      <p>Page not found. Did you take a wrong turn?</p>
      <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;