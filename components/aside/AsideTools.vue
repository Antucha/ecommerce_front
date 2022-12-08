<template>
  <div class="aside-tools" >
    <div class="aside-tools-label" style="">
      <div class="logo-block text-base font-semibold flex">
        <transition name="fade" appear>
          <nuxt-link
            v-if="!toogleAsideCompact"
            to="/ico-analityc/twitter"
            class="flex flex-row items-center justify-start"
          >
            <Logo class="logo" />
            <!-- <span class="pl-2 white-text-color">Konecta</span> -->
          </nuxt-link>
        </transition>
        <navbar-toogle-aside-compact
        style="position: absolute;
              top: 15px;
              right: 15px;
              color: white;"
          class="hidden lg:block fa-solid fa-chess"
          :class="toogleAsideCompact ? 'px-1 h-8' : 'pl-5'"
        />
      </div>
      <!-- <Logo />
      <slot name="label" /> -->
    </div>
  </div>
</template>

<script>
import { store } from "~/store/sidebar.js";

export default {
  name: "AsideTools",
  props: {
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    toogleAsideCompact() {
      return store.toogleAsideCompact;
    }
  }
};
</script>
