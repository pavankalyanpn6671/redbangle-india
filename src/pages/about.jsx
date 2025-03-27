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

const WhoWeAre = () => {
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
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
          <div className="flex items-center uppercase text-[48px] leading-none md:text-[120px] md:leading-[148px] mr-6 md:mr-10 font-medium">
            WHO WE ARE
            <img
              className="max-w-[158px] md:max-w-[281px] block ml-6 md:ml-10 "
              src="/img/who-we-are/about-pill-2.webp"
              width="562"
              height="210"
              alt="about pill"
            />
          </div>
        </Marquee>
        <div className="container">
          <div className="max-w-[1100px] w-full text-base leading-[21px] md:text-[32px] md:leading-9.5 mt-8 md:mt-16 text-rb-black">
            We&apos;re a content agency with zero chill for the ordinary. We drive 
            brand growth armed with the power of an important question: WHY NOT? 
          </div>
        </div>
      </section>

      <section className="py-15 md:py-30">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <h1 className="font-everett text-2xl md:text-7xl mb-8">
                What we do
              </h1>

              <p className="text-sm md:text-xl mb-0">
                We&apos;re not just another creative agency. We bring the heat with Strategies 
                that work. Campaigns that turn heads. Content that hits home. And Technology
                that leads the way. Our culture is defined by curiosity, boldness, and a
                refusal to accept &apos;good enough&apos; as a reason to stop. With bold ideas and
                a hands-on approach, every challenge we take on is a chance to create 
                work that works. Whether it&apos;s launching a brand or scaling it to new 
                heights, we disrupt, delight and deliver across industries like sports,
                entertainment, fashion, F&B, BFSI, retail, e-commerce and consumer electronics.{' '}<br/><br/>
                <span className="font-semibold">
                  Explore our services:{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/strategy"
                  >
                    Strategy
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/campaign"
                  >
                    Campaign
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/content"
                  >
                    Content
                  </Link>
                  ,{' '}
                  <Link
                    className="text-rb-red duration-300 ease-out"
                    href="/services/technology"
                  >
                    Technology
                  </Link>
                  .
                </span>
              </p>
            </div>

            <div className="w-full md:w-1/2 pt-8 md:pt-0 md:pl-[8%]">
              <img src="/img/who-we-are/what-do-we-do.jpg" alt="Explore our services here: Leap, Create, Play" />
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: 'none' }}>
        <h2>Brand content production agency</h2>
        <h2>Integrated marketing agency</h2>
        <h2>Holistic marketing agency</h2>
        <h2>Brand strategy</h2>
        <h2>Content production agency</h2>
        <h2>Integrated agency</h2>
        <h2>Creative agency</h2>
        <h2>Digital marketing company</h2>
        <h2>Advertising agency</h2>
        <h2>Global team</h2>
        <h2>Brand content</h2>
      </div>

      <section className="py-15 md:py-30 bg-rb-mercury">
        <div className="container">
          <h2 className="font-everett text-2xl md:text-7xl mb-6 md:mb-18">
          Our X Factors
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 gap-y-18">
            {[
              {
                id: 0,
                title: 'Fueling Client Growth',
                description:
                  'Our aim is impact. Every move we make is crafted to help clients differentiate, connect, and reach their biggest goals.',
              },
              {
                id: 1,
                title: 'Building Lasting Bonds',
                description:
                  'Whether it’s 5 months or 5 years, we keep relationships fresh. Every project is an opportunity to succeed - together.',
              },
              {
                id: 2,
                title: 'Collaboration Meets Accountability',
                description:
                  'Inspired by collaboration, powered by ownership. We take every idea further because the buck stops with us.',
              },
              {
                id: 3,
                title: 'Relentless Curiosity',
                description:
                  'Curiosity is our obsession. We dive deep into every project, asking questions that others overlook to uncover real opportunities.',
              },
              {
                id: 4,
                title: 'Solutions, Not Shortcuts',
                description:
                  'For us, excellence is about real solutions, not quick fixes. We invest the time to ensure the results are built to last.',
              },
              {
                id: 5,
                title: 'A Shared Journey',
                description:
                  'For us, growth is a collective journey. Every project is a chance to enhance your brand, refine our craft, and empower our team.',
              },
            ].map(({ id, title, description }) => (
              <div key={id}>
                <h4 className="font-everett mb-1 text-7xl md:text-[86px]">
                  0{id + 1}
                  <span className="text-rb-red">.</span>
                </h4>
                <p className="text-lg font-semibold mb-2">{title}</p>

                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30">
        <div className="container">
          <div className="border border-rb-stroke-dark rounded-3xl p-4 lg:p-10 flex flex-col-reverse lg:flex-row flex-wrap items-center">
            <div className="w-full lg:w-3/5 p-0 lg:pr-5 xl:px-10">
              <h2 className="text-2xl md:text-[52px] leading-[100%] font-semibold mb-8">
                {' '}
                Meet our team and partners 
              </h2>
              <p className="text-sm md:text-lg mb-10 opacity-80">
               With a sharp eye on the market and collaborative creativity lighting the way, 
               we don&apos;t just think outside the box - we crush it. Powered by a bold team and
               rock-solid partners, we craft game-changing solutions that deliver results, 
               shatter expectations, and put our clients in the fast lane to growth.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Button
                  href="/team"
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                >
                  MEET OUR LEADERS
                </Button>
                <Button
                  intent="p-secondary"
                  // onClick={loadMore}
                  className="w-full md:w-auto"
                  suffix={<LineArrow hover />}
                  href="/partners"
                >
                  VIEW OUR PARTNERS
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 mb-10 lg:mb-0">
              <img src="/img/who-we-are/who-we-are.jpg" alt="discover partner" />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="pb-30">
        <ArticleSection
          hideSubscribe
          lineheading="NEWSROOM"
          heading="Media highlights and press roundup"
        />
      </div> */}
      {/* <div className="pb-30">
        <AboutNewsRoom
        hideSubscribe
        lineheading="NEWSROOM"
        heading="Media highlights and press roundup"
        />
      </div> */}
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
    </>
  )
}

export default WhoWeAre
