import React from 'react';

function ProfileInfo(props) {
  return (
    <div className="profile-info">
      <h1>{props.name}</h1>
      <p>Email: {props.email}</p>
      <p>Description: {props.description}</p>
      <p>Languages: {props.languages.join(', ')}</p>
      <p>Education: {props.education}</p>
      <p>Specialization: {props.specialization}</p>
    </div>
  );
}

export default ProfileInfo;
