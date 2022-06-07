<template>
  <main class="grid grid-cols-4 px-6 sm:grid-cols-12 h-screen w-screen overflow-x-hidden bg-black text-white">
    <Nav />
    <div class="relative h-screen sm:col-span-12 col-span-4 mb-12">
      <HeroText />
      <HeroImage />
    </div>
    <section class="sm:col-span-12 col-span-4 grid grid-cols-4 sm:grid-cols-12 h-screen">
      <h1 class="font-bold md:text-[9rem] lg:text-[11rem] text-6xl uppercase col-span-12">Okay...</h1><br />
      <div class="col-start-1 col-end-5 sm:col-start-4 sm:col-end-12 text-lg font-sans">
        <p class="w-full">
          Shevon Salmon always had the vision to create a digital production company specializing in influencer facing content. We bridge the gap between brands and influencers by producing high-quality stories, skillfully integrating the goals and audiences of both.
          We love creating anything visual, whether that is in the form of a video, audio, photo, etc. For example clear poster design templates.
        </p>
        <p class="mt-12">
          I've made a wide variety of work consisting of posters, logos, social media content, business cards and much more. I mainly work in Adobe Photoshop, Adobe Premiere Pro, Adobe Illustrator and After Effects. I hope you enjoy my projects.
        </p>
      </div>
    </section>
    <section class="sm:col-span-12 col-span-4 h-screen sm:h-[150vh] grid grid-cols-1 grid-rows-5 sm:grid-cols-3 sm:grid-rows-2 gap-x-1 gap-y-1">
      <img src="~/assets/img/shevon-1.jpg" class="w-full h-full object-cover" alt="">
      <img src="~/assets/img/shevon-2.jpg" class="w-full h-full object-cover" alt="">
      <img src="~/assets/img/shevon-3.jpg" class="w-full h-full object-cover" alt="">
      <img src="~/assets/img/shevon-4.jpg" class="w-full h-full object-cover" alt="">
      <img src="~/assets/img/shevon-5.jpg" class="w-full h-full object-cover" alt="">
      <img src="~/assets/img/shevon-hero.jpg" class="w-full h-full object-cover" alt="">
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
