import { ReactNode } from 'react';
import { Karla } from 'next/font/google'

type LayoutProps = {
  children?: ReactNode;
  small?: boolean;
};

const titleFont = Karla({ subsets: ['latin'], weight: '300' })

const Text = ({ children, small = false }: LayoutProps) => (
  <p className={`${small ? 'text-base' : 'text-xl'} font-light tracking-wide leading-7 mt-4 mb-6 ${titleFont.className}`} dangerouslySetInnerHTML={{ __html: children || ''}} />
);


export default Text
