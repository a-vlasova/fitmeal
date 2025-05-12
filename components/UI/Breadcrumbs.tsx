'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = ({ pageTitle }: { pageTitle?: string }) => {
  const pathname = usePathname().split('?')[0];
  const list = pathname.split('/');

  if (list.length <= 1) {
    return;
  }

  const current = list.pop();
  const title = pageTitle ?? current;
  list.shift();

  return (
    <div className="flex justify-center gap-2 text-lg font-bold">
      <Link
        href="/"
        className="text-fitmealGreen hover:text-fitmealRed transition"
      >
        Home
      </Link>
      <span>|</span>
      {list.map((item) => {
        const url = '/' + item;
        return (
          <div key={item} className="flex gap-2">
            <Link
              href={url}
              className="text-fitmealGreen hover:text-fitmealRed transition capitalize"
            >
              {item}
            </Link>
            <span>|</span>
          </div>
        );
      })}
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumbs;
