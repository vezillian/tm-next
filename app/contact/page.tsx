import { FC } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "(+254) 729-631-002",
      href: "tel:+254729631002",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "business@transmall.app",
      href: "mailto:business@transmall.app",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "18th Floor, Hazina Towers, Nairobi, Kenya",
      href: undefined,
    },
  ];

  return (
    <div className="bg-white mt-20">
      {/* Contact Information Section */}
      <section className="py-16 lg:py-24 lg:ml-40 lg:mr-40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#192966] mb-4">
                  We're here to listen.
                </h1>
                <h3 className="text-[#192966] text-xl">
                  Reach out to us via your preferred line.
                </h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#192966] hover:text-[#192966] transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#192966]">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8 flex justify-center">
              <div className="max-w-lg w-full">
                <img
                  src="/images/contact.png"
                  alt="Contact illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-center text-[#192966] mb-8">
                Send us a direct email.
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 focus:outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#192966] hover:bg-blue-700 md:text-lg md:px-10 transition-colors"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196899947147!2d36.81327597501329!3d-1.2819541987058538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f114fe8722a0b%3A0x6656780a6acd2bb3!2sHazina%20Towers%2018th%20floor!5e0!3m2!1sen!2ske!4v1726821902061!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="outline-none focus:outline-none"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
