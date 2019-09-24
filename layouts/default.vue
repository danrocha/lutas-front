<template>
  <div class="min-h-full flex flex-col items-stretch antialiased p-2 sm:p-8">
    <base-nav />
    <main class="flex-1 flex-shrink-0 mb-8">
      <nuxt />
    </main>
    <base-footer />
  </div>
</template>

<script>
import BaseNav from '~/components/BaseNav'
import BaseFooter from '~/components/BaseFooter'
export default {
  name: 'DefaultLayout',
  components: {
    BaseNav,
    BaseFooter
  }
}
</script>

<style>
body,
html {
  @apply font-sans w-full h-full;
}
</style>
