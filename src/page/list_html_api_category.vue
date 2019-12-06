<template>
  <div class>
    <dm_list_data :cf="cfList"></dm_list_data>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cfList: util.deepCopy(PUB.listCF.list_html_api_category)
    };
  },
  created() {}
};
</script>


<style>
</style>
