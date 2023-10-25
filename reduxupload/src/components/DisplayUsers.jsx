import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {MdDeleteForever} from 'react-icons/md';
import { removeUser } from "../store/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteuser =(id)=>{
    dispatch(removeUser(id));
  }
  return (
  <Wrapper>{data.map((item,id) => {
  return(
  <li key={id}>
    {item}
    <MdDeleteForever className="delete-icon" onClick={()=>{deleteuser(id)}}/>
    </li>
  )
  })}
  </Wrapper>)
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
export default DisplayUsers;
