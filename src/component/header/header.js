import "./header.css"


import myroofing from "../../image/my-roofing.png"
import bell from "../../image/bell.png"
import man from "../../image/man.png"
import keyboard from "../../image/keyboard-arrow-down.png"

function Header() {
    return(
    
        <header>
            {/* <div> */}
            <img src={myroofing} alt="my_roofing" />
            {/* </div> */}
            <div className="right-side">
            <img src={bell} alt="bell" height="30" className="bell" />
            <img src={man} alt="man" height="50" />
            <p>Supervisor</p>
            <img src={keyboard} alt="arrow-down" width="18" height="12" className="arrow" />
            </div>
        </header>
    
    )
}

export default Header