import './App.scss';
import Login from './views/Login';
import './Login.scss';
import React from 'react';
function App() {
  const test = 's';
  return (
    <div className="App">
      <Login />
    </div>
  );
}
// const Login = ({ updateMainCat }) => {
//   const includesHangul = text => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
//   const [value, setValue] = React.useState('');
//   const [errorMessage, setErrorMessage] = React.useState('');

//   function handleFormSubmit(e) {
//     e.preventDefault();
//     setErrorMessage('');
//     if (value === '') {
//       setErrorMessage('빈 값으로 만들 수 없습니다.');
//       return;
//     }
//     updateMainCat(value);
//   }

//   return (
//       <input
//         type="text"
//         name="name"
//         placeholder="영어 대사를 입력해주세요"
//         value={value}
//         onChange={handleInputChange}
//       />
//   );
// };

// const Login = () => {
//   const [value, setValue] = React.useState('');
//   function handleInputChange(e) {
//     e.preventDefault();
//     setValue(e.target.value);
//   }
//   console.log(value);
//   return <input type="text" name="" value={value} onChange={handleInputChange} />;
// };

export default App;
