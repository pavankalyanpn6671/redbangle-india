import {
  ServiceCardSection,
  ServiceHeroSection,
  Testimonials,
  ExploreMoreSection,
  FeaturedPlayWorkSection,
  RedbangleAdvantageSection,
} from '@/components/shared'
import { SEO } from '@/components/shared/SEO'
import {
  // approach,
  capabilitiesPlay,
  playStats,
  serviceVideos,
  playAdvantage,
} from '@/content/services'
import { formatPlayPosts } from '@/utils/formate'
import { ecsPlaySchema } from '@/components/schema/ecs-play-schema'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { getPlayWorks } from '@/utils/graphql'
import { StatsPlay } from '@/components/shared/sections/StatsPlay'
import { useEffect, useState } from 'react'

const ServiceECS = ({ works, tags, setisPopupOpen }) => {
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
      id: 2,
      serviceTitle: 'TECH',
      serviceDescription:
        'We bring the tech-fueled magic your brand needs to dominate the digital playground. From immersive virtual experiences to addictive games, branded apps, responsive websites and beyond.',
      serviceAmblem: '/img/services/tech_aset.svg',
      bgColor: '#fd96ad',
      href: '/services/technology',
    },
  ]
  const [stopVisible, setstopVisible] = useState(false)
  useEffect(() => {
    if (!stopVisible) {
      const handleScroll = () => {
        const section = document.getElementById('play-explore'); // Replace 'section-id' with the ID of your section
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
        title="Creative Advertising Agency | Best In Branded Content, Video Content, Marketing Content & Brand Communication | Red Bangle"
        description="Red Bangle is an integrated brand content agency specializing in creative advertising campaigns & branded marketing content, with comprehensive content strategy for your integrated marketing campaigns. Connect with Red Bangle to elevate your brand story with top-tier branded communication."
        url="www.redbangle.com/service/video-production-agency-for-corporate-video"
      />

      <ServiceHeroSection
        className="bg-rb-rosa"
        type="content"
        video={serviceVideos.content.video}
        fullVideo={serviceVideos.content.fullVideo}
        ctaText="WORK WITH US"
        ctaLink="/contact"
        content={
          <>
          <div>
          Fuel brand growth with content that packs a punch. Our storytellers, producers, and technology wizards build engaged brand communities and deliver ROI through films, videos, and interactive content.
          </div>
          </>
        }
      />

      <div style={{ display: 'none' }}>
        <h2>Video Production Agency</h2>
        <h2>Corporate Video</h2>
        <h2>Explainer Video Companies</h2>
        <h2>Animated Video Explainer</h2>
        <h2>Ad Film Makers</h2>
      </div>
      {/* <StatsPlay data={playStats} className="pt-15 md:pt-30" /> */}
      <ServiceCardSection
        tag="Our Capabilities"
        title={
          <div className="md:max-w-[700px]">
            From ideas to IP and brand engagement
          </div>
        }
        iconClassName="w-15 h-15"
        cards={capabilitiesPlay}
        pageSpecificLayout="grid-cols-2"
      />
      <RedbangleAdvantageSection data={playAdvantage} />
      {/* <FeaturedPlayWorkSection works={works ?? []} featuredTitle tags={tags} /> */}

      <Testimonials title={'WHAT OUR CLIENTS SAY'} className="py-7.5 md:py-15" type="semi"
         testimonialData={createTestimonialData} />
      <div id="play-explore">
        <ExploreMoreSection
          type="play"
          className="pt-7.5 md:pt-15 pb-15 md:pb-30"
          cards={cards}
        />
      </div>
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(ecsPlaySchema)}
      </Script>
    </>
  )
}
// export async function getStaticProps() {
//   const { data } = await getFeaturedPlayWorks()

//   return {
//     props: {
//       works: formatPlayPosts(data?.works?.nodes),
//     },
//   }
// }
export async function getStaticProps() {
  const { data } = await getPlayWorks()

  const works = formatPlayPosts(data?.works?.nodes)
  const tags = works.reduce((prev, w) => {
    w.tags?.forEach((t) => (prev[t.slug] = t.name))
    return prev
  }, {})
  const tagProp = Object.entries(tags).map(([k, v], index) => ({
    key: index,
    label: v,
    value: k,
  }))
  const filtered = tagProp.filter((f) => f.value != 'featured-work').sort()

  return {
    props: {
      works,
      tags: [tagProp.find((t) => t.value == 'featured-work'), ...filtered],
    },
  }
}
export default ServiceECS
