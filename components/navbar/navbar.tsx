import Link from "next/link";
import { AiFillMoon } from "react-icons/ai";
import NavLink from "./nav-link";
import classes from "./navbar.module.css";

interface NavbarProps {
  toggleColorTheme: () => void;
  isLightTheme: boolean;
}
export default function Navbar({
  toggleColorTheme,
  isLightTheme,
}: NavbarProps) {
  return (
    <div className={classes.navbar}>
      <div>
        <div className={classes.nav}>
          <Link href="/">
            <p className={classes.title}>Hotelzz</p>
          </Link>
          <button
            onClick={toggleColorTheme}
            className={`${classes.btn} ${
              isLightTheme ? classes.btnBlack : classes.btnLight
            }`}>
            <AiFillMoon />
          </button>
        </div>
      </div>

      <div className={classes.navElements}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/rooms">Rooms</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>
    </div>
  );
}
