import { LineArrow } from '@/components/icons'
import { aboutSchema } from '@/components/schema/about-schema'
import {
  ArticleSection,
  Marquee,
  WorkListHeroSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import { AboutNewsRoom } from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
// import  AboutNewsRoom  from '@/components/shared/sections/ArticleSection/AboutNewsRoom'
import { Button } from '@/components/ui'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

const NewsRoom = () => {
  return (
    <>
      <SEO
        title="Best Branded Content, Marketing Content for Holistic Marketing Communication & Creative Ad Campaigns | About Red Bangle - Creative Advertising Agency"
        description="Learn about Red Bangle, a leading creative content production, content development and integrated digital campaign marketing agency. Discover our journey, values, and commitment to delivering impactful content for brands in India, USA, UK, UAE, AUS & worldwide."
        url="www.redbangle.com/brand-content-production-agency"
      />


      <section className="py-14 md:py-23  overflow-hidden bg-rb-mercury text-rb-black ">
        <Marquee duration={20}>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
          NEWSROOM
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 rounded-[90px]"
              src="/img/news-room/newsroom_page_hero.png"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
          NEWSROOM
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 rounded-[90px]"
              src="/img/news-room/newsroom_page_hero.png"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
        </Marquee>
        <div className="container">
          {/* <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 text-rb-black">
            We&apos;re a content agency with zero chill for the ordinary. We drive 
            brand growth armed with the power of an important question: WHY NOT? 
          </div> */}
        </div>
      </section>
     
      <div className="pb-30 pt-24">
        <AboutNewsRoom
        hideSubscribe
        lineheading="Latest Stories"
        heading="Media Highlights and Press Roundup"
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default NewsRoom
