import React from 'react'
import WhyChooseUsCard from '../components/WhyChooseUsCard';

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  delay: string;
}

const WhyChooseUsSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "All-in-One Solution",
      description: "Integrated data-collecting platform that consolidates your sales tracking, inventory management, and financial reporting into one seamless experience.",
      imageSrc: "/images/all.png",
      delay: "30",
    },
    {
      title: "Revenue Collection Agencies' Integration",
      description: "Stay compliant with local tax regulations effortlessly, ensuring your business remains compliant while minimizing tax-related stress and maximizing revenue collection.",
      imageSrc: "/images/revenue.png",
      delay: "40",
    },
    {
      title: "Effortless Invoice Sharing",
      description: "Share invoices and receipts with ease! With just a click, send them via SMS, WhatsApp, or email—making it convenient for you and your customers.",
      imageSrc: "/images/invoice.jpeg",
      delay: "50",
    },
    {
      title: "Fast and Accurate Transactions",
      description: "Enhance customer satisfaction with speedy checkouts, equipped with advanced barcode reading technology. Reduce errors and provide a smooth shopping experience that keeps your customers coming back.",
      imageSrc: "/images/transactions.jpeg",
      delay: "60",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Keep track of your customers effortlessly! Our system enables you to manage customer interactions and relationships, fostering long-term engagement and loyalty.",
      imageSrc: "/images/crm.webp",
      delay: "60",
    },
    {
      title: "Credit Tracking",
      description: "Easily monitor credit extended to your customers! Our system allows you to keep a close eye on customer credit accounts, helping you manage receivables effectively and improve cash flow.",
      imageSrc: "/images/ct.png",
      delay: "60",
    },
  ];
  return (
    <section className="services-area pt-10 pb-24 bg-[#0C1433]" id="why-choose-us">
      <div className="container mx-auto">
        <div className="flex justify-center mb-14">
          <div className="w-full max-w-2xl">
            <h2 className="text-center text-3xl font-bold text-white">Why Choose Transmall Business</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <WhyChooseUsCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection


{/* <section className="services-area pt-10 pb-24 bg-white" id="why-choose-us">
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
</section> */}