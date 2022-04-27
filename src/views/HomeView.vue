<template>
  <div class="home">
    <h1>Hello, {{ title }}</h1>
    <DataBindingInputText />
    <DataBindingInputNumber />
    <DataBindingTextArea />
    <DataBindingSelect />
    <DataBindingCheckbox />
    <DataBindingCheckbox2 />
    <DataBindingRadio />
    <DataBindingAttribute />
    <DataBindingButton />
    <DataBindingClass />
    <DataBindingClass2 />
    <DataBindingStyle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DataBindingInputText from '@/components/databinding/DataBindingInputText.vue'
import DataBindingInputNumber from '@/components/databinding/DataBindingInputNumber.vue'
import DataBindingTextArea from '@/components/databinding/DataBindingTextArea.vue'
import DataBindingSelect from '@/components/databinding/DataBindingSelect.vue'
import DataBindingCheckbox from '@/components/databinding/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '@/components/databinding/DataBindingCheckbox2.vue'
import DataBindingRadio from '@/components/databinding/DataBindingRadio.vue'
import DataBindingAttribute from '@/components/databinding/DataBindingAttribute.vue'
import DataBindingButton from '@/components/databinding/DataBindingButton.vue'
import DataBindingClass from '@/components/databinding/DataBindingClass.vue'
import DataBindingClass2 from '@/components/databinding/DataBindingClass2.vue'
import DataBindingStyle from '@/components/databinding/DataBindingStyle.vue'

export default defineComponent({
  name: 'HomeView',
  components: { DataBindingStyle, DataBindingClass2, DataBindingClass, DataBindingButton, DataBindingAttribute, DataBindingRadio, DataBindingCheckbox2, DataBindingCheckbox, DataBindingSelect, DataBindingTextArea, DataBindingInputNumber, DataBindingInputText },
  data () {
    return {
      title: 'world best bank'
    }
  }
})
</script>
