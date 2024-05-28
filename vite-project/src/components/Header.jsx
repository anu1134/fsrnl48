import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

function Header() {

    const onlineStatus = useOnlineStatus();

    return (
        <>
            <nav>
                <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" width="100px" height="100px" alt="" />
                <ul>
                    <li>
                        {/* conditional rendering */}
                        <span>{onlineStatus? "🟢" : "🔴"  }</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPercent} />
                        <span>Offers</span>
                    </li>
                    <li>
                       <Link to="/help">Help</Link> 
                    </li>
                    <li>Sign In</li>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Header;