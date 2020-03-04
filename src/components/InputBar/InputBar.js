import React from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
  display:flex;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  font-size: 16px;
  padding: 5px 7px 5px 7px;
`;

const Button = styled.button`
  width: 50px;
  min-height: 30px;
  padding: 7px;
  font-size: 16px;
  color: white;
  background-color: green;
`;

const InputBar = () => {
  return (
    <InputGroup>
      <Input />
      <Button>추가</Button>
    </InputGroup>
  );
};

export default InputBar;
