import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 font-sans" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <Image
              src="/images/logo-icon-transmall.svg"
              alt="Transmall Logo"
              width={65}
              height={65}
              className="h-12 w-auto mb-6"
            />
            <p className="mb-6 text-base leading-relaxed">
              We provide cutting-edge POS ERP solutions to help businesses
              thrive in the digital age.
            </p>
            <div className="flex space-x-5">
              {[
                { href: "https://www.facebook.com/transmall/", icon: Facebook },
                { href: "https://twitter.com/transmall", icon: Twitter },
                {
                  href: "https://www.instagram.com/transmall/",
                  icon: Instagram,
                },
                {
                  href: "https://ke.linkedin.com/company/transmall",
                  icon: Linkedin,
                },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", route: "/" },
                { name: "Clients", route: "/#clients" },
                { name: "Pricing", route: "/pricing" },
                { name: "About Us", route: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  {/* <Link href={item.route} legacyBehavior>
                    <a className="text-base hover:text-white transition-colors duration-300">
                      {item.name}
                    </a>
                  </Link> */}
                  <Link
                    href={item.route}
                    className="text-base hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">
              Services Offered
            </h3>
            <ul className="space-y-3">
              {[
                "Inventory Management",
                "Sales Analytics",
                "Customer Management",
                "Multi-store Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  content: "(+254) 729-631-002",
                  href: "tel:+254729631002",
                },
                {
                  icon: Mail,
                  content: "business@transmall.app",
                  href: "mailto:business@transmall.app",
                },
                { icon: MapPin, content: "Nairobi, Kenya" },
              ].map(({ icon: Icon, content, href }) => (
                <li key={content} className="flex items-center">
                  <Icon size={20} className="mr-3 text-gray-400" />
                  {href ? (
                    <a
                      href={href}
                      className="text-base hover:text-white transition-colors duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="text-base">{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm tracking-wider">
            &copy; {currentYear} Transmall. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
