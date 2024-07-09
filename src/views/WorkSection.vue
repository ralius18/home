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
        {{ job.dates[0] }} - {{ job.dates[1] }} ({{ job.duration }})
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
          title: 'Software Engineer',
          company: 'Xero',
          dates: ['April 2024', 'Present'],
          duration: 'Current',
          website: 'https://xero.com',
          companyDescription: 'Xero is a global small business platform which includes a core accounting solution, payroll, workforce management, expenses and projects. Xero also has an extensive ecosystem of connected apps and connections to banks and other financial institutions helping small businesses access a range of solutions to help them run their business and manage their finances.',
          description: 'As a Software Engineer at Xero, I focused on back-end development, particularly in modernising the expenses platform. I helped the team with transitioning the expenses system to use Temporal workflows, which significantly enhanced its efficiency, scalability and reliability of the expenses platform. This role has allowed me to expand my skills in software architecture, workflow automation and continuous improvement, contributing to the overall success and innovation at Xero.'
        },
        {
          detailsVisible: true,
          title: 'Junior Data Technician',
          company: 'Cablenet',
          dates: ['December 2023', 'April 2024'],
          duration: '6 months',
          website: 'https://advancedgroup.co.nz/cablenet-home/',
          companyDescription: 'Cablenet is part of the wider Advanced Group specialising in data cable installation for commercial customers, covering all types of ICT projects, from time critical nationwide technical rollouts, to large scale data, wireless, nurse call systems, audio visual and electrical contracts.',
          description: 'This role interested me to learn more about the physical side of networking and gain an understanding of the process behind installing infrastructure.I started as a junior without knowing much about the job but learned very quickly to be able to run cables, fit off fixtures and other small jobs by myself as well as assisting senior technicians in the more complicated tasks'
        },
        {
          detailsVisible: true,
          title: 'Software Developer',
          company: 'Re-Leased',
          dates: ['June 2021', 'March 2023'],
          duration: '1 year, 8 months',
          website: 'https://re-leased.com',
          companyDescription: 'Re-Leased is a cloud-based commercial property management software solution. Designed for property owners and managers of both residential and commercial property. With an easy-to-use dashboard and automated workflows, Re-Leased lets customers focus on growing their business whilst mitigating risks associated with managing commercial properties.',
          description: 'I joined as a junior developer and worked my way up to a Full Stack role. This introduced me to benefits such as working in an Agile environment and using Git to its full potential as a development process. This role taught me a lot about working in a larger scale software business and the practices of web development.'
        },
        {
          detailsVisible: true,
          title: 'Software Developer',
          company: 'MAGIQ Software',
          dates: ['January 2019', 'June 2021'],
          duration: '2 years, 6 months',
          website: 'https://magiqsoftware.com',
          companyDescription: 'MAGIQ provides Cloud finance and business administration software for the Public Sector. The modular based ERP system is used in key markets such as Local Government, Health & Community Services, Utilities, Education and Not for Profit.',
          description: 'This was my first post-university software development role developing software in a professional environment. I learned new languages and gained a more in depth understanding of computing systems from a software perspective. This role mainly consisted of projects requiring integration of third party apps, product development and bug fixing. Due to the system covering broad areas such as financing, regulatory systems and reporting, it required me to learn about a wide range of topics relevant to our main clients of local councils.'
        },
        {
          detailsVisible: true,
          title: 'Technical Support and Sales',
          company: 'NOW NZ',
          dates: ['May 2018 ', 'December 2018'],
          duration: '6 months',
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
