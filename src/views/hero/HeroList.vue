<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="/heroadd">Add</a> -->
        <router-link class="btn btn-success" :to="{ name: 'heroadd' }">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <!-- <a href="#">edit</a> -->
                  <router-link :to="{ name: 'heroedit', params: { id: item.id } }">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="#" @click.prevent="delData(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    // 请求数据
    getDate() {
      // 发送ajax请求
      this.axios
        .get('/heroes')
        .then((res) => {
          // console.log(res)
          const { status, data } = res;
          if ( status === 200 ) {
            // 发送请求成功 把数据给到list
            this.list = data
          }
        })
        .catch((err) => {
          console.log(err);
        })
    },
    // 删除数据
    delData(id){
      // 先确认
      if ( !confirm('您确认删除吗?') ){
        return false;
      }
      // 发送请求
      this.axios
        .delete(`/heroes/${id}`)
        .then((res) => {
          const status = res.status;
          if ( status === 200 ) {
            // 删除成功 更新数据
            this.getDate()
          }
        })
    }
  },
  mounted() {
    // 页面DOM加载完 发送ajax请求
    this.getDate()
  }
}
</script>

<style>

</style>
