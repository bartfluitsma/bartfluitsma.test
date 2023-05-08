import Header from '@/components/Header';
import Heading from '@/components/Headings';
import CustomLink from '@/components/LinkIcon';

const Custom404 = () => {
    return (
        <>
            <Header />
            <div className='mt-20'>
                <Heading as={1}>
                    404 - page not found
                </Heading>
                <p className="text-lg text-gray-600 mb-8">
                    Oops! Looks like the page you&apos;re looking for doesn&apos;t exist.
                </p>
                <div className='w-fit'>
                    <CustomLink name='Visit homepage' linkToWeb='/' icon={false} />
                </div>
            </div>

        </>
    );
};

export default Custom404;
