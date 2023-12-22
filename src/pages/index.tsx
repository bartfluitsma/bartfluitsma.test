import Layout from '@/components/Layout';
import SocialsContact from '../components/SocialsContact';
import Text from '@/components/Text';
import Heading from '@/components/Headings';
import PortfolioImageGrid from '@/components/PortfolioImageGrid';

export default function Home() {
  return (
    <Layout>
      <div className='mb-10 md:mb-20'>
        <Heading as={1}>
          Hello, I&apos;m <span className='christmas-hat'>Bart</span>
        </Heading>
        <Text>
          I am a self-taught developer who enjoys creating websites for starting companies, with a particular interest in those focused on sustainability.
        </Text>
        <SocialsContact />
      </div>
      <PortfolioImageGrid />
    </Layout>
  )
}
