import classes from "./newsletter.module.css";
export default function NewsLetter() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.subContent}>
          <p className={classes.explore}>Explore More About Our Hotel</p>
          <p className={classes.newsletter}>Sign Up for Our Newsletter </p>
        </div>
        <div className={classes.input}>
          <input
            className={classes.inputBox}
            type="email"
            placeholder="Your email"></input>
          <button className={classes.btn}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
