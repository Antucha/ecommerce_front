<template>
  <simplebar class="h-screen" data-simplebar-auto-hide="true">
    <div
      class="antialiased font-sans text-sm text-gray-900 dark:text-white flex flex-col w-full h-full min-h-screen bg-body dark:bg-gray-700 z-0"
    >
      <div class="relative flex flex-row flex-auto">
        <div class="wrapper">
          <aside-menu
            id="aside"
            :menu="menu"
          />
          <div
            class="main w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <!-- <navbar /> -->
            <div class="w-full p-4 bg-gray-100 min-h-screen pt-20">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import simplebar from "simplebar-vue";

export default {
  name: "Home",
  components: { simplebar },
  // middleware: "authenticated",
  computed: {
    ...mapGetters({
      isLogged: 'isLogged',
      getToken: 'getToken',
      userInfo: 'userInfo',
      userIsAuthor: 'userIsAuthor'
    }),
    menu() {
      return [
        // "Menú principal",
        "",
        [],
        "",
        [
          {
            label: "Salir",
            to: "/logout",
            icon:"fa-solid fa-right-from-bracket",
          }
        ]
      ];
    }
  },

  mounted() {
    console.log('USER INFO: ', this.userInfo)
    /* document.documentElement.classList.add("has-aside-left");
    document.documentElement.classList.add("has-aside-mobile-transition");
    document.documentElement.classList.add("has-aside-expanded"); */
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/app.scss";
#aside{
  background: $background-color;
  color: rgb(255, 255, 255);
}
a.menu-item-labe {
  padding-left: 10px !important;
}
</style>
