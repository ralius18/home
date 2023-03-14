<template>
  <v-card
    flat
    class="ma-16"
  >
    <h1 class="mb-2">{{ name }}</h1>

    <v-row class="mb-4">
      <v-col class="align-center">
        <v-icon class="mr-4">mdi-phone</v-icon>{{ phone }}<br />
        <v-icon class="mr-4">mdi-email</v-icon><a :href="`mailto:${this.email}`">{{ email }}</a>
      </v-col>

      <v-spacer />

      <v-col class="text-right">
        <v-container>
          Napier, New Zealand<v-icon class="ml-4">mdi-map-marker</v-icon>
        </v-container>
      </v-col>
    </v-row>

    <h3>Personal Statement</h3>

    <statement-section />

    <v-divider class="my-8" />

    <h3>Work History</h3>

    <work-section />

    <v-divider class="my-8" />

    <h3>Education</h3>

    <education-section />

    <v-divider class="my-8" />

    <h3>Technical Skills</h3>

    <skills-section />

    <v-divider class="my-8" />

    <v-card>
      <v-card-title>Referees</v-card-title>
      <v-card-text>Referees available on request</v-card-text>
    </v-card>

      <!--
        TODO: Get in touch button
        Download PDF
      -->
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatementSection from '@/views/StatementSection.vue'
import WorkSection from '@/views/WorkSection.vue'
import EducationSection from '@/views/EducationSection.vue'
import SkillsSection from '@/views/SkillsSection.vue'

export default Vue.extend({
  name: 'CvView',
  components: {
    SkillsSection,
    EducationSection,
    WorkSection,
    StatementSection
  },
  data () {
    return {
      name: 'Brad Stone',
      phone: '021 548 635',
      email: 'Brayds97@Gmail.com'
    }
  }
})
</script>
