import { scsThinkSchema } from '@/components/schema/scs-think-schema'
import {
  ServiceCardSection,
  ServiceHeroSection,
  ExploreMoreSection,
  RedbangleWaySection,
  FeaturedWorkSection,
  Testimonials
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  capabilitiesTech,
  redbanglewayThinkTech,
  serviceVideos,
} from '@/content/services'
import { similarPosts,createTestimonialData } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const ServiceTech = ({setisPopupOpen}) => {

  
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
      id: 0,
      serviceTitle: 'CAMPAIGN',
      serviceDescription:
        'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. From bold ideas to flawless execution, we create work that gets your brand noticed, talked about, and loved.',
      serviceAmblem: '/img/services/campaigns_aset.svg',
      bgColor: ' #e5011c',
      href: '/services/campaign',
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
  ]
  const _posts = similarPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('tech-explore'); // Replace 'section-id' with the ID of your section
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
        title="Best Creative Advertising Agency Globally | Red Bangle - Get B2C & B2B Marketing Communication Strategy, Content Strategy, Marketing Campaigns, Branded Content & more."
        description="Best global creative advertising agency across US, UK, UAE, AUS, IND. Red Bangle offers expert b2c & b2b marketing communication strategy & branded content strategy for creative ad campaigns, integrated marketing campaigns services that boost your brand engagement & visibility"
        url="www.redbangle.com/service/holistic-marketing-agency-for-creative-content-marketing"
      />
      <ServiceHeroSection
        className="bg-rb-tech"
        type="TECHNOLOGY"
        video={serviceVideos.technology.video}
        fullVideo={serviceVideos.technology.fullVideo}
        ctaText="BOOK A DISCOVERY CALL"
        ctaLink="/contact"
        content={
          <>
            We blend technology and creativity to craft cutting - edge digital experiences
            for B2B brands. From AI-driven creative solutions to responsive website design
            and development - we inspire and engage every audience.
          </>
        }
      />

      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[620px]">
            Cutting-edge Digital Experiences for your Brand
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesTech}
      />
      <RedbangleWaySection
        data={redbanglewayThinkTech}
        image={{
          src: '/img/services/tech_think_process.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
        title='We turn brand communications into engaging digital interactions'
      />
      {/* <FeaturedWorkSection posts={_posts} href="/leap" /> */}
         <Testimonials
              title={'WHAT OUR CLIENTS SAY'}
              className="py-7.5 md:py-15"
              testimonialData={createTestimonialData}
              type="semi"
            />
      <div id="tech-explore">
        <ExploreMoreSection
          type="think"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(scsThinkSchema)}
      </Script>
    </>
  )
}
export default ServiceTech
