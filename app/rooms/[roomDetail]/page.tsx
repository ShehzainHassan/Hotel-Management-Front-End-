import Footer from "@/components/footer/footer";
import image1 from "@/images/JW_LosCabos_2015_MainExterior.webp";
import image2 from "@/images/OIP.jpg";
import image3 from "@/images/PWMZP-P039-Suite.16x9.adapt.1280.720.webp";
import Image from "next/image";
import classes from "./page.module.css";

export default function RoomDetail() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.mainImg}
          src={image1.src}
          alt="img-1"
          width={300}
          height={300}
        />
        <Image
          className={classes.subImg}
          src={image2.src}
          alt="img-2"
          width={300}
          height={300}
        />
        <Image
          className={classes.subImg}
          src={image3.src}
          alt="img-3"
          width={300}
          height={300}
        />
      </div>
      <div className={classes.subContainer}>
        <div>
          <h2>Family Suite (800 sq ft)</h2>
          <div className={classes.features}>
            <div className={classes.feature}>Double beds</div>
            <div className={classes.feature}>Children&apos;s play area</div>
            <div className={classes.feature}>Free wifi</div>
          </div>
          <div className={classes.space}>
            <h2>Description</h2>
            <p>Room description.....</p>
          </div>
          <div className={classes.space}>
            <h2>Offered Amenities</h2>
            <div className={classes.amenities_safety}>
              <p>Double beds</p>
              <p>Children&apos;s play area</p>
              <p>Free Wi-Fi</p>
            </div>
          </div>
          <div className={classes.space}>
            <h2>Safety And Hygiene</h2>
            <div className={classes.amenities_safety}>
              <p>Daily Cleaning</p>
              <p>Fire Extinguishers</p>
              <p>Disinfections and Sterilizations</p>
              <p>Smoke Detectors</p>
            </div>
          </div>
          <div className={classes.review}>
            <p>Customer Reviews</p>
            <div className={classes.customer}>
              <p>Commenter name</p>
              <p>Comment</p>
            </div>
          </div>
        </div>
        <div className={classes.roomInfo}>
          <h2>$ 300</h2>
          <p className={classes.info}>
            Check-in time is 12:00PM, checkout time is 11:59 AM. If you leave
            behind any items, please contact the receptionist&apos;s desk
          </p>
          <div className={classes.input}>
            <div>
              <label>Check In date</label>
              <input className={classes.inputBox} type="date" />
            </div>
            <div>
              <label>Check Out date</label>
              <input className={classes.inputBox} type="date" />
            </div>
            <div>
              <label>Adults</label>
              <input className={classes.inputBox} type="number" />
            </div>
            <div>
              <label>Children</label>
              <input className={classes.inputBox} type="number" />
            </div>
          </div>
          <button className={classes.btn}>Booked</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
