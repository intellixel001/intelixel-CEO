"use client"
import ServicesSection from "./HomeSection1/ServicesSection";
import CodeBlock from "./HomeSection1/CodeBlock";
import TechAnimation from "./HomeSection1/TechAnimation";
import TechBackground from "./HomeSection1/TechBackground";
import TextContent from "./HomeSection1/TextContent";



export default function HomeSection1() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-12 md:py-20 text-white">
      <TechBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <TextContent />
          <TechAnimation />
        </div>
        <CodeBlock />
        <ServicesSection />
      </div>
    </section>
  );
}