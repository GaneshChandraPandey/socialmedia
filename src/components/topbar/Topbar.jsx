import "./topbar.css"


import {Search,Person , Chat , Notifications} from '@mui/icons-material'
export default function Topbar(){
    return(
        <>
    <div className = "topbarcontainer">
        <div className = "topbarleft">
        <span className = "logo">Mynetwork</span>
        </div>
        <div className = "topbarcenter">
      <div className = "searchbar">
        <Search/>
        <input placeholder="search for friends , post or video" className = "searchInput"></input>
        </div>
        </div>

        <div className = "topbarright">
            <div className = "topbarlinks">
             <span className = "topbarlink">Homepage</span>   
             <span className = "topbarlink">timeline</span>   
            </div>
            <div className = "topbaricons">
   <div className = "topbariconitem">
<Person/>
<span className = "topbriconbadge">1</span>
   </div>
   <div className = "topbariconitem">
<Chat/>
<span className = "topbriconbadge">1</span>
   </div>
   <div className = "topbariconitem">
<Notifications/>
<span className = "topbriconbadge">1</span>
   </div>
  </div>
<img src="./assets/person/1.JPG" alt="" className = "topbarimg"/>
 </div>
</div>
    </>
    )
}