import React from 'react'
import { auth } from '../auth/auth';
import './LogOutButton.scss';

export default function LogOutButton({ history }) {
  return (
    <div
      className="log-out"
      onClick={() => {
        auth.logOut();
        history.push('/');
      }}>
      <span>Выйти</span>
      <img src={require('../images/log out.png')} alt="" />
    </div>
  )
}
