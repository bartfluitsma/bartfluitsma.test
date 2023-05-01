import { Karla } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const bodyFont = Karla({ subsets: ['latin'], weight: '600' });

interface CustomLinkProps {
    name: string;
    linkToWeb: string;
    icon?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ name, linkToWeb, icon }) => {
    const [hovered, setHovered] = useState(false);
    const Component = icon ? 'a' : Link;

    return (
        <div className='m-3 first-of-type:ml-0 relative'>
            <Component 
                href={linkToWeb} 
                target={icon ? "_blank" : ""}
                rel="noopener noreferrer" 
                className={`flex items-center ${bodyFont.className}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {name}
                {icon && (
                    <span className='ml-2'>
                        <Image 
                            src='/icons/arrow-top-right-icon.svg'
                            alt='#'
                            width={12}
                            height={10}
                        />
                    </span>
                )}
            </Component>
            <div 
                className={`fill-div bg-black absolute bottom-[-3px] left-0 ${hovered ? "w-full" : "w-0"} transition-all duration-500 ease-in-out`}
                style={{ height: '3px'}}
            />
        </div>
    );
};

export default CustomLink;
