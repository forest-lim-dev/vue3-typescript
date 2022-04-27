<template>
  <div v-bind:style="styleObject">
    인라인 스타일 바인딩
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      styleObject: {
        color: 'red',
        fontSize: '100px'
      }
    }
  }
}
</script>

<style scoped>
</style>
