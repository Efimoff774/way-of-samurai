import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  const path = props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      {/* берем строку в скобки, тк конкатенация проходит в js */}
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const dialogsData = [
  { id: "1", name: "Dimych" },
  { id: "2", name: "Andrey" },
  { id: "3", name: "Sveta" },
  { id: "4", name: "Sasha" },
  { id: "5", name: "Victor" },
  { id: "6", name: "Valera" },
];
const messagesData = [
  { id: "1", message: "hi" },
  { id: "2", message: "how you doing" },
  { id: "3", message: "yo" },
  { id: "4", message: "yo" },
  { id: "5", message: "yo" },
];

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
