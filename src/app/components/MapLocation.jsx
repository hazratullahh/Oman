import { cn } from "@/lib/utils";

export default function LocationMap({ dictionary, currentLocale }) {
  // Accept dictionary and currentLocale
  const isArabic = currentLocale === "ar";
  return (
    <section
      className={cn(
        "max-w-7xl mx-auto px-6 py-20 lg:py-32",
        isArabic ? "text-right" : "text-left" // Align the heading
      )}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-50">
        {dictionary.our_location_heading} {/* Use dictionary key here */}
      </h2>
      <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzQ2LjMiTiA3NMKwMDAnNDYuMyJX!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
