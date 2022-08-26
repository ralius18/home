<template>
  <v-row>
    <v-container class="side-panel">
      <v-row class="d-flex flex-column">
        <v-col>
          <v-list>
            <v-list-item-group v-model="currentTab">
              <v-list-item
                v-for="(tab, i) in tabs"
                :key="i"
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
        </v-col>

        <v-spacer />

        <v-col>
          <v-row class="align-end">
            <v-img
              src="@/assets/images/github.svg"
              contain
              max-height="30"
              width="30"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-window
      v-model="currentTab"
      class="ma-8"
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
  margin: auto 0;
  padding: 0;
  width: 20%;
  height: 100vh;

  .row {
    height: 100%;
  }
}
</style>
