import moment from 'moment';
import s from './Footer.module.css';
import MiddleIcons from './MiddleIcons/MiddleIcons';


const Footer = (props) => {
  return (
    <div className={s.footer}>
      <div className={s.left_section}>
        <div>{ moment().format('LT')}</div>
        <div>Kate</div>
      </div>
      <div className={s.central_section}>
      <MiddleIcons />
      </div>
      <div className={s.right_section}>Right icons</div>
    </div>
  );
};

export default Footer;