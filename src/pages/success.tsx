import Header from "@/components/Header"
import Heading from "@/components/Headings"
import Text from "@/components/Text"
import Link from "next/link"

const Succes = () => (
    <>
      <Header />
        <Heading as={1}>Thanks for your message!</Heading>
        <Text>I&apos;ll get back to you as soon as possible.</Text>
        <Link className="underline" href={'/'}>Back to homepage</Link>
    </>
)

export default Succes
