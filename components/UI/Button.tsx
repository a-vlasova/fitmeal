import Link, { type LinkProps } from 'next/link';
import { ComponentPropsWithoutRef, type ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';
type Color = 'green' | 'black' | 'red';
type Variant = 'default' | 'outline';

export type ButtonProps = {
  children: ReactNode;
  size?: Size;
  color?: Color;
  variant?: Variant;
  className?: string;
};

type LinkElementProps = ButtonProps & LinkProps;
type ButtonElementProps = ButtonProps & ComponentPropsWithoutRef<'button'>;

const isLink = (
  props: LinkProps | ComponentPropsWithoutRef<'button'>
): props is LinkProps => {
  return 'href' in props;
};

const isButton = (
  props: LinkProps | ComponentPropsWithoutRef<'button'>
): props is ComponentPropsWithoutRef<'button'> => {
  return !('href' in props);
};

const getClasses = (size: Size, variant: Variant, color: Color) => {
  let classes =
    'inline-block rounded-full text-center font-headers font-bold capitalize transition';
  if (size === 'md') {
    classes += ' text-lg px-[40px] py-[12px] leading-[1.3em]';
  } else if (size === 'sm') {
    classes += ' text-base px-[30px] py-[7px] leading-[1.6em] min-w-[125px]';
  } else if (size === 'lg') {
    classes += ' text-lg px-[44px] py-[20px] leading-[1.4em] min-w-[200px]';
  }

  if (variant === 'default') {
    classes += ' text-white';
    switch (color) {
      case 'black':
        classes += ` bg-fitmealBlack hover:bg-fitmealGreen`;
        break;
      case 'green':
        classes += ` bg-fitmealGreen hover:bg-fitmealBlack`;
        break;
      case 'red':
        classes += ` bg-fitmealRed hover:bg-fitmealGreen`;
        break;
    }
  } else {
    classes += ' border bg-white';

    if (size === 'sm') {
      classes += ' border';
    } else {
      classes += ' border-2';
    }

    switch (color) {
      case 'black':
        classes += ` border-fitmealBlack text-fitmealBlack hover:border-fitmealGreen hover:text-fitmealGreen`;
        break;
      case 'green':
        classes += ` border-fitmealGreen text-fitmealGreen hover:border-fitmealBlack hover:text-fitmealBlack`;
        break;
      case 'red':
        classes += ` border-fitmealRed text-fitmealRed hover:border-fitmealGreen hover:text-fitmealGreen`;
        break;
    }
  }

  return classes;
};

const Button = (props: ButtonElementProps | LinkElementProps) => {
  const {
    children,
    size = 'md',
    color = 'black',
    variant = 'default',
    className,
    ...otherProps
  } = props;

  const classes = getClasses(size, variant, color);

  if (isLink(otherProps)) {
    return (
      <Link className={`${classes} ${className}`} {...otherProps}>
        {children}
      </Link>
    );
  }

  if (isButton(otherProps)) {
    return (
      <button className={`${classes} ${className}`} {...otherProps}>
        {children}
      </button>
    );
  }

  return;
};

export default Button;
