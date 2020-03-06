const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';
const REMOVE = 'REMOVE';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREV_PAGE';

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

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

const initialState = {
  input: '',
  items: [],
  page: 1,
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
    case NEXT_PAGE:
      if (state.page * 8 >= state.items.length) {
        return state;
      }
      return {
        ...state,
        page: state.page + 1,
      };
    case PREV_PAGE:
      if (state.page === 1) {
        return state;
      }
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export default todos;
