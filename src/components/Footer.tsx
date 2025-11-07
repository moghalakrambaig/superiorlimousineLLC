import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "Fleet", "Services", "About", "Contact"];
  const services = ["Airport Transfers", "Corporate Events", "City Tours"];
  const contactInfo = [
    {
      icon: Phone,
      text: "(203) 854-9282",
    },
    {
      icon: Mail,
      text: "superiorlimo@icloud.com",
    },
    {
      icon: MapPin,
      text: "22 Emerson St, Norwalk, CT 06855",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              <span className="text-yellow-400">
                Superior Limousine LLC Executive Transportation
              </span>
            </h3>
            <p className="font-sans text-sm text-primary-foreground/80">
              Premier Luxury Transportation Services For Over 25 Years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-sans text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="font-sans text-sm text-primary-foreground/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={18} className="text-accent mt-1 flex-shrink-0" />
                  <span className="font-sans text-sm text-primary-foreground/80">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-primary-foreground/60 text-center md:text-left">
            © 2025 Superior Limousine LLC Executive Transportation. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
