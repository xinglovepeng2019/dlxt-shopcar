<template>
  <div class="my-good-item">
    <div class="left">
      <div class="left-inp custom-control custom-checkbox">
        <!-- 
        循环当前组件，id都是input 
        id值是唯一的

         -->
        <input
          type="checkbox"
          v-model="gObj.goods_state"
          class="custom-control-input"
          :id="gObj.id"
        />
        <label :for="gObj.id" class="custom-control-label">
          <img :src="gObj.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ gObj.goods_name }}</div>
      <div class="bottom">
        <div class="price">￥{{ gObj.goods_price }}</div>
        <my-count :obj="gObj"></my-count>
      </div>
    </div>
  </div>
</template>

<script>
import MyCount from './MyCount.vue'
export default {
  components: { MyCount },
  props: {
    gObj: Object,
  },
}
</script>

<style lang="less" scoped>
.my-good-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    width: 120px;
    .left-inp {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    img {
      width: 100px;
      height: 100px;
      margin-right: 8px;
      border-radius: 10px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
