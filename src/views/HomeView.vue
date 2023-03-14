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
              border
            />
          </v-list-item>

          <v-list-item>
            <v-list-item-content class="text-center">
              <v-list-item-title class="text-h6">
                Brad Stone
              </v-list-item-title>
              <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
              <v-list-item-subtitle>Musician</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-row justify="center">
              <v-btn
                href="https://github.com/ralius18"
                target="_blank"
                class="mx-2"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.linkedin.com/in/brad-stone-872b0b139/"
                target="_blank"
                class="mx-2"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-row>
          </v-list-item>

          <v-list-item>
            <v-row justify="center">
              <v-switch
                v-model="$vuetify.theme.dark"
                class="mx-auto"
                hide-details
              >
                <template #label>
                  <mdi-icon>{{ $vuetify.theme.dark ? "dark_mode" : "light_mode" }}</mdi-icon>
                </template>
              </v-switch>
            </v-row>
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
                <v-icon>{{ tab.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ tab.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
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

  computed: {
    cardBackgroundColor () {
      return this.$vuetify.theme.dark ? '#121212' : '#FFFFFF'
    }
  },

  data () {
    return {
      tabs: [
        {
          title: 'CV',
          icon: 'mdi-account'
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
    background-color: v-bind('cardBackgroundColor');
  }
}

.v-list-item--active {
  color: white;

  &::before {
    background-color: var(--v-primary-base);
    opacity: 1;
    z-index: -100;
  }

  &:hover {
    background-color: var(--v-primary-base);
  }
}
</style>
