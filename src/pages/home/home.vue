<template>
  <div>
    <div id="main" style="width: 1000px;height:600px;"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters({
      catelistG: "classify/catelistG"
    })
  },
  methods: {
    ...mapActions({
      catelistA: "classify/catelistA"
    })
  },
  data() {
    return {};
  },
  mounted() {
    this.catelistA();
  },
  watch: {
    catelistG: {
      handler() {
        var myChart = echarts.init(document.getElementById("main"));

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: "商品分类"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: this.catelistG.map(item => {
              return item.catename;
            })
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "line",
            data: this.catelistG.map(item => {
              return item.children?item.children.length:0;
            })
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      deep: true
    }
  }
};
</script>
<style></style>
