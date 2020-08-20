<template>
  <div >
    <div class="sidebar">
 <el-menu
      :collapse="isSidebarNavCollapse"
      background-color="#304156"
      text-color="#eee"
      active-text-color="#4dbcff"
      :default-active="currentMenu"
    >
      <DynamicMenu :menuList="sidebarMenu"></DynamicMenu>
    </el-menu>  
    </div>
    <div class="main-container">
  <router-view/>
    </div>
   

  </div>
</template>

<script>
import DynamicMenu from "@/components/dynamic-menu";
import About from "./About";
export default {
  data() {
    return {
      isSidebarNavCollapse: false,
      isCollapse: true,
      currentMenu: "home",
      sidebarMenu: [
        {
          path: "/order",
          component: About,
          name: "order-manage",
          meta: {
            name: "Table",
            icon: "icon-email",
          },
          children: [
            {
              path: "dragTable",
              name: "dragTable",
              component: About,
              meta: {
                name: "拖拽 Table",
                icon: "icon-quit",
              },
            },
            {
              path: "compileTable",
              name: "compileTable",
              component: About,
              meta: {
                name: "Table 内编辑",
                icon: "icon-service",
              },
            },
            {
              path: "Table",
              name: "Table",
              component: About,
              meta: {
                name: "Table",
                icon: "icon-product-manage",
              },
            },
          ],
        },
        {
          path: "/goods",
          component: About,
          name: "goods",
          meta: {
            name: "产品管理",
            icon: "icon-order-manage",
          },
          children: [
            {
              path: "list",
              name: "goods-list",
              component: About,
              meta: {
                name: "产品列表",
                icon: "icon-home",
              },
            },
            {
              path: "classify",
              name: "goods-classify",
              component: About,
              meta: {
                name: "产品分类",
                icon: "icon-product-manage",
              },
            },
          ],
        },
        {
          path: "/Export",
          component: About,
          name: "Export",
          meta: {
            name: "导出导入",
            icon: "icon-order-manage",
          },
        },
        {
          path: "/Echartsjs",
          component: About,
          name: "Echartsjs",
          meta: {
            name: "Echartsjs",
            icon: "icon-order-manage",
          },
        },
        {
          path: "/grag",
          component: About,
          name: "Drag",
          meta: {
            name: "拖拽组件",
            icon: "icon-order-manage",
          },
          children: [
            {
              path: "dialog",
              name: "dialog",
              component: About,
              meta: {
                name: "拖拽Dialog",
                icon: "icon-home",
              },
            },
            {
              path: "select",
              name: "select",
              component: About,
              meta: {
                name: "列表拖拽",
                icon: "icon-product-manage",
              },
            },
            {
              path: "kanban",
              name: "kanban",
              component: About,
              meta: {
                name: "可拖拽看板",
                icon: "icon-product-manage",
              },
            },
          ],
        },
        {
          path: "/tinymce",
          component: About,
          name: "tinymce",
          meta: {
            name: "富文本编辑器",
            icon: "icon-order-manage",
          },
        },
      ],
    };
  },
  computed: {
    // ...mapState(['isSidebarNavCollapse']),
    // ...mapState('permission', ['sidebarMenu', 'currentMenu'])
  },
  methods: {},
  components: {
    DynamicMenu,
  },
};
</script>
<style lang="scss" scoped>

</style>
