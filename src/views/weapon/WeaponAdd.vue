<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加武器信息</h2>
    <form>
      <div class="form-group">
        <label for="addName">名称</label>
        <input
          type="text"
          class="form-control"
          id="addName"
          v-model="formData.name"
          placeholder="武器名称"
        />
      </div>
      <div class="form-group">
        <label for="editSkill">技能</label>
        <input type="text" placeholder="技能" class="form-control" id="editSkill" v-model="formData.skill" />
      </div>
      <button @click.prevent="addData" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        skill: ''
      }
    } 
  },
  methods: {
    addData() {
      this.axios
        .post(`/users`,this.formData)
        .then((res) => {
          if ( res.status === 201 ) {
            // 请求成功
            this.$router.push('/weapon')
          }else {
            alert('添加失败')
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
};
</script>

<style>
</style>
