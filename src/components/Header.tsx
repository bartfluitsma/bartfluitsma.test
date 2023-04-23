import { menuItems as menuItems } from '@/data/data';
import { Karla } from 'next/font/google'
import CustomLink from './LinkIcon';

const titleFont = Karla({ subsets: ['latin'], weight: '400' })

const Header = () => (
    <nav className={`${titleFont.className} flex items-center justify-between  pb-20 lg:pb-32`}>
    <p className='text-xl'>bart</p>
    <ul className='flex'>
            {menuItems.map((item, idx) => 
                <li key={idx} className='w-fit ml-4'>
                    <CustomLink name={item.name} linkToWeb={item.link} icon={false} />
                </li>
            )}
        </ul>
    </nav>
)

export default Header;