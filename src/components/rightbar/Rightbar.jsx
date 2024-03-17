import "./rightbar.css"


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
        <li className="rightbarfriend">
            <div className="rightbarimgcontainer">
              <img src="/assets/person/abhishek.png" alt="" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">abhi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
