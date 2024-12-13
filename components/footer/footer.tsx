import { FaLocationArrow, FaPhoneAlt, FaRocketchat } from "react-icons/fa";
import classes from "./footer.module.css";

export default function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.title}>
          <p className={classes.hotelzz}>Hotelzz</p>
          <h1>Contact</h1>
        </div>
        <div>
          <div className={classes.col}>
            <div className={`${classes.subcol} ${classes.subcol1}`}>
              <p>123 Road</p>
              <p>
                <FaLocationArrow /> codewithlari
              </p>
              <p>
                <FaPhoneAlt /> 000-000-00
              </p>
              <p>
                <FaRocketchat /> codewithlari
              </p>
            </div>
            <div className={classes.subcol}>
              <p>Our Story</p>
              <p>Get in Touch</p>
              <p>Our Privacy Commitment</p>
              <p>Terms of service</p>
              <p>Customer Assistance</p>
            </div>
            <div className={classes.subcol}>
              <p>Dining Experience</p>
              <p>Wellness</p>
              <p>Fitness</p>
              <p>Sports</p>
              <p>Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
}
