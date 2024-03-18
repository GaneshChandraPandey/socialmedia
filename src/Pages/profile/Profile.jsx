import "./profile.css"
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <div className="profileright">
            <div className="profilerighttop">ssss</div>
                <div className="profilerightbottom"> 
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>  
    </div>
    </div>
    </>
  );
}
