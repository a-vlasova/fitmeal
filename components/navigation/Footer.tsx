import FooterMenu from './FooterMenu';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-fitmealBlack text-white text-center md:text-left bg-[url('/footer-bg.png')] bg-bottom bg-no-repeat">
      <div className="container py-16 lg:py-[80px] flex flex-col md:flex-row gap-16 md:gap-10 lg:gap-32">
        <div className="flex flex-col items-center md:items-start md:w-1/3 gap-7">
          <Logo variant="light" />
          <p>
            Fuel your body with delicious, nutritious meals delivered right to
            your doorstep.
          </p>
          <SocialLinks />
        </div>
        <div className="md:ml-auto md:mr-0">
          <h4 className="text-fitmealGreen md:mb-10">Explore</h4>
          <FooterMenu />
        </div>
        <div className="lg:mr-20 text-left pl-10">
          <h4 className="text-fitmealGreen md:mb-10">Contact Info</h4>
          <div className="flex gap-3 mb-5">
            <IoLocationOutline size={24} className="text-fitmealGreen" />
            <div>
              <h6 className="text-fitmealGreen">Our location:</h6>
              <p>Goldschmidtstraße 13, 04103 Leipzig</p>
            </div>
          </div>
          <div className="flex gap-3">
            <FiPhoneCall size={20} className="text-fitmealGreen" />
            <div>
              <h6 className="text-fitmealGreen">Our contacts:</h6>
              <a
                href="tel:+49078-039-23-11"
                className="block transition hover:text-fitmealGreen"
              >
                +49078-039-23-11
              </a>
              <a
                href="tel:+49078-028-55-60"
                className="block transition hover:text-fitmealGreen"
              >
                +49078-028-55-60
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-25 py-5">
        <div className="container">Copyright © 2025 Fitmeal</div>
      </div>
    </footer>
  );
};

export default Footer;
