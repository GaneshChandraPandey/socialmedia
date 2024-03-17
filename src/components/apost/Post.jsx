import "./post.css"
import { MoreVert} from "@mui/icons-material"
import {user} from "../../dataApi"
import { useState } from "react"

export default function Post({post}) {

    const  [like ,SetLike] = useState(post.like)
    const  [isliked ,SetIsLiked] = useState(false)

    const likehandler = ()=>{
        SetLike(isliked ? like-1 : like+1)
        SetIsLiked(!isliked)
    }
  return (

    <div  className="post">
    <div className="postwrapper">
        <div className="posttop">
            <div className="posttopleft">
                <img  className = "postprofileimg" src={user.filter(u=>u.id===post?.userid)[0].profilepicture} alt="" />
                <span className="postusername">{user.filter(u=>u.id===post?.userid)[0].username}</span>
                <span className="postdate">{post.date}</span>
            </div>
            <div className="posttopright"></div>
            <MoreVert/>
        </div>
        <div className="postcenter">
            <span className="posttext">{post.desc}</span>
            <img className="postimg" src={post.picture} alt="" />
        </div>
        <div className="postbottom">
            <div className="postbottomleft">
                <img className="likeicon" src="\assets\posts\like.png" onClick={likehandler} alt="" />
                <img className="hearticon" src="\assets\posts\heart.png" onClick={likehandler} alt="" />
                <span className="likecounter">{like} people liked it</span>
            </div>
            <div className="postbottomright">
                <span className="postcomment">{post.comment} comments</span>
           
            </div>
        </div>
    </div>
    </div>
  )
}
