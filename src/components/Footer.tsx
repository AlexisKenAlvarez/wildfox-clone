import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Header from "./Typography/Header";

const Footer = () => {
  const icons = [
    {
      label: "Twitter",
      icon: BsTwitterX,
      link: "",
    },

    {
      label: "Telegram",
      icon: FaTelegramPlane,
      link: "",
    },
    {
      label: "Discord",
      icon: FaDiscord,
      link: "",
    },
  ];

  return (
    <div className="w-full  bg-cream">
      <div className="mx-auto mt-10 w-full max-w-screen-2xl py-24 text-center">
        <Header>Follow us</Header>
        <Header>On Social Media</Header>

        <div className="mt-16 flex justify-center gap-5">
          {icons.map((item, index) => (
            <a href="" className="" key={index}>
              <button className="rounded-full border-2 border-black bg-white p-4 md:p-9 normal-shadow">
                <item.icon className="text-3xl" />
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
