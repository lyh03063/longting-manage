<template>
  <div class>
    <dm_list_data :cf="cfList">
     

      <!-----规格/价格表-插槽-->
      <template v-slot:slot_form_listSpecPrice="{formData}">
        <goods_specs :formData="formData"></goods_specs>
      </template>
    </dm_list_data>
  </div>
</template>
<script>
export default {
  // mixins: [MIX.goods_specs],
  components: {
    goods_specs: () => import("@/components/bussiness/goods_specs.vue")
  },
  data() {
    return {
      cfList: PUB.listCF.list_goods
    };
  },
  methods: {},
  created() {}
};
</script>

<style>
</style>
