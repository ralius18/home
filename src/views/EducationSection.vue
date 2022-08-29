<template>
  <v-container>
    <v-card
      class="mb-8"
      elevation="16"
    >
      <v-card-title>Bachelor of Science</v-card-title>
      <v-card-subtitle>(major in Computer Science) 2015 - 2017<br/>
        Victoria University of Wellington, Wellington, New Zealand<br/>
        University of Western Ontario, London, ON, Canada
      </v-card-subtitle>

      <v-card-text>
        <v-list>
          <v-list-item-title>Relevant paper include:</v-list-item-title>
          <v-list-item>Algorithms</v-list-item>
          <v-list-item>Databases</v-list-item>
          <v-list-item>Computer Graphics</v-list-item>
          <v-list-item>Artificial Intelligence</v-list-item>
          <v-list-item>User Interface Design</v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <v-card
      class="mb-8"
      elevation="16"
    >
      <v-card-title>NCEA</v-card-title>
      <v-card-subtitle>Taradale High School, Napier, New Zealand</v-card-subtitle>
      <v-list>
        <v-list-item>Level 3 achieved with Merit, 2014</v-list-item>
        <v-list-item>Level 2 achieved with Merit, 2013</v-list-item>
        <v-list-item>Level 1 achieved with Excellence, 2012</v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'education-section'
})
</script>
