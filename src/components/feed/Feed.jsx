import "./feed.css"
import Share from "../share/Share"
import Post from "../apost/Post"
import {posts} from "../../dataApi"

export default function feed() {
  return (
    <div className="feed">
      <div className="feedwrapper"></div>
<Share/>

{posts.map((p)=>(
  <Post key ={p.id} post = {p}/>
))}
    </div>
  )
}
