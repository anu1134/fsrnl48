import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

function Header() {

    const onlineStatus = useOnlineStatus();

    const { currentUser } = useContext(userContext);

    return (
        <>
            <nav className="flex justify-around border border-black items-center w-full">
                <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" width="100px" height="100px" alt="" />
                <ul className="flex">
                    <li className="m-2.5 list-none">
                        {/* conditional rendering */}
                        <span className="ml-1">{onlineStatus? "🟢" : "🔴"  }</span>
                    </li>
                    <li className="m-2.5 list-none">
                        <FontAwesomeIcon icon={faPercent} />
                        <span className="ml-1">Offers</span>
                    </li>
                    <li className="m-2.5 list-none">
                       <span className="ml-1">{currentUser}</span>
                    </li>
                    <li className="m-2.5 list-none">
                       <Link to="/help">Help</Link> 
                    </li>
                    <li className="m-2.5 list-none">
                        <Link to="/login">Sign In</Link>  
                    </li>
                    <li className="m-2.5 list-none">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            {/* <Login>

            </Login> */}
        </>
    )

}

export default Header;