<template>
  <div>
    <label>
      <input type="checkbox" v-model="checked">{{ checked }}
    </label>
  </div>
</template>

<script lang="ts">
export default {
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      checked: true
    }
  }
}
</script>

<style scoped lang="scss"></style>
