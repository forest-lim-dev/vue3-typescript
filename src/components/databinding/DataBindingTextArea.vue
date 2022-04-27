<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      message: '여러 줄을 입력할 수 있는 textarea입니다.'
    }
  }
}
</script>

<style scoped lang="scss"></style>
