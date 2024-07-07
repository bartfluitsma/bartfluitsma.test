import Layout from '@/components/Layout';
import SocialsContact from '../components/SocialsContact';
import Text from '@/components/Text';
import Heading from '@/components/Headings';
import PortfolioImageGrid from '@/components/PortfolioImageGrid';

export default function Home() {

  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()

  const christmasstart = `${year}:12:12`;
  const christmasend = `${year}:12:31`;

  const currentday = `${year}:${month}:${day}`

  const isCristmas = (currentday > christmasstart && currentday < christmasend)

  return (
    <Layout>
      <div className='mb-10 md:mb-20'>
        <Heading as={1}>
          Hello, I&apos;m <span className={`${isCristmas ? 'christmas-hat ': ''}`}>Bart</span>
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
