<template>
  <v-card flat class="pa-16">
    <h1>{{ name }}</h1>

    <v-row>
      <v-col class="align-center">
        <span class="font-weight-bold mr-4">P</span>{{ phone }}<br />
        <span class="font-weight-bold mr-4">E</span>{{ email }}
      </v-col>

      <v-spacer />

      <v-col>
        Greenmeadows<br>
        Napier<br>
        New Zealand
      </v-col>
    </v-row>

    <h3>Personal Statement</h3>
    <v-card flat>
      I am a capable and competent software developer who is always keen to expand my knowledge and learn more
      tricks of the trade.
      Now that I have professional experience in the industry, I am starting to explore other aspects and ideas in
      my spare
      time. I have taken an interest in web development after working on some personal projects and have enjoyed
      creating them.
    </v-card>

    <v-divider class="my-8" />

    <h3>Work History</h3>

    <v-card
      v-for="(job, i) in jobs"
      :key="i"
    >
      <v-card-title>
        {{ job.title }}, {{ job.company }}
      </v-card-title>
      <v-card-subtitle>
        {{ job.dates[0] }} - {{ job.dates[1] }}
      </v-card-subtitle>
      <v-card-text>
        {{ job.description }}
      </v-card-text>
    </v-card>

    <v-divider class="my-8" />

    <div class="main">

      <div class="content">

        <h4>, NOW NZ, Napier, New Zealand</h4>
        <div class="indent-1">
          May 2018 - Dec 2019<br>
        </div>
        <p>
        </p>

        <h4>IT Helpdesk Student, Pan Pac Forest Products Ltd., Napier, New Zealand</h4>
        <div class="indent-1">
          Nov 2015 - Feb 2016<br>
          Jun 2016 - Jul 2016<br>
          Nov 2016 - Feb 2017<br>
          Jul 2017 - Aug 2017<br>
        </div>
        <p>
          In this job, I initially worked on training documentation for a new version of a system that was being
          introduced, and
          assisted the IT staff in various small projects. My role developed into becoming a member of the helpdesk team
          and problem
          solving for users at the company. I learned how an IT department is run in an industrial environment and what
          skills
          are important to keep it running efficiently, such as communication and organisation.
        </p>

        <h4>Laboratory Assistant, Higgins Contractors HB Laboratory, Napier, New Zealand</h4>
        <div class="indent-1">
          December 2014 - February 2015<br>
        </div>
        <p>
          I started this job as part of a voluntary program run by Hastings District Council to get school students out
          into
          the workforce to gain experience in the workplace. I was then offered a full time position over the 2014/15
          holiday
          period. I learned the basic scientific method behind simple tests in the road construction industry, as well
          as the
          significance of health & safety in the workplace.
        </p>
      </div>

      <hr>

      <div class="content">
        <h3>Education</h3>
        <b>Bachelor of Science</b> (Computer Science major) 2015 - 2017<br>
        <div class="indent-1">
          Victoria University of Wellington, Wellington, New Zealand<br>
          University of Western Ontario, London, ON, Canada<br>
        </div>
        <br>
        <div class="indent-1">
          Relevant papers include:
          <ul>
            <li>Software Development</li>
            <li>Databases</li>
            <li>Computer Graphics</li>
            <li>Artificial Intelligence</li>
            <li>User Interface Design</li>
          </ul>
        </div>

        <b>NCEA</b><br>
        <div class="indent-1">
          Taradale High School, Napier, New Zealand
          <ul>
            <li>Level 3 achieved with Merit, 2014</li>
            <li>Level 2 achieved with Merit, 2013</li>
            <li>Level 1 achieved with Excellence, 2012</li>
          </ul>
        </div>

        (Full record of learning and proof of completed degree available upon request)
      </div>

      <hr>

      <div class="content">
        <h3>Technical Skills</h3>
        <p>
          I have primarily developed in object-oriented languages, but have taken an interest in scripting styles such
          as
          Ruby after learning them in a professional environment. I have touched on a variety of other languages and
          concepts
          briefly in different university courses and projects.
        </p>
        <table class="skills">
          <tr>
            <th>Worked with professionally</th>
            <th>Interested in developing</th>
            <th>Studied in university</th>
          </tr>
          <tr>
            <td>
              <ul class="skill-list">
                <li>Ruby</li>
                <li>RESTful Web Services</li>
                <li>Linux Systems</li>
                <li>SQL</li>
                <li>Javascript</li>
                <li>Sencha</li>
              </ul>
            </td>
            <td>
              <ul class="skill-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </td>
            <td>
              <ul class="skill-list">
                <li>Java</li>
                <li>Object-Oriented Programming</li>
                <li>C</li>
                <li>C#</li>
                <li>C++</li>
                <li>Python</li>
              </ul>
            </td>
          </tr>
        </table>
        <br>
      </div>

      <hr>

      <div class="content">
        <h3>Referees</h3>

        References available on request
      </div>

      <!--
        TODO: Get in touch button
        Download PDF
      -->
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Job } from '@/models/job'

export default Vue.extend({
  name: 'CvView',

  data () {
    return {
      name: 'Brad Stone',
      phone: '021 548 635',
      email: 'Brayds97@gmail.com',

      jobs: [
        {
          title: 'Software Developer',
          company: 'Re-Leased',
          dates: ['June 2021', 'Present'],
          description: 'I joined Re-Leased as a junior developer until I got comfortable to the new and different stack that was being used. This introduced me to working in an Agile development and using Git to its full potential as a development process. More to come...'
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
          dates: ['May 2018 ', 'December 2019'],
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
