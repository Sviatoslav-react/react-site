const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Boris" },
    { id: 2, name: "Cowboy" },
    { id: 3, name: "Pashka" },
    { id: 4, name: "Mortis" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How you pol?" },
    { id: 3, message: "What do you want to play?" },
    { id: 4, message: "Good mornig Vietnam!" },
  ],

  newMessageBody: "tap",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
