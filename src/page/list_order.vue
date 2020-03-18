<template>
  <div class>
    <dm_list_data :cf="cfList">
      <template #slot_column_payStatus="{row}">
        {{$util.getDictLabel("payStatus",row.payStatus)}}
        <el-button plain @click="refund(row)" size="mini" v-if="row.payStatus==2">退款</el-button>
      </template>
    </dm_list_data>
  </div>
</template>
<script>
util.getDictLabel = function(key, val) {
  return lodash.get(DYDICT[key], `${val}.label`, "");
};

export default {
  // mixins: [MIX.goods_specs],
  components: {
    goods_specs: () => import("@/components/bussiness/goods_specs.vue")
  },
  data() {
    return {
      DYDICT: DYDICT,
      cfList: PUB.listCF.list_order
    };
  },
  methods: {
    //函数：{退款函数}
    async refund(row) {
      let clickStatus = await this.$confirm("确定申请退款？").catch(() => {});
      if (clickStatus != "confirm") return;

      let { orderId } = row;
      let { data } = await axios({
        //请求接口
        method: "post",
        url: `${PUB.domain}/api_third_part/refund_wx_longting`,
        data: {
          orderId
        }
      });

      if (data.code == 1) {
        //如果{000}000
        return this.$message.error(data.result.err_code_des);
      }
      // this.$set(row, "payStatus", 3);
      row.payStatus = 3;
      this.$message.success("申请退款成功！！！");
    }
  },
  created() {}
};
</script>

<style>
</style>
