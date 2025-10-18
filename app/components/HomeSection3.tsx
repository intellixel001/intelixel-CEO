import dashboard from "@/public/dashboard2.png";
import duneVpn from "@/public/dunevpn.jpg";
import ecom from "@/public/ecom.png";
import Intellixel from "@/public/intellixel.png";
import nextgram from "@/public/nextgram2.png";
import Grid2 from "./Grid2";
import classes from "./styles/index3.module.css";

export default function HomeSection3() {
  return (
    <section className={`${classes.section3} mx-auto py-12`}>
      <h2
        className={`text-center text-white text-[30px] ${classes.ourServices}`}
      >
        Our work
      </h2>

        <div className={`${classes.grid} grid-cols-2 md:grid-cols-4 gap-4`}>
          <Grid2
            webServicePhoto={duneVpn}
            title="Backend for DuneVpn"
            desc=" We developed a secured backend for DuneVpn with express js."
            gridSpec={classes.grid1}
          />
          <Grid2
            webServicePhoto={nextgram}
            title="NextGram"
            desc="A Instagram clone application"
          />
          <Grid2
            webServicePhoto={dashboard}
            title="Dashboard"
            desc="Responsive & live admin dashboard for business."
            img2={ecom}
          />
          <Grid2
            webServicePhoto={Intellixel}
            title="Backend for DuneVpn"
            desc=" We developed a secured backend for DuneVpn with express js."
            gridSpec={classes.grid4}
          />
        </div>

    </section>
  );
}
