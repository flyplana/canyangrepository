<template>
  <!-- <a-button type="primary">
      Primary
    </a-button> -->
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-button id="fuwu" type="primary"><router-link to="/">服务</router-link></a-button>
      <!-- <div class="logo" /> -->
      <a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
        <!-- <a-menu-item key="1">
            nav 1
          </a-menu-item> -->
        <!-- <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item> -->
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :default-selected-keys="['1']" :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <span slot="title">数据服务</span>
            <a-menu-item key="1">地图服务
              <router-link to="/MapServe_"></router-link>
            </a-menu-item>
            <a-menu-item key="2">模型服务
              <router-link to="/ModelServe_"></router-link>
            </a-menu-item>
            <a-menu-item key="3">倾斜摄影服务
              <router-link to="/ImageServe_"></router-link>
            </a-menu-item>
            <!-- <a-menu-item key="4">
                option4
              </a-menu-item> -->
          </a-sub-menu>
          <!-- <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />subnav 2</span>
              <a-menu-item key="5">
                option5
              </a-menu-item>
              <a-menu-item key="6">
                option6
              </a-menu-item>
              <a-menu-item key="7">
                option7
              </a-menu-item>
              <a-menu-item key="8">
                option8
              </a-menu-item>
            </a-sub-menu> -->
          <!-- <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9">
                option9
              </a-menu-item>
              <a-menu-item key="10">
                option10
              </a-menu-item>
              <a-menu-item key="11">
                option11
              </a-menu-item>
              <a-menu-item key="12">
                option12
              </a-menu-item>
            </a-sub-menu> -->
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px;height:650px">
        <template>
          <a-dropdown>

            <a-button type="primary" class="ant-dropdown-link" id="fabufuwu" @click="e => e.preventDefault()">
              <a-icon type="plus-circle" /> 发布服务
              <!-- <a-icon type="down" /> -->
            </a-button>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href="javascript:;">文件数据源</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">数据库</a>
              </a-menu-item>
              <!-- <a-menu-item>
                  <a href="javascript:;">3rd menu item</a>
                </a-menu-item> -->
            </a-menu>
          </a-dropdown>
        </template>

        <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            Content
          </a-layout-content> -->
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fuwu {
  border: none;
  color: beige;
  background: #fff;
  background-color: rgba(255, 255, 255, 0);
  /* opacity: 0.1; */
}

#fabufuwu {
  margin-top: 23px;
  text-align: center;
  height: 40px;
  width: 100px;
  /* background-color: powderblue; */
  /* color: aliceblue; */
}
</style>
  
  
  
  
<style>
/* #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  } */
</style>
  
  <script>
  // export default {
  //   name: 'ServiceSYS',
  //   data() {
  //     return {
  //       // msg: 'Welcome to Your Vue.js App'
  //     }
  //   }
  // }
  </script>
  
