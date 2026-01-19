import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import logo from "../assets/logo.png";

const socialLinks = [
  {
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/hariharan-p-0b32a51b0",
    label: "LinkedIn",
  },
  { Icon: FaGithub, url: "https://github.com/harinolon", label: "GitHub" },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/harmel_bruz",
    label: "Instagram",
  },
  {
    Icon: FaCode,
    url: "https://github.com/Dev-Hariharan/portfolio",
    label: "SourceCode",
  },
];

const SocialMediaLink = ({ Icon, url, label }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className=" hover:text-blue-500"
  >
    <Icon />
  </a>
);

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img width={120} height={120} src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map(({ Icon, url, label }) => (
          <SocialMediaLink key={label} Icon={Icon} url={url} label={label} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
