import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-10"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 40%, #2c2c2e 100%)",
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Info Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 text-sm w-full max-w-3xl">
        {/* Email */}
        <ContactCard
          icon={<Mail className="w-5 h-5 text-white" />}
          title="Email"
          value="abhixhek103@gmail.com"
          href="mailto:abhixhek103@gmail.com"
        />

        {/* Phone */}
        <ContactCard
          icon={<Phone className="w-5 h-5 text-white" />}
          title="Phone"
          value="+94 077 497 0990"
          href="tel:+94764970990"
        />

        {/* Location */}
        <ContactCard
          icon={<MapPin className="w-5 h-5 text-white" />}
          title="Location"
          value="Sri Lanka"
        />

        {/* LinkedIn */}
        <ContactCard
          icon={<Linkedin className="w-5 h-5 text-white" />}
          title="LinkedIn"
          value="@abhishekappuhamy"
          href="https://www.linkedin.com/in/abhishek-appuhamy-03a983366/"
        />
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="mt-14 flex items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <SocialIcon
          icon={<FaFacebookF className="text-white" />}
          href="https://facebook.com/"
          color="#1877F2"
        />
        <SocialIcon
          icon={<FaWhatsapp className="text-white" />}
          href="https://wa.me/94774970990"
          color="#25D366"
        />
        <SocialIcon
          icon={<FaInstagram className="text-white" />}
          href="https://instagram.com/"
          color="#E4405F"
        />
      </motion.div>
    </div>
  );
}

// Contact card component
function ContactCard({ icon, title, value, href }) {
  return (
    <motion.a
      href={href}
      target={href ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-[#1a1a1a] px-5 py-4 rounded-xl shadow-md cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 0 10px #00C6FF" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      <div className="text-left">
        <div className="text-white font-medium">{title}</div>
        <div className="text-green-400">{value}</div>
      </div>
    </motion.a>
  );
}

// Social media icon component
function SocialIcon({ icon, href, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-[#1a1a1a] hover:shadow-md"
      whileHover={{
        scale: 1.2,
        boxShadow: `0 0 10px ${color}`,
        backgroundColor: color,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
    </motion.a>
  );
}

export default Contact;
