<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
</template>

<script lang="ts">
export default {
  name: 'ChildComponent3', // 컴포넌트 이름
  methods: {
    childFunc () {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>

<style scoped lang="scss"></style>
