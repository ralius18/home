<template>
  <v-row class="my-0">
    <v-container class="side-panel ma-0 py-0">
      <v-navigation-drawer
        permanent
        width="100%"
      >

        <v-list>
          <v-list-item class="px-2">
            <v-img
              src="@/assets/images/brad-square3.jpg"
              class="my-8 mx-16 rounded-circle"
              aspect-ratio="1"
            />
          </v-list-item>

          <v-list-item>
            <v-list-item-content class="text-center">
              <v-list-item-title class="text-h6">
                Brad Stone
              </v-list-item-title>
              <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider class="my-8" />

        <v-list>
          <v-list-item-group
            v-model="currentTab"
          >
            <v-list-item
              v-for="(tab, i) in tabs"
              :key="i"
              link
            >
              <v-list-item-icon>
                <v-icon v-text="tab.icon" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="tab.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <template #append>
          <v-bottom-navigation>
            <v-btn
              href="https://github.com/ralius18"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </template>
      </v-navigation-drawer>
    </v-container>
    <v-window
      v-model="currentTab"
      class="ma-0 mx-auto content-window overflow-auto"
    >
      <v-window-item>
        <cv-view />
      </v-window-item>
      <v-window-item>
        <music-view />
      </v-window-item>
    </v-window>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import CvView from '@/views/CvView.vue'
import MusicView from '@/views/MusicView.vue'

export default Vue.extend({
  name: 'HomeView',

  components: {
    MusicView, CvView
  },

  data () {
    return {
      tabs: [
        {
          title: 'Home',
          icon: 'mdi-home'
        },
        {
          title: 'Music',
          icon: 'mdi-music-note'
        }
      ],
      currentTab: 0
    }
  }
})
</script>

<style scoped lang="scss">
.side-panel {
  width: 20%;
  height: 100vh;

  .row {
    height: 100%;
  }
}

.content-window {
  min-width: 60%;
  max-width: 60%;

  height: 100vh;
  margin: 0 auto;

  .v-card {
    background-color: #121212;
  }
}

.v-list-item--active::before {
  background-color: var(--v-primary-base);
  opacity: 1;
  z-index: -100;
}
</style>
