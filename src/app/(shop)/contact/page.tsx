export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-50 pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-4">Contact Us</h1>
          <p className="body-text-lg text-gray-600 max-w-xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="heading-3 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">hello@delphineswimwear.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+355 69 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">Tirana, Albania</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM CET</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-ocean-500 hover:text-white transition-colors">
                    <span>📸</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-ocean-500 hover:text-white transition-colors">
                    <span>🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-ocean-500 hover:text-white transition-colors">
                    <span>📘</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="heading-4 mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">First Name</label>
                    <input type="text" className="input-field" />
                  </div>
                  <div>
                    <label className="label">Last Name</label>
                    <input type="text" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input-field" />
                </div>
                <div>
                  <label className="label">Subject</label>
                  <select className="select-field">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns & Exchanges</option>
                    <option>Wholesale Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="label">Message</label>
                  <textarea className="input-field h-32 resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
