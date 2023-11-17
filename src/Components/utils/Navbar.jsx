import { useEffect, useRef, useState } from "react";
import imga from "../../assets/images/loginpg.jpg";
import logo from "../../assets/images/SECRET.png"
import UserProfile from "./UserProfile";

const Navbar = (props) => {
    const navRef = useRef();
    // if(props.userDetails?.trim()){
        // navRef.current?.classList.add('justifyCen')
    // }
    const [userName , setUserName] = useState();

    const [showProfile, setIsShowProfile] = useState(false);
  
    console.log(props.userDetails, props.userDetails?.split(0,2));

    let checkUser = false; 

    if (sessionStorage?.getItem('userName')){
      checkUser = true
    }
  useEffect(()=>{
    if(sessionStorage?.getItem('userName')){

      setUserName(JSON.parse(sessionStorage?.getItem('userName')))
    } else {
      setUserName('GUEST@gmail.com')
    }
  },[checkUser])

  return (
    <div className="Navbar justifyCen" ref={navRef}>
        <div className="imageHolder">
          <img src={logo} alt="SecretKeeper" />
        </div>
        {showProfile && <UserProfile />}
        
              <div class="round_d-v text-bold" title="Logged in as guest"  onClick={()=>setIsShowProfile(!showProfile)} style={{width : '40px', height : '40px'}}>
               {(userName?.slice(0, 2) || '').toUpperCase()}
           </div>

        
      </div>
  );
};

export default Navbar;
