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
        <input type="text" class="form-control" v-model="formData.skill" id="editSkill">
      </div>
      <button @click.prevent="editData" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
      return {
        formData: {
          name: '',
          skill: ''
        }
      }
    },
    methods: {
      // 请求数据
      getDataById() {
        this.axios('/users/' + this.id)
          .then((res) => {
            const { status, data } = res;
            if ( status === 200 ) {
              // 请求成功
              this.formData = data;
            } else {
              alert('数据请求失败')
            }
          })
          .catch((err) => {
            console.log('错误信息:' + err)
          })
      },
      // 1.点击按钮事件
      editData() {
        // 2.发送请求
        this.axios
          .put('/users/' + this.id,this.formData)
          .then((res) => {
            console.log(res)
            // 3.请求成功 跳转路由
            if ( res.status === 200 ) {
              this.$router.push('/weapon')
            } else {
              alert('修改失败')
            }
          })
          .catch((err) => {
            console.log( '错误信息:'+ err)
          })

      }

    },
    created() {
      // 页面加载完 发送请求
      this.getDataById()
    }
}
</script>

<style>
    
</style>
