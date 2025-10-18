import Image, { StaticImageData } from "next/image";
import classes from "./styles/index3.module.css";

interface Grid2Props {
  webServicePhoto: StaticImageData;
  title?: string;
  desc?: string;
  gridSpec?: string;
  img2?: StaticImageData;
}

export default function Grid2({
  webServicePhoto,
  title,
  // desc,
  gridSpec = "",
  img2,
}: Grid2Props) {
  return (
    <div className={`  ${classes.gridItem} ${gridSpec}`}>
      <div
        className={`${img2 ? "flex flex-col  h-[100%]" : ""} ${
          classes.imgContainer
        }`}
      >
        <Image
          src={webServicePhoto}
          alt={title}
          quality={75}
          placeholder="blur"
        />

        {img2 ? (
          <Image src={img2} alt={title} quality={75} placeholder="blur" />
        ) : (
          ""
        )}
      </div>
      {/* <div className={classes.serviceTextContainer}>
        <p className={` text-white ${classes.serviceName}`}>{title}</p>
        <p className={classes.serviceDetails}>{desc}</p>
      </div> */}
    </div>
  );
}
