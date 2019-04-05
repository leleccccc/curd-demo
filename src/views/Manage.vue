<template>
  <div :class="{ 'cover': isCover }">
    <div>
      <button type="button" @click="add">新增</button>
    </div>
    <br />
    <div v-show="isShow">
      <input ref="write" type="text" placeholder="请输入人员姓名" v-model="nameValue" />
      <button type="button" @click="addName">确定</button>
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in people" :key="index">
        <td>{{ item.name }}</td>
        <td><span @click="edit(index)">编辑</span><span @click="del(index)">删除</span></td>
      </tr>
    </table>
    <!-- 编辑区 -->
    <div v-show="showEdit">
      <input type="text" placeholder="请输入新名字" v-model="newName" />
      <button type="button" @click="editName">确定</button>
      <button type="button" @click="cancel">取消</button>
    </div>
    <footer-nav :class="{ 'isManage':isNowPage }"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'

export default {
  name: 'Manage',
  components: {
    FooterNav
  },
  data () {
    return {
      isShow: false,
      nameValue: '',
      showEdit: false,
      isCover: false,
      newName: '',
      editID: '',
      isNowPage: true,
      people: [
        { name: 'jack' },
        { name: 'mike' }
      ]
    }
  },
  methods: {
    add () {
      this.isShow = true
    }, // 打开添加框
    addName () {
      var v = this.nameValue
      if (v.trim() === '') {
        alert('不能为空')
      } else {
        var data = {}
        data.name = v
        this.people.push(data)
        this.$refs.write.value = ''
      }
    }, // 增加数据
    // td标签绑定:id="index"
    // del (e) {
    //   var id = e.target.offsetParent.id
    //   this.people.splice(id, 1)
    // }
    del (index) {
      this.people.splice(index, 1)
    }, // 删除数据
    edit (index) {
      this.showEdit = true
      this.newName = this.people[index].name
      this.editID = index
      // this.isCover = true
    }, // 打开编辑框,把index传给editID
    editName () {
      var val = this.newName
      if (val.trim() === '') {
        alert('不能为空')
      } else {
        this.people[this.editID].name = val
        this.showEdit = false
      }
    }, // 修改数据
    cancel () {
      this.showEdit = false
    } // 关闭编辑框
  }
}
</script>

<style scoped>
table {
  margin:10px auto;
}

th,td {
  width:150px;
}

span {
  margin-left: 10px;
}

input {
  height: 30px;
}

button {
  width:50px;
  height:30px;
  background: #22a843;
  color: #fff;
  border:none;
}

.cover {
  background: #333333;
  opacity: 0.8;
}
</style>
