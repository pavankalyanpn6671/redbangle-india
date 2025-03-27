import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
} from '@/components/shared'
import { schemaScsCreate } from '@/components/schema/scs-create-schema'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesCreate,
  redbanglewayCreate,
  serviceVideos,
} from '@/content/services'
import { campaignSimilarPosts,createTestimonialData } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'


const cards= [
  {
    id: 0,
    serviceTitle: 'STRATEGY',
    serviceDescription:
      'Whether we’re shaping campaigns or content, we blend marketing expertise with data, consumer insights, and cultural nuances to craft laser-focused strategies that set the stage for successful brand communication.',
    serviceAmblem: '/img/services/strategy_asset.svg',
    bgColor: '#930000',
    href: '/services/strategy',
  },
  {
    id: 1,
    serviceTitle: 'CONTENT',
    serviceDescription:
      'We create content that packs a punch. From binge-worthy brand IPs and scroll-stopping video series to interactive magic and influencer gold, our production game is built to scale. We build communities and drive real results.',
    serviceAmblem: '/img/services/content_aset.svg',
    bgColor: '#fd406f',
    href: '/services/content',
  },
  {
    id: 2,
    serviceTitle: 'TECH',
    serviceDescription:
      'We bring the tech-fueled magic your brand needs to dominate the digital playground. From immersive virtual experiences to addictive games, branded apps, responsive websites and beyond.',
    serviceAmblem: '/img/services/tech_aset.svg',
    bgColor: '#fd96ad',
    href: '/services/technology',
  },
]

const ServiceCCS = ({setisPopupOpen}) => {
  const _posts = campaignSimilarPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('create-explore'); // Replace 'section-id' with the ID of your section
        if (section && window.scrollY > section.offsetTop) {
          setisPopupOpen(true);
          setstopVisible(true)
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [stopVisible]);
  return (
    <>
      <SEO
        title="Fuel Brand Growth with Integrated Marketing Campaigns | Go from Campaign Strategy to Creative Advertising Campaigns with Red Bangle - Your Global Brand Communication Partner"
        description="Red Bangle is leading creative advertising agency globally. With creative ad campaigns, Red Bangle boosts your brand communication game. Get in touch with our creative experts for exceptional integrated marketing campaigns, advertising strategy & campaign strategy."
        url="www.redbangle.com/service/creative-marketing-agency-for-brand-campaigns"
      />

      <ServiceHeroSection
        className="bg-rb-torch-red"
        type="campaign"
        video={serviceVideos.campaign.video}
        fullVideo={serviceVideos.campaign.fullVideo}
        ctaText="Create with us"
        ctaLink="/contact"
        content={
          <>
            We take our cues from people and culture, turning real insights into relatable campaigns that align perfectly with your brand&apos;s communication goals. Our work starts conversations, sparks action, and resonates with the right audience. 
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Content Marketing Strategy</h2>
        <h2>Best Creative Agency</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Brand Campaigns</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        iconClassName="w-15 h-15"
        title={
          <>Creative campaigns that resonate deeply with audiences</>
        }
        cards={capabilitiesCreate}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleWaySection
        title={
          <div className="md:max-w-[720px]">
            Our Approach to Crafting Exceptional Campaigns
          </div>
        }
        data={redbanglewayCreate}
        image={{
          src: '/img/services/the_rb_way_visual.jpg',
          alt: 'the red bangle way visual',
          width: '614',
          height: '774',
        }}
      />
      <FeaturedWorkSection posts={_posts} href="/work/create" />
      <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="create-explore">
        <ExploreMoreSection
          type="create"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaScsCreate)}
      </Script>
    </>
  )
}
export default ServiceCCS
