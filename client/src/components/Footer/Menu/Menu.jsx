import * as React from 'react';
import s from './Menu.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from '@mui/material/Divider';
import DashboardIcon from "@mui/icons-material/Dashboard";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FeedbackIcon from "@mui/icons-material/Feedback";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

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
        { <MoreVertIcon className={s.icon_menu}/>}
      </Button>
      <Menu
        className={s.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><BorderColorOutlinedIcon/>  Дошка для конференцій</MenuItem>
        <MenuItem onClick={handleClose}><RadioButtonCheckedIcon/> Записувати зустріч</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}><DashboardIcon />   Змінити макет</MenuItem>
        <MenuItem onClick={handleClose}><FullscreenIcon />Повноекранний режим</MenuItem>
        <MenuItem onClick={handleClose}> <ClosedCaptionOffIcon />Застосувати візуальні ефекти</MenuItem>
        <MenuItem onClick={handleClose}><AutoAwesomeIcon/>Увімкнути субтитри</MenuItem>
        <MenuItem onClick={handleClose}> <PhoneForwardedIcon/> Використовувати телефон для передачі звуку</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}> <FeedbackIcon />Повідомити про проблему</MenuItem>
        <MenuItem onClick={handleClose}> <ReportGmailerrorredIcon/>Повідомити про порушення</MenuItem>
        <MenuItem onClick={handleClose}><TravelExploreIcon/>Вирішення проблем і довідка</MenuItem>
        <MenuItem onClick={handleClose}> <SettingsOutlinedIcon  />Налаштування</MenuItem>
      </Menu>
    </div>
  );
}
