import FaqClient from "@/app/components/FAQClient";
import Link from "next/link";

export const metadata = {
  title: "FAQ | fqg",
  description:
    "Find answers to the most frequently asked questions about fqg’s services, processes, and how we can help you succeed in the Oman.",
  openGraph: {
    title: "FAQ | fqg",
    description:
      "Explore fqg’s FAQ to learn more about our business setup, PRO services, visa assistance, and more in the Oman.",
    url: "https://fqg.com/faq",
    siteName: "fqg",
    images: [
      {
        url: "https://fqg.com/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "fqg FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | fqg",
    description:
      "Got questions? Check out fqg’s FAQ for quick answers on our services, processes, and how we support your growth in the Oman.",
    images: ["https://fqg.com/twitter-faq.jpg"],
  },
};

const faqData = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within 30 days of purchase if you are not satisfied.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@example.com or live chat.",
  },
  {
    question: "Do you offer team discounts?",
    answer:
      "Yes! We provide discounts for teams of 5 or more. Contact sales for details.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and secure storage practices.",
  },
];

export default function FaqServer() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 flex flex-col items-center px-4 py-10 sm:px-6 lg:px-8 md:pt-14">
      {/* Back Button */}
      <div className="w-full max-w-3xl mb-8">
        <Link
          href="/"
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

      {/* Hero/Banner */}
      <section className="text-center max-w-3xl mb-12 px-4">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Find answers to common questions about our service, policies, and
          security. Still have questions? Reach out anytime.
        </p>
      </section>

      {/* FAQ Accordion */}
      <FaqClient faqData={faqData} />
    </main>
  );
}
