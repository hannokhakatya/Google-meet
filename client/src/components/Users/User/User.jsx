import { useState } from 'react';
import s from './User.module.css';

const User = (props) => {

    const[currentUserPhoto,setCurrentUserPhoto]= useState(props.userPhoto);
    

  return (
    <div className={s[props.userClassName] }>
      <div className={s.name}>{props.name}</div>
        {props.isCameraOn ? <img src={currentUserPhoto} alt="userPhoto" /> : <div className={s.roundBlock}><img src={currentUserPhoto} alt="userPhoto" /></div>}
    </div>
  );
};

export default User;