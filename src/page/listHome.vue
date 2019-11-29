<template>
  <div class="main">
    <div class="TAC">
      <dm_space height="80"></dm_space>
      <h1 class="FS24">欢迎使用{{systemName}}--</h1>
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
</style>