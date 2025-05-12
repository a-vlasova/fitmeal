import Link from 'next/link';

const links = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/plans',
    title: 'Meal Plans',
  },
  {
    url: '/contact',
    title: 'Contact Us',
  },
];

const FooterMenu = () => {
  return (
    <ul className="font-bold flex flex-col gap-2">
      {links.map((item) => (
        <li key={item.url}>
          <Link href={item.url} className="transition hover:text-fitmealGreen">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
