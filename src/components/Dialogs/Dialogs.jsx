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

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Victor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="hi" />
        <Message message="how you doing" />
        <Message message="yo" />
      </div>
    </div>
  );
};

export default Dialogs;
