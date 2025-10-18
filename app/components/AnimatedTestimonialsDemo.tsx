import { AnimatedTestimonials } from "@/components/animated-testimonials";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "We’re driven by a passion for creating impactful solutions that simplify complex challenges and enable our clients to thrive in a rapidly evolving digital landscape.",
      name: "Samiul Islam",
      designation: "Founder at Intellixel",
      src: "https://media.licdn.com/dms/image/v2/D4D03AQHICRB3VDrzcA/profile-displayphoto-shrink_800_800/B4DZRmEDWaG4Ag-/0/1736879127710?e=1747872000&v=beta&t=Zs_ozPYCF1ZNiySH2lo11njtnRRGTLKIxUWtSnL5XH8",
    },
    // {
    //   quote:
    //     "Turning creativity into joy, designing with heart, and shaping a world where art, innovation, and sustainability thrive together.",
    //   name: "Rubaid Swapnil",
    //   designation: "Brand Identity Designer, UI/UX Designer at Intellixel.",
    //   src: "https://media.licdn.com/dms/image/v2/D5603AQGi18zS_RoSow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721064507977?e=1747872000&v=beta&t=pf3y6Af8fyee5CZFHmId-KqLT9qmAxIPhDN9ymNRRwQ",
    // },
    // {
    //   quote:
    //     "Believe in your journey, challenge the challenges, and let your passion make the way to your success.",
    //   name: "Tanvir Ahamed",
    //   designation: "Native android app & web developer at Intellixel.",
    //   src: "https://media.licdn.com/dms/image/v2/D5603AQFMRq_22DttLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725982154671?e=1747872000&v=beta&t=fRbKcgngVfGvQWF4n5YqwNMy06GOP4Zxr6aKaRk1P44",
    // }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
