<template>
  <div>
    <a-steps :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div>
      <div v-if="current == steps.length - 3">
        <Load />
      </div>
      <div v-if="current == steps.length - 2">
        <div>
          <span>服务名称：</span>
          <a-input placeholder="Basic usage" style="width: 84%;" />
        </div>
        <div>
          <span>服务描述：</span>
          <a-textarea placeholder="Basic usage" :rows="4" style="width: 84%;" />
        </div>
        <div>
          <span>编码格式：</span>
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> <a-icon type="user" />GBK </a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />UTF-8 </a-menu-item>
              <a-menu-item key="3"> <a-icon type="user" />ASCII </a-menu-item>
              <a-menu-item key="4"> <a-icon type="user" />GB2312 </a-menu-item>
              <a-menu-item key="5"> <a-icon type="user" />UNICODE </a-menu-item>
            </a-menu>
            <a-button id="format_" style="margin-left: 8px"> GBK <a-icon type="down" /> </a-button>
          </a-dropdown>
        </div>
        <div style="font-size: 20px;">高级设置</div>
        <div>
          <span>协议配置：</span>
          <div>
            <a-radio-group default-value="a" button-style="solid">
              <a-radio-button value="a">
                WMS
              </a-radio-button>
              <a-radio-button value="b">
                WMTS
              </a-radio-button>
              <a-radio-button value="c">
                WFS
              </a-radio-button>
              <a-radio-button value="d">
                TMS
              </a-radio-button>
            </a-radio-group>
          </div>
          <a-checkbox @change="onChange">
            自动切片
          </a-checkbox>
        </div>
        <div><span>符号配置：</span>
          <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
        </div>
      </div>
      <div v-if="current == steps.length - 1">
        <div>
          <div class="icons-list">
            <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a"
              style="font-size: 50px;text-align: center" />
            <div style="text-align: center;font-size: 30px;">发布成功</div>
          </div>
        </div>
      </div>

      <!-- {{ steps[current].content }} -->

    </div>
    <div class="steps-action">
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        Next
      </a-button>
      <a-button v-if="current == steps.length - 1" type="primary" @click="$message.success('Processing complete!')">
        Done
      </a-button>
      <a-button v-if="current > 0" style="margin-left: 8px" @click="prev">
        Previous
      </a-button>
    </div>
  </div>
</template>
<script>
import Load from './Load.vue';

export default {
  name: "StepBar",
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "选择文件",
          content: "<Temp2 />",
        },
        {
          title: "发布配置",
          content: "Second-content",
        },
        {
          title: "完成",
          content: "Last-content",
        },
      ],
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    handleMenuClick(e) {
      // if (this.key == 1) { document.getElementById('format_') = "GBK" }
    },
  },
  components: { Load }
};
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
</style>
  