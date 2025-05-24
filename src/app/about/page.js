import { MissionVision } from '@/components/VisionMission'
import { WhoWeAreSection } from '@/components/WhoWeAreSection'

export const metadata = {
    title: "About Us | YourBrand",
    description:
        "Learn how YourBrand transforms life and business in the UAE—making every interaction simple, every process predictable, and every outcome successful.",
    openGraph: {
        title: "About Us | YourBrand",
        description:
            "Discover YourBrand’s mission and vision: empowering clients in the UAE with innovative solutions, personalized support, and unwavering dedication.",
        url: "https://yourdomain.com/about",
        siteName: "YourBrand",
        images: [
            {
                url: "https://yourdomain.com/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "YourBrand About Us",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | YourBrand",
        description:
            "Discover YourBrand’s mission & vision to transform life and business in the UAE with simple, predictable, successful processes.",
        images: ["https://yourdomain.com/twitter-about.jpg"],
    },
};

const Page = () => {
    return (
        <>
            <WhoWeAreSection />
            <MissionVision />
        </>
    )
}

export default Page
