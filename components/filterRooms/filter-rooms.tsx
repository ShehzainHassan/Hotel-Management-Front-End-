import classes from "./filter-rooms.module.css";
export default function FilterRooms() {
  return (
    <div className={classes.filterTypes}>
      <div className={classes.searchType}>
        <div className={classes.filterHeading}>Room Type</div>
        <select className={classes.inputBox}>
          <option defaultValue={1}>All</option>
          <option>Basic</option>
          <option>Luxury</option>
          <option>Suite</option>
        </select>
      </div>
      <div className={classes.searchType}>
        <div className={classes.filterHeading}>Search</div>
        <input
          className={classes.inputBox}
          type="text"
          placeholder="Search..."></input>
      </div>
      <div>
        <button className={classes.btn}>Search</button>
      </div>
    </div>
  );
}
