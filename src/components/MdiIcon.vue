<template functional>
  <v-icon
    class="material-icons-round"
    v-bind="data.attrs"
    :class="[data.staticClass, data.class]"
  >
    <slot />
  </v-icon>
</template>

<script lang="ts">
export default {
  name: 'MdiIcon'
}
</script>
