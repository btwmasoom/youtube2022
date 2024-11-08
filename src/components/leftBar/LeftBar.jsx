import "./leftBar.scss"; // Importing styles
import Friends from "../../assets/high-five.png"; // Friend icon import
import Groups from "../../assets/group.png"; // Group icon import
import Market from "../../assets/store.png"; // Marketplace icon import
import Watch from "../../assets/reel.png"; // Watch icon import
import Memories from "../../assets/memorries.png"; // Memories icon import
import Events from "../../assets/event.png"; // Events icon import
import Gaming from "../../assets/gaming.png"; // Gaming icon import
import Gallery from "../../assets/gallery.png"; // Gallery icon import
import Videos from "../../assets/vedios.png"; // Videos icon import
import Messages from "../../assets/messages.png"; // Messages icon import
import Fund from "../../assets/fundraiser.png"; // Fundraiser icon import
import Tutorials from "../../assets/tutorials.png"; // Tutorials icon import
import Courses from "../../assets/courses.png"; // Courses icon import

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://i.postimg.cc/6pFvG6mp/Whats-App-Image-2024-10-13-at-8-48-49-PM.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <span className="username">btw__masoom</span>
          </div>

          <div className="item">
            <img src={Friends} alt="Friends" className="item-icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" className="item-icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="Marketplace" className="item-icon" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" className="item-icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" className="item-icon" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Events} alt="Events" className="item-icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Gaming" className="item-icon" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" className="item-icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" className="item-icon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Messages" className="item-icon" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="Fund" className="item-icon" />
            <span>Fund Raiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" className="item-icon" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="Courses" className="item-icon" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
