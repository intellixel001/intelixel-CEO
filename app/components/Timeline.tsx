import { Timeline } from "@/components/ui/timeline";
import DuneVPN1 from "@/public/dunevpn/1.png";
import DuneVPN2 from "@/public/dunevpn/2.png";
import Image1 from "@/public/swiplink/1.png";
import Image2 from "@/public/swiplink/2.png";
import Image3 from "@/public/swiplink/3.png";
import Image4 from "@/public/swiplink/4.png";
import twoBrand1 from "@/public/two-brands/1.png";
import twoBrand2 from "@/public/two-brands/2.png";
import twoBrand3 from "@/public/two-brands/3.png";
import twoBrand4 from "@/public/two-brands/4.png";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: Image1, alt: "startup template" },
  { src: Image2, alt: "startup template" },
  { src: Image3, alt: "startup template" },
  { src: Image4, alt: "startup template" },
  { src: DuneVPN1, alt: "hero template" },
  { src: DuneVPN2, alt: "feature template" },
  { src: twoBrand1, alt: "feature template" },
  { src: twoBrand2, alt: "feature template" },
  { src: twoBrand3, alt: "feature template" },
  { src: twoBrand4, alt: "feature template" },
];

const ImageGrid = ({
  imageLinks,
}: {
  imageLinks: { src: any; alt: string }[];
}) => (
  <div className="grid grid-cols-2 gap-4">
    {imageLinks.map(({ src, alt }, index) => (
      <Image
        key={index}
        placeholder="blur"
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
      />
    ))}
  </div>
);

export function TimelineDemo() {
  const data = [
    {
      title: "April 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Elevated brands
          </p>
          <Link href="https://swiplink.vercel.app">
            <ImageGrid
              imageLinks={[
                { src: twoBrand4, alt: "startup template" },
                { src: twoBrand2, alt: "startup template" },
                { src: twoBrand3, alt: "startup template" },
                { src: twoBrand1, alt: "startup template" },
              ]}
            />
          </Link>
        </div>
      ),
    },
    {
      title: "March 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched SwipLink from scratch.
          </p>
          <Link href="https://swiplink.vercel.app">
            <ImageGrid
              imageLinks={[
                { src: Image1, alt: "startup template" },
                { src: Image2, alt: "startup template" },
                { src: Image3, alt: "startup template" },
                { src: Image4, alt: "startup template" },
              ]}
            />
          </Link>
        </div>
      ),
    },
    {
      title: "February 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built the backend for DuneVpn android app.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.dunenetworks.dunevpn">
              <Image
                placeholder="blur"
                src={DuneVPN1}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
            <Link href="https://github.com/user01samiul/vpn-backend">
              <Image
                placeholder="blur"
                src={DuneVPN2}
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
