import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (<nav className="myNavbar">
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/game'>Game</NavLink>
  </nav>
)};

export default MyNavbar;
