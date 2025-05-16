import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";


// Navbar constants
export const navLinks = [
    {
      id: 1,
      url: "#",
      label: "Home",
    },
    {
      id: 2,
      url: "#",
      label: "About",
    },
    {
      id: 3,
      url: "#",
      label: "Features",
    },
    {
      id: 4,
      url: "#",
      label: "Price",
    },
    {
      id: 5,
      url: "#",
      label: "Testimonials",
    },
    {
      id: 6,
      url: "#",
      label: "Contact",
    },
  ];
  

// Features constants
export const featuresData = [
  {
    id: 1,
    title: "Touch to Buy",
    description:
      "Experience the convenience of touch controls, allowing you to effortlessly manage your music and calls with a simple tap.",
      icon: <MdOutlineTouchApp className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  {
    id: 2,
    title: "Secure Data",
    description:
      "Secure your data with our advanced fingerprint technology, ensuring that only you can access your device.",
      icon: <FaFingerprint className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  {
    id: 3,
    title: "Instant Chat",
    description:
      "Instantly connect with your friends and family through our seamless chat feature, making communication easier than ever.",
      icon: <HiOutlineChat className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  {
    id: 4,
    title: "Live Notifications",
    description:
      "Live notifications keep you updated on important events and messages, ensuring you never miss a beat.",
      icon: <MdNotifications className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  {
    id: 5,
    title: "WiFi Support",
    description:
      "WiFi support allows you to connect to the internet seamlessly, providing you with fast and reliable connectivity.",
      icon: <IoWifiOutline className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  {
    id: 6,
    title: "App Watch",
    description:
      "App Watch feature lets you monitor your health and fitness, keeping track of your daily activities and goals.",
      icon: <IoAppsOutline className="w-12 h-12 text-[#ff5677] mx-auto"/>
  },
  
]