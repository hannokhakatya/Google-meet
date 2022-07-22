import { useState } from 'react';
import s from './User.module.css';

const User = (props) => {

    const[currentUserPhoto,setCurrentUserPhoto]= useState(props.userPhoto)

  return (
    <div className={s.user}>
      <div className={s.name}>{props.name}</div>
      <img src={currentUserPhoto} alt="userPhoto" />
    </div>
  );
};

export default User;