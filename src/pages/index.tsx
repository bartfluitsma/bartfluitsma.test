import Layout from '@/components/Layout';
import SocialsContact from '../components/SocialsContact';
import { Karla } from 'next/font/google'
import PortfolioGrid from '@/components/PortfolioGrid';
import Text from '@/components/Text';
import Heading from '@/components/Headings';

const titleFont = Karla({ subsets: ['latin'], weight: '600' })

export default function Home() {
  return (
    <Layout>
      <div className='mb-20'>
        <Heading as={1}>
          Hello, I'm Bart
        </Heading>
        <Text>
          I am a self-taught developer who enjoys creating websites for starting companies, with a particular interest in those focused on sustainability.
        </Text>
        <SocialsContact />
      </div>
      <PortfolioGrid />
    </Layout>
  )
}
