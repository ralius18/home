<template>
  <v-card
    flat
    :class="$vuetify.breakpoint.lgAndUp ? 'ma-16' : 'my-16'"
  >
    <h1 class="mb-2">
      <v-row>
        {{ name }}
        <v-spacer />
        <v-btn
          href="https://drive.google.com/file/d/1qdQmFHBWEN1jHV3590gGlu5n6NCtOT3I/view?usp=sharing"
          target="_blank"
          class="download mx-2"
        >
          <mdi-icon>download</mdi-icon>
        </v-btn>
      </v-row>
    </h1>

    <v-row class="mb-4">
      <v-col class="align-center">
        <mdi-icon class="mr-4">phone</mdi-icon>
          <a
            v-if="$vuetify.breakpoint.mdAndDown"
            :href="`tel:${phone}`"
          >{{ phone }}</a>
        <span v-else>
          {{ phone }}
        </span><br />
        <mdi-icon class="mr-4">email</mdi-icon>
        <a :href="`mailto:${email}`" class="ml-1">{{ email }}</a><br />
        <v-icon class="mr-4">mdi-map-marker</v-icon>
        Napier, New Zealand
      </v-col>
    </v-row>

    <h3>Personal Statement</h3>

    <statement-section />

    <v-divider class="my-8" />

    <h3>Technical Skills</h3>

    <skills-section />

    <v-divider class="my-8" />

    <h3>Work History</h3>

    <work-section />

    <v-divider class="my-8" />

    <h3>Qualifications</h3>

    <qualification-section />

    <v-divider class="my-8" />

    <h3>References</h3>

    <v-container>
      <v-card class="mb-8">
        <v-card-text>
          Referees available on request
        </v-card-text>
      </v-card>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import StatementSection from '@/views/StatementSection.vue'
import WorkSection from '@/views/WorkSection.vue'
import QualificationSection from '@/views/QualificationSection.vue'
import SkillsSection from '@/views/SkillsSection.vue'

export default Vue.extend({
  name: 'CvView',
  components: {
    SkillsSection,
    QualificationSection,
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
