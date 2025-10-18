import HomeSection1 from "./HomeSection1";
// import HomeSection2 from "./HomeSection2";
// import HomeSection3 from "./HomeSection3";
import AtAGlance from "./AtAGlance";
import HowWeWork from "./HowWeWork";
import IndustriesWeServe from "./IndustriesWeServe";
import Technologies from "./Technologies";
import WhyChooseIntellixel from "./WhyIntellixe";

function HomeDialogue() {
  return (
    <div>
      <HomeSection1 />
      {/* <HomeSection2 /> */}
      <AtAGlance />
      <Technologies />
      <IndustriesWeServe />
      <HowWeWork />
      <WhyChooseIntellixel />
    </div>
  );
}

export default HomeDialogue;
