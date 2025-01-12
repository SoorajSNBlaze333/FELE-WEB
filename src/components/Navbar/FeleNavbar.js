import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-bg.png';

const NAVLINKS_ACTIVE_CLASSNAME = "cursor-pointer p-2 text-center rounded-md transition duration-100 min-w-[150px] bg-green-100 text-green-900"
const NAVLINKS_CLASSNAME = "cursor-pointer p-2 text-center rounded-md transition duration-100 min-w-[150px] hover:bg-green-100 hover:text-green-900";

export default function FeleNavbar() {
  return (
    <header className="flex justify-between items-center p-2 shadow-sm bg-white">
      <NavLink to="/" className="cursor-pointer w-[20%] font-semibold text-2xl ml-8">
        <img src={Logo} alt="logo" className="h-8"/>
      </NavLink>

      <nav className="flex justify-between items-center w-[80%] font-semibold">
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/mentors">Mentors</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/team">Team</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/meetings">Meetings</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/deliverables">Deliverables</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/reports">Weekly Reports</NavLink>
        <NavLink className={({ isActive }) => isActive ? NAVLINKS_ACTIVE_CLASSNAME : NAVLINKS_CLASSNAME} to="/references">References</NavLink>
      </nav>
    </header>
  );
}