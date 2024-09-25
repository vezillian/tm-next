// export default function Services() {
//     const services = [
//       { title: 'Web Design', description: 'Create beautiful and responsive websites' },
//       { title: 'Digital Marketing', description: 'Boost your online presence and reach' },
//       { title: 'App Development', description: 'Build powerful mobile applications' },
//     ];
  
//     return (
//       <div id="services" className="py-20 bg-gray-100">
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

import Image from 'next/image';
import { FC } from 'react';

const servicesData = [
  {
    title: 'Agriculture',
    description: 'Manage inventory, sales, and track orders for agricultural supplies with ease.',
    image: '/images/agriculture.jpg', // Update paths to your public directory structure
    link: '/'
  },
  {
    title: 'Transport',
    description: 'Streamline ticket sales and track customer bookings efficiently.',
    image: '/images/transport.jpg',
    link: '/'
  },
  {
    title: 'Wholesale',
    description: 'Manage bulk sales, track stock, and optimize wholesale operations.',
    image: '/images/wholesale.jpg',
    link: '/'
  },
  {
    title: 'Finance',
    description: 'Simplify financial transactions, monitor sales, and track payment histories.',
    image: '/images/finance.jpg',
    link: '/'
  },
  {
    title: 'Automotive',
    description: 'Manage car parts inventory and customer payments effectively.',
    image: '/images/automotive.jpg',
    link: '/'
  },
  {
    title: 'Other',
    description: 'Customizable POS solutions to fit your unique business needs.',
    image: '/images/other.jpg',
    link: '/'
  }
];

const Services: FC = () => {
  return (
    <section className="pb-8" id="clients">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm uppercase font-bold tracking-wider text-gray-600">
            Powerful Features to Grow Your Business
          </span>
          <h2 className="text-3xl font-semibold">Who We Serve</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
            >
              <a href={service.link}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
