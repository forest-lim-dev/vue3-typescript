<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script lang="ts">
import ParentComponent from '@/components/Communication/ParentComponent.vue'
export default {
  name: 'CommunicationView',
  components: { ParentComponent },
  // 컴포넌트 이름
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      parentTitle: '동적 페이지 타이틀'
    }
  }
}
</script>

<style scoped lang="scss"></style>
