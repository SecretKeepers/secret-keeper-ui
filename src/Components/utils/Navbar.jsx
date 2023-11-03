import { useRef } from "react";
import imga from "../../assets/images/loginpg.jpg";
const Navbar = (props) => {
    const navRef = useRef();
    if(props.userDetails){
        navRef.current.classList.add('justifyCen')
    }
    console.log(props.userDetails);
  return (
    <div className="Navbar" ref={navRef}>
        <div className="imageHolder">
        Please put in the logo

        </div>
        {
            props.userDetails && 
            <div class="round_d-v text-bold" title="Logged in as guest" style={{width : '40px', height : '40px'}}>
                GU
        </div>
        }
      </div>
  );
};

export default Navbar;
