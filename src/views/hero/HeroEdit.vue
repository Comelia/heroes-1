<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄信息</h2>
    <form>
      <div class="form-group">
        <label for="addName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="addName" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="addAge">性别</label>
        <select class="form-control" id="addAge" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <button @click.prevent="editData" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  // 接收路由传过来的数据
  props: ['id'],
  data() {
    return {
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  methods: {
    // 获取信息
    getDateById() {
      // 发送ajax请求 根据id获取数据
      this.axios
        .get(`/heroes/${this.id}`)
        .then((res) => {
          // console.log(res)
          // 把请求回来的数据 保存给formData
          this.formData = res.data
        })
        .catch((err) => {
          console.log(err)
        })

    },
    // 修改信息 返回列表页
    editData() {
      // 发送请求 修改数据
      this.axios
        .put(`/heroes/${this.id}`, this.formData)
        .then((res) => {
          if ( res.status === 200 ){
            // 请求成功 
            this.$router.push('/hero')
          } else {
            console.log('修改失败')
          }
        })
        .catch((err) => {
          console.log('修改失败' + err)
        })

    }
  },
  created() {
    // 页面加载完自动发送请求 获取当前行的信息 更新数据
    this.getDateById()
  }
};
</script>

<style>
</style>
