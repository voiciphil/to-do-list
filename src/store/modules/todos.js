const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';
const REMOVE = 'REMOVE';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input: input,
});

let todoId = 0;
// eslint-disable-next-line no-return-assign
export const insert = (text) => ({
  type: INSERT,
  item: {
    id: todoId += 1,
    text: text,
  },
});

export const remove = (id) => ({
  type: REMOVE,
  id: id,
});

const initialState = {
  input: '',
  items: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    case REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
