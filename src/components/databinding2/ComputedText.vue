<template>
  <div>
    <h1>Full Name: {{fullName}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComputedText',
  data () {
    return {
      firstName: 'Jiuk',
      lastName: 'Lim'
    }
  },
  computed: {
    fullName (): string {
      return this.firstName + ' ' + this.lastName
    }
  }
})
</script>

<style scoped></style>
