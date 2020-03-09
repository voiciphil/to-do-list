import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputBar, List } from '../components';
import {
  changeInput, insert, remove, nextPage, prevPage, toggle
} from '../store/modules/todos';

const ToDoListContainer = ({
  input,
  items,
  page,
  changeInput,
  insert,
  remove,
  nextPage,
  prevPage,
  toggle,
}) => {
  return (
    <div>
      <InputBar input={input} items={items} onChangeInput={changeInput} onInsert={insert} />
      <List items={items} page={page} onRemove={remove} onNext={nextPage} onPrev={prevPage} toggle={toggle} />
    </div>
  );
};

export default connect(
  (state) => ({
    input: state.todos.input,
    items: state.todos.items,
    page: state.todos.page,
  }),
  (dispatch) => bindActionCreators({
    changeInput,
    insert,
    remove,
    nextPage,
    prevPage,
    toggle,
  }, dispatch),
)(ToDoListContainer);
