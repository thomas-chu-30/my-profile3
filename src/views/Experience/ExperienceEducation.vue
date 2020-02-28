<template>
  <div id="app">
    <Timeline
      id="time-line"
      class="time-line"
      :timeline-items="dataTimeline"
      :colorDots="'#ccc'"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      order="desc"
    />
    <div class="des">
      <img height="100%" width="100%" :src="imgs[changeImg]" />
      <!-- <p>tyujm</p> -->
    </div>
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";
import { timeList } from "@/assets/DataSource/EducationEx.js";
export default {
  name: "App",
  components: {
    Timeline
  },
  data() {
    return {
      //timeline-components
      messageWhenNoItems: "There arent items",
      dataTimeline: timeList,
      //imgs
      changeImg: 0,
      imgs: [
        require("@/assets/images/Experience/Edu/1.jpg"),
        require("@/assets/images/Experience/Edu/2.jpg")
      ]
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollMove);
    window.addEventListener("touchmove", this.scrollMove);
  },
  methods: {
    scrollMove() {
      const top =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0);
      const timelineoffset = document.getElementById("time-line").offsetTop;
      console.log(timelineoffset);
      console.log(top);
      if (top < 134) {
        this.changeImg = 0;
      } else if (top > 134) {
        this.changeImg = 1;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;
  // align-items: center;
  // justify-content: center;
  .time-line {
  }
  .des {
    position: fixed;
    left: 45vw;
    // transition: 2s;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 50vw;
    height: 60vh;
  }
}
.timeline-item {
  height: 200px;
}
.dot {
  /* background-color: red; */
}
* {
  // border: 1px solid;
}

@media only screen and (max-width: 768px) {
  #app {
    padding: 0px;
    .time-line {
      position: absolute;
      top: 450px;
    }
    .des {
      // position: sticky;
      // top: 0px;
      min-width: 100vw;
      left: 0px;
    }
  }
  .timeline-item {
    height: 290px;
  }
}
</style>
<style lang="scss" scoped></style>
