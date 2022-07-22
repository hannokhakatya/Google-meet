import moment from 'moment';
import s from './Footer.module.css';
// import Icons from './Icons/Icons';

const Footer = (props) => {
  return (
    <div className={s.footer}>
      <div className={s.left_section}>
        <div>{moment().format('LT')}</div>
        <div>Kate</div>
      </div>
      <div className={s.central_section}>
        Icons and menu
        {/* <Icons /> */}
      </div>
      <div className={s.right_section}>Right icons</div>
    </div>
  );
};

export default Footer;