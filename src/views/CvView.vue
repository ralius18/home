<template>
  <v-card
    flat
    :class="this.$vuetify.breakpoint.lgAndUp ? 'ma-16' : 'my-16'"
  >
    <h1 class="mb-2">
      <v-row>
        {{ name }}
        <v-spacer />
        <v-btn
          href="https://drive.google.com/file/d/1suWI0XfxwGpOfbcpHiflRGGHpStLpPcl/view?usp=sharing"
          target="_blank"
          class="download mx-2"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </v-row>
    </h1>

    <v-row class="mb-4">
      <v-col class="align-center">
        <v-icon class="mr-4">mdi-phone</v-icon>
          <a
            v-if="this.$vuetify.breakpoint.mdAndDown"
            :href="`tel:${this.phone}`"
          >{{ phone }}</a>
        <span v-else>
          {{ phone }}
        </span><br />
        <v-icon class="mr-4">mdi-email</v-icon>
        <a :href="`mailto:${this.email}`">
          {{ email }}
        </a><br />
        <v-icon class="mr-4">mdi-map-marker</v-icon>
          Napier, New Zealand
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
  },
  methods: {
    print () {
      window.print()
    }
  }
})
</script>

<style lang="scss">
@media print {
  .download {
    display: none;
  }
}
</style>
