import React, { useState } from 'react';
import '@/styles/views/Login.scss';
import BaseInput from '@/components/BaseInput';
const Login = () => {
  const [id, setId] = useState('');

  const [password, setPassword] = useState('');
  function handleInputChange(e, func) {
    alert();
    console.log(e);
    e.preventDefault();
    func(e.target.value);
    console.log(id, password);
  }
  function test() {
    alert();
  }
  return (
    <div>
      <BaseInput type="text" />
      <BaseInput type="password" />
    </div>
  );
};

export default Login;
