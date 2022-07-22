import s from './MiddleIcons.module.css';
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PanToolIcon from '@mui/icons-material/PanTool';


const MiddleIcons = () => {
    return (
      <div className={s.icons}>
      	<MicIcon />
      	<VideocamIcon />
      	<PresentToAllIcon />
        <PanToolIcon />
        <MoreVertIcon />
        <CallEndIcon />
      </div>
    );
}

export default MiddleIcons;