<template>
  <div>
    <label>
      <img v-bind:src="imgSrc"  alt=""/>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      imgSrc: 'https://kr.vuejs.org/images/logo.png'
    }
  }
}
</script>

<style scoped lang="scss"></style>
