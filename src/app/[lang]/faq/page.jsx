// src/app/[lang]/faq/page.js
import FaqClient from "@/app/components/FAQClient";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n"; // Import getDictionary
import { cn } from "@/lib/utils"; // Assuming you have cn utility

// Updated faqData structure to be multilingual
const faqData = [
  {
    question_en: "How can you help me obtain an Emirati ID?",
    answer_en:
      "We offer comprehensive services to facilitate and expedite the process of obtaining UAE residency for Omani and Gulf citizens. All required steps can be completed within just one business day, including specialized consultations, comprehensive guidance, and document preparation.",
    question_ar: "كيف يمكنك مساعدتي في الحصول على الهوية الإماراتية؟",
    answer_ar:
      "نقدم خدمات شاملة لتسهيل وتسريع عملية الحصول على الإقامة في دولة الإمارات العربية المتحدة للمواطنين العمانيين ومواطني دول الخليج. يمكن إتمام جميع الخطوات المطلوبة في غضون يوم عمل واحد فقط، بما في ذلك الاستشارات المتخصصة والإرشادات الشاملة وإعداد المستندات.",
  },
  {
    question_en: "What is the process for renewing an Emirates ID?",
    answer_en:
      "Emirates ID cards must be renewed within 30 days of expiration to avoid late fees. We provide a swift renewal service, meeting all requirements in as little as 24 hours to ensure your ID remains valid for all legal and administrative matters.",
    question_ar: "ما هي عملية تجديد الهوية الإماراتية؟",
    answer_ar:
      "يجب تجديد بطاقات الهوية الإماراتية خلال 30 يومًا من تاريخ انتهائها لتجنب رسوم التأخير. نقدم خدمة تجديد سريعة، تلبي جميع المتطلبات في أقل من 24 ساعة لضمان بقاء هويتك صالحة لجميع الأمور القانونية والإدارية.",
  },
  {
    question_en:
      "Can you assist with transferring commercial records for Saudi investment?",
    answer_en:
      "Yes, we help businesses manage and transfer existing commercial records for investment purposes in Saudi Arabia. We ensure compliance with local regulations, including proper documentation and permits, to help you easily enter the Saudi market.",
    question_ar:
      "هل يمكنكم المساعدة في نقل السجلات التجارية للاستثمار السعودي؟",
    answer_ar:
      "نعم، نساعد الشركات في إدارة ونقل السجلات التجارية القائمة لأغراض الاستثمار في المملكة العربية السعودية. نضمن الامتثال للوائح المحلية، بما في ذلك التوثيق والتصاريح المناسبة، لمساعدتك على دخول السوق السعودي بسهولة.",
  },
  {
    question_en: "What's involved in completing Omani residency?",
    answer_en:
      "For Omani residency, we assist with obtaining necessary notifications from the Ministry of Labor for private sector employees or a letter from the government agency for government sector employees for the first issuance. We also guide on photo requirements for resident cards.",
    question_ar: "ما الذي يتضمنه إتمام الإقامة العمانية؟",
    answer_ar:
      "لإتمام الإقامة العمانية، نساعد في الحصول على الإشعارات اللازمة من وزارة العمل لموظفي القطاع الخاص أو رسالة من الجهة الحكومية لموظفي القطاع الحكومي للإصدار الأول. كما نوجه بشأن متطلبات الصور الشخصية لبطاقات الإقامة.",
  },
  {
    question_en: "Do you handle the transfer of commercial record ownership?",
    answer_en:
      "Absolutely. Transferring ownership of a commercial record is a key service we provide, ensuring all documentation is in order, ownership details are updated, and approvals from governing authorities are secured for a smooth and legal transfer.",
    question_ar: "هل تتعاملون مع نقل ملكية السجلات التجارية؟",
    answer_ar:
      "بالتأكيد. نقل ملكية السجل التجاري هو خدمة رئيسية نقدمها، مع ضمان أن تكون جميع الوثائق مرتبة، وتفاصيل الملكية محدثة، والموافقات من السلطات الحكومية مؤمنة لنقل سلس وقانوني.",
  },
  {
    question_en: "How do you help with updating commercial records?",
    answer_en:
      "We assist businesses in updating their commercial records to comply with local laws. This includes revising business information like ownership details, company addresses, or other operational changes, helping you maintain legal standing and avoid penalties.",
    question_ar: "كيف تساعدون في تحديث السجلات التجارية؟",
    answer_ar:
      "نساعد الشركات في تحديث سجلاتها التجارية للامتثال للقوانين المحلية. يشمل ذلك مراجعة معلومات العمل مثل تفاصيل الملكية، وعنوان الشركة، أو غيرها من التغييرات التشغيلية الهامة، مما يساعدك على الحفاظ على الوضع القانوني وتجنب العقوبات.",
  },
  {
    question_en: "What is the process for renewing commercial records in Oman?",
    answer_en:
      "Commercial registrations in the Sultanate of Oman typically need renewal every three or five years. We offer a comprehensive service to renew your commercial registration, complete with consultations, to help you avoid financial penalties.",
    question_ar: "ما هي عملية تجديد السجلات التجارية في عمان؟",
    answer_ar:
      "تحتاج السجلات التجارية في سلطنة عمان عادةً إلى التجديد كل ثلاث أو خمس سنوات. نقدم خدمة شاملة لتجديد سجلك التجاري، مع تقديم الاستشارات، لمساعدتك على تجنب الغرامات المالية.",
  },
  {
    question_en: "What traffic services do you offer, particularly for cars?",
    answer_en:
      "We provide comprehensive services for completing traffic transactions, renewing vehicle registrations without a physical visit or inspection, and quick, efficient car export services from the UAE to Oman, streamlining all procedures.",
    question_ar: "ما هي خدمات المرور التي تقدمونها، خاصة للسيارات؟",
    answer_ar:
      "نقدم خدمات شاملة لإنجاز المعاملات المرورية، وتجديد تسجيل المركبات دون الحاجة إلى زيارة فعلية أو فحص، وخدمات تصدير السيارات السريعة والفعالة من الإمارات إلى عمان، مما يبسط جميع الإجراءات.",
  },
  {
    question_en:
      "Can you assist with authenticating documents from foreign ministries or embassies?",
    answer_en:
      "Yes, we offer full documentation and authentication services for all your documents, ensuring they are properly certified by foreign ministries or embassies as required.",
    question_ar:
      "هل يمكنكم المساعدة في توثيق المستندات من وزارات الخارجية أو السفارات؟",
    answer_ar:
      "نعم، نقدم خدمات التوثيق والتصديق الكاملة لجميع مستنداتك، مع ضمان تصديقها بشكل صحيح من قبل وزارات الخارجية أو السفارات حسب الاقتضاء.",
  },
  {
    question_en: "Do you provide web or mobile app development services?",
    answer_en:
      "Yes, we offer comprehensive web and mobile app development. We create tailor-made applications designed to enhance customer engagement, streamline operations, and deliver your products and services directly to your customers' fingertips.",
    question_ar: "هل تقدمون خدمات تطوير تطبيقات الويب أو الجوال؟",
    answer_ar:
      "نعم، نقدم خدمات تطوير تطبيقات الويب والجوال الشاملة. ننشئ تطبيقات مصممة خصيصًا لتعزيز تفاعل العملاء، وتبسيط العمليات، وتقديم منتجاتك وخدماتك مباشرة إلى متناول يد عملائك.",
  },
  {
    question_en: "What is MVP development and how can it benefit my business?",
    answer_en:
      "MVP (Minimum Viable Product) development is a strategic approach where we launch your new product with only its core features. This allows for quick validation of ideas, gathering user feedback, and refining the product before a full-scale launch, minimizing risks and investment in unproven concepts.",
    question_ar: "ما هو تطوير MVP وكيف يمكن أن يفيد عملي؟",
    answer_ar:
      "تطوير MVP (الحد الأدنى من المنتج القابل للتطبيق) هو نهج استراتيجي نطلق من خلاله منتجك الجديد بميزاته الأساسية فقط. يتيح ذلك التحقق السريع من الأفكار، وجمع ملاحظات المستخدمين، وتحسين المنتج قبل الإطلاق الكامل، مما يقلل المخاطر والاستثمار في المفاهيم غير المثبتة.",
  },
  {
    question_en: "What graphic design services do you offer?",
    answer_en:
      "Our graphic design services help shape your brand's identity through visual communication. We create logos, marketing materials, and user interfaces that attract attention, clearly communicate your message, and ensure a memorable customer experience.",
    question_ar: "ما هي خدمات التصميم الجرافيكي التي تقدمونها؟",
    answer_ar:
      "تساعد خدمات التصميم الجرافيكي لدينا في تشكيل هوية علامتك التجارية من خلال التواصل البصري. نقوم بإنشاء شعارات ومواد تسويقية وواجهات مستخدم تجذب الانتباه، وتوصل رسالتك بوضوح، وتضمن تجربة عملاء لا تُنسى.",
  },
  {
    question_en:
      "How can you help establish companies and establishments in Oman?",
    answer_en:
      "We provide fast and reliable licensing and commercial registration services for both Gulf and Omani companies and establishments in the Sultanate of Oman. Our expert team offers personalized advice and comprehensive guidance throughout the legal procedures.",
    question_ar: "كيف يمكنكم المساعدة في تأسيس الشركات والمنشآت في عمان؟",
    answer_ar:
      "نقدم خدمات ترخيص وتسجيل تجاري سريعة وموثوقة لكل من الشركات والمنشآت الخليجية والعمانية في سلطنة عمان. يقدم فريق الخبراء لدينا نصائح شخصية وإرشادات شاملة طوال الإجراءات القانونية.",
  },
];

