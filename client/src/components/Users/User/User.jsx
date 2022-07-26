import { useState } from 'react';
import s from './User.module.css';
import MicOffIcon from '@mui/icons-material/MicOff';
import axios from 'axios';

const RANDOM_IMAGE_URL = '/api/randomimage';

const User = (props) => {
  const [currentUserPhoto, setCurrentUserPhoto] = useState(props.userPhoto);
  const [errMsg, setErrMsg] = useState('');

  const handleClick = async (e) => {
    try {
      const response = await axios.get(RANDOM_IMAGE_URL, { currentUserPhoto });
      console.log(response.data);
      if (response.data.successful === true) {
        const result = response.data.srcImage;
        setCurrentUserPhoto(result);
      }
    } catch (error) {
      setErrMsg('Request failed');
    }
  };

  return (
    <button onClick={handleClick} className={s[props.userClassName]}>
      <div className={s.name}>{props.name}</div>
      {props.isCameraOn ? (
        <img src={currentUserPhoto || errMsg} alt="userPhoto" />
      ) : (
        <div className={s.roundBlock}>
          <img src={currentUserPhoto} alt="userPhoto" />
          <MicOffIcon className={s.microphone} />
        </div>
      )}
    </button>
  );
};

export default User;
