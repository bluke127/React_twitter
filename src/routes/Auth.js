import { authService } from 'fbase';
import React, { useState } from 'react';
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  console.log(email, password);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(email, password, newAccount);
      if (newAccount) {
        const data = await authService.createUserWithEmailAndPassword(
          email,
          password,
        );

        console.log(data); //create account
      } else {
        const data = await authService.signInWithEmailAndPassword(
          email,
          password,
        );
        console.log(data); //log in
      }
    } catch (e) {
      setError(e.message);
    }
    console.log(event.target.name);
  };
  const toggleAcount = () => setNewAccount((prev) => !prev);
  const onSocialClick = (event) => {
    const {
      target: { name },
    } = event;
    let provider
    if (name === 'google') {
      provider = new 
    } else if (name === 'github') {

    }
    console.log(event.target.name);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChange}
          />
          <input
            type="submit"
            value={newAccount ? 'Create Account' : 'sign in'}
          />
          {error}
        </div>
      </form>
      <span onClick={toggleAcount}>
        {newAccount ? 'sign in' : 'create Account'}
      </span>
      <div>
        <button onClick={onSocialClick} name="goggle">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
