import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useState } from 'react';
const BaseStyledInput = styled.input`
  background-color: ${({ type }) => (type === 'text' ? 'red' : 'blue')};
`;
function BaseInput({ type, placeholder, readonly }) {
  const [value, setValue] = useState('');
  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };
  return (
    <BaseStyledInput
      type={type}
      placeholder={placeholder}
      readOnly={readonly}
      value={value}
    />
  );
}
BaseInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
};
BaseInput.defaultProps = {
  type: 'text',
  placeholder: '',
  readonly: false,
};
export default BaseInput;
