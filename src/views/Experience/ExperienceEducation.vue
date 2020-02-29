<template>
  <div id="app">
    <div>
      <Timeline
        id="time-line"
        class="time-line"
        :timeline-items="dataTimeline"
        :colorDots="'#ccc'"
        :message-when-no-items="messageWhenNoItems"
        :unique-year="true"
        order="desc"
      />
    </div>
    <transition name="fade">
      <component style="position: fixed" :is="Event"></component>
    </transition>
    <!-- <div class="des">
      <img v-for="(img,idx) in imgs" :key="idx" width="100%" :src="imgs[idx]" />
    </div>-->
  </div>
</template>

<script>
import EventOne from "@/views/Experience/EduComps/EventOne.vue";
import EventTwo from "@/views/Experience/EduComps/EventTwo.vue";
import Timeline from "timeline-vuejs";
import { timeList } from "@/assets/DataSource/EducationEx.js";
export default {
  name: "App",
  components: {
    Timeline,
    EventOne,
    EventTwo
  },
  data() {
    return {
      //components
      Event: "EventTwo",
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
      console.log(top);
      console.log(timelineoffset);
      if (top < 134) {
        this.Event = "EventOne";
      } else if (top > 134) {
        this.Event = "EventTwo";
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
    position: sticky;
    left: 45vw;
    // transition: 2s;
    // display: flex;
    // flex-wrap: wrap;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 50vw;
    // height: 60vh;
    img {
      // width: 100%;
      // position: relative;
    }
  }
}
.timeline-item {
  // height: 200px;
}
.dot {
  /* background-color: red; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
