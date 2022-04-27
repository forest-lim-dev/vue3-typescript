<template>
  <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      activeClass: 'active',
      errorClass: 'text-red'
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: blue;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
