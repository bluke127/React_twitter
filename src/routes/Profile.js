import React from 'react';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  <span>Profile </span>;
};

export default function a() {
  const history = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}
