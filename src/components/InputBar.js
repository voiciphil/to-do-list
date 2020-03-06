import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';

const InputGroup = styled.form`
  display:flex;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  font-size: 16px;
  padding: 5px 7px 5px 7px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 50px;
  min-height: 32px;
  padding: 7px;
  font-size: 16px;
  color: white;
  background-color: green;
  border-width: 2px;
  border-color: green;
  &:focus {
    outline: none;
  }
`;

const InputBar = ({
  input,
  onChangeInput,
  onInsert,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      onInsert(input);
      onChangeInput('');
    }
  };

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <InputGroup onSubmit={onSubmit}>
        <Input type="text" value={input} onChange={onChange} />
        <Button>
          <GoPlus />
        </Button>
      </InputGroup>
    </div>
  );
};

export default InputBar;
