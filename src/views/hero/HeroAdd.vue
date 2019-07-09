<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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
      <button @click.prevent="addDate" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  methods: {
    addDate() {
      // 1.给按钮绑定点击事件
      // 2.点击按钮发送请求, 把数据一起发送
      this.axios
        .post('/heroes',this.formData)
        .then((response) => {
          console.log(response)
          const status = response.status
          if ( status === 201 ) {
            // 3.发送请求成功 跳转路由到/hero
            this.$router.push('/hero')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
};
</script>

<style>
</style>
