<template>
  <div>
    <BindingList />
    <RenderingVIf />
    <EventClick />
    <EventChange />
    <EventKey />
    <ComputedText />
    <WatchedText />
  </div>
</template>

<script lang="ts">
import BindingList from '@/components/databinding2/BindingList.vue'
import RenderingVIf from '@/components/databinding2/RenderingVIf.vue'
import EventClick from '@/components/databinding2/EventClick.vue'
import EventChange from '@/components/databinding2/EventChange.vue'
import EventKey from '@/components/databinding2/EventKey.vue'
import ComputedText from '@/components/databinding2/ComputedText.vue'
import WatchedText from '@/components/databinding2/WatchedText.vue'
export default {
  components: { WatchedText, ComputedText, EventKey, EventChange, EventClick, RenderingVIf, BindingList },
  data () { // html과 자바스크립트 코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ''
    }
  }
}
</script>

<style scoped lang="scss"></style>
