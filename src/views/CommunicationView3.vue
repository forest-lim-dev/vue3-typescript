<template>
  <div>
    <ParentComponent3 />
  </div>
</template>

<script lang="ts">
import ParentComponent3 from '@/components/Communication/ParentComponent3.vue'
export default {
  name: 'CommunicationView3',
  components: { ParentComponent3 },
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      parentTitle: '동적 페이지 타이틀'
    }
  }
}
</script>

<style scoped lang="scss"></style>
