import { useState } from 'react';
import s from './User.module.css';
import MicOffIcon from '@mui/icons-material/MicOff';

const User = (props) => {

    const[currentUserPhoto,setCurrentUserPhoto]= useState(props.userPhoto);


  return (
    <div className={s[props.userClassName] }>
      <div className={s.name}>{props.name}</div>
        {props.isCameraOn ? <img src={currentUserPhoto} alt="userPhoto" /> : <div className={s.roundBlock}><img src={currentUserPhoto} alt="userPhoto" />
        <MicOffIcon className={s.microphone}/></div>}
    </div>
  );
};

export default User;