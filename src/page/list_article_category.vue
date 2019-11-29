<template>
  <div class>
   
    <dm_list_data :cf="cfList">
    </dm_list_data>
  </div>
</template>
<script>

export default {
  components: {  },
  methods: {
    filterActicle(categoryId) {
      //函数：{筛选资讯函数}

      this.$store.commit("setListFindJson", {
        //改变列表的初始状态值
        listIndex: "list_article",
        findJson: { articleCategory: categoryId }
      });
      this.$router.push({ path: "/list_article" });
    }
  },
  data() {
    return {
      cfList: util.deepCopy(PUB.listCF.list_article_category)
     
    };
  },created(){
  }
};

</script>


<style>
.article-text:hover{
  color:blue
}
.article-text{
  cursor: pointer;
}
</style>
