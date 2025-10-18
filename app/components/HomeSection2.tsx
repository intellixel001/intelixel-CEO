import webServicePhoto from "@/public/photo.jpg";
import Grid1 from "./Grid1";
import classes from "./styles/index2.module.css";

export default function HomeSection2() {
  return (
    <section className={`${classes.section2} mx-auto py-12 `}>
      <h2
        className={`text-center text-white text-[30px] ${classes.ourServices}`}
      >
        Our services
      </h2>
      <div className={`${classes.grid} grid-cols-2 md:grid-cols-4 gap-4`}>
        <Grid1
          webServicePhoto={webServicePhoto}
          title="Web developmen"
          desc=" We develop the best websites in the market bla bla bla"
        />
        <Grid1
          webServicePhoto={webServicePhoto}
          title="Standalone web developmen"
          desc=" We develop the best websites in the market bla bla bla"
        />
        <Grid1
          webServicePhoto={webServicePhoto}
          title="Standalone web developmen"
          desc=" We develop the best websites in the market bla bla bla"
        />
      </div>
    </section>
  );
}
