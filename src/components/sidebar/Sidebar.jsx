import "./sidebar.css"
import{RssFeed ,School ,Event,WorkOutline,Bookmark,Chat ,PlayCircleFilled
,ContactSupport,Group} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      
     <div className="sidebarwrapper">
  <ul className="sidebarlist">
    <li className="sidebarlistitem">
      <RssFeed className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Feed</span>
    </li>
    <li className="sidebarlistitem">
      <Chat className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Chats</span>
    </li>
    <li className="sidebarlistitem">
      <PlayCircleFilled
 className="sidebarIcon"/>
      <span className="sidebarlistitemtext">videos</span>
    </li>
    <li className="sidebarlistitem">
      <Group className="sidebarIcon"/>
      <span className="sidebarlistitemtext">groups</span>
    </li>
    <li className="sidebarlistitem">
      <Bookmark className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Bookmarks</span>
    </li>
    <li className="sidebarlistitem">
      <ContactSupport className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Questions</span>
    </li>
    <li className="sidebarlistitem">
      <WorkOutline className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Jobs</span>
    </li>
    <li className="sidebarlistitem">
      <Event className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Events</span>
    </li>
    <li className="sidebarlistitem">
      <School className="sidebarIcon"/>
      <span className="sidebarlistitemtext">Cources</span>
    </li>
  
  </ul>
  <button className="sidebarbutton">Show More</button>
  <hr className="sidebarhr"/>

  <ul className="sidebarfriendlist">
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
    <li className="sidebarfriend">
      <img src="./assets/person/1.JPG" alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">    Bhupesh</span>
    </li>
  </ul>
      </div>
      </div> 
    
  )
}
