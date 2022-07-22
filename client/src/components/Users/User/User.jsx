import s from './User.module.css';

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.name}>{props.name}</div>
      <img src={props.userPhoto} alt="userPhoto" />
    </div>
  );
};

export default User;