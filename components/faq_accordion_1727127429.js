<template>
  <div>
    <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
      <div class="space-y-3 text-center">
        <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
        <p class="text-gray-600 max-w-lg mx-auto text-lg">Everything you need to know about our sprite marketplace</p>
      </div>
      <div class="mt-14 max-w-2xl mx-auto">
        <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
          <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
            {{ item.q }}
            <!-- SVG adjustment depending on whether faq is selected -->
            <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </h4>
          <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
            <div class="px-4 py-6">
              <p class="text-gray-700 pb-4 max-w-full text-lg">{{ item.a }}</p>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqAccordion',
  data() {
    return {
      selectedFaq: null,
      faqs: [
        { q: "What is a sprite marketplace?", a: "A sprite marketplace is an online platform where artists can sell and buyers can purchase digital sprite assets for use in games, websites, and other digital projects." },
        { q: "How do I upload my sprites for sale?", a: "Simply create an account, go to your dashboard, and use our easy upload tool to add your sprite creations. Don't forget to set your price and add relevant tags!" },
        { q: "What file formats are supported?", a: "We support popular sprite formats including PNG, GIF, and sprite sheets. Each listing can include multiple file types to suit different buyer needs." },
        { q: "How do royalties work for sprite creators?", a: "Creators earn 80% of each sale. Payments are processed weekly, and you can track your earnings in real-time through your dashboard." },
        { q: "Can I use purchased sprites in commercial projects?", a: "Yes! Unless otherwise stated in the sprite's listing, all purchases come with a standard commercial license. Always check the specific license details before use." }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
}
</script>

<style scoped>
/* Add any desired scoped CSS here */
</style>
