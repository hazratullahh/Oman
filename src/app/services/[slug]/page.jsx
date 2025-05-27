import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "How to Easily Obtain an Emirati ID",
        description1: "We offer comprehensive services to facilitate and expedite the process of obtaining UAE residency for Omani and Gulf citizens. All required steps can be completed within just one business day. This includes providing specialized consultations and comprehensive guidance, as well as preparing the necessary documents. Our goal is to ensure a smooth and efficient experience for our customers in obtaining their Emirati ID quickly and professionally.",
        description2: "",
        slug: "obtaining-an-emirates-id",
        image: "/images/contact.png",
        link: "https://www.uae.gov.ae/en/about-uae/emirates-id",
        id: 1,
    },
    {
        title: "Renew Emirates ID",
        description1: "Emirates ID cards must be renewed within 30 days of their expiration. Failure to renew will result in a late fee. We offer an Emirates ID card renewal service, meeting all requirements in as little as 24 hours.",
        description2: "Renewing your Emirates ID is essential to ensure its validity for continued use in legal and administrative matters. The renewal process typically takes place before the expiration date. It involves submitting an application along with necessary documents, including your old Emirates ID. The renewal is straightforward, but timing it correctly can prevent lapses in validity, which might cause inconveniences for the holder.",
        slug: "renewing-an-emirates-id",
        image: "/images/contact.png",
        link: "https://www.uae.gov.ae/en/about-uae/emirates-id-renewal",
        id: 2,
    },
    {
        title: "Establishing Companies and Establishments in the Sultanate of Oman",
        description1: "**Opening companies and establishments in Oman:** We provide fast and reliable licensing and commercial registration services for Gulf and Omani companies and establishments in the Sultanate of Oman. Our team of experts provides personalized advice and comprehensive guidance to facilitate all legal procedures, ensuring a smooth and efficient experience for our clients establishing their businesses in the Omani market.",
        description2: "",
        slug: "opening-companies-in-oman",
        image: "/images/contact.png",
        link: "https://www.oman.om/business/starting-a-business",
        id: 3,
    },
    {
        title: "Transfer Saudi Records",
        description1: "**Existing commercial records and transferring them with the lists to open an investment in Saudi Arabia:** In Saudi Arabia, managing commercial records and transferring them for investment purposes is an integral step for businesses wishing to operate in the kingdom. Investors must ensure that they meet local regulations for transferring commercial records, including proper documentation and permits. The process facilitates foreign investment and helps businesses enter the Saudi market with ease.",
        description2: "The transfer of commercial records must comply with Saudi Arabia’s investment and business laws, which require providing detailed records and up-to-date legal documents. Once the records are successfully transferred, businesses can initiate operations with minimal legal hurdles. The government has streamlined this process to encourage economic diversification and attract global investments.",
        slug: "transferring-commercial-records-saudi-investment",
        image: "/images/contact.png",
        link: "https://www.saudigov.sa/en/investment-in-saudi-arabia",
        id: 4,
    },
    {
        title: "Complete Omani Residency",
        description1: "A notification from the Ministry of Labor for private sector employees and a letter from the government agency for government sector employees for the first issuance. Attach a 4x6 passport-sized photo with a white background for the first-time issuance of a resident card for those under the age of seven.",
        description2: "",
        slug: "completing-omani-residency",
        image: "/images/contact.png",
        link: "https://www.oman.om/residency-services",
        id: 5,
    },
    {
        title: "Transfer Commercial Record",
        description1: "**Transferring ownership of a commercial record:** Transferring ownership of a commercial record is an important business procedure for entrepreneurs looking to sell or transfer control of their commercial entity. This process involves documenting the transfer, updating relevant ownership details, and obtaining approval from the governing authorities. Ensuring proper compliance with local regulations is vital for the legal transfer of ownership.",
        description2: "In many cases, the transfer of commercial records may involve tax liabilities, liabilities associated with business assets, and agreements that must be reviewed by the appropriate regulatory bodies. The process varies from country to country, but it’s important for businesses to have all documentation in order to avoid delays and ensure that the transaction goes smoothly.",
        slug: "transferring-ownership-commercial-record",
        image: "/images/contact.png",
        link: "https://www.business.gov.au/business/ownership-transfer",
        id: 6,
    },
    {
        title: "Update Commercial Records",
        description1: "**Updating commercial records:** Updating commercial records is essential for businesses to stay compliant with local laws and regulations. This process typically involves revising business information, such as ownership details, company address, or other critical operational changes. Keeping commercial records updated ensures that businesses maintain their legal standing and can engage in transactions with minimal complications.",
        description2: "Updating commercial records may also require submitting relevant documents, paying fees, or notifying stakeholders of any changes. Businesses should stay on top of required updates to avoid penalties and to ensure they are operating in accordance with the latest laws and regulations. Regular updates help companies stay transparent and aligned with regulatory bodies.",
        slug: "updating-commercial-records",
        image: "/images/contact.png",
        link: "https://www.business.gov.au/business/record-updates",
        id: 7,
    },
    {
        title: "Renew Commercial Records",
        description1: "An investor whose commercial registration has expired must renew or cancel it to avoid financial penalties resulting from delays in renewal. The commercial registration in the Sultanate of Oman is renewed every five or three years, depending on the type of registration. We provide you with a commercial registration renewal service with consultations.",
        description2: " ",
        slug: "renewing-commercial-records",
        image: "/images/contact.png",
        link: "https://www.business.gov.au/business/renewing-records",
        id: 8,
    },
    {
        title: "Traffic Services",
        description1: "We provide comprehensive services for completing traffic transactions and renewing vehicles without the need for a physical visit or inspection. We also offer quick and efficient car export services from the UAE to Oman, ensuring all procedures run smoothly to save our customers time and effort.",
        description2: "",
        slug: "transferring-car-ownership",
        image: "/images/contact.png",
        link: "https://www.carregistry.com/transfer-ownership",
        id: 9,
    },
    {
        title: "Authenticate Documents",
        description1: "Providing documentation and authentication services for all documents from foreign ministries or embassies.",
        slug: "authenticating-documents-omani-uae-foreign-affairs",
        description2: "",
        image: "/images/contact.png",
        link: "https://www.mofa.gov.om/en/services/authentication",
        id: 10,
    },
    {
        title: "Web App Development",
        description1: "**Web App Development:** Web app development is a crucial aspect of modern business solutions. With the increasing need for businesses to offer seamless digital experiences, having a web app tailored to your business's unique needs is essential. Web apps provide customers with easy access to services and products through any browser, ensuring consistent engagement. The development process involves designing the interface, coding functionalities, and testing to ensure responsiveness across devices.",
        description2: "A web app can streamline your business operations by automating various tasks, improving customer interaction, and offering services remotely. Whether it's a customer portal, e-commerce platform, or internal tool, web app development ensures that your business adapts to the digital age, improving efficiency, accessibility, and growth potential. It’s essential to choose a team that understands your business model and creates a scalable and secure web application.",
        slug: "web-app-development",
        image: "/images/contact.png",
        link: "https://www.techservices.com/web-app-development",
        id: 11,
    },
    {
        title: "Graphic Design",
        description1: "**Graphic Design:** Graphic design is the art of visually communicating ideas through digital or print media. Whether it's creating logos, marketing materials, or user interfaces, graphic design plays a key role in shaping a brand's identity. Effective design not only attracts attention but also communicates your message clearly, ensuring customers understand and engage with your brand. A strong graphic design can elevate your marketing efforts and create a memorable customer experience.",
        description2: "Incorporating graphic design into your business strategy allows you to build a cohesive brand identity, enhance customer engagement, and create visually appealing content. From social media posts to packaging and advertisements, graphic design ensures consistency across all touchpoints with your audience. Professional designers will work with you to craft designs that align with your brand's values and target market, helping you stand out in a competitive environment.",
        slug: "graphic-design",
        image: "/images/contact.png",
        link: "https://www.designservices.com/graphic-design",
        id: 12,
    },
    {
        title: "Mobile App Development",
        description1: "**Mobile App Development:** Mobile app development allows businesses to create applications for smartphones and tablets, enhancing customer engagement and offering services on the go. With mobile apps, businesses can improve user experience, facilitate transactions, and increase customer retention. The development process involves creating apps that are intuitive, functional, and compatible with both iOS and Android systems.",
        description2: "Deliver your products and services directly to your customers’ fingertips—anywhere, anytime—through a tailor-made mobile app. Engage users instantly through targeted push notifications, deliver personalized content and recommendations, streamline transactions with secure in-app payments and one-tap checkout, and build loyalty via rewards and exclusive perks. Plus, gain deep, real-time insights into user behavior to continuously refine your offerings and boost satisfaction. Whether you’re booking appointments, showcasing products, or offering on-demand services, a mobile app empowers your business to drive retention, strengthen customer relationships, and stay ahead in today’s fast-paced market.",
        slug: "mobile-app-development",
        image: "/images/contact.png",
        link: "https://www.appdevservices.com/mobile-app-development",
        id: 13,
    },
    {
        title: "Business MVP Development",
        description1: "**MVP Development for Business:** MVP (Minimum Viable Product) development is a strategic approach for launching a new product with the core features that address the primary needs of users. By focusing on essential functionalities, businesses can quickly validate ideas, gather user feedback, and improve the product before scaling. MVP development reduces risks and helps businesses avoid investing heavily in unproven ideas.",
        description2: "The MVP development process is designed to minimize resources spent while providing a functioning prototype that showcases the potential of the product. It helps businesses test assumptions, make informed decisions, and adapt quickly to user feedback. Once the MVP is successfully validated, businesses can invest more resources to scale the product and add additional features that enhance user experience and value.",
        slug: "mvp-development-business",
        image: "/images/contact.png",
        link: "https://www.mvpdev.com",
        id: 14,
    },
];

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const service = services.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found | TAS-HEEL",
            description: "We couldn't find the service you requested.",
        };
    }

    const title = `${service.title} | TAS-HEEL`;
    const description =
        service.description1.replace(/\*\*/g, "").slice(0, 157).trim() + "...";
    const url = `https://fqg.com/services/${service.slug}`;
    const imageUrl = `https://fqg.com${service.image}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: "fqg",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${service.title} – fqg`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

const Page = async ({ params }) => {
    const resolvedParams = await params;

    const service = services.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return (
            <section className="py-20 text-center">
                <h1 className="text-2xl font-bold">Service Not Found</h1>
                <p className="mt-4 text-gray-400">
                    We couldn't find the service you requested.
                </p>
            </section>
        );
    }

    return (
        <>
            <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12 md:pt-10">
                <div className="max-w-3xl mx-auto px-4">
                    {/* Back Button */}
                    <div className="w-full max-w-3xl mb-8">
                        <Link
                            href="/#service"
                            className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span>Back</span>
                        </Link>
                    </div>

                    <h1 className="text-3xl font-extrabold text-white mb-6">
                        {service.title}
                    </h1>
                    <div className="relative w-full h-64 mb-8">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="rounded-lg object-cover"
                            priority
                        />
                    </div>
                    <div className="prose prose-invert text-white">
                        <p className="py-5 text-justify text-lg md:text-xl font-sans">
                            {service.description1.replace(/\*\*/g, "")}
                        </p>
                        <p className="py-5 text-justify text-lg md:text-xl font-sans">
                            {service.description2}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page; 