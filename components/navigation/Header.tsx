import Button from '../UI/Button';
import Cart from './Cart';
import Logo from './Logo';
import User from './User';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm shadow-gray-200">
      <div className="container flex items-center justify-between h-[60px] md:h-[80px]">
        <Logo />
        <Button
          href="#select-menu"
          color="red"
          className="hidden md:block md:ml-auto md:mr-6"
        >
          Get Menu
        </Button>
        <div className="flex items-center gap-5 text-2xl">
          <User />
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
