<template>
  <div class="des">
    <p>Four</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/images/Experience/Edu/2.jpg")]
    };
  }
};
</script>