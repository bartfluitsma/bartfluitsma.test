import Image from 'next/image'

type PortfolioCardProps = {
  title: string;
  image: string;
}

const PortfolioCard = ({ title, image }: PortfolioCardProps) => {
  return (
    <div className="relative bg-red-50 overflow-hidden group transform skew-y-0 transition-all duration-500 ease-in-out hover:skew-y-6">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        style={{ objectFit: 'cover' }}
        className={'w-full h-full transform scale-100 group-hover:scale-110'}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xlbg-opacity-70 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 transform skew-y-0 hover:skew-y-6">
        {title}
      </div>
    </div>
  );
};

export default PortfolioCard;


