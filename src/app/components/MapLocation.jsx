import { cn } from "@/lib/utils";

export default function LocationMap({ dictionary, currentLocale }) {
  const isArabic = currentLocale === "ar";

  return (
    <section
      className={cn(
        "max-w-7xl mx-auto px-6 py-20 lg:py-32",
        isArabic ? "text-right" : "text-left"
      )}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-50">
        {dictionary.our_location_heading}
      </h2>

      {/* Responsive map container */}
      <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14550.360333685761!2d55.793485!3d24.256111800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab5005535852d%3A0x2cb73112a0430557!2sFacilitation%20of%20photocopying%20and%20printing%20documents!5e0!3m2!1sen!2s!4v1748715478364!5m2!1sen!2s"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
