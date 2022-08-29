<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

document.title = 'Brad Stone'

export default Vue.extend({
  name: 'App',

  data () {
    return {}
  }
})
</script>

<style lang="scss">
@import '@/styles/all.scss';
</style>
