<template>
  <div class="flex flex-col">
    <div class="text-xs uppercase font-light text-gray-500">Authentication</div>
    <h1>Logout</h1>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  mounted(){
    this.$store.commit("removeSession");
    this.$router.push("/auth/signin");

  },
  methods: {
    ...mapMutations(['removeSession']),
  }
}
</script>
