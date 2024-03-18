import "./rightbar.css"
import Online from "../aonline/online"
import {user} from "../../dataApi"


export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="/assets/posts/gift.png" alt="" className="birthdayimg" />
          <span className="birthdaytext"><b>Chandan pawar</b> and <b> 3 other friends </b> have birthday today</span>
        
        </div>

        <img src="/assets/posts/add.png" alt="" className="rightbaradd" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
        
        {user.map(u=>(
          <Online  key ={u.id}  user= {u}/>
        ))}


     </ul>
      </div>
    </div>
  );
}
