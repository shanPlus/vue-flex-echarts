<template>
  <div id="app">
    <header>
      <h1>数据可视化 - Echarts</h1>
      <div class="showTime">当前时间为: {{ nowTime }}</div>
    </header>
    <section class="mainbox">
      <div class="cloumn">1</div>
      <div class="cloumn">2</div>
      <div class="cloumn">3</div>
    </section>
  </div>
</template>

<script>
  // 设计稿是1920px, flexible把屏幕默认划分10等分, 也就是192px=1rem, 可以在源码里面改成24, 计算得1 rem= 80px
import './assets/js/flexible.js'
import './assets/css/one.scss'
export default {
  name: 'App',
  data() {
    return {
      nowTime: ''
    }
  },
  mounted() {
    this.nowTimes()
  },
  methods: {
    nowTimes() {
      this.formatDate(Date.now())
      setInterval(this.nowTimes, 500)
      // 清空上一次的定时器
      clearInterval(this.nowTimes)
      this.nowTimes = null
    },

    formatDate: function(value) {
      const date = new Date(value)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const miunte = date.getMinutes()
      const second = date.getSeconds()
      this.nowTime =  `${year}年${month}月${day} - ${hour}时${miunte}分${second}秒`
    }
  }
}
</script>
