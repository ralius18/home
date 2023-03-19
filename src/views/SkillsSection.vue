<template>
  <v-container>
   <v-card>
      <v-card-text>
        I have primarily developed in object-oriented languages along with shifting to a more front-end focus, but have also
        taken an interest in scripting styles such as Ruby. I have touched on a variety of other languages and
        concepts briefly in different university courses and side-projects.
        <div class="py-2 font-weight-bold">Technologies used</div>
        <v-row
          class="skills my-0 mx-4 flex-column flex-shrink-1"
          :class="$vuetify.breakpoint.mdAndDown ? 'mobile' : ''"
          justify="center"
        >
          <v-col
            v-for="(skill, j) in skills"
            :key="j"
          >
            {{ skill }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'skills-section',

  data () {
    return {
      skills: [
        'C#',
        '.NET',
        'Javascript',
        'CSS',
        'Ruby',
        'RESTful',
        'Linux Systems',
        'HTML',
        'Vue',
        'Sencha',
        'SQL',
        'ASP.NET MVC',
        'Azure DevOps',
        'Java',
        'Python',
        'Git',
        'jQuery',
        'Redmine',
        'TypeScript'
      ].sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase())
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.skills {
  max-height: 250px;

  .col {
    width: 25%;
  }

  &.mobile {
    max-height: 600px;

    .col {
      width: 50%;
    }
  }
}
</style>
