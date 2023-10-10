import { portfolioItems } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioImageGrid = () => {
  return (
    <>
      <div className='overflow-hidden mb-4'>
        <Link href={`/projects#${portfolioItems[0].anchor}`} scroll={false}>
          <Image
            src={portfolioItems[0].image}
            alt={`${portfolioItems[0].title} mockup`}
            height={1000}
            width={1000}
            className='w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105'
            priority
          />
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-4'>
        <div className='col-span-2 overflow-hidden'>
          <Link href={`/projects#${portfolioItems[1].anchor}`} scroll={false}>
            <Image
              src={portfolioItems[1].image}
              alt={`${portfolioItems[1].title} mockup`}
              height={1000}
              width={1000}
              className='w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105'
              priority
            />
          </Link>
        </div>
        <div className='col-span-1 mt-4 sm:mt-0 overflow-hidden'>
          <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>
            {portfolioItems.slice(2).map((portfolio, idx) => (
              <div key={idx} className='overflow-hidden'>
                <Link
                  href={
                    idx >= 1
                      ? '/projects#read-more'
                      : `/projects#${portfolio.anchor}`
                  }
                  scroll={false}
                >
                  <Image
                    src={portfolio.image}
                    alt={`${portfolio.title} mockup`}
                    height={500}
                    width={500}
                    className='w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105'
                    priority
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioImageGrid
