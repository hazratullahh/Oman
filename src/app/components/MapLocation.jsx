export default function LocationMap() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-50">Our Location</h2>
        <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg max-w-7xl mx-auto">
          <iframe
            title="Our Location on Google Maps"
            src="https://maps.google.com/maps?q=24.25609223664811,55.793817593911264&z=17&output=embed" 
            width="600" 
            height="450" 
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    )
  }
  