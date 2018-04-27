const initialState = { chats: [] };

// action creators
export default (state = initialState, action) => {
  switch (action.type) {
    case 'addChat':
      return {
        ...state,
        loading: true
      };
    default:
      return state
  }
};

// reducers
export const add = () => {
  return dispatch => {
    dispatch(request(null));
    console.log('add chat');

    function request(chat) { return { type: 'addChat', chat } };
  }
};
