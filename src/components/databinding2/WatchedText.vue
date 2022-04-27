<template>
  <div>
    <h1>Full Name: {{fullName}}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WatchedText',
  data () {
    return {
      firstName: 'Jiuk',
      lastName: 'Lim',
      fullName: ''
    }
  },
  watch: {
    firstName () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName () {
      this.firstName = 'JJJJIUK'
    }
  }
})
</script>

<style scoped></style>
