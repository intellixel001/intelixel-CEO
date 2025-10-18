import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div className="w-full mx-auto">
      <h1 className=" mt-[0px] md:mt-[-40px] text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  lg:mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Building the Future of Your Business <br /> with <Cover>Innovation.</Cover>
      </h1>
    </div>
  );
}