// Metadata can now be dynamic based on the dictionary
export async function generateMetadata({ params }) {
  // Await params here before accessing its properties
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return {
    title: dictionary.faq_meta_title,
    description: dictionary.faq_meta_description,
    openGraph: {
      title: dictionary.faq_meta_title,
      description: dictionary.faq_meta_description_og,
      url: "https://tasheelom.com/faq", // Consider making this dynamic if your domain changes
      siteName: "tasheelom",
      images: [
        {
          url: "https://tasheelom.com/og-image.jpg", // Consider making this dynamic if your image path changes
          width: 1200,
          height: 630,
          alt: dictionary.faq_meta_image_alt,
        },
      ],
      locale: resolvedParams.lang === "ar" ? "ar_AR" : "en_US", // Use resolvedParams.lang
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.faq_meta_title,
      description: dictionary.faq_meta_description_twitter,
      images: ["https://tasheelom.com/twitter-image.jpg"], // Consider making this dynamic
    },
  };
}

const FaqServer = async ({ params }) => {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang); // Fetch the dictionary
  const isArabic = resolvedParams.lang === "ar"; // Determine if Arabic

  return (
    <main
      className={cn(
        "min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 flex flex-col items-center px-4 py-10 sm:px-6 lg:px-8 md:pt-14",
        isArabic ? "text-right" : "text-left"
      )}
    >
      <div className="w-full max-w-3xl mb-8">
        <Link
          href={`/${resolvedParams.lang}`}
          className={cn(
            "inline-flex items-center text-indigo-400 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded",
            isArabic
              ? "flex-row-reverse space-x-reverse space-x-2"
              : "space-x-2"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-5 w-5", isArabic ? "rotate-180" : "")} // Rotate arrow for RTL
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
          <span>{dictionary.back_button_text}</span>
        </Link>
      </div>
      <section className="text-center max-w-3xl mb-12 px-4">
        <h1 className="text-5xl text-center font-extrabold mb-4 tracking-tight">
          {dictionary.faq_heading}
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          {dictionary.faq_description}
        </p>
      </section>
      {/* FAQ Accordion */}
      {/* Pass the dictionary and current language to the client component */}
      <FaqClient
        faqData={faqData}
        dictionary={dictionary}
        currentLang={resolvedParams.lang}
      />
    </main>
  );
};

export default FaqServer;
