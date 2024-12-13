import Banner from "@/components/banner/banner";
import FeaturedRoom from "@/components/featuredRoom/featured-room";
import FilterRooms from "@/components/filterRooms/filter-rooms";
import Footer from "@/components/footer/footer";
import NewsLetter from "@/components/newsletter/newsletter";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.colorTheme}>
      <Banner
        title="Explore Our Exquisite Hotel"
        description="Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance."
        basicRoomQty={50}
        luxuryRoomQty={120}
        suitRoomQty={60}
      />
      <FilterRooms />
      <FeaturedRoom
        title="Featured Room"
        description="A spacious and luxurious suite with stunning views. Enjoy the comfort and elegance of this beautiful suite, complete with modern amenities and breathtaking vistas of the city skyline."
        startPrice={100}
        discountPrice={8}
      />
      <NewsLetter />
      <Footer />
    </div>
  );
}
