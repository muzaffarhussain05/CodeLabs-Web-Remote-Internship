import React from 'react';
import useFetch from './useFetch';

const Users = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <ul className="user-list">
      {data.map((user) => (
        <li key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>🌍 {user.website}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
