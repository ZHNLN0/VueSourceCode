import Vue from './source/vue.esm.js'

const app = new Vue({
  el: '#app',
  data() {
    return {
      temp: ['1', '2', '3', '4', '5']
    }
  },
  components: {
    test: {
      template: '<div>123123</div>'
    }
  },
  watch: {
    temp: {
      immediate: true,
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  mounted() {
  },
  methods: {

  }
})