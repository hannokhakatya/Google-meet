import User from './User/User';
import s from './Users.module.css';

const Users = (props) => {
  return <div className={s.users} >{props.users.map((user) => (
    <User name={user.name} id={user.id} userPhoto={user.userPhoto} />   
  ))}</div>;
};

export default Users;
