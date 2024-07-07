import { portfolioItems as portfolioItems } from "@/data/data"
import PortfolioCard from "./PortfolioCard"
import Heading from "./Headings"
import Text from "./Text"

const PortfolioGrid = () => {

  return (
    <>
      <div>
        <Heading as={1}>My projects</Heading>
        <Text>
          When working on a project, I always give a 100%. My focus is on creating websites that are easy for both owners and visitors to use, while also incorporating logical design principles and maintaining optimal speed. Have a look at some of my projects below.
        </Text>
        <div className="mt-10">
          {portfolioItems.map((item, key) =>
            <PortfolioCard
              anchor={item.anchor}
              title={item.title}
              image={item.image}
              description={item.description}
              website={item.website}
              key={key}
            />
          )}
        </div> 
      </div>
    </>
  );
};

export default PortfolioGrid;
