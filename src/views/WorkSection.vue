<template>
  <v-container>
    <v-card
      v-for="(job, i) in jobs"
      :key="i"
      class="mb-8"
    >
      <v-card-title>
        {{ job.title }} - {{ job.company }}
      </v-card-title>
      <v-card-subtitle>
        {{ job.dates[0] }} - {{ job.dates[1] }}
      </v-card-subtitle>
      <v-card-text>
        {{ job.description }}
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
          title: 'Software Developer',
          company: 'Re-Leased',
          dates: ['June 2021', 'March 2023'],
          description: 'I joined Re-Leased as a junior developer until I got comfortable to the new and different stack than I was used to. This introduced me to working in an Agile development and using Git to its full potential as a development process. Re-Leased develops commercial property management software for clients to manage their real estate portfolios, so while the scope of this business is narrower, there was still a lot to explore and learn. This Full Stack role taught me a lot about working in a larger scale software business and got me used to the practices of web development.'
        },
        {
          title: 'Software Developer',
          company: 'MAGIQ Software',
          dates: ['January 2019', 'June 2021'],
          description: 'Throughout this job, I learned how to develop software in a professional environment. I put my university training as a software developer to the test, learned new languages and gained a more in depth understanding of computing systems from a software perspective. This job mainly consisted of projects requiring integration of third party apps, product development and bug fixing. The software is a modular based enterprise system covering broad areas such as financing, regulatory systems and reporting. This required me to learn about a wide range of topics relevant to our main clients of local councils.'
        },
        {
          title: 'Technical Support and Sales',
          company: 'NOW NZ',
          dates: ['May 2018 ', 'December 2018'],
          description: 'This was my starting point in the IT industry after graduating from university. I worked as technical support, answering phone calls and helping customers with their phone and internet issues. NOW’s main point of difference is the customer service provided, so it was extremely advantageous for a technically minded person such as myself to be customer facing and talk people through issues. I gained knowledge and experience in delivery of internet and phone lines along with basic troubleshooting of network connection issues.'
        },
        {
          title: 'IT Helpdesk Student',
          company: 'Pan Pac Forest Products Ltd.',
          dates: ['July 2017', 'August 2017'], // Nov 2015 - Feb 2016, Jun 2016 - Jul 2016, Nov 2016 - Feb 2017
          description: 'In this job, I initially worked on training documentation for a new version of a system that was being introduced, and assisted the IT staff in various small projects. My role developed into becoming a member of the helpdesk team and problem solving for users at the company. I learned how an IT department is run in an industrial environment and what skills are important to keep it running efficiently, such as communication and organisation.'
        },
        {
          title: 'Laboratory Assistant',
          company: 'Higgins Contractors HB Laboratory',
          dates: ['December 2014', 'February 2015'],
          description: 'I started this job as part of a voluntary program run by Hastings District Council to get school students out into the workforce to gain experience in the workplace. I was then offered a full time position over the 2014/15 holiday period. I learned the basic scientific method behind simple tests in the road construction industry, as well as the significance of health & safety in the workplace.'
        }
      ] as Job[]
    }
  }
})
</script>
