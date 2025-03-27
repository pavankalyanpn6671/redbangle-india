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
  capabilitiesSCS,
  redbanglewayThink,
  serviceVideos,
} from '@/content/services'
import { similarPosts } from '@/utils/dummy'
import { postsMapper } from '@/utils/mapper'
import Script from 'next/script'
import { useEffect, useState } from 'react'



const ServiceSCS = ({setisPopupOpen}) => {

  const _posts = similarPosts.map(postsMapper)
  const [stopVisible, setstopVisible] = useState(false)

 const createTestimonialData = [
    {
      key: 0,
      quote:
        'Working with Red Bangle has been an excellent experience. Their team was able to effortlessly transform our communication needs into a well crafted campaign. They have been perceptive in understanding our needs as a business, this is what I believe allowed them to come up with creative ideas for the campaign. The team has smoothly executed the plan for us in a short amount of time, with commendable agility for on the fly changes.',
      name: 'KALP PATEL & AYUSH PATEL',
      designation: 'FOUNDERS',
      company: 'L74 CRAFT CIDERS',
      image: {
        srcSet:
          '/img/testimonials/kalp-patel_ayush-patel.jpg 533w, /img/testimonials/kalp-patel_ayush-patel.jpg 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    ,
    {
      key: 1,
      quote:
        <>
          <div>
          Red Bangle captured the very essence of our brand &ndash;the vibrant energy, the quirky charm, and the pure joy of gathering around delicious food. What was especially impressive was the creative strategy that led to the curation of design and copy. They took the colors, the quirky and iconic signages, and the energy of the local markets, and transformed them into a fresh, modern expression.<br/>
          We&apos;ve seen a tremendous response since the launch. People are drawn to the unique identity, and it&apos;s translated into a love for the food itself. We couldn&apos;t be happier.
          </div>
        </>,
      name: 'KUNCHERIA MARATTUKALAM',
      designation: 'FOUNDER & DIRECTOR',
      company: 'MARATT GROUP',
      image: {
        srcSet:
          '/img/testimonials/kuncheria_marattukalam.jpg', 
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
      key: 2,
      quote:
        'It has been a pleasure to work with the Red Bangle team on Project Loom. They are a unique platform that works with a range of directors and cinematographers to produce content across multiple languages and locations. This makes them nimble and effective.',
      name: 'SHOBA NARAYAN',
      designation: 'FOUNDER',
      company: 'PROJECT LOOMS',
      image: {
        srcSet:
          '/img/testimonials/shoba-narayan.webp 533w, /img/testimonials/shoba-narayan.webp 1066w',
        sizes: '(max-width:768px) 533px, 1066px',
      },
    },
    {
        key: 3,
        quote:
          'We worked on 2 films with Red Bangle and I can confidently say that the output exceeded our expectations. The team was able to come up with a concept that combined the strong recall of popular culture and at the same time incorporated the brand messaging clearly in the campaign. I would highly recommend them as a reliable and kickass creative partner',
        name: 'BHARAT VIRMANI',
        designation: 'Marketing Manager',
        company: 'Games24x7',
        image: {
          srcSet:
            '/img/testimonials/bharat.webp 533w, /img/testimonials/bharat.webp 1066w',
          sizes: '(max-width:768px) 533px, 1066px',
        },
      },
  ]
  const cards= [
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
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('leap-explore'); // Replace 'section-id' with the ID of your section
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
        className="bg-rb-scarlet"
        type="STRATEGY"
        video={serviceVideos.strategy.video}
        fullVideo={serviceVideos.strategy.fullVideo}
        ctaText="BOOK A DISCOVERY CALL"
        ctaLink="/contact"
        content={
          <>
            <h1 className="inline">Whether we&apos;re launching brands or shaping campaigns and content, we blend data, insights, cultural nuances and our marketing expertise to craft laser-focused strategies that set the stage for brand growth. </h1>
           
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <h2>Marketing Agency</h2>
        <h2>Holistic Marketing</h2>
        <h2>Marketing Content Strategy</h2>
        <h2>Digital Brand Management</h2>
        <h2>Creative Content Marketing</h2>
        <h2>Marketing Agency Near Me</h2>
        <h2>Digital Media Marketing</h2>
        <h2>Content Marketing Strategy</h2>
        <h2>Full Service Advertising Agency</h2>
      </div>
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[620px]">
            Unlocking strategic growth for your business
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesSCS}
      />
      <RedbangleWaySection
        data={redbanglewayThink}
        image={{
          src: '/img/services/think-process.gif',
          alt:'think process',
          width: '500',
          height: '500',
        }}
      />
       <FeaturedWorkSection posts={_posts} href="/leap" /> 
 <Testimonials
        title={'WHAT OUR CLIENTS SAY'}
        className="py-7.5 md:py-15"
        testimonialData={createTestimonialData}
        type="semi"
      />
      <div id="leap-explore">
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
export default ServiceSCS
