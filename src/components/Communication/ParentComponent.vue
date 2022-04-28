<template>
  <ChildComponent @send-message="sendMessage" ref="child_component" />
</template>

<script lang="ts">
import ChildComponent from '@/components/Communication/ChildComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ParentComponent',
  components: { ChildComponent },
  mounted () {
    this.$refs.child_component.$refs.btn.click()
  }
})
</script>

<style scoped lang="scss"></style>
