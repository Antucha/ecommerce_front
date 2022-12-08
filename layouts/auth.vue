<template>
  <div
    class="
      main
      w-full
      bg-gray-50
      dark:bg-gray-900
      text-gray-900
      dark:bg-gray-900 dark:text-white
      md:flex
      justify-start
    "
  >
    <div
      class="
        p-4
        bg-gray-100
        min-h-screen
        flex
        items-center
        justify-center
        md:w-5/12
      "
    >
      <nuxt />
    </div>
  </div>
</template>

<script>
import simplebar from 'simplebar-vue'

export default {
  name: 'AuthLayout',
  components: { simplebar },
}
</script>
<style lang="postcss" scoped>
.main {
  background-image: url(https://courses.ashishaggarwal.co/wp-content/uploads/2016/08/how-to-sell-online-courses.png);

  background-size: cover;

  & > div {
    box-shadow: 0 -16px 32px rgba(0, 0, 0, 0.075);
  }
}
</style>
