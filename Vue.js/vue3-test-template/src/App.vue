<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <div v-if="count > 4">
    4보다 큽니다!
  </div>
  <ul>
    <Fruit 
      v-for="fruit in fruits" 
      :key="fruit"
      :name="fruit">
       {{ fruit }}
    </Fruit>
  </ul>
</template>

<script>
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit: Fruit
  },
  data() {
    return {
      count: 0,
      fruits: ['Apple', 'Banana', 'Cherry']
    }    
  },
  methods: {
    increase() {
      this.count += 1
    }
  },
  beforeCreate() { // data 불러오기 안 됨
    console.log('Before Create!', this.count)
  },
  created() { 
    console.log('Created!', this.count)
  },
  beforeMount() { // html 구조 연결 전 단계
    console.log('Before Mount!')
    console.log(document.querySelector('h1'))
  },
  mounted() { // html구조 연결 및 조회 가능
    console.log('Mounted!')
    console.log(document.querySelector('h1'))
  } 
}
</script>

<style lang="scss">
  h1 {
    font-size: 50px;
    color: royalblue;
  }
  ul {
    li {
      font-size: 40px;
    }
  }
</style>