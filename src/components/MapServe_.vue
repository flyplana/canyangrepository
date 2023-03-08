<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <a-button id="fuwu" type="primary"><router-link to="/">服务</router-link></a-button>
            <a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
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
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px;height:650px">
                <template>
                    <a-dropdown>
                        <a-button type="primary" class="ant-dropdown-link" id="fabufuwu" @click="e => e.preventDefault()">
                            <a-icon type="plus-circle" /> 发布服务
                        </a-button>
                        <a-menu slot="overlay">
                            <a-menu-item>

                                <div>
                                    <a href="javascript:;" @click="showModal">文件数据源</a>
                                    <a-modal v-model="visible" title="文件数据源" @ok="handleOk">
                                        <StepBar />
                                    </a-modal>
                                </div>

                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">数据库</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </template>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
import StepBar from './StepBar.vue';
// import StepBarmini from './StepBarmini.vue';

export default {
    name: "MapServe_",
    data() {
        return {
            collapsed: false,
        };
    },

    //文件数据源弹窗
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.visible = false;
        },
    },
    components: {
        StepBar,
        // StepBarmini
    }
};
</script>
  

<style scoped>
#fuwu {
    border: none;
    color: beige;
    background: #fff;
    background-color: rgba(255, 255, 255, 0);

}

#fabufuwu {
    margin-top: 23px;
    text-align: center;
    height: 40px;
    width: 100px;

}
</style>



