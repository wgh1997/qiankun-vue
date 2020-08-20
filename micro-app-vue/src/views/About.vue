<template>
  <div class="page">
   adasdas1
   <button @click="click1">跳转父组件登录页面</button>
    <button @click="click2">跳转react页面</button>
  </div>
</template>

<script>
import {SharedModule,emitFncModul} from "../shared";
export default {
  name: "page",
  components: {},
  data() {
    return {};
  },
  props: {},
  watch: {},
  
  methods: {
    click1(){
          const emitFnc = emitFncModul.getShared();
          console.log('获取父组件中的router')
            emitFnc().push({
                  path: `/login`,
            })

    },
    click2(){
          const emitFnc = emitFncModul.getShared();
          console.log('获取父组件中的router')
            emitFnc().push({
                  path: `/react/list`,
            })

    }
  },
  computed: {},
  created() {},
  mounted() {
     const shared = SharedModule.getShared();
     console.log(shared.getToken(),'---我是获取父组件值---vue',shared.setToken('vue'),'---我是修改父组件值---vue')
  },
  destroyed() {},
};
</script>

<style scoped lang="scss">
</style>

