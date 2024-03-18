import "./closefriend.css"

export default function Closefriend({user}) {
  return (
   
    <li className="sidebarfriend">
      <img src={user.profilepicture} alt="" className="sidebarfriendimg" />
      <span className="sidebarfriendname">{user.username}</span>
    </li>
  
    
  )
}
