<template>
  <h2>부모 컴포넌트에서 자식 컴포넌트의 이벤트 직접 발생시키기</h2>
  <ChildComponent3 @send-message="sendMessage" ref="child_component" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChildComponent3 from '@/components/Communication/ChildComponent3.vue'

export default defineComponent({
  name: 'ParentComponent3',
  components: { ChildComponent3 },
  mounted () {
    this.$refs.child_component.$refs.btn.click()
  }
})
</script>

<style scoped lang="scss"></style>
