import React, { useEffect, useReducer } from "react";
import { getChat } from "../../api";
import reducer from "./reducer";
import CHAT_TYPES from "./actionsType";
import Error from "../Error";
import Spinner from "../Spinner";

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isPanding: false,
  });
  useEffect(() => {
    dispatch({
      type: CHAT_TYPES.DATA_RESPONSE_PANDING,
    });
    getChat()
      .then((data) =>
        dispatch({
          payload: data,
          type: CHAT_TYPES.DATA_RESPONSE_SUCCESS,
        })
      )
      .catch((err) =>
        dispatch({
          payload: err,
          type: CHAT_TYPES.DATA_RESPONSE_ERROR,
        })
      );
  }, []);
  return (
    <section>
      <h2>Chat</h2>
      {state.isPanding && <Spinner />}
      {state.error && <Error />}
      {state.messages.map((mess) => (
        <article key={mess.id}>
          <h3>autor name {mess.author.name}</h3>
          <p>{mess.content}</p>
        </article>
      ))}
    </section>
  );
};

export default Chat;
