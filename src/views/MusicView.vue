<template>
  <v-card
    flat
    :class="$vuetify.breakpoint.lgAndUp ? 'ma-16' : 'my-16'"
  >
    <h1 class="mb-2">Music</h1>

    <v-card-text>
      Growing up I trained in classical guitar and achieved Grade 8 with Trinity College.<br />
      As a hobby I play bass for Mirrored Walls, and we have a studio EP released - <i>if i didn't have you here</i>.
    </v-card-text>
    <v-row>
      <v-col
        v-for="artist in artists"
        v-bind:key="artist.name"
        :cols="$vuetify.breakpoint.mdAndDown ? 12 : 6"
      >
        <v-card>
          <v-card-title>
            {{ artist.name }}
          </v-card-title>
          <v-card-text>
            <iframe
              :src="artist.link"
              width="100%"
              height="500"
              allowtransparency="true"
              allow="encrypted-media"
              loading="lazy"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MusicView',
  data () {
    return {
      artists: [
        {
          name: 'Mirrored Walls',
          link: 'https://open.spotify.com/embed/album/4Vu3zRncg9NzVV1IvFU10E?utm_source=generator&theme=0'
        },
        {
          name: 'Brad Stone',
          link: 'https://open.spotify.com/embed/album/3dwS5p90tH4cFjwp7CzHYo'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">
iframe {
  border: none;
}
</style>
