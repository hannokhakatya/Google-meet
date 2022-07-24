import * as React from 'react';
import s from './Menu.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedbackIcon from '@mui/icons-material/Feedback';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// import BasicModal from './Modal/Modal';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openModal = () => {
    setAnchorEl(null);
  };


  const menuItems =[{title:"Дошка для конференцій", icon:<BorderColorOutlinedIcon />}, {title:"Записувати зустріч", icon: <RadioButtonCheckedIcon />}, {title:"Змінити макет", icon:<DashboardIcon />},{title:"Повноекранний режим", icon:<FullscreenIcon />},{title:"Застосувати візуальні ефект", icon:<ClosedCaptionOffIcon />},{title:"Увімкнути субтитри", icon:<AutoAwesomeIcon />},{title:"Використовувати телефон для передачі звуку", icon:<PhoneForwardedIcon /> },{title:"Повідомити про проблему", icon:<FeedbackIcon />},{title:"Повідомити про порушення", icon: <ReportGmailerrorredIcon />},{title:"Вирішення проблем і довідка", icon:<TravelExploreIcon />}, {title:"Налаштування", icon:<SettingsOutlinedIcon />}]

  return (
    <div>
      <Button
        className={s.button}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {<MoreVertIcon className={s.icon_menu} />}
      </Button>
      <Menu
        className={s.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={openModal}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

      {menuItems.map(({title,icon})=> 
        <Tooltip title={title} placement="right">
          <MenuItem onClick={openModal}>
            {icon} {title}
          </MenuItem>
        </Tooltip>)}
      </Menu>
    </div>
  );
}
