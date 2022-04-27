<template>
  <div>
    <input @keyup.enter="keyUpEnter">
    <div @click.ctrl="doSomething">Do Something</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EventKey',
  data () {
    return {
      selectedValue: '서울'
    }
  },
  methods: {
    keyUpEnter () {
      alert('enter!!??')
    },
    doSomething () {
      alert('dosomething!!??')
    }
  }
})
</script>

<style scoped></style>
