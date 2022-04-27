<template>
  <div>
    <select v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">제주</option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      city: '02'
    }
  }
}
</script>

<style scoped lang="scss"></style>
