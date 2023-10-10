import Layout from '@/components/Layout'
import Text from '@/components/Text'
// import { Karla } from 'next/font/google'
import { AboutMeInformation } from '@/data/data'
import Image from 'next/image'

// const titleFont = Karla({ subsets: ['latin'], weight: '800' })

const About = () => (
  <>
    <Layout>
      <div className='xl:flex'>
        <Text>{AboutMeInformation.about}</Text>
          <Image
            src='/images/bart-fluitsma-web-developer.jpg'
            alt='Web developer Bart Fluitsma'
            width={1000}
            height={1000}
            style={{ objectFit: 'cover' }}
            className={'w-full rounded-lg xl:max-w-[300px] xl:max-h-[400px] xl:mt-5 xl:ml-6'}
          />
      </div>
    </Layout>
  </>
)

export default About
