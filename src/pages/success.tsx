import Header from "@/components/Header"
import Heading from "@/components/Headings"
import Text from "@/components/Text"

const Succes = () => (
    <>
      <Header />
        <Heading as={1}>Thanks for your message!</Heading>
        <Text>I'll get back to you as soon as possible.</Text>
        <a className="underline" href="/">Back to homepage</a>
    </>
)

export default Succes
