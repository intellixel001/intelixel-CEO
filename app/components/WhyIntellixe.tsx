import WhyLeftSide from "./WhyLeftSide";
import WhyRightSide from "./WhyRightSide";

export default function WhyChooseIntellixel() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 py-16 px-4">
      <WhyLeftSide />
      <WhyRightSide />
    </div>
  );
}
