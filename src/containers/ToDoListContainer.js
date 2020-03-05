import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputBar, List } from '../components';
import { changeInput, insert, remove } from '../store/modules/todos';

const ToDoListContainer = ({
  input,
  items,
  changeInput,
  insert,
  remove,
}) => {
  return (
    <div>
      <InputBar input={input} items={items} onChangeInput={changeInput} onInsert={insert} />
      <List items={items} onRemove={remove} />
    </div>
  );
};

export default connect(
  (state) => ({
    input: state.todos.input,
    items: state.todos.items,
  }),
  (dispatch) => bindActionCreators({
    changeInput,
    insert,
    remove,
  }, dispatch),
)(ToDoListContainer);
