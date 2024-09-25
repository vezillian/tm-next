// export default function About() {
//     return (
//       <div className="container mx-auto py-20">
//         <h1 className="text-4xl font-bold mb-8">About Us</h1>
//         <p className="text-lg mb-4">
//           We are a dedicated team of professionals committed to providing high-quality services to our clients.
//         </p>
//         <p className="text-lg mb-4">
//           Our mission is to help businesses grow and succeed in the digital
//           Our mission is to help businesses grow and succeed in the digital landscape through innovative solutions and expert guidance.
//       </p>
//       <p className="text-lg">
//         With years of experience and a passion for excellence, we strive to exceed our clients' expectations in every project we undertake.
//       </p>
//     </div>
//   );
// }

// components/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section className="hero-area pt-40 pb-20">
        <div className="bg-blue-900 text-white py-20">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="shape shape-one scene"><span data-depth="2"></span></div>
              <div className="shape shape-two scene"><span data-depth="3"></span></div>
              <div className="shape shape-three scene"><span data-depth="4"></span></div>
              <div className="shape shape-four scene"><span data-depth=".1"></span></div>
            </div>
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div className="w-full max-w-2xl text-center">
                  <h1 className="text-4xl font-bold">About Us</h1>
                  <ul className="flex justify-center space-x-4 mt-4">
                    <li><a href="index.html" className="text-white">Home</a></li>
                    <li className="font-bold text-white">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area pt-10 pb-24" id="why-choose-us">
        <div className="container mx-auto">
          <div className="flex justify-center mb-14">
            <div className="w-full max-w-2xl">
              <h2 className="text-center text-3xl font-bold">Why Choose Transmall Business</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="30">
              <div className="icon">
                <img src="image/all.png" alt="" className="rounded-full" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">All-in-One Solution</a></h3>
                <p>Integrated POS and ERP platform consolidates your sales tracking, inventory management,
                  and financial reporting into one seamless experience.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="40">
              <div className="icon">
                <img src="image/kra.jpeg" alt="" className="rounded-full" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Revenue Collection Agencies' Integration</a></h3>
                <p>Stay compliant with local tax regulations effortlessly, ensuring your business remains
                  compliant while minimizing tax-related stress and maximizing revenue collection.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="50">
              <div className="icon">
                <img src="image/invoice.jpeg" alt="" className="rounded-full" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Effortless Invoice Sharing</a></h3>
                <p>Share invoices and receipts with ease! With just a click, send them via SMS, WhatsApp, or
                  email—making it convenient for you and your customers.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon">
                <img src="image/transactions.jpeg" alt="" className="rounded-full" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Fast and Accurate Transactions</a></h3>
                <p>Enhance customer satisfaction with speedy checkouts, equipped with advanced barcode
                  reading technology. Reduce errors and provide a smooth shopping experience that keeps
                  your customers coming back.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon">
                <img src="image/crm.webp" alt="" className="rounded-full" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Customer Relationship Management (CRM)</a></h3>
                <p>Keep track of your customers effortlessly! Our system enables you to manage customer
                  interactions and relationships, fostering long-term engagement and loyalty. </p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon">
                <img src="image/ct.png" alt="" />
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Credit Tracking</a></h3>
                <p>Easily monitor credit extended to your customers! Our system allows you to keep a close
                  eye on customer credit accounts, helping you manage receivables effectively and improve
                  cash flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area pt-10 bg-blue-900 pb-24" id="solutions">
        <div className="container mx-auto">
          <div className="flex justify-center mb-14">
            <div className="w-full max-w-2xl">
              <h2 className="text-white text-center text-3xl font-bold">Challenges we solve</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="30">
              <div className="icon bg-blue-600 p-4 rounded">
                <i className="flaticon-analytics text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Integrated Online and Offline Sales</a></h3>
                <p>Prevent stock losses and enhance visibility across all channels, ensuring you never miss
                  a sale.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="40">
              <div className="icon bg-blue-700 p-4 rounded">
                <i className="flaticon-email text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Digital Inventory Management</a></h3>
                <p>Secure your records for future reference, which is crucial for obtaining affordable
                  credit from banks.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="50">
              <div className="icon bg-blue-800 p-4 rounded">
                <i className="flaticon-digital-marketing text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Streamlined Operations</a></h3>
                <p>Optimize your departmental processes to boost productivity and reduce operational
                  bottlenecks.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon bg-blue-900 p-4 rounded">
                <i className="flaticon-content text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Geolocation Tools</a></h3>
                <p>Increase sales volume and profitability through smart, location-based insights that
                  allow you to strategically target your market.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon bg-blue-900 p-4 rounded">
                <i className="flaticon-content text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">Real-time Data</a></h3>
                <p>Make informed decisions with up-to-the-minute insights into your business's performance,
                  allowing you to adapt quickly to changing market conditions.</p>
              </div>
            </div>
            <div className="block-style-two block-icon-animate flex mb-8" data-aos="fade-up" data-aos-delay="60">
              <div className="icon bg-blue-900 p-4 rounded">
                <i className="flaticon-document text-white"></i>
              </div>
              <div className="text ml-4">
                <h3 className="title text-xl font-semibold"><a href="#">User-friendly Interface</a></h3>
                <p>Simplify your operations with an intuitive interface that minimizes training time and
                  enhances user adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
