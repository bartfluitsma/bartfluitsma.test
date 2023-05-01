import { ReactNode } from 'react';
import { Karla } from 'next/font/google'

const titleFont = Karla({ subsets: ['latin'], weight: '600' })

type HeadingProps = {
  children: ReactNode;
  as: number;
};

const Heading = ({ children, as }: HeadingProps) => {
  if (as == 1) {
    return (
      <h1 className={`text-4xl font-light tracking-wide leading-7 my-3 pb-2 ${titleFont.className}`}>
        {children}
      </h1>
    );
  } else if (as == 2) {
    return (
      <h2 className={`text-2xl font-light tracking-wide leading-7 my-3 ${titleFont.className}`}>
        {children}
      </h2>
    );
  } else {
    return (
      <h3 className={`text-xl font-light tracking-wide leading-7 ${titleFont.className}`}>
        {children}
      </h3>
    );
  }
};

export default Heading
