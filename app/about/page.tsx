export default function About() {
  return (
    <>
      <section className="hero-area h-300">
        <div className="breadcrumbs-wrapper bg-gradient-to-r from-blue-900 to-blue-700 relative">
          {/* Shapes (Parallax Effect can be added with JS) */}
          <div className="shape shape-one absolute">
            <span className="block" style={{ transform: 'translateZ(2px)' }}></span>
          </div>
          <div className="shape shape-two absolute">
            <span className="block" style={{ transform: 'translateZ(3px)' }}></span>
          </div>
          <div className="shape shape-three absolute">
            <span className="block" style={{ transform: 'translateZ(4px)' }}></span>
          </div>
          <div className="shape shape-four absolute">
            <span className="block" style={{ transform: 'translateZ(0.1px)' }}></span>
          </div>

          {/* Container */}
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="lg:w-2/3 text-center">
                <div className="page-title-text">
                  <h1 className="text-4xl font-bold text-white">Why Us</h1>
                  <ul className="breadcrumbs-link mt-4 flex justify-center space-x-2 text-white">
                    <li>
                      <a href="/" className="hover:underline">
                        Home
                      </a>
                    </li>
                    <li className="active">/ Why Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area pt-32 pb-24" id="why-choose-us">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="lg:w-2/3">
              <div className="section-title text-center mb-14" data-aos="fade-up">
                <h2 className="text-3xl font-bold">Why Choose Transmall Business</h2>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Block 1 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="30"
            >
              <div className="icon bg-blue-200 p-4 rounded-full mr-4">
                <img src="/image/all.png" alt="All-in-One Solution" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">All-in-One Solution</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Integrated POS and ERP platform consolidates your sales tracking, inventory
                  management, and financial reporting into one seamless experience.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="40"
            >
              <div className="icon bg-blue-300 p-4 rounded-full mr-4">
                <img src="/image/kra.jpeg" alt="Revenue Collection Agencies' Integration" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">Revenue Collection Agencies' Integration</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Stay compliant with local tax regulations effortlessly, ensuring your business
                  remains compliant while minimising tax-related stress and maximising revenue
                  collection.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="icon bg-blue-400 p-4 rounded-full mr-4">
                <img src="/image/invoice.jpeg" alt="Effortless Invoice Sharing" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">Effortless Invoice Sharing</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Share invoices and receipts with ease! With just a click, send them via SMS,
                  WhatsApp, or email—making it convenient for you and your customers.
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <div className="icon bg-blue-500 p-4 rounded-full mr-4">
                <img src="/image/transactions.jpeg" alt="Fast and Accurate Transactions" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">Fast and Accurate Transactions</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Enhance customer satisfaction with speedy checkouts, equipped with advanced
                  barcode reading technology. Reduce errors and provide a smooth shopping experience
                  that keeps your customers coming back.
                </p>
              </div>
            </div>

            {/* Block 5 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <div className="icon bg-blue-600 p-4 rounded-full mr-4">
                <img src="/image/crm.webp" alt="Customer Relationship Management (CRM)" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">Customer Relationship Management (CRM)</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Keep track of your customers effortlessly! Our system enables you to manage
                  customer interactions and relationships, fostering long-term engagement and
                  loyalty.
                </p>
              </div>
            </div>

            {/* Block 6 */}
            <div
              className="block-style-two flex items-start mb-8"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <div className="icon bg-blue-700 p-4 rounded-full mr-4">
                <img src="/image/ct.png" alt="Credit Tracking" />
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  <a href="#">Credit Tracking</a>
                </h3>
                <p className="mt-2 text-gray-600">
                  Easily monitor credit extended to your customers! Our system allows you to keep a
                  close eye on customer credit accounts, helping you manage receivables effectively
                  and improve cash flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}