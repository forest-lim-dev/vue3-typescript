<template>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue === ''">Click</button>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      textValue: ''
    }
  }
}
</script>

<style scoped lang="scss"></style>
