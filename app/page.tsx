import { Metadata } from "next";
import HomeDialogue from "./components/HomeDialogue";
import classes from "./components/styles/index1.module.css";



export default function Home() {
  return (
    <section className={classes.homeMain}>
      {/* section 1 --------- */}
      <HomeDialogue />
      {/* section 2-------------- */}
    </section>
  );
}
