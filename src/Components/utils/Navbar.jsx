import { useRef } from "react";
import imga from "../../assets/images/loginpg.jpg";
import logo from "../../assets/images/SECRET.png"

const Navbar = (props) => {
    const navRef = useRef();
    // if(props.userDetails?.trim()){
        // navRef.current?.classList.add('justifyCen')
    // }
    console.log(props.userDetails, props.userDetails?.split(0,2));
  return (
    <div className="Navbar justifyCen" ref={navRef}>
        <div className="imageHolder">
          <img src={logo} alt="SecretKeeper" style={{width:'100% !important', height : '3rem !important'}}/>
        </div>
        {
            !props.userDetails?.trim() ?
            <div class="round_d-v text-bold" title="Logged in as guest" style={{width : '40px', height : '40px'}}>
                GU
             </div> :
              <div class="round_d-v text-bold" title="Logged in as guest" style={{width : '40px', height : '40px'}}>
               {props.userDetails?.slice(0,2)}
           </div>

        }
      </div>
  );
};

export default Navbar;
