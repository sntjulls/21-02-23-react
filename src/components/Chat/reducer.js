import CHAT_TYPES from "./actionsType";

const reducer = (state, action) => {
  switch (action.type) {
    case CHAT_TYPES.DATA_RESPONSE_PANDING: {
      return {
        ...state,
        isPanding: true,
      };
    }
    case CHAT_TYPES.DATA_RESPONSE_SUCCESS: {
      const {
        payload: { messages, users },
      } = action;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      const messagesWithUser = messages.map((mess) => ({
        ...mess,
        author: usersMap.get(mess.authorId),
      }));
      const newState = {
        ...state,
        users,
        messages: messagesWithUser,
        isPanding: false,
      };
      return newState;
    }
    case CHAT_TYPES.DATA_RESPONSE_ERROR: {
      console.log(action.payload);
      const { payload: err } = action;
      const newState = {
        ...state,
        error: err,
        isPanding: false,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
