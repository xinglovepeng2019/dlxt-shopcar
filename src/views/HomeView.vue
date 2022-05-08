<template>
  <div class="home">
    <my-head title="购物车案例" background="#1d7bff"></my-head>
    <div class="list">
      <my-good v-for="item in list" :key="item.id" :gObj="item"></my-good>
    </div>

    <my-foot @changeAll="allFn" :list="list"></my-foot>
  </div>
</template>

<script>
// @ 指向的是src目录
import MyHead from '@/components/MyHead.vue'
import MyGood from '@/components/MyGood.vue'
import MyFoot from '@/components/MyFoot.vue'
export default {
  components: { MyHead, MyGood, MyFoot },
  data() {
    return {
      list: [],
    }
  },
  async created() {
    let { data: res } = await this.$http.get('/api/cart')
    console.log(res)
    this.list = res.list
  },
  methods: {
    // 更改每一个小选框状态
    allFn(bool) {
      this.list.forEach((item) => (item.goods_state = bool))
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  .list {
    flex: 1;
    padding-bottom: 50px;
    overflow: scroll;
  }
}
</style>
