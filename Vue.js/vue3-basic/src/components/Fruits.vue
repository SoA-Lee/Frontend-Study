<template>
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li >
        {{fruit}} ?!
      </li>
    </ul>
  </section>
  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <li 
        v-for="fruit in reverseFruits" 
        :key="fruit">
        {{fruit}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Cherry']
    }
  },
  computed: {
    hasFruit() {
      return this.fruits.length > 0
    },
    reverseFruits() {
      return this.fruits.map(fruit => {
        // 'Apple' => ['A','p','p','l','e'] => 'elppA'
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    color: red !important;
  }
</style>