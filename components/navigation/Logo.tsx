import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  variant?: 'light' | 'dark';
};
const Logo = ({ variant = 'dark' }: LogoProps) => {
  return (
    <Link href="/" className="">
      <Image
        src={variant === 'dark' ? '/logo.png' : '/logo-white.png'}
        alt="Fitmeal"
        width={150}
        height={41}
        className="w-32 md:w-[150px]"
        priority
      />
    </Link>
  );
};

export default Logo;
