import "./navbar.scss";
import { Link } from "react-router-dom";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const username = "btw__masoom"; // Placeholder username
  const profilePicUrl = "https://i.postimg.cc/6pFvG6mp/Whats-App-Image-2024-10-13-at-8-48-49-PM.jpg";
    
  return (
    <div className="navbar">
      {/* Left Section - Brand Name and Icons */}
      <div className="left">
        <Link to="/" className="brand">
          <span>COMSATS HUB</span>
        </Link>
        <CottageOutlinedIcon className="icon" />
        <DarkModeOutlinedIcon className="icon" />
        <WidgetsOutlinedIcon className="icon" />
      </div>

      {/* Center Section - Search Bar */}
      <div className="center">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Right Section - Icons and Username with Profile Picture */}
      <div className="right">
        <MailOutlineOutlinedIcon className="icon" />
        <NotificationsActiveOutlinedIcon className="icon" />
        <Person2OutlinedIcon className="icon" />

        <div className="profile">
          <img src={profilePicUrl} alt="Profile" className="profile-pic" />
          <span className="username">{username}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
