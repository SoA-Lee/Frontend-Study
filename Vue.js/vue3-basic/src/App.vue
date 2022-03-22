<template>
  <button @click="add">
    ADD
  </button>
  <h1 @click="changeMessage">
    {{  msg  }}
  </h1>
  <h1>{{  reversedMessage  }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // Getter, Setter
      msg : 'Hello?!'
    }
  },
  computed: { // 읽기 전용
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
    },
    changeMessage() {
      this.msg = 'Good!'
    }
  }
}
</script>