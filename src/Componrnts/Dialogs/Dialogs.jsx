import React from "react";
import s from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogsElement = state.dialogs.map((d) => (
    <DialogsItems name={d.name} key={d.id} id={d.id} />
  ));
  let MessagesElement = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.SendMessage();
  };
  // let onNewSendMessageClick = (event) => {
  //   let body = event.target.value;
  //     props.store.dispatch(updateNewMessageBodyCreator(body));
  // }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{MessagesElement}</div>
        <div>
          <div>
            {" "}
            <textarea value={newMessageBody} onChange={onNewMessageChange}>
              {" "}
            </textarea>{" "}
          </div>
          <div>
            {" "}
            <button onClick={onSendMessageClick}>send</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
