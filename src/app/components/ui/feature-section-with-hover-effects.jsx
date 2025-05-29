import { cn, limitString } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionWithHoverEffects() {
  const services = [
    {
      title: "How to Easily Obtain an Emirati ID",
      description1: "**Obtaining an Emirates ID:** Obtaining an Emirates ID is a crucial step for foreign residents and Oman nationals. It acts as a key identifier and is required for various administrative tasks. The application process involves submitting your biometric data and proof of identity to relevant authorities. Once processed, you will receive your ID, which should be carried for all official transactions within the Oman. The process is straightforward, but ensuring the right documents are submitted can make the experience easier.",
      description2: "We offer comprehensive services to facilitate and expedite the process of obtaining UAE residency for Omani and Gulf citizens. All required steps can be completed within just one business day. This includes providing specialized consultations and comprehensive guidance, as well as preparing the necessary documents. Our goal is to ensure a smooth and efficient experience for our customers in obtaining their Emirati ID quickly and professionally.",
      slug: "obtaining-an-emirates-id",
      image: "image_of_emirates_id.jpg",
      link: "https://www.Oman.gov.ae/en/about-Oman/emirates-id",
      id: 1,
      icon: <IconHeart />,
    },
    {
      title: "How to Easily Renew an Emirati ID",
      description1: "**Renewing an Emirates ID:** Renewing your Emirates ID is essential to ensure its validity for continued use in legal and administrative matters. The renewal process typically takes place before the expiration date. It involves submitting an application along with necessary documents, including your old Emirates ID. The renewal is straightforward, but timing it correctly can prevent lapses in validity, which might cause inconveniences for the holder.",
      description2: "The renewal process can be done online or in person at the nearest relevant authority. Once renewed, the Emirates ID will continue to serve as a key document for identity verification in the Oman. It is important to keep your Emirates ID updated to avoid potential legal issues or difficulties with other transactions, such as immigration procedures and banking activities.",
      slug: "renewing-an-emirates-id",
      image: "image_of_renewing_emirates_id.jpg",
      link: "https://www.Oman.gov.ae/en/about-Oman/emirates-id-renewal",
      id: 2,
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "How To Transfer Saudi Records",
      description1: "**Existing commercial records and transferring them with the lists to open an investment in Saudi Arabia:** In Saudi Arabia, managing commercial records and transferring them for investment purposes is an integral step for businesses wishing to operate in the kingdom. Investors must ensure that they meet local regulations for transferring commercial records, including proper documentation and permits. The process facilitates foreign investment and helps businesses enter the Saudi market with ease.",
      description2: "The transfer of commercial records must comply with Saudi Arabia’s investment and business laws, which require providing detailed records and up-to-date legal documents. Once the records are successfully transferred, businesses can initiate operations with minimal legal hurdles. The government has streamlined this process to encourage economic diversification and attract global investments.",
      slug: "transferring-commercial-records-saudi-investment",
      image: "image_of_saudi_investment.jpg",
      link: "https://www.saudigov.sa/en/investment-in-saudi-arabia",
      id: 4,
      icon: <IconRouteAltLeft />,
    },
    {
      title: "How To Complete Omani Residency",
      description1: "**Completing Omani residency transactions:** Completing residency transactions in Oman is a critical step for expatriates and investors wishing to live and work in the country. The residency process includes submitting relevant documents such as proof of employment, health insurance, and accommodation details. Once approved, expatriates are granted residency status, allowing them to live and work in Oman legally. It’s essential to follow all immigration procedures and ensure that all requirements are met to prevent delays.",
      description2: "Facilitating the procedures for obtaining residency in Oman for investors, employees, and workers. Bring an original valid passport with a valid residency visa.A notification from the Ministry of Labor for private sector employees and a letter from the government agency for government sector employees for the first issuance.Attach a 4x6 passport-sized photo with a white background for the first-time issuance of a resident card for those under the age of seven.",
      slug: "completing-omani-residency",
      image: "image_of_omani_residency.jpg",
      link: "https://www.oman.om/residency-services",
      id: 5,
      icon: <IconCloud />,
    },
    {
      title: "Transfer Commercial Record",
      description1: "**Transferring ownership of a commercial record:** Transferring ownership of a commercial record is an important business procedure for entrepreneurs looking to sell or transfer control of their commercial entity. This process involves documenting the transfer, updating relevant ownership details, and obtaining approval from the governing authorities. Ensuring proper compliance with local regulations is vital for the legal transfer of ownership.",
      description2: "In many cases, the transfer of commercial records may involve tax liabilities, liabilities associated with business assets, and agreements that must be reviewed by the appropriate regulatory bodies. The process varies from country to country, but it’s important for businesses to have all documentation in order to avoid delays and ensure that the transaction goes smoothly.",
      slug: "transferring-ownership-commercial-record",
      image: "image_of_business_ownership_transfer.jpg",
      link: "https://www.business.gov.au/business/ownership-transfer",
      id: 6,
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Update Commercial Records",
      description1: "**Updating commercial records:** Updating commercial records is essential for businesses to stay compliant with local laws and regulations. This process typically involves revising business information, such as ownership details, company address, or other critical operational changes. Keeping commercial records updated ensures that businesses maintain their legal standing and can engage in transactions with minimal complications.",
      description2: "Updating commercial records may also require submitting relevant documents, paying fees, or notifying stakeholders of any changes. Businesses should stay on top of required updates to avoid penalties and to ensure they are operating in accordance with the latest laws and regulations. Regular updates help companies stay transparent and aligned with regulatory bodies.",
      slug: "updating-commercial-records",
      image: "image_of_updating_commercial_records.jpg",
      link: "https://www.business.gov.au/business/record-updates",
      id: 7,
      icon: <IconEaseInOut />,
    },
    {
      title: "Renew Commercial Records",
      description1: "**Renewing commercial records:** Renewing commercial records is a necessary step for businesses to maintain their legitimacy and operational capacity. This process involves updating existing business records and ensuring that all details comply with the latest requirements set by governing bodies. Businesses must ensure that their records are renewed on time to avoid penalties and to continue to operate without disruptions.",
      description2: "An investor whose commercial registration has expired must renew or cancel it to avoid financial penalties resulting from delays in renewal. The commercial registration in the Sultanate of Oman is renewed every five or three years, depending on the type of registration. We provide you with a commercial registration renewal service with consultations.",
      slug: "renewing-commercial-records",
      image: "image_of_renewing_commercial_records.jpg",
      link: "https://www.business.gov.au/business/renewing-records",
      id: 8,
      icon: <IconTerminal2 />,
    },
    {
      title: "Traffic Services Transactions ",
      description1: "We provide comprehensive services for completing traffic transactions and renewing vehicles without the need for a physical visit or inspection. We also offer quick and efficient car export services from the UAE to Oman, ensuring all procedures run smoothly to save our customers time and effort.",
      description2: "We provide comprehensive services for completing traffic transactions and renewing vehicles without the need for a physical visit or inspection. We also offer quick and efficient car export services from the UAE to Oman, ensuring all procedures run smoothly to save our customers time and effort.",
      slug: "transferring-car-ownership",
      image: "image_of_car_ownership_transfer.jpg",
      link: "https://www.carregistry.com/transfer-ownership",
      id: 9,
      icon: <IconTerminal2 />,
    },
    {
      title: "Authenticate Documents",
      description1: "Providing documentation and authentication services for all documents from foreign ministries or embassies.",
      description2: "Once authenticated, these documents can be used for various legal and administrative procedures, such as visa applications, business contracts, and international litigation. The process may involve additional steps, like translations or notarization, depending on the destination country. Document authentication is a crucial step for individuals and businesses engaged in international transactions or relocations.",
      slug: "authenticating-documents-omani-Oman-foreign-affairs",
      image: "image_of_document_authentication.jpg",
      link: "https://www.mofa.gov.om/en/services/authentication",
      id: 10,
      icon: <IconTerminal2 />,
    },
    {
      title: "Web App Development",
      description1: "**Web App Development:** Web app development is a crucial aspect of modern business solutions. With the increasing need for businesses to offer seamless digital experiences, having a web app tailored to your business's unique needs is essential. Web apps provide customers with easy access to services and products through any browser, ensuring consistent engagement. The development process involves designing the interface, coding functionalities, and testing to ensure responsiveness across devices.",
      description2: "A web app can streamline your business operations by automating various tasks, improving customer interaction, and offering services remotely. Whether it's a customer portal, e-commerce platform, or internal tool, web app development ensures that your business adapts to the digital age, improving efficiency, accessibility, and growth potential. It’s essential to choose a team that understands your business model and creates a scalable and secure web application.",
      slug: "web-app-development",
      image: "image_of_web_app.jpg",
      link: "https://www.techservices.com/web-app-development",
      id: 11,
      icon: <IconTerminal2 />,
    },
    {
      title: "Graphic Design Service",
      description1: "**Graphic Design:** Graphic design is the art of visually communicating ideas through digital or print media. Whether it's creating logos, marketing materials, or user interfaces, graphic design plays a key role in shaping a brand's identity. Effective design not only attracts attention but also communicates your message clearly, ensuring customers understand and engage with your brand. A strong graphic design can elevate your marketing efforts and create a memorable customer experience.",
      description2: "Incorporating graphic design into your business strategy allows you to build a cohesive brand identity, enhance customer engagement, and create visually appealing content. From social media posts to packaging and advertisements, graphic design ensures consistency across all touchpoints with your audience. Professional designers will work with you to craft designs that align with your brand's values and target market, helping you stand out in a competitive environment.",
      slug: "graphic-design",
      image: "image_of_graphic_design.jpg",
      link: "https://www.designservices.com/graphic-design",
      id: 12,
      icon: <IconTerminal2 />,
    },
    {
      title: "Mobile App Development",
      description1: "**Mobile App Development:** Mobile app development allows businesses to create applications for smartphones and tablets, enhancing customer engagement and offering services on the go. With mobile apps, businesses can improve user experience, facilitate transactions, and increase customer retention. The development process involves creating apps that are intuitive, functional, and compatible with both iOS and Android systems.",
      description2: "Mobile apps offer the ability to access services directly from a user’s pocket, providing convenience and speed. With push notifications, personalized experiences, and integrated payment options, businesses can create mobile solutions that increase brand loyalty and customer satisfaction. Mobile app development can also provide valuable data insights, helping businesses optimize their services and offerings based on real-time user behavior.",
      slug: "mobile-app-development",
      image: "image_of_mobile_app.jpg",
      link: "https://www.appdevservices.com/mobile-app-development",
      id: 13,
      icon: <IconTerminal2 />,
    },
    {
      title: "Business MVP Development",
      description1: "**MVP Development for Business:** MVP (Minimum Viable Product) development is a strategic approach for launching a new product with the core features that address the primary needs of users. By focusing on essential functionalities, businesses can quickly validate ideas, gather user feedback, and improve the product before scaling. MVP development reduces risks and helps businesses avoid investing heavily in unproven ideas.",
      description2: "The MVP development process is designed to minimize resources spent while providing a functioning prototype that showcases the potential of the product. It helps businesses test assumptions, make informed decisions, and adapt quickly to user feedback. Once the MVP is successfully validated, businesses can invest more resources to scale the product and add additional features that enhance user experience and value.",
      slug: "mvp-development-business",
      image: "image_of_mvp_development.jpg",
      link: "https://www.mvpdev.com",
      id: 14,
      icon: <IconTerminal2 />,
    },
    {
      title: "Establishing Companies and Establishments in the Sultanate of Oman",
      description1: "**Opening companies and establishments in Oman:** Opening a company or establishment in Oman requires understanding the local business laws and regulations. The process typically includes choosing the type of company, submitting relevant documentation, obtaining business licenses, and registering with the Omani authorities. Oman offers a favorable business environment, especially for foreign investors, by providing various tax incentives and opportunities for growth across different sectors.",
      description2: " ",
      slug: "opening-companies-in-oman",
      image: "image_of_oman_business.jpg",
      link: "https://www.oman.om/business/starting-a-business",
      id: 3,
      icon: <IconHelp />,
    },
  ];

  return (
    <div className="md:z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative py-10 max-w-7xl mx-auto">
      {services.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description2,
  slug,
  icon,
  index,
}) => {
  return (
    <Link href={`/services/${slug}`}>
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-10 text-neutral-50 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-50 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-100 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {limitString(description2, 65)}
        </p>
      </div>
    </Link>
  );
};
