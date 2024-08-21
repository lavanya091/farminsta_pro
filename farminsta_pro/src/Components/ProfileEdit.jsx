import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProfileEdit.css';

const ProfileEdit = () => {
  const location = useLocation();
  const { creator } = location.state;

  const [formData, setFormData] = useState({
    name: creator.name,
    email: creator.email,
    description: creator.description,
    languages: creator.languages.join(', '),
    education: creator.education,
    specialization: creator.specialization,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
  };

  return (
    <div className="profile-edit">
      <form onSubmit={handleSubmit} className="edit-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Languages:
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </label>
        <label>
          Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </label>
        <label>
          Specialization:
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
