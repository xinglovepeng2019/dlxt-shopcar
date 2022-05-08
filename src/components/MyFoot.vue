<template>
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="form-check-input"
        v-model="isAll"
        id="footercheckbox"
      />
      <label for="footercheckbox" class="custom-control-label"> 全选 </label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计</span>
      <span class="price">￥{{ allPrice }}</span>
    </div>
    <!-- 结算 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算({{ allCount }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  computed: {
    isAll: {
      //全选
      set(val) {
        // 同步到每一个小选框
        this.$emit('changeAll', val)
      },
      get() {
        return this.list.every((item) => item.goods_state === true)
      },
    },
    allCount() {
      // 总数量
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count
        }
        return sum
      }, 0)
    },
    allPrice() {
      return this.list.reduce((sum, item) => {
        if (item.goods_state === true) {
          sum += item.goods_count * item.goods_price
        }
        return sum
      }, 0)
    },
  },
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
  .price {
    color: red;
    font-weight: bold;
    font-size: 14px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>
