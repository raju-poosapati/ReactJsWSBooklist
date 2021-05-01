const initialstate = {
  books: [],
};

const BookReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, { Name: action.payload, id: action.id }],
      };
    default:
      return state;
  }
};

export default BookReducer;
