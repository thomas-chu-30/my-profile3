<template>
  <div class="content">
    <!-- <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
      <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
      <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
    </b-carousel>-->
    <div class="box one">one</div>
    <div class="box two">two</div>
    <div class="box three">three</div>
    <div class="box four">four</div>
    <div class="box five">five</div>

    <img class="facebook" :src="imgs[0]" />
    <img class="github" :src="imgs[1]" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/images/Home/facebook.png"), require("@/assets/images/Home/github.png")]
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
