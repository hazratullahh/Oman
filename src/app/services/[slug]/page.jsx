import React from "react";
import Image from "next/image";

const services = [
    {
        title: "Obtain Emirates ID",
        description1: "**Obtaining an Emirates ID:** Obtaining an Emirates ID is a crucial step for foreign residents and UAE nationals. It acts as a key identifier and is required for various administrative tasks. The application process involves submitting your biometric data and proof of identity to relevant authorities. Once processed, you will receive your ID, which should be carried for all official transactions within the UAE. The process is straightforward, but ensuring the right documents are submitted can make the experience easier.",
        description2: "The Emirates ID serves as a national identification card and is also integrated with other government services. It can be used for accessing health services, voting, and other activities that require personal identification. Additionally, Emirates ID is a mandatory document for opening a bank account or engaging in business activities within the UAE.",
        slug: "obtaining-an-emirates-id",
        image: "/images/contact.png",
        link: "https://www.uae.gov.ae/en/about-uae/emirates-id",
        id: 1,
    },
    {
        title: "Renew Emirates ID",
        description1: "**Renewing an Emirates ID:** Renewing your Emirates ID is essential to ensure its validity for continued use in legal and administrative matters. The renewal process typically takes place before the expiration date. It involves submitting an application along with necessary documents, including your old Emirates ID. The renewal is straightforward, but timing it correctly can prevent lapses in validity, which might cause inconveniences for the holder.",
        description2: "The renewal process can be done online or in person at the nearest relevant authority. Once renewed, the Emirates ID will continue to serve as a key document for identity verification in the UAE. It is important to keep your Emirates ID updated to avoid potential legal issues or difficulties with other transactions, such as immigration procedures and banking activities.",
        slug: "renewing-an-emirates-id",
        image: "/images/contact.png",
        link: "https://www.uae.gov.ae/en/about-uae/emirates-id-renewal",
        id: 2,
    },
    {
        title: "Setup Omani Company",
        description1: "**Opening companies and establishments in Oman:** Opening a company or establishment in Oman requires understanding the local business laws and regulations. The process typically includes choosing the type of company, submitting relevant documentation, obtaining business licenses, and registering with the Omani authorities. Oman offers a favorable business environment, especially for foreign investors, by providing various tax incentives and opportunities for growth across different sectors.",
        description2: "The application process for opening companies in Oman involves several stages such as obtaining approval from government authorities, registering the company name, and ensuring compliance with Oman’s commercial regulations. Investors need to understand the legal framework, including required capital and operational guidelines, to ensure a smooth business setup in the Sultanate.",
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
        description1: "**Completing Omani residency transactions:** Completing residency transactions in Oman is a critical step for expatriates and investors wishing to live and work in the country. The residency process includes submitting relevant documents such as proof of employment, health insurance, and accommodation details. Once approved, expatriates are granted residency status, allowing them to live and work in Oman legally. It’s essential to follow all immigration procedures and ensure that all requirements are met to prevent delays.",
        description2: "The Omani residency process also involves registering with the government’s immigration office, obtaining a residency card, and updating your address and employment status when required. Once granted, Omani residency opens up opportunities for long-term stays and better access to various benefits and services in the country. It is essential to stay informed about changes in the residency laws to avoid complications.",
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
        description1: "**Renewing commercial records:** Renewing commercial records is a necessary step for businesses to maintain their legitimacy and operational capacity. This process involves updating existing business records and ensuring that all details comply with the latest requirements set by governing bodies. Businesses must ensure that their records are renewed on time to avoid penalties and to continue to operate without disruptions.",
        description2: "Failure to renew commercial records on time can lead to legal complications, including fines, penalties, or even business closure. The renewal process typically involves submitting forms, paying fees, and providing proof of business continuity. It's an important step to ensure that a business can legally operate and access services like bank accounts or government contracts.",
        slug: "renewing-commercial-records",
        image: "/images/contact.png",
        link: "https://www.business.gov.au/business/renewing-records",
        id: 8,
    },
    {
        title: "Transfer Car Ownership",
        description1: "**Transferring car ownership:** Transferring car ownership is an important procedure for individuals buying or selling vehicles. This process involves submitting documentation to relevant authorities, including proof of ownership and identity verification. The car must also pass certain inspections to ensure it is roadworthy. The ownership transfer ensures that the buyer legally owns the vehicle and can legally drive it on the road.",
        description2: "In many countries, transferring car ownership also requires paying transfer fees and taxes. Once the transfer is completed, the new owner receives updated documents reflecting their ownership. The process varies by region, but it is essential to ensure compliance with local laws and regulations for a smooth transaction.",
        slug: "transferring-car-ownership",
        image: "/images/contact.png",
        link: "https://www.carregistry.com/transfer-ownership",
        id: 9,
    },
    {
        title: "Authenticate Documents",
        description1: "**Authenticating official documents from the Omani Ministry of Foreign Affairs and the UAE Ministry of Foreign Affairs:** Authenticating official documents from the Omani and UAE Ministries of Foreign Affairs is necessary for individuals and businesses needing to validate legal documents for use in foreign countries. The authentication process ensures that documents like birth certificates, contracts, and degrees are legally recognized outside the UAE or Oman. This process requires the submission of original documents and verification by the respective authorities.",
        description2: "Once authenticated, these documents can be used for various legal and administrative procedures, such as visa applications, business contracts, and international litigation. The process may involve additional steps, like translations or notarization, depending on the destination country. Document authentication is a crucial step for individuals and businesses engaged in international transactions or relocations.",
        slug: "authenticating-documents-omani-uae-foreign-affairs",
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
        description2: "Mobile apps offer the ability to access services directly from a user’s pocket, providing convenience and speed. With push notifications, personalized experiences, and integrated payment options, businesses can create mobile solutions that increase brand loyalty and customer satisfaction. Mobile app development can also provide valuable data insights, helping businesses optimize their services and offerings based on real-time user behavior.",
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
            title: "Service Not Found | fqg",
            description: "We couldn't find the service you requested.",
        };
    }

    const title = `${service.title} | fqg`;
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
    const service = services.find(async (s) => s.slug === resolvedParams.slug);

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
            <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12 md:pt-32">
                <div className="max-w-3xl mx-auto px-4">
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