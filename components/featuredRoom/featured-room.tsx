import classes1 from "@/components/banner/banner.module.css";
import hotelImg from "@/images/JW_LosCabos_2015_MainExterior.webp";
import roomImg1 from "@/images/OIP.jpg";
import roomImg2 from "@/images/PWMZP-P039-Suite.16x9.adapt.1280.720.webp";
import Image from "next/image";
import classes2 from "./featured-room.module.css";
interface FeaturedRoomProps {
  title: string;
  description: string;
  startPrice: number;
  discountPrice: number;
}
export default function FeaturedRoom({
  title,
  description,
  startPrice,
  discountPrice,
}: FeaturedRoomProps) {
  return (
    <div>
      <div className={classes2.mainContent}>
        <div className={classes1.hotelImages}>
          <Image
            className={classes1.hotelImage}
            src={hotelImg}
            alt="hotel-img"
          />
          <div className={classes1.roomImages}>
            <Image className={classes1.room} src={roomImg1} alt="room-img" />
            <Image className={classes1.room} src={roomImg2} alt="room-img" />
          </div>
        </div>
        <div className={classes2.right}>
          <div>
            <div className={classes2.title_description}>
              <h1 className={classes2.heading}>{title}</h1>
              <p className={classes2.description}>{description}</p>
            </div>
          </div>
          <div>
            <div className={classes2.priceDetails}>
              <div className={classes2.price}>
                <div className={classes2.priceContent}>
                  <div>Start From</div>
                  <div className={classes2.number}>$ {startPrice}</div>
                </div>
                <div className={classes2.priceContent}>
                  <div>Discount</div>
                  <div className={classes2.number}>$ {discountPrice}</div>
                </div>
              </div>
              <div>
                <button className={classes2.btn}>More Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
