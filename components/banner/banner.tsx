import hotelImg from "@/images/JW_LosCabos_2015_MainExterior.webp";
import roomImg1 from "@/images/OIP.jpg";
import roomImg2 from "@/images/PWMZP-P039-Suite.16x9.adapt.1280.720.webp";

import Image from "next/image";
import classes from "./banner.module.css";

interface BannerProp {
  title: string;
  description: string;
  basicRoomQty: number;
  luxuryRoomQty: number;
  suitRoomQty: number;
}

export default function Banner({
  title,
  description,
  basicRoomQty,
  luxuryRoomQty,
  suitRoomQty,
}: BannerProp) {
  return (
    <div className={classes.mainPage}>
      <div className={classes.left}>
        <div className={classes.bannerDescription}>
          <div>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
          </div>
          <div>
            <button className={classes.btn}>Get Started</button>
          </div>
        </div>

        <div className={classes.statsContent}>
          <div className={classes.stats}>
            <div>Basic Room</div>
            <div className={classes.number}>{basicRoomQty}</div>
          </div>
          <div className={classes.stats}>
            <div>Luxury Room</div>
            <div className={classes.number}>{luxuryRoomQty}</div>
          </div>
          <div className={classes.stats}>
            <div>Suite</div>
            <div className={classes.number}>{suitRoomQty}</div>
          </div>
        </div>
      </div>
      <div className={classes.hotelImages}>
        <div>
          <Image
            className={classes.hotelImage}
            src={hotelImg.src}
            alt="hotel-img"
            width={300}
            height={250}
          />
        </div>
        <div className={classes.roomImages}>
          <Image
            className={classes.room}
            src={roomImg1.src}
            alt="room-img"
            width={200}
            height={200}
          />
          <Image
            className={classes.room}
            src={roomImg2.src}
            alt="room-img"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
