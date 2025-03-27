import { cx } from 'class-variance-authority'
import Link from 'next/link'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react';
import {LineArrow} from '@/components/icons/LineArrow';


// const cards = [
//   {
//     key: 'think',
//     href: '/services/leap',
//     className: 'bg-rb-scarlet',
//     graphic: {
//       src: '/img/services/think-explore-graphic.webp',
//       alt: 'think explore graphic',
//       width: 408,
//       height: 521,
//     },
//     title: 'leap',
//     text: 'Strategic content solutions for your brand. We combine our knowledge of integrated marketing solutions with analysis and creativity, to offer concrete strategy blueprints, expand audience reach and fuel brand growth.',
//   },
//   {
//     key: 'create',
//     href: '/services/create',
//     className: 'bg-rb-torch-red',
//     graphic: {
//       src: '/img/services/create-explore-graphic.webp',
//       alt:'create explore graphic',
//       width: 446,
//       height: 521,
//     },
//     title: 'create',
//     text: 'Creative content solutions that fuel brand growth. Go from creative insights to campaign ideas and end-to-end content production in one seamless journey. And, leverage our media services to deliver the right conversations to the right audiences.',
//   },
//   {
//     key: 'play',
//     href: '/services/play',
//     className: 'bg-rb-rosa',
//     graphic: {
//       src: '/img/services/play-explore-graphic.webp',
//       alt:'play explore graphic',
//       width: 402,
//       height: 570,
//     },
//     title: 'play',
//     text: 'Power every play button with brand content that rocks. Our storytellers, producers and technology fuel campaigns and content across audiences and regions. Scale your content with us.',
//   },
// ]

