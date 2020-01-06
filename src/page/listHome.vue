<template>
  <div class="main">
    <div class="TAC">
        <div class="TAL link_box">
          常用入口：
          <el-link
            type="primary"
            href="#/detail_group?groupId=5def67b593cc5a30bf75a679"
            target="_blank"
          >前端学习笔记专题&gt;&gt;</el-link>
        </div>
      <dm_space height="40"></dm_space>
      <h1 class="FS24">欢迎使用{{systemName}}</h1>
      <div class="TAC P10">
      

        <img src="http://qn-dmagic.dmagic.cn/bg.png" style="width:450px" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemName: PUB.systemName
    };
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/util.scss"; //导入公共样式文件

.link_box {
  border: 1px #ddd solid;
  border-radius: 5px;
  padding:10px
}
</style>