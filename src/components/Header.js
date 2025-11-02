import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-800 text-gray-50 px-5 shadow-lg">
      <div className="flex place-items-center">
        <span className="text-gray-400 ">TkayRES</span>
      </div>
      <div className="nav-items-middle">
        <ul className="flex p-4 m-4 space-x-10">
          <li>Online Status {isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/gloceries"}>Gloceries</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="nav-items-right place-content-center">
        <MdLogout className="w-6 h-6 "/>
      </div>
    </div>
  );
};

export default Header;
