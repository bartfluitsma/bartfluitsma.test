import { portfolioItems as portfolioItems } from "@/data/data"
import PortfolioCard from "./PortfolioCard"
import Heading from "./Headings"

const PortfolioGrid = () => (
    <>
    <div>
        <Heading as={2}>Some of my projects</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {portfolioItems.map((item, key) =>
            <PortfolioCard
              title={item.title}
              image={item.image}
              key={key}
            />
          )}
        </div>
      </div>
    </>
)

export default PortfolioGrid