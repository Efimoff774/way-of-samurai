import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Dialogs.module.css"

const DialogItem = (props) => {
  const path = props.id
  return (
    <div className={classes.dialog + " " + classes.active}>
      {/* берем строку в скобки, тк конкатенация проходит в js */}
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>
}

const dialogsData = [
  { id: "1", name: "Dimych" },
  { id: "2", name: "Andrey" },
  { id: "3", name: "Sveta" },
  { id: "4", name: "Sasha" },
  { id: "5", name: "Victor" },
  { id: "6", name: "Valera" },
]
const messagesData = [
  { id: "1", message: "hi" },
  { id: "2", message: "how you doing" },
  { id: "3", message: "yo" },
  { id: "4", message: "yo" },
  { id: "5", message: "yo" },
]

const dialogElements = dialogsData.map((dialog) =>
  <DialogItem
    key={`${dialog.name}${dialog.id}`}
    name={dialog.name}
    id={dialog.id}
  />
)

const messageElements = messagesData.map(m => <Message key={`${m.message}${m.id}`} message={m.message} />)

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>
    </div>
  )
}

export default Dialogs
