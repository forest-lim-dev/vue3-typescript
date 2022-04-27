<template>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
    <br>
    <span>선택한 지역: {{ picked }}</span>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주'
    }
  }
}
</script>

<style scoped lang="scss"></style>
