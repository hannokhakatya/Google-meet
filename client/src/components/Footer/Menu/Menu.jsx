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
        {<MoreVertIcon className={s.icon_menu} />}
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
        <Tooltip title="Дошка для конференцій" placement="right">
          <MenuItem onClick={handleClose}>
            <BorderColorOutlinedIcon /> Дошка для конференцій{' '}
          </MenuItem>
        </Tooltip>
        <Tooltip title="Записувати зустріч" placement="right">
          <MenuItem onClick={handleClose}>
            <RadioButtonCheckedIcon /> Записувати зустріч
          </MenuItem>
        </Tooltip>
        <Divider />
        <Tooltip title="Змінити макет" placement="right">
          <MenuItem onClick={handleClose}>
            <DashboardIcon />
            Змінити макет
          </MenuItem>
        </Tooltip>
        <Tooltip title="Повноекранний режим" placement="right">
          <MenuItem onClick={handleClose}>
            <FullscreenIcon />
            Повноекранний режим
          </MenuItem>
        </Tooltip>
        <Tooltip title="Застосувати візуальні ефект" placement="right">
          <MenuItem onClick={handleClose}>
            {' '}
            <ClosedCaptionOffIcon />
            Застосувати візуальні ефекти
          </MenuItem>
        </Tooltip>
        <Tooltip title="Увімкнути субтитри" placement="right">
          <MenuItem onClick={handleClose}>
            <AutoAwesomeIcon />
            Увімкнути субтитри
          </MenuItem>
        </Tooltip>
        <Tooltip
          title="Використовувати телефон для передачі звуку"
          placement="right"
        >
          <MenuItem onClick={handleClose}>
            {' '}
            <PhoneForwardedIcon /> Використовувати телефон для передачі звуку
          </MenuItem>
        </Tooltip>
        <Divider />
        <Tooltip title="Повідомити про проблему" placement="right">
          <MenuItem onClick={handleClose}>
            {' '}
            <FeedbackIcon />
            Повідомити про проблему
          </MenuItem>
        </Tooltip>
        <Tooltip title="Повідомити про порушення" placement="right">
          <MenuItem onClick={handleClose}>
            {' '}
            <ReportGmailerrorredIcon />
            Повідомити про порушення
          </MenuItem>
        </Tooltip>
        <Tooltip title="Вирішення проблем і довідка" placement="right">
          <MenuItem onClick={handleClose}>
            <TravelExploreIcon />
            Вирішення проблем і довідка
          </MenuItem>
        </Tooltip>
        <Tooltip title="Налаштування" placement="right">
          <MenuItem onClick={handleClose}>
            {' '}
            <SettingsOutlinedIcon />
            Налаштування
          </MenuItem>
        </Tooltip>
      </Menu>
    </div>
  );
}
