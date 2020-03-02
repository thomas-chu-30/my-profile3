<template>
  <div class="content">
    <!-- <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    </b-carousel>-->
    <div class="box one">
      <img width="100%" :src="imgs[2]" alt />
    </div>
    <div class="box two">
      <img width="100%" :src="imgs[3]" alt />
    </div>
    <div class="box three">
      <img width="100%" :src="imgs[4]" alt />
    </div>
    <div class="box four">
      <img width="100%" :src="imgs[5]" alt />
    </div>
    <div class="box five">
      <img width="100%" :src="imgs[6]" alt />
    </div>

    <div class="full">
      <div class="title">
        <h1>Coding, sports, music is all about my life</h1>
      </div>
    </div>
    <img class="facebook" :src="imgs[0]" />
    <img class="github" :src="imgs[1]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require("@/assets/images/Home/facebook.png"),
        require("@/assets/images/Home/github.png"),
        require("@/assets/images/Home/home-1.png"),
        require("@/assets/images/Home/home-2.png"),
        require("@/assets/images/Home/home-3.png"),
        require("@/assets/images/Home/home-4.png"),
        require("@/assets/images/Home/home-5.png"),
        require("@/assets/images/Home/home-6.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/* menu的高度 */
$menu_height: 40px;

.content {
  position: relative;
  height: calc(100vh - $menu_height);
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .full {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 40px);

    .title {
      border: 1px solid black;
      background-color: #eee;
      opacity: 0.6;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 77vw;
      height: 40vh;
      h1 {
        z-index: 9999;
        color: black;
        opacity: 1;
      }
    }
  }
  .facebook {
    position: absolute;
    right: 10px;
    top: calc(100vh - 80px);
    // border: 1px solid;
    // color: blue;
    height: 30px;
    width: 30px;
  }
  .github {
    position: absolute;
    right: 50px;
    top: calc(100vh - 80px);
    // border: 1px solid;
    height: 30px;
    width: 30px;
  }
  .box {
    // height: 60vh;
    position: absolute;
    width: 20%;
    transition: 0.7s;
    border: 1px solid #ddd;
    overflow: hidden;
  }
  .one {
    // height: calc(75vh - $menu_height);
    height: calc(80vh - 40px);

    left: 0vw;
    top: 60px;
    &:hover {
      top: 40px;
    }
  }
  .two {
    height: calc(85vh - 40px);
    left: 20vw;
    top: 51px;
    &:hover {
      top: 10px;
    }
  }
  .three {
    height: calc(74vh - 40px);
    left: 40vw;
    top: 70px;
    &:hover {
      top: 30px;
    }
  }
  .four {
    height: calc(87vh - 40px);
    left: 60vw;
    top: 45px;
    &:hover {
      top: 20px;
    }
  }
  .five {
    height: calc(70vh - 40px);
    left: 80vw;
    top: 34px;
    &:hover {
      top: 5px;
    }
  }
}
* {
  // border: 1px solid;
}
</style>
