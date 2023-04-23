import { ReactNode } from 'react';
import { Karla } from 'next/font/google'

type LayoutProps = {
    children: ReactNode;
  };

  const titleFont = Karla({ subsets: ['latin'], weight: '300' })

const Text = ({ children }: LayoutProps) => (
    <p className={`text-xl font-light tracking-wide leading-7 my-6 ${titleFont.className}`}>
        {children}
    </p>
)

export default Text