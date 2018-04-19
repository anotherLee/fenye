<template>
  <div class="pager">
    <ul class="pageWrapper">
      <li class="page" @click="preOrNext(-1)"><i class="fa fa-chevron-left" aria-hidden="true"></i></li>
      <li class="page"
      v-for="(item, index) in pages"
      :key="index"
      @click="changeCurrent(item)"
      :class="{actived: item === currentPage}"
      >{{item}}</li>
      <li class="page" @click="preOrNext(1)"><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalPages: 100,
      currentPage: 1,
      buttonCount: 10
    }
  },
  computed: {
    pages () {
      let totalPages = this.totalPages
      let currentPage = this.currentPage
      let buttonCount = this.buttonCount
      if (currentPage <= 5) {
        return this.addArray(1, buttonCount)
      } else if (currentPage > 5 && currentPage < totalPages - 4) {
        return this.addArray(currentPage-5, buttonCount)
      } else if (currentPage >= totalPages - 4) {
        return this.addArray(totalPages - 10 + 1, buttonCount)
      }
    }
  },
  methods: {
    changeCurrent (n) {
      if (n === this.currentPage) return
      this.currentPage = n
      this.informParent(this.currentPage)
    },
    addArray(start, count) {
      let result = []
      for (let i=0; i<count; i++) {
        result.push(start+i)
      }
      return result
    },
    preOrNext(n) {
      let temp = this.currentPage += n
      temp <= 1
      ? this.currentPage = 1
      : temp >= this.totalPages
        ? this.currentPage = this.totalPages
        : this.currentPage = temp
      this.informParent(this.currentPage)
    },
    informParent(currentPage) {
      this.$emit('input', currentPage)
    }
  }
}
</script>

<style scoped>
.pageWrapper{
  display:flex;
  justify-content: center;
  align-items: center;
}
.page{
  width:32px;
  height:32px;
  line-height:32px;
  vertical-align: middle;
  border: 1px solid #dddee1;
  border-radius: 4px;
  margin-right: 6px;
  font-size:12px;
  cursor: pointer;
  user-select: none;
}
.page:hover{
  border-color: #2d8cf0;
}
.actived{
  border-color: #2d8cf0;
  background-color:#2d8cf0;
  color: #fff;
}
.currentPage{
  margin-bottom: 40px;
}
</style>
