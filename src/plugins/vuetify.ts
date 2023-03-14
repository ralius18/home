import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      dark: {
        primary: '#AA0000'
      },
      light: {
        primary: '#AA0000'
      }
    }
  },
  customVariables: ['~/assets/variables.scss']
})
