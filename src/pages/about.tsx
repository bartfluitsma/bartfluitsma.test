import Layout from "@/components/Layout"
import Text from "@/components/Text"
import { Karla } from 'next/font/google'
import { AboutMeInformation } from "@/data/data"

const titleFont = Karla({ subsets: ['latin'], weight: '800' })

const About = () => (
    <>
      <Layout>
        <Text>
          {AboutMeInformation.about}
        </Text>
      </Layout>
    </>
)

export default About
