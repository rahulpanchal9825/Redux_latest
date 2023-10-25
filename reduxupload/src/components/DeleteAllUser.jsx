import React from "react";
import {delelteusers} from "../store/actions/action";

import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteall =()=>{
    dispatch(delelteusers())
  }
  return (
    <button className="btn clear-btn" onClick={deleteall}>Delete ALL</button>
  );
};
