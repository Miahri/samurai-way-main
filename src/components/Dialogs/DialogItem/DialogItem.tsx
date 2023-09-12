import dItemModule from "./DItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItem = {
  id: number
  name: string
};

export const DialogItem = (props: DialogItem) => {
  return (
    <div className={dItemModule.dialItem}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={dItemModule.activeLink}>{props.name}</NavLink>
    </div>
  )
};