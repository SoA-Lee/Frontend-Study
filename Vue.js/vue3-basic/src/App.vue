<template>
  <button @click="handler">
    Click me!
  </button>
  <template v-if="isShow">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <h1 v-show="isShow">
    <!-- 연결된 데이터의 true,false값에 상관없이 '구조적으로' 렌더링은 함 -->
    Hello !!
  </h1>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>

<style lang="scss">

</style>