import React from 'react';
import styled from 'styled-components';
import { GoX } from 'react-icons/go';

const ListGroup = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Card = styled.div`
  display: flex;
  border: 1px solid lightgray;
  background-color: white;
  width: 100%;
  min-height: 50px;
  align-items: center;
`;

const CheckBox = styled.input`
  flex-grow: 1;
  margin: 10px;
`;

const Text = styled.div`
  flex-grow: 10;  
`;

const DeleteButton = styled.button`
  margin-right: 10px;
  font-size: 16px;
  border: none;
  color: gray;
`;

const List = () => {
  return (
    <ListGroup>
      <Card>
        <CheckBox type="checkbox" />
        <Text>리액트 공부하기</Text>
        <DeleteButton>
          <GoX />
        </DeleteButton>
      </Card>
    </ListGroup>
  );
};

export default List;
