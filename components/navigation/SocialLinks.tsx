import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const links = [
  { url: 'https://www.twitter.com', icon: <FaFacebookF /> },
  { url: 'https://www.facebook.com', icon: <FaTwitter /> },
  { url: 'https://www.instagram.com', icon: <FaInstagram /> },
  { url: 'https://www.youtube.com', icon: <FaYoutube /> },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {links.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          className="flex items-center justify-center rounded-full bg-fitmealGreen w-9 h-9 transition hover:bg-white hover:text-fitmealBlack"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
