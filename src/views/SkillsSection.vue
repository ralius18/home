<template>
  <v-container>
   <v-card>
      <v-card-text>
        I have primarily developed in object-oriented languages, but have taken an interest in scripting styles such as
        Ruby after learning them in a professional environment. I have touched on a variety of other languages and
        concepts briefly in different university courses and projects.

        <v-row>
          <v-col
              v-for="(type, i) in skills"
              :key="i"
          >
            <v-list>
              <v-list-item-title>{{ type.title }}</v-list-item-title>
              <v-list-item
                  v-for="(skill, j) in type.list"
                  :key="j"
              >
                {{ skill }}
              </v-list-item>
            </v-list>
          </v-col>

          <v-col>

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
      skills: {
        professional: {
          title: 'Worked with professionally',
          list: [
            'Ruby',
            'C#',
            '.NET',
            'RESTful',
            'Linux Systems',
            'SQL',
            'Javascript',
            'Sencha',
            'Vue'
          ]
        },
        interested: {
          title: 'Interested in using',
          list: [
            'PHP',
            'HTML',
            'CSS'
          ]
        },
        studied: {
          title: 'Studied in university',
          list: [
            'Java',
            'C',
            'C++',
            'Python'
          ]
        }
      }
    }
  }
})
</script>
