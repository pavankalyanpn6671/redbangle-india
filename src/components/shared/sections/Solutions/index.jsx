import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Autoplay } from 'swiper/modules'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'

import styles from '@/styles/sections/Solutions.module.scss'

gsap.registerPlugin(ScrollTrigger)
const slides = [
  {
    key: 0,
    title: 'Strategy',
    excerpt:
      'Strategy isn’t just a fancy buzzword to us - it’s our playground. We dive deep into market data, crack the code on consumer behaviour and glean insights to craft the strategy that inspires standout creative campaigns and impactful content for your brand.',
    video: {
      src: '/img/home/think-square.mp4',
      poster: '/img/services/think-poster.webp',
      width: '1440',
      height: '810',
    },
    color: ' rgb(147, 0, 0)',
    href: '/services/strategy',
  },
  {
    key: 1,
    title: 'Campaign',
    excerpt:
      'We take our cues from people and culture, turning creative insights into campaigns that cut through the noise. Aligned with your brand’s growth goals and built to connect, our work doesn’t just have a voice - it starts conversations, sparks action, and resonates with the right audience.',
    video: {
      src: '/img/services/campaign_slid.mp4',
      poster: '/img/services/create-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(229, 1, 28)',
    href: '/services/campaign',
  },
  {
    key: 2,
    title: 'Content',
    excerpt:
      'We create attention-grabbing content. From binge-worthy brand IPs and scroll-stopping video series to interactive magic and influencer gold, our content game is built to scale. We build communities and drive real results with creativity that packs a punch.',
    video: {
      src: '/img/services/content_slid.mp4',
     
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(253, 64, 111)',
    href: '/services/content',
  },
  
  {
    key: 3,
    title: 'Technology',
    excerpt:
      'From immersive virtual experiences to addictive games, slick apps, and beyond - we bring the tech-powered magic your brand needs to dominate the digital playground. With innovative strategies that spark engagement and drive growth, we keep your brand ahead of the curve and miles away from basic.',
    video: {
      src: '/img/services/technology_slid.mp4',
      poster: '/img/services/play-poster.webp',
      width: '1440',
      height: '810',
    },
    color: 'rgb(253, 150, 173)',
    href: '/services/technology',
  },
]
const sReverse = slides
export const SolutionsSection = () => {
  const containerRef = useRef()
  const onClick = (i) => {
    try {
      window.scrollTo(
        0,
        containerRef.current.offsetTop +
        (i == 1 ? 200 : 0) +
        (i == 0 ? 0 : (i + (i == 2 ? 1 : 0)) * window.innerHeight)
      )
    } catch { }
  }
  useEffect(() => {
    const container = containerRef.current
    const contents = document.querySelectorAll('.content-track > div')
    const sections = document.querySelectorAll('[data-solutionsection]')
    const bullets = document.querySelectorAll('[data-solutionsection-bullet]')

    const tls = []

    const mm = gsap.matchMedia()
    mm.add('(min-width:768px)', () => {
      // console.log(window.innerHeight)
      const totalDuration = 3 * window.innerHeight
      const n = sections.length
      const singleDuration = totalDuration / n
      // gsap.set(contents, { autoAlpha: 0 })
      // gsap.set(contents[0], { autoAlpha: 1 })
      const mstl = ScrollTrigger.create({
        trigger: '.pin-up',
        start: () => 'top top',
        // invalidateOnRefresh: true,
        end: () => `+=${totalDuration}`,
        // markers: true,
        pin: true,
        scrub: true,
        // animation: linetl,
      })
      sections.forEach((s, i) => {
        // if (i == 0) {
        //   const tl = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: container,
        //       toggleActions: 'play none play reverse',
        //       start: 'top 0',

        //       end: `+=${singleDuration}`,
        //       scrub: false,
        //     },
        //   })
        //   tl.fromTo(
        //     bullets[i],
        //     { backgroundColor: 'white' },
        //     { backgroundColor: 'white' }
        //   )
        //   tls.push(tl)
        //   return
        // }
        const scrollTriggerSettings = {
          trigger: container,
          start: () => `top+=200px -=${singleDuration * (i - 1)}`,
          end: () =>
            i == 3 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,
          markers: false,
          toggleActions: 'play none play reverse',
        }

        // Check if the current slide is the third one (index 2)
        if (i === 3) {
          // Increase the duration for the third slide
          scrollTriggerSettings.end = () =>
            `bottom top+=${singleDuration * 1.5}`;
        }


        const tl = gsap.timeline({
          scrollTrigger: {
            ...scrollTriggerSettings,
            scrub: true,
            // trigger: container,
            // start: () => `top+=200px -=${singleDuration * (i - 1)}`,
            // end: () =>
            //   i == 2 ? `bottom top+=${singleDuration}` : `+=${singleDuration}`,

            // // markers: true,
            // scrub: true,
            // // animation: tl,
            // toggleActions: 'play none play reverse',
          },
        })
        tls.push(tl)
        // ScrollTrigger.create()
        tl.fromTo(
          contents[i],
          {
            yPercent: 0,
            //  autoAlpha: i !== 0 ? 0 : 1
          },
          {
            yPercent: -100 * i,
            // autoAlpha: 1,
            // duration: 0.5,
          },
          0
        )
        const ltl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            // 200 for giving space to stay for first section and 2 times as their are 2 container on top of last section
            start: () =>
              `top+=${i != 3 ? singleDuration * i : (singleDuration + 400) * 2
              } top+=200px`,

            toggleActions: 'play none play reverse',
            // markers: true,
          },
        })
        if (i > 0) {
          ltl.fromTo(
            bullets[i - 1],
            { backgroundColor: 'white' },
            { backgroundColor: 'transparent' },
            0
          )
        }
        ltl.fromTo(
          bullets[i],
          { backgroundColor: 'transparent' },
          { backgroundColor: 'white' },
          0
        )
        tls.push(ltl)
      })

      return () => {
        mstl.kill()
        tls.forEach((t) => t.kill())
      }
    })

    return () => {
      mm.kill()
    }
  }, [])

  return (
    <>
      {/* <section
        className="text-white relative  md:h-screen pb-12 md:pb-0 transition-all duration-300 md:hidden"
        style={{ backgroundColor: slides[activeSlide].color }}
      >
        <div className="container">
          <Swiper
            className="md:h-screen swiper-bullets py-12 md:py-0"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            direction="horizontal"
            breakpoints={{
              768: {
                direction: 'vertical',
                autoplay: false,
              },
            }}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            style={{
              '--swiper-pagination-color': '#fff',
              '--swiper-pagination-bullet-inactive-color': 'transparent',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
            }}
            onSlideChange={(swiper) => {
              setActiveSlider(swiper.activeIndex)
            }}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.key} className="flex flex-col justify-center">
                <div>
                  <h3 className={styles.title}>
                    {s.title} <br /> Content Solution
                  </h3>
                  <div className="flex flex-wrap items-end flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-7 pt-9 md:pt-0">
                      <img alt={s.title} {...s?.image} className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-7 md:pr-10">
                      <p className="mt-5.5 md:mt-0 mb-7.5 md:mb-10">
                        {s.excerpt}
                      </p>
                      <Button intent="secondary" suffix={<LineArrow />}>
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
      <section
        className="text-white relative overflow-visible md:overflow-hidden"
        ref={containerRef}
      >
        <div className="pin-up min-h-screen">
          <div className="container relative hidden md:block">
            <div className="flex flex-col absolute top-[50vh] -translate-y-1/2 md:right-4 xl:right-0 z-[1]">
              {sReverse.map((_, i) => (
                <button
                  key={i}
                  data-solutionsection-bullet={i}
                  onClick={() => onClick(i)}
                  className="w-3 h-3 border border-white bg-transparent my-[3px] rounded-full"
                ></button>
              ))}
            </div>
          </div>
          <div className="content-track flex min-h-screen md:h-screen flex-col md:relative w-full ">
            {sReverse.map((s, i) => (
              <div
                key={s.key}
                className="min-h-screen md:min-h-0 md:h-full w-full flex-shrink-0 grid place-content-center first:pt-18  first:md:pt-24 pt-16 md:py-24 top-0 left-0 sticky md:static"
                style={{ backgroundColor: s.color }}
                data-solutionsection={s.color}
              >
                <div className="container">
                  <h3 className={styles.title + ` text-5xl -mt-14 lg:text-[100px] lg:mt-0`}>
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap items-end flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 md:pr-7 pt-11 md:pt-0 ">
                      {/* <img alt={s.title} {...s?.image} className="w-full" /> */}
                      <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        alt={s.title}
                        {...s?.video}
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-7 md:pr-10">
                      <p className="mt-5.5 md:mt-0 mb-7.5 md:mb-10 md:text-2xl">
                        {s.excerpt}
                      </p>
                      <Button
                        intent="secondary"
                        suffix={<LineArrow hover />}
                        href={s.href}
                        className="w-full md:w-auto md:max-w-max"
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
