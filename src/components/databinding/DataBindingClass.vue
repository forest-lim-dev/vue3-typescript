<template>
  <div class="container" v-bind:class="{
    'active': isActive, 'text-red': hasError
  }">
    Class Binding
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      isActive: true,
      hasError: false
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
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
