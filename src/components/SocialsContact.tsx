import { SocialContactItems as SocialContactItems } from '@/data/data';
import { Karla } from 'next/font/google';
import Image from 'next/image';
import CustomLink from './LinkIcon';

const bodyFont = Karla({ subsets: ['latin'], weight: '600' });

const SocialsContact = () => (
    <>
        <div className='flex items-center'>
            {SocialContactItems.map((item, idx) =>
                <CustomLink key={idx} name={item.social} linkToWeb={item.link} icon />
            )}
        </div>
    </>
)
export default SocialsContact