
import "./online.css"


export default function online({user}) {
  return (
    <li className="rightbarfriend">
            <div className="rightbarimgcontainer">
              <img src={user.profilepicture}alt="" className="rightbarprofileimg" />
              <span className="rightbaronline">abhi</span>
            </div>
            <span className="rightbarusername">abhi</span>
          </li>
     
  );
}
