import Image, { StaticImageData } from "next/image";
import classes from "./styles/index2.module.css";

interface Grid1Props {
  webServicePhoto: StaticImageData;
  title: string;
  desc: string;
}

export default function Grid1({ webServicePhoto, title, desc }: Grid1Props) {
  return (
    <div className={classes.gridItem}>
      <Image
        src={webServicePhoto}
        alt={title}
        quality={75}
        placeholder="blur"
      />
      <div className={classes.serviceTextContainer}>
        <p className={` text-white ${classes.serviceName}`}>{title}</p>
        <p className={classes.serviceDetails}>{desc}</p>
      </div>
    </div>
  );
}
