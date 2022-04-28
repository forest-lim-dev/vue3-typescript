<template>
  <h2>{{ title }}</h2>
  <div>
    <span>이름: {{ person.name }}, </span>
    <span>나이: {{ person.age }}</span>
  </div>
  <div>
    <span>포스트 제목: {{ post.title }}, </span>
    <span>포스트 내용: {{ post.content }}</span>
  </div>
</template>

<script lang="ts">
import { Person, Post } from '@/types'
import { PropType } from 'vue'

export default {
  name: 'PageTitle', // 컴포넌트 이름
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    },
    person: {
      type: Object as () => Person,
      default () {
        return {
          name: 'limjiux',
          age: 30
        }
      }
    },
    post: {
      type: Object as PropType<Post>
    }
  }
}
</script>

<style scoped lang="scss"></style>
