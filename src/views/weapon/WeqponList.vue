<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">武器列表</h2>
        <!-- <a  href="add.html">Add</a> -->
        <router-link class="btn btn-success" :to="{ name: 'weaponadd' }" >Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>名称</th>
                <th>技能</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.skill }}</td>
                <td>
                  <router-link :to="{ name: 'weaponedit', params: { id: item.id } }">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:window.confirm('Are you sure?')">删除</a>
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
      props: ['id'],
      list: []
    }
  },
  methods: {
    // 请求数据
    getData(){
      this.axios
        .get('/users')
        .then((res) => {
          // console.log(res)
          const { status, data } = res
          if ( status === 200 ) {
            this.list = data
          }
        })
    },
    
  },
  created() {
    this.getData()
  }
}
</script>

<style>

</style>
