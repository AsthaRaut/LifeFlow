import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { Button } from '../components/Button';

export default function Profile() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = (e) => {
    e.preventDefault();
    updateUser({ name, email, avatar: name.charAt(0).toUpperCase() });
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="avatar large">{user.avatar}</div>
        <form onSubmit={handleSave} className="card-form" style={{ width: '100%' }}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Button type="submit">Save Profile</Button>
        </form>
      </div>
    </div>
  );
}