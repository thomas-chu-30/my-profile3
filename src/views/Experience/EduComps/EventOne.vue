<template>
  <div class="des">
    <p>one</p>
    <img :src="imgs[0]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/images/Experience/Edu/1.jpg")]
    };
  }
};
</script>