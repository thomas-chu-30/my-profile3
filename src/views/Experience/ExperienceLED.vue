<template>
  <div id="app">
    <div class="mile-stone">
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
      <component class="des" :is="Event"></component>
    </transition>
    <!-- <div class="des">
      <img v-for="(img,idx) in imgs" :key="idx" width="100%" :src="imgs[idx]" />
    </div>-->
  </div>
</template>

<script>
import EventOne from "@/views/Experience/EduComps/EventOne.vue";
import EventTwo from "@/views/Experience/EduComps/EventTwo.vue";
import EventThree from "@/views/Experience/EduComps/EventThree.vue";
import EventFour from "@/views/Experience/EduComps/EventFour.vue";
import EventFive from "@/views/Experience/EduComps/EventFive.vue";
import Timeline from "timeline-vuejs";
import { timeList } from "@/assets/DataSource/WorkingEx.js";
export default {
  name: "App",
  components: {
    Timeline,
    EventOne,
    EventTwo,
    EventThree,
    EventFour,
    EventFive
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
      // const timelineoffset = document.getElementById("time-line").offsetTop;
      //螢幕的高度px
      const bodyHeight = document.body.clientHeight;
      console.log(bodyHeight);
      // console.log(top);
      // console.log(timelineoffset);
      const p1 = (bodyHeight - 950) / 5;
      console.log(p1);
      if (top < p1) {
        this.Event = "EventOne";
      } else if (top < p1 * 2) {
        this.Event = "EventTwo";
      } else if (top < p1 * 3) {
        this.Event = "EventThree";
      } else if (top < p1 * 4) {
        this.Event = "EventFour";
      } else if (top < p1 * 5) {
        this.Event = "EventFive";
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
  .mile-stone {
    display: flex;
    flex-direction: row-reverse;
    width: 40vw;
    // background-color: red;
    .time-line {
      padding-bottom: 50vh;
    }
  }
  .des {
    position: fixed;
    left: 45vw;
    // transition: 2s;
    // display: flex;
    // flex-wrap: wrap;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 50vw;
    height: 70vh;
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

