<template>
  <v-container>
    <v-card
      v-for="(job, i) in jobs"
      :key="i"
      class="mb-8"
    >
      <v-card-title>
        {{ job.title }}&nbsp;-&nbsp;<a :href="job.website" target="_blank">{{ job.company }}</a><v-icon small class="ml-2">mdi-open-in-new</v-icon>
      </v-card-title>
      <v-card-subtitle>
        {{ job.dates[0] }} - {{ job.dates[1] }}
      </v-card-subtitle>
      <v-card-text v-show="job.detailsVisible">
        <v-row class="mb-4">
          <div class="font-weight-bold font-italic">About {{ job.company }}</div>
          {{ job.companyDescription }}
        </v-row>
        <v-row>
          <span class="font-weight-bold font-italic">About the role</span>{{ job.description }}
        </v-row>
      </v-card-text>
  </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import { Job } from '@/models/job'

export default Vue.extend({
  name: 'work-section',

  data () {
    return {
      jobs: [
        {
          detailsVisible: true,
          title: 'Software Developer',
          company: 'Re-Leased',
          dates: ['June 2021', 'March 2023'],
          website: 'https://re-leased.com',
          companyDescription: 'Re-Leased is a cloud-based commercial property management software solution. Designed for property owners and managers of both residential and commercial property. With an easy-to-use dashboard and automated workflows, Re-Leased lets customers focus on growing their business whilst mitigating risks associated with managing commercial properties.',
          description: 'I joined as a junior developer and worked my way up to a Full Stack role. This introduced me to benefits such as working in an Agile environment and using Git to its full potential as a development process. This role taught me a lot about working in a larger scale software business and the practices of web development.'
        },
        {
          detailsVisible: true,
          title: 'Software Developer',
          company: 'MAGIQ Software',
          dates: ['January 2019', 'June 2021'],
          website: 'https://magiqsoftware.com',
          companyDescription: 'MAGIQ provides Cloud finance and business administration software for the Public Sector. The modular based ERP system is used in key markets such as Local Government, Health & Community Services, Utilities, Education and Not for Profit.',
          description: 'This was my first post-university software development role developing software in a professional environment. I learned new languages and gained a more in depth understanding of computing systems from a software perspective. This role mainly consisted of projects requiring integration of third party apps, product development and bug fixing. Due to the system covering broad areas such as financing, regulatory systems and reporting, it required me to learn about a wide range of topics relevant to our main clients of local councils.'
        },
        {
          detailsVisible: true,
          title: 'Technical Support and Sales',
          company: 'NOW NZ',
          dates: ['May 2018 ', 'December 2018'],
          website: 'https://nownz.co.nz',
          companyDescription: 'NOW NZ is a New Zealand based broadband and business communication provider who take service seriously with local customer and technical service teams.',
          description: 'This was my starting point in the IT industry after graduating from university. The role comprised of remote-based customer technical support, assisting customers with various technical issues. NOW\'s main point of difference is the customer service provided, so it was extremely advantageous for a technically minded person such as myself to be customer facing and talk people through issues.'
        }
      ] as Job[]
    }
  },

  methods: {

  }
})
</script>
