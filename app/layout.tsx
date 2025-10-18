import { ThemeProvider } from "@/components/theme-provider";
import { NavProvider } from "@/context/NavContext";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import "./globals.css";

const questrial = Questrial({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Intellixel | Web & App Development, Branding Services",
  description:
    "Intellixel offers cutting-edge web development, mobile app development, and branding services to help automate and grow your business. Our expert team provides the best solutions tailored to your business needs.",
  icons: "/xel.png",
  openGraph: {
    title: "Intellixel | Web & App Development, Branding Services",
    description:
      "Intellixel offers cutting-edge web development, mobile app development, and branding services to help automate and grow your business.",
    url: "https://www.intellixel.com",
    siteName: "Intellixel",
    images: [
      {
        url: "https://www.intellixel.com/HomeShot.png", 
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "web development",
    "website development",
    "web application development",
    "app development",
    "mobile app development",
    "android app development",
    "digital solutions",
    "branding services",
    "business growth",
    "technology services",
    "Intellixel",
    "next.js",
    "react js",
    "javascript",
    "typescript",
    "express.js",
    "best web development service in usa canada EU mexico london england ireland america UK and worldwide",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={questrial.className} suppressHydrationWarning>
      <head>
        {/* google analytics */}
        {gaId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="global-bg-effects">
            <div className="noise-overlay"></div>
            <div className="blob-dark"></div>
            <div className="blob-charcoal"></div>
          </div>
          <main className="parentContainer">
            <NavProvider>
              <Nav />
              <SideNav />
            </NavProvider>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
