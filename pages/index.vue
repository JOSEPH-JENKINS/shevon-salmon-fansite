<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      direction: 'vertical',
      smooth: true,
      getSpeed: true,
      lerp: 0.1
    }">
    <main class="grid grid-cols-4 px-6 sm:grid-cols-12 overflow-x-hidden w-screen relative bg-black text-white">
      <Nav />
      <div class="relative h-screen sm:col-span-12 col-span-4 mb-12">
        <HeroText />
        <HeroImage />
      </div>
      <section class="sm:col-span-12 col-span-4 grid grid-cols-4 sm:grid-cols-12 h-[90vh] mb-12">
        <h1 class="font-bold md:text-[9rem] lg:text-[11rem] text-6xl uppercase col-span-12">Okay...</h1><br />
        <h1 class="font-bold md:text-[9rem] lg:text-[11rem] text-right text-6xl uppercase col-span-12">So who?</h1><br />
        <div class="col-start-1 col-end-5 sm:col-start-4 sm:col-end-12 text-sm sm:text-lg text-gray-300 font-sans">
          <p class="w-full">
            Shevon Salmon always had the vision to create a digital production company specializing in influencer facing content. We bridge the gap between brands and influencers by producing high-quality stories, skillfully integrating the goals and audiences of both.
            We love creating anything visual, whether that is in the form of a video, audio, photo, etc. For example clear poster design templates.
          </p>
          <p class="mt-12">
            I've made a wide variety of work consisting of posters, logos, social media content, business cards and much more. I mainly work in Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator and After Effects. I hope you enjoy my projects.
          </p>
        </div>
      </section>
      <section class="sm:col-span-12 col-span-4 relative">
        <div class="videos-text-wrapper mb-10 overflow-hidden">
          <h2 class="videos-text leading-[1.2] whitespace-nowrap text-center flex w-[300%] font-bold md:text-[9rem] lg:text-[11rem] text-6xl uppercase">
            <span class="mr-8 inline-block">Videos I make</span>
            <span class="mr-8 inline-block">Videos I make</span>
            <span class="mr-8 inline-block">Videos I make</span>
          </h2>
        </div>
      </section>
      <section class="sm:col-span-12 col-span-4 mb-12 relative">
        <div class="w-full mb-12 h-full">
          <div class="md:h-[30rem] h-96 w-full relative mb-6">
            <div class="h-full md:w-[40%] w-3/4 absolute left-0">
              <img src="~/assets/img/shevon-1.jpg" class="h-full w-full object-cover" alt="">
            </div>
          </div>
          <div class="md:h-[30rem] h-96 w-full relative mb-6">
            <div class="h-full md:w-[40%] w-3/4 absolute right-0">
              <img src="~/assets/img/shevon-3.jpg" class="h-full w-full object-cover" alt="">
            </div>
          </div>
          <div class="md:h-[30rem] h-96 w-full relative mb-6">
            <div class="h-full md:w-[40%] w-3/4 absolute left-0">
              <img src="~/assets/img/shevon-4.jpg" class="h-full w-full object-cover" alt="">
            </div>
          </div>
          <div class="md:h-[30rem] h-96 w-full relative mb-6">
            <div class="h-full md:w-[40%] w-3/4 absolute right-0">
              <img src="~/assets/img/shevon-5.jpg" class="h-full w-full object-cover" alt="">
            </div>
          </div>
          <div class="md:h-[30rem] h-96 w-full relative mb-6">
            <div class="h-full md:w-[40%] w-3/4 absolute left-0">
              <img src="~/assets/img/shevon-hero.jpg" class="h-full w-full object-cover" alt="">
            </div>
          </div>
        </div>
      </section>
    </main>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'IndexPage',
  mounted() {
    this.startScrollTrigger();
    this.marqueeTextAnimation();

    this.$nuxt.$emit("update-locomotive");
  },
  methods: {
    startScrollTrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value){
          return arguments.length ? locomotive.scrollTo(value, 0, 0) : locomotive.scroll.instance.scroll.y;
        },
        scrollLeft(value){
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.x;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
    },
    marqueeTextAnimation() {
      console.log(window.innerHeight);
      gsap.to(".videos-text", {
        scrollTrigger: {
          trigger: ".videos-text-wrapper",
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: "top 90%",
          end: "bottom 10%"
        },
        xPercent: -50
      })
    }
  }
}
</script>
