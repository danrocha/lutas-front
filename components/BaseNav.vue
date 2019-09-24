<template>
  <nav class="w-full h-32 flex justify-between flex-wrap">
    <div class="flex mb-4">
      <logo class="w-24 h-24 mr-4" />
      <p class="font-logo uppercase text-5xl leading-none">
        Lutas<br />Anticapital
      </p>
    </div>
    <ul
      class="mx-auto sm:mx-0 flex uppercase font-semibold tracking-wide text-sm text-gray-700"
    >
      <li class="mr-4">Blog</li>
      <li class="mr-4">Catálogo</li>
      <li class="mr-4">Sobre</li>
      <li class="mr-4">Contato</li>
    </ul>
  </nav>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'BaseNav',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped></style>
