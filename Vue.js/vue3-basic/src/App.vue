<template>
  <Fruits />
  <h1 
    v-once 
    @click="add">{{ msg }}
  </h1>
  <h1 v-html="new"></h1>
  <h1 v-bind:class="active">{{ active }}</h1>
  <h1
    :[attr]="'active'"
    @[event]="add">
    {{ msg }}
  </h1>
</template>

<script>
import Fruits from '~/components/Fruits.vue'

export default {
  components: { Fruits },
  data() {
      return {
          msg: "Hello World",
          new: "<div style=\"color: red;\">Hello!!</div>",
          active: "active",
          event: "click"
      };
  },
  methods: {
      add() {
          this.msg += "!";
       }
  }
}
</script>

<style scoped>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>