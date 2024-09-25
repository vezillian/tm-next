// export default function Footer() {
//     return (
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto flex flex-wrap justify-between">
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-2">My Website</h3>
//             <p className="text-sm">Providing amazing services since 2024</p>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//             <ul className="text-sm">
//               <li><a href="/#hero" className="hover:text-blue-300">Home</a></li>
//               <li><a href="/#services" className="hover:text-blue-300">Services</a></li>
//               <li><a href="/about" className="hover:text-blue-300">About</a></li>
//               <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3">
//             <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-blue-300">
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                 </svg>
//               </a>
//               <a href="#" className="text-white hover:text-blue-300">
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                 </svg>
//               </a>
//               <a href="#" className="text-white hover:text-blue-300">
//                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }

// import { FC } from 'react';

// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// const Footer: FC = () => {
//   return (
//     <footer className="footer-area bg-gray-800 text-white mt-0" id="contact">
//       <div className="container mx-auto px-6">
//         <div className="footer-widget pt-8 pb-0">
//           <div className="flex flex-wrap -mx-4">
//             {/* About Widget */}
//             <div className="lg:w-1/4 md:w-1/2 sm:w-full px-4 mb-8">
//               <div
//                 className="widget about-widget mb-10"
//                 data-aos="fade-up"
//                 data-aos-delay="30"
//               >
//                 <div className="site-branding">
//                   <a href="/">
//                     <img
//                       src="images/logo-icon-transmall.svg"
//                       className="w-24"
//                       alt="Site Logo"
//                     />
//                     <h3 className="widget-title">Transmall</h3>
//                   </a>
//                 </div>
//                 <p>
//                   We provide cutting-edge POS ERP solutions to help businesses
//                   thrive in the digital age.
//                 </p>
//                 <ul className="flex space-x-4 mt-4">
//                   <li>
//                     <a href="https://www.facebook.com/transmall/" target="_blank" rel="noopener noreferrer">
//                       <i className="fab fa-facebook-f"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://twitter.com/transmall" target="_blank" rel="noopener noreferrer">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.instagram.com/transmall/" target="_blank" rel="noopener noreferrer">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://ke.linkedin.com/company/transmall" target="_blank" rel="noopener noreferrer">
//                       <i className="fab fa-linkedin-in"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* Quick Links Widget */}
//             <div className="lg:w-1/4 md:w-1/2 sm:w-full px-4 mb-8">
//               <div
//                 className="widget footer-nav-widget mb-10"
//                 data-aos="fade-up"
//                 data-aos-delay="40"
//               >
//                 <h4 className="widget-title">Quick Links</h4>
//                 <ul className="footer-nav mt-2">
//                   <li><a href="index.html">Home</a></li>
//                   <li><a href="#">About Us</a></li>
//                   <li><a href="#">Contact Us</a></li>
//                   <li><a href="#">Blog</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Services Offered Widget */}
//             <div className="lg:w-1/4 md:w-1/2 sm:w-full px-4 mb-8">
//               <div
//                 className="widget footer-nav-widget mb-10"
//                 data-aos="fade-up"
//                 data-aos-delay="50"
//               >
//                 <h4 className="widget-title">Services Offered</h4>
//                 <ul className="footer-nav mt-2">
//                   <li><a href="index.html">Inventory Management</a></li>
//                   <li><a href="index.html">Sales Analytics</a></li>
//                   <li><a href="index.html">Customer Management</a></li>
//                   <li><a href="index.html">Multi-store Support</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Contact Us Widget */}
//             <div className="lg:w-1/4 md:w-1/2 sm:w-full px-4 mb-8">
//               <div
//                 className="widget contact-info-widget mb-10"
//                 data-aos="fade-up"
//                 data-aos-delay="60"
//               >
//                 <h4 className="widget-title">Contact Us</h4>
//                 <ul className="info-list mt-2">
//                   <li className="flex items-center mb-2">
//                     <i className="far fa-phone mr-2"></i>
//                     <a href="tel:+254791159060" className="hover:underline">(+254) 729-631-002</a>
//                   </li>
//                   <li className="flex items-center mb-2">
//                     <i className="far fa-envelope-open-text mr-2"></i>
//                     <a href="mailto:business@transmall.app" className="hover:underline">business@transmall.app</a>
//                   </li>
//                   <li className="flex items-center mb-2">
//                     <i className="far fa-map-marker-alt mr-2"></i>
//                     <span>Nairobi, Kenya</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Copyright Section */}
//         <div className="footer-copyright mb-0">
//           <div className="flex justify-center">
//             <div className="text-center">
//               <p>
//                 &copy; Copyright{' '}
//                 {new Date().getFullYear()} . All Rights Reserved
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <img src="/images/logo-icon-transmall.svg" alt="Transmall Logo" className="h-8 w-auto mb-4" />
            <p className="mb-4">
              We provide cutting-edge POS ERP solutions to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/transmall/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/transmall" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/transmall/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://ke.linkedin.com/company/transmall" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Contact Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
            <ul className="space-y-2">
              {['Inventory Management', 'Sales Analytics', 'Customer Management', 'Multi-store Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+254729631002" className="hover:text-white transition-colors">(+254) 729-631-002</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:business@transmall.app" className="hover:text-white transition-colors">business@transmall.app</a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; {currentYear} Transmall. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
