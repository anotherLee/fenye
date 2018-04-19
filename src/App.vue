<template>
  <div id="app">
    <div class="currentPage">第{{nowPage}}页</div>
    <Pager @currentChange="changeCurrent"></Pager>
  </div>
</template>

<script>
import Pager from './components/Pager'

export default {
  name: 'App',
  data() {
    return {
      nowPage: 1
    }
  },
  methods: {
    changeCurrent(data) {
      this.nowPage = data
    }
  },
  components: {
    Pager
  }
}
</script>

<style>
*{
  margin:0; padding: 0; box-sizing: border-box;
}
ul,ol,li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align:center;
  margin-top: 60px;
}
.currentPage{
  margin-bottom: 50px;
}
</style>
