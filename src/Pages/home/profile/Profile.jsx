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
    <Sidebar/>
        <div className="profileright">
            <div className="profilerighttop">
  <div className="profilecover">
  <img src="/assets/posts/e.jpg" alt="" className="profilecoverimg" />
  <img src="/assets/person/ganesh.jpg" alt="" className="profileuserimg" /> 
  </div>
  <div className="profileinfo">
  <h4 className="profileinfoname">Ganesh Pandey</h4>
  <h5 className="profileinfodesc">Hello my friends!</h5>
  </div>

     </div>
       <div className="profilerightbottom"> 
       <Feed/>
       <Rightbar/>
       </div>  
     </div>
    </div>
    </>
  );
}
