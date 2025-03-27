import {
    TrustedBrandsSection,
    WorkListHeroSection,
    FeaturedPlayWorkSection,
  } from '@/components/shared'
  import { SEO } from '@/components/shared/SEO'
  import { getPlayWorks } from '@/utils/graphql'
  import { formatPlayPosts } from '@/utils/formate'
  import { ecsPlayWorkSchema } from '@/components/schema/ecs-play-work-schema'
  import Script from 'next/script'
  import { useEffect, useState } from 'react'
  
  function WorkTech({ works, tags, setisPopupOpen }) {
    const [stopVisible, setstopVisible] = useState(false)
    useEffect(() => {
      if (!stopVisible) {
        const handleScroll = () => {
          const section = document.getElementById('play-brand'); // Replace 'section-id' with the ID of your section
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
          title="Get Brand & Marketing Content for your Creative Ad Campaigns, Digital Marketing Campabdjcbajcigns, Integrated Marketing Campaigns & Brand Communication | Red Bangle Work Portfolio"
          description="Explore Red Bangle's Work Portfolio: Branded marketing content for b2c & b2b hjabdshjbcmarketing communication needs including video content & creative ad campaigns that engage your audience. From brand stories to commercial product ads, we deliver impactful visual storytelling, brand films, ad films, AI videos, corporate films and explainer videos, YouTube content and more!"
          url="www.redbangle.com/work/video-production-company-for-corporate-storytelling"
        />
  
        <WorkListHeroSection
          className="bg-rb-tech"
          type="TECHNOLOGY"
          typeTwo="Work Showcase"
          pillImg="/img/tech_work_marque.jpg"
          multipleClasses='rounded-[90px]'
          content={
            <>
              We combine deep technical expertise with creative firepower to craft digital experiences that captivate and inspire your target audience. 
            </>
          }
        />
  
        {/* <FeaturedPlayWorkSection tags={tags} works={works} /> */}
        <div id="play-brand">

       <TrustedBrandsSection className="bg-white pt-9 pb-18 md:pb-30 md:pt-15" heading='Our Brand Partners'/>
        </div>
  
        <Script id="schema" type="application/ld+json">
          {JSON.stringify(ecsPlayWorkSchema)}
        </Script>
      </>
    )
  }
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
  export default WorkTech
  