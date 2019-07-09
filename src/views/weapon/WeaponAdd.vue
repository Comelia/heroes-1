<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改武器信息</h2>
    <form>
      <div class="form-group">
        <label for="addName">名称</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="addName"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="editSkill">技能</label>
        <input type="text" class="form-control" v-model="formData.skill" id="editSkill" />
      </div>
      <button @click.prevent="editData" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