export const ExploreMoreSection = ({ type = 'create', className = '', cards=[]}) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    // <section className={`bg-white ${className}`}>
    //   <div className="container">
    //     <h3 className="text-title md:text-title-md mb-10 md:mb-18 font-everett">
    //       Explore more solutions
    //     </h3>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    //       {cards
    //         .filter((c) => c.key !== type)
           
    //         .map((c) => (
    //           <Link
    //             href={c.href}
    //             className={`relative px-7.5 py-8 md:p-14 text-white overflow-hidden group ${c.className || ''
    //               }`}
    //             key={c.key}
    //           >
    //             <img
    //               alt={c.graphic.alt || ''}
    //               aria-hidden="true"
    //               className={cx([
    //                 'absolute right-0 top-0',
    //                 c.key === 'think' && 'max-w-[102px] md:max-w-[204px]',
    //                 (c.key === 'create' || c.key === 'play') &&
    //                 'max-w-[111px] md:max-w-[223px]',
    //               ])}
    //               {...c.graphic}
    //             />
    //             <h4 className="text-[32px] leading-9.5 md:text-[60px] md:leading-[68px] font-everett font-medium uppercase mb-10.5 md:mb-40 max-w-[300px]">
    //               <span className="inline-flex items-center">
    //                 {c.title}
    //                 <svg
    //                   width="34"
    //                   className="flex-shrink-0 ml-3 max-w-[24px] md:max-w-max group-hover:translate-x-1 transition-all"
    //                   height="32"
    //                   viewBox="0 0 34 32"
    //                   fill="none"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                 >
    //                   <path
    //                     d="M33.3086 17.3087C34.0311 16.5863 34.0312 15.4149 33.3087 14.6924L21.5358 2.91871C20.8133 2.19621 19.642 2.19618 18.9195 2.91862C18.197 3.64107 18.197 4.81242 18.9194 5.53492L29.3842 16.0004L18.9187 26.4653C18.1962 27.1877 18.1962 28.3591 18.9186 29.0816C19.6411 29.8041 20.8124 29.8041 21.5349 29.0817L33.3086 17.3087ZM0.000464296 17.8495L32.0005 17.8505L32.0006 14.1505L0.000586087 14.1495L0.000464296 17.8495Z"
    //                     fill="white"
    //                   />
    //                 </svg>
    //               </span>
    //             </h4>
    //             <p className="text-sm md:text-xl">{c.text}</p>
    //           </Link>
    //         ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-6 md:py-12 overflow-hidden">
        <div className="container">
          <h2 className="text-title md:text-title-md font-medium mb-10 md:mb-16">
            Explore More Services
          </h2>

          {/* Swiper Slider (for md and above) */}
          <div className="hidden md:block">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                prevEl: prevButtonRef.current,
                nextEl: nextButtonRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevButtonRef.current;
                swiper.params.navigation.nextEl = nextButtonRef.current;
              }}
              modules={[Navigation]}
              className="servicesSlider"
            >
              {cards.map(
                ({ id, serviceTitle, serviceDescription, serviceAmblem, bgColor, href }) => (
                  <SwiperSlide key={id}>
                    <Link href={href} className="group">
                      <div
                        className={`h-[22rem] p-8 md:p-14 relative overflow-hidden min-h-full md:h-[31rem]`}
                        style={{ backgroundColor: bgColor }}
                      >
                        <div className="absolute top-0 right-0 translate-x-[35%] -translate-y-12 md:-translate-y-28 opacity-20">
                          <img
                            src={serviceAmblem}
                            alt=""
                            className="w-[176px] h-[176px] md:w-[350px] md:h-[350px]"
                          />
                        </div>
                        <h3 className="relative text-white text-3xl md:text-6xl font-semibold flex items-center gap-3 mb-15 md:mb-[160px]">
                          {serviceTitle}
                          <svg
                            width="34"
                            height="32"
                            viewBox="0 0 34 32"
                            fill="none"
                            className="group-hover:translate-x-1 transition-all"
                          >
                            <path
                              d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                              fill="#fff"
                            />
                          </svg>
                        </h3>

                        <p className="text-sm md:text-xl text-white">{serviceDescription}</p>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            {/* Custom Arrow Navigation Buttons */}
            <div className="md:flex bottom-[-80px] left-0 flex gap-2 justify-start mt-6 md:mt-10">
              <button
                ref={prevButtonRef}
                className="prev w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
              >
                <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" left />
              </button>
              <button
                ref={nextButtonRef}
                className="next w-[66px] h-10 md:h-[50px] rounded-8.5 flex items-center justify-center bg-transparent duration-300 ease-out border-2 border-rb-black/60 hover:bg-rb-red hover:border-rb-red group"
              >
                <LineArrow className="text-rb-black max-w-[16px] group-hover:text-white" />
              </button>
            </div>

             {/* Use ArrowNavigation */}
            {/* <ArrowNavigation prevRef={prevButtonRef} nextRef={nextButtonRef} /> */}
          </div>

          {/* Grid (for mobile) */}
          <div className="block md:hidden">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {cards.map(
                ({ id, serviceTitle, serviceDescription, serviceAmblem, bgColor, href }) => (
                  // relative px-7.5 py-8 md:p-14 text-white overflow-hidden group bg-rb-torch-red
                  <Link key={id} href={href} className=" relative">
                    <div
                      className={`h-[18rem] p-8 md:p-14 relative overflow-hidden min-h-full md:h-[31rem]`}
                      style={{ backgroundColor: bgColor }}
                    >
                      <div className="absolute top-0 right-0 translate-x-[45%] -translate-y-12 md:-translate-y-28 opacity-20">
                        <img
                          src={serviceAmblem}
                          alt=""
                          className="w-[176px] h-[176px] md:w-[350px] md:h-[350px]"
                        />
                      </div>
                      <h3 className="relative text-white text-3xl md:text-6xl font-semibold flex items-center gap-3 mb-15 md:mb-[160px]">
                        {serviceTitle}
                        <svg
                          width="34"
                          height="32"
                          viewBox="0 0 34 32"
                          fill="none"
                          className="group-hover:translate-x-1 transition-all"
                        >
                          <path
                            d="M33.309 17.309a1.85 1.85 0 0 0 0-2.617L21.536 2.92a1.85 1.85 0 0 0-2.617 2.616L29.384 16 18.92 26.465a1.85 1.85 0 0 0 2.616 2.617l11.774-11.773ZM0 17.849l32 .002v-3.7l-32-.002v3.7Z"
                            fill="#fff"
                          />
                        </svg>
                      </h3>

                      <p className="text-sm md:text-xl text-white">{serviceDescription}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

  )
}
