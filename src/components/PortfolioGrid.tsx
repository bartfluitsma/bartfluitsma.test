import { useState } from 'react';
import { portfolioItems as portfolioItems } from "@/data/data"
import PortfolioCard from "./PortfolioCard"
import Heading from "./Headings"
import Text from "./Text"

const PortfolioGrid = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleItems = showMore ? portfolioItems : portfolioItems.slice(0, 2);

  const handleShowMore = () => {
    setShowMore(true);
  }

  return (
    <>
      <div>
        <Heading as={1}>My projects</Heading>
        <Text>
          When working on a project, I always give a 100%. My focus is on creating websites that are easy for both owners and visitors to use, while also incorporating logical design principles and maintaining optimal speed. Have a look at some of my projects below.
        </Text>
        <div className="mt-10">
          {visibleItems.map((item, key) =>
            <PortfolioCard
              anchor={item.anchor}
              title={item.title}
              image={item.image}
              description={item.description}
              website={item.website}
              key={key}
            />
          )}
          {!showMore && <button id='read-more' className="mt-4 text-blue-600 hover:text-blue-800" onClick={handleShowMore}>Show more projects</button>}
        </div> 
      </div>
    </>
  );
};

export default PortfolioGrid;
