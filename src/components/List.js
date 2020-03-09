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
  &:focus {
    outline: none;
  }
`;

const PageGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const PageButton = styled.button`
  margin: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 16px;
  color: blue;
  &:focus {
    outline: none;
  }
`;

const List = ({
  items,
  page,
  onRemove,
  onNext,
  onPrev,
  toggle,
}) => {
  return (
    <ListGroup>
      {
        items
          .filter((item, index) => (page - 1) * 8 <= index && page * 8 > index)
          .map((item) => (
            <Card key={item.id}>
              <CheckBox type="checkbox" defaultChecked={item.done} onChange={() => toggle(item.id)} />
              <Text style={item.done ? { 'text-decoration': 'line-through' } : {}}>{item.text}</Text>
              <DeleteButton onClick={() => onRemove(item.id)}>
                <GoX />
              </DeleteButton>
            </Card>
          ))
      }
      <PageGroup>
        <PageButton onClick={() => onPrev()}>이전 페이지</PageButton>
        <PageButton onClick={() => onNext()}>다음 페이지</PageButton>
      </PageGroup>
    </ListGroup>
  );
};

export default List;
