import { Feature } from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import InfiniteScrollImages from "@/components/InfiniteScrollImages ";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUS } from "@/components/WhyChoose-Us";
import { testimonials } from "@/lib/utils";

export const metadata = {
  title: "Home | Your Oman Business & PRO Partner",
  description:
    "To transform life and business in the Oman by making every interaction simple, every process predictable, and every outcome successful. Empowering clients with innovative solutions and personalized support.",
  openGraph: {
    title: "Your Oman Business & PRO Partner",
    description:
      "Transforming life and business in the Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
    url: "https://yourdomain.com/",
    siteName: "YourBrand",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YourBrand – Transforming Oman Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Oman Business & PRO Partner",
    description:
      "Transforming life and business in the Oman with simple, predictable, and successful processes. Expert PRO, visa, company setup, and more.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="services">
        <Feature />
      </div>
      <WhyChooseUS />
      <InfiniteScrollImages />

      <div
        className="bg-gradient-to-b from-gray-900 via-gray-950 to-black h-[40rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Testimonials items={testimonials} direction="right" speed="slow" />
      </div>
    </>
  );
}
