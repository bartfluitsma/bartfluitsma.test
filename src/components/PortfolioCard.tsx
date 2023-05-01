import Image from 'next/image'
import Heading from './Headings';
import Text from '@/components/Text';
import CustomLink from './LinkIcon';

type PortfolioCardProps = {
  anchor: string;
  title: string;
  image: string;
  description: string;
  website: string;
}

const PortfolioCard = ({ title, image, description, website, anchor }: PortfolioCardProps) => {
  return (
    <div id={anchor} className='flex border-b-2  first:border-t-2  py-6 '>
      <div className='w-2/5 pr-4'>
        <Heading as={2}>{title}</Heading>
        <Text small>{description}</Text>
        <div className='w-fit'>
          <div className='w-fit'>
            {website === '' ? (
              <p>Coming soon</p>
            ) : (
              <CustomLink name='Visit website' linkToWeb={website} icon />
            )}
          </div>
        </div>
      </div>
      <div className='w-3/5 pl-4'>
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          style={{ objectFit: 'cover' }}
          className={'w-full rounded-lg '}
        />
      </div>
    </div>
  );
};

export default PortfolioCard;


