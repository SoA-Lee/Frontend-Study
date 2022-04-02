<template>
  <button 
    :style="[fontStyle, backgroundStyle]"
    @click="add">
    ADD
  </button>
  <h1
    @click="activate"
    v-bind:class = "{ active: isActive }">
    Active
    </h1>
  <h1 
    @click="changeMessage">
    {{  msg  }}
  </h1>
  <h1>{{  reversedMessage  }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter
      msg : 'Hello?!',
      isActive : false,
      fontStyle: {
        color: 'orange',
        fontSize: '30px'
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    }
  },
  computed: { // 읽기 전용, 계산된 데이터
    // Getter
    // reversedMessage() { // 캐싱 있음, 이미 연산한 값이 있다면 반복적으로 연산 X
    //   return this.msg.split('').reverse().join('')
    // }
    // Getter, Setter
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        this.msg = value
      }
    }
  },
  watch: { // 데이터들의 변경사항 감시
    msg() {
      console.log('msg:', this.msg)
    },
    reversedMessage(newValue) {
      console.log('reversedMessage:', newValue)
    }
  },
  methods: {
    add() {
      // this.reversedMessage += '?!'
      this.reversedMessage += '?!'
      this.fontStyle.color = "royalblue"
      this.fontStyle.fontSize = "50px"
    },
    changeMessage() {
      this.msg = 'Good!'
    },
    activate() {
      this.isActive = true
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
    font-weight: bold;
  }
</style>