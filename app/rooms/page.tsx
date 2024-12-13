"use client";
import FilterRooms from "@/components/filterRooms/filter-rooms";
import Footer from "@/components/footer/footer";
import hotelImage from "@/images/JW_LosCabos_2015_MainExterior.webp";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
interface Rooms {
  roomTitle: string;
  roomType: string;
  description: string;
  price: string;
  status: string;
}
export default function Rooms() {
  const [rooms, setRooms] = useState<Rooms[]>();
  const loadRooms = async () => {
    try {
      const response = await axios.get("/rooms.json");
      setRooms(response.data);
    } catch (err) {
      console.error("Failed to Fetch rooms ", err);
    }
  };
  useEffect(() => {
    loadRooms();
  }, []);

  return (
    <div>
      <FilterRooms />
      <ul className={classes.container}>
        {rooms?.map((room, index) => (
          <Link href="/rooms/details" key={index}>
            <li>
              <div className={classes.room}>
                <Image
                  className={classes.img}
                  src={hotelImage.src}
                  alt="room-image"
                  width={200}
                  height={200}
                />
                <div className={classes.content}>
                  <div className={classes.subContainer}>
                    <p>{room.roomTitle}</p>
                    <p>{room.price}</p>
                  </div>
                  <p>{room.roomType}</p>
                  <p>{room.description}</p>
                  <button className={classes.btn}>{room.status}</button>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
