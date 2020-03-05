import React from 'react';
import styled from 'styled-components';
import { GoX } from 'react-icons/go';

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 0;
  margin-left: 10px;
  position: fixed;
`;

const Text = styled.div`
  flex-grow: 10;
  text-align: left;
  margin-left: 40px;
`;

const DeleteButton = styled.button`
  margin-right: 10px;
  font-size: 16px;
  border: none;
  color: gray;
`;

const List = ({
  items,
  onRemove,
}) => {
  return (
    <ListGroup>
      {
        items.map((item) => (
          <Card key={item.id}>
            <CheckBox type="checkbox" />
            <Text>{item.text}</Text>
            <DeleteButton onClick={() => onRemove(item.id)}>
              <GoX />
            </DeleteButton>
          </Card>
        ))
      }
    </ListGroup>
  );
};

export default List;
