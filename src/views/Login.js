import React from 'react';
const Login = () => {
  const [value, setValue] = React.useState('');
  function handleInputChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return (
    <input type="text" name="" value={value} onChange={handleInputChange} />
  );
};

export default Login;
