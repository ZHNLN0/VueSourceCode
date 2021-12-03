import Vue from './source/vue.esm.js'

const app = new Vue({
  el: '#app',
  data() {
    return {
      temp: ['1', '2', '3', '4', '5']
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
//
// let cache = {}
//
// function Vue () {
//   cache = this
//   this.options = { a: 123 }
// }
//
// Vue.extend = function () {
//   console.log(this === Vue)
// }
// new Vue()
// Vue.extend()
//
// function _new () {
//   let target = {}
//   let [constructor, ...args] = [...arguments]
//   // 执行原型连接 target成为constructor 的实例
//   target.__proto__ = constructor.prototype
//   // 执行构造函数，将属性或者方法添加到我们创建的对象上
//   let result = constructor.apply(target, args)
//   // 当构造函数 return 的值是复杂数据类型的时候，new 的使用会为实例赋值 return 的值
//   if(result && (typeof(result) === 'object') || (typeof(result) === 'function')) {
//     // 如果构造函数结构返回的是一个对象，那么返回这个对象
//     return result
//   }
//   // 如果构造函数结构返回的不是一个对象，那么返回创建的新对象
//   return target
// }
