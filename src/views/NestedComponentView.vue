<template>
  <div>
    <PageTitle :title="parentTitle" :person="person" :post="post" />
  </div>
</template>

<script lang="ts">
import PageTitle from '@/components/PageTitle.vue'
export default {
  name: 'NestedComponentView',
  components: { PageTitle },
  // 컴포넌트 이름
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      parentTitle: '동적 페이지 타이틀',
      person: {
        name: 'jiuk',
        age: 20
      },
      post: {
        title: '제목',
        content: '내용내용내용내용'
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
