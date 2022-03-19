import React from 'react';
import '@/styles/views/Login.scss';
import BaseInput from '@/components/BaseInput';
const Login = () => {
  const [value, setValue] = React.useState('');
  function handleInputChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return <BaseInput />;
};

export default Login;
